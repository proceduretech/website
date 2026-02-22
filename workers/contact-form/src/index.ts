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
  SLACK_WEBHOOK_BUSINESS?: string;
  SLACK_WEBHOOK_CAREER?: string;
  NOTION_API_KEY: string;
  NOTION_DATABASE_ID: string;
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

      // Fire Slack and Notion in parallel, don't let one failure block the other
      const results = await Promise.allSettled([
        sendSlackNotification(data, env),
        createNotionEntry(data, env),
      ]);

      results.forEach((result, index) => {
        if (result.status === "rejected") {
          const integration = index === 0 ? "Slack" : "Notion";
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
    console.log(`Slack skipped: SLACK_WEBHOOK_${data.inquiryType.toUpperCase()} not configured`);
    return;
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

// --- Notion ---

async function createNotionEntry(data: ContactFormData, env: Env): Promise<void> {
  if (!env.NOTION_API_KEY || !env.NOTION_DATABASE_ID) {
    throw new Error("Missing Notion configuration");
  }

  const isBusiness = data.inquiryType === "business";

  const properties: Record<string, unknown> = {
    Name: { title: [{ text: { content: data.name } }] },
    Email: { email: data.email },
    "Inquiry Type": { select: { name: isBusiness ? "Business" : "Career" } },
    Message: { rich_text: [{ text: { content: data.message.slice(0, 2000) } }] },
    "Submitted At": { date: { start: new Date().toISOString() } },
    Status: { select: { name: "New" } },
    "Source Page": { url: "https://procedure.tech/contact-us/" },
  };

  if (isBusiness) {
    if (data.company) {
      properties["Company"] = { rich_text: [{ text: { content: data.company } }] };
    }
    if (data.budget) {
      properties["Budget"] = { select: { name: data.budget } };
    }
    if (data.timeline) {
      properties["Timeline"] = { select: { name: data.timeline } };
    }
  } else {
    if (data.linkedIn) {
      properties["LinkedIn"] = { url: data.linkedIn };
    }
  }

  const response = await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.NOTION_API_KEY}`,
      "Content-Type": "application/json",
      "Notion-Version": "2022-06-28",
    },
    body: JSON.stringify({
      parent: { database_id: env.NOTION_DATABASE_ID },
      properties,
    }),
  });

  if (!response.ok) {
    throw new Error(`Notion API returned ${response.status}: ${await response.text()}`);
  }
}
