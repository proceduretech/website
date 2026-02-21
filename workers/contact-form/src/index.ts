import { SignJWT, importPKCS8 } from "jose";

// --- Types ---

type InquiryType = "business" | "career";

interface ContactFormData {
  inquiryType: InquiryType;
  name: string;
  email: string;
  company?: string;
  message: string;
  budget?: string;
  timeline?: string;
  linkedIn?: string;
}

interface Env {
  ALLOWED_ORIGIN: string;
  SLACK_WEBHOOK_BUSINESS: string;
  SLACK_WEBHOOK_CAREER: string;
  GOOGLE_SHEET_ID: string;
  GOOGLE_SERVICE_ACCOUNT_KEY: string;
}

// --- Main Worker ---

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const corsHeaders = {
      "Access-Control-Allow-Origin": env.ALLOWED_ORIGIN,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400",
    };

    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    if (request.method !== "POST") {
      return Response.json(
        { error: "Method not allowed" },
        { status: 405, headers: corsHeaders }
      );
    }

    try {
      const body = await request.json<Record<string, unknown>>();
      const data = validateAndSanitize(body);

      // Fire Slack and Sheets in parallel, don't let one failure block the other
      const results = await Promise.allSettled([
        sendSlackNotification(data, env),
        appendToGoogleSheet(data, env),
      ]);

      results.forEach((result, index) => {
        if (result.status === "rejected") {
          const integration = index === 0 ? "Slack" : "Google Sheets";
          console.error(`${integration} failed:`, result.reason);
        }
      });

      return Response.json({ success: true }, { headers: corsHeaders });
    } catch (error) {
      if (error instanceof ValidationError) {
        return Response.json(
          { error: error.message },
          { status: 400, headers: corsHeaders }
        );
      }

      console.error("Contact form error:", error);
      return Response.json(
        { error: "Internal server error" },
        { status: 500, headers: corsHeaders }
      );
    }
  },
};

// --- Validation ---

class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateAndSanitize(body: Record<string, unknown>): ContactFormData {
  const { inquiryType, name, email, company, message, budget, timeline, linkedIn } = body;

  if (!inquiryType || !name || !email || !message) {
    throw new ValidationError("Missing required fields: inquiryType, name, email, message");
  }

  if (inquiryType !== "business" && inquiryType !== "career") {
    throw new ValidationError("inquiryType must be 'business' or 'career'");
  }

  if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string") {
    throw new ValidationError("name, email, and message must be strings");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new ValidationError("Invalid email format");
  }

  if (inquiryType === "business" && !company) {
    throw new ValidationError("Company is required for business inquiries");
  }

  return {
    inquiryType,
    name: name.trim(),
    email: email.trim().toLowerCase(),
    company: typeof company === "string" ? company.trim() : undefined,
    message: message.trim(),
    budget: typeof budget === "string" ? budget : undefined,
    timeline: typeof timeline === "string" ? timeline : undefined,
    linkedIn: typeof linkedIn === "string" ? linkedIn.trim() : undefined,
  };
}

// --- Slack ---

async function sendSlackNotification(data: ContactFormData, env: Env): Promise<void> {
  const webhookUrl =
    data.inquiryType === "business"
      ? env.SLACK_WEBHOOK_BUSINESS
      : env.SLACK_WEBHOOK_CAREER;

  if (!webhookUrl) {
    throw new Error(`Missing SLACK_WEBHOOK_${data.inquiryType.toUpperCase()} secret`);
  }

  const isBusiness = data.inquiryType === "business";
  const label = isBusiness ? "Business Inquiry" : "Career Inquiry";

  const fields = [
    { type: "mrkdwn" as const, text: `*Name:*\n${data.name}` },
    { type: "mrkdwn" as const, text: `*Email:*\n${data.email}` },
  ];

  if (isBusiness) {
    if (data.company) fields.push({ type: "mrkdwn", text: `*Company:*\n${data.company}` });
    if (data.budget) fields.push({ type: "mrkdwn", text: `*Budget:*\n${data.budget}` });
    if (data.timeline) fields.push({ type: "mrkdwn", text: `*Timeline:*\n${data.timeline}` });
  } else {
    if (data.linkedIn) fields.push({ type: "mrkdwn", text: `*LinkedIn:*\n${data.linkedIn}` });
  }

  const blocks = [
    {
      type: "header",
      text: {
        type: "plain_text",
        text: `${isBusiness ? "\uD83D\uDCBC" : "\uD83D\uDC4B"} New ${label} from Website`,
      },
    },
    {
      type: "section",
      fields,
    },
    {
      type: "section",
      text: { type: "mrkdwn", text: `*Message:*\n${data.message}` },
    },
    {
      type: "context",
      elements: [
        {
          type: "mrkdwn",
          text: `Submitted at ${new Date().toISOString()} via procedure.tech/contact-us`,
        },
      ],
    },
  ];

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ blocks }),
  });

  if (!response.ok) {
    throw new Error(`Slack webhook returned ${response.status}: ${await response.text()}`);
  }
}

// --- Google Sheets ---

interface ServiceAccountKey {
  client_email: string;
  private_key: string;
}

async function getGoogleAccessToken(serviceAccountKey: string): Promise<string> {
  const { client_email, private_key }: ServiceAccountKey = JSON.parse(serviceAccountKey);

  const now = Math.floor(Date.now() / 1000);
  const privateKey = await importPKCS8(private_key, "RS256");

  const jwt = await new SignJWT({
    scope: "https://www.googleapis.com/auth/spreadsheets",
  })
    .setProtectedHeader({ alg: "RS256" })
    .setIssuer(client_email)
    .setSubject(client_email)
    .setAudience("https://oauth2.googleapis.com/token")
    .setIssuedAt(now)
    .setExpirationTime(now + 3600)
    .sign(privateKey);

  const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });

  if (!tokenResponse.ok) {
    throw new Error(`Google token exchange failed: ${tokenResponse.status}`);
  }

  const { access_token } = await tokenResponse.json<{ access_token: string }>();
  return access_token;
}

async function appendToGoogleSheet(data: ContactFormData, env: Env): Promise<void> {
  if (!env.GOOGLE_SHEET_ID || !env.GOOGLE_SERVICE_ACCOUNT_KEY) {
    throw new Error("Missing Google Sheets configuration");
  }

  const accessToken = await getGoogleAccessToken(env.GOOGLE_SERVICE_ACCOUNT_KEY);

  const sheetName =
    data.inquiryType === "business" ? "Business Inquiries" : "Career Inquiries";

  const timestamp = new Date().toISOString();

  const values =
    data.inquiryType === "business"
      ? [
          [
            timestamp,
            data.name,
            data.email,
            data.company || "",
            data.budget || "",
            data.timeline || "",
            data.message,
          ],
        ]
      : [[timestamp, data.name, data.email, data.linkedIn || "", data.message]];

  const range = encodeURIComponent(`${sheetName}!A:G`);
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${env.GOOGLE_SHEET_ID}/values/${range}:append?valueInputOption=USER_ENTERED`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ values }),
  });

  if (!response.ok) {
    throw new Error(`Google Sheets API returned ${response.status}: ${await response.text()}`);
  }
}
