import { cache } from "react";

// =============================================================================
// Keka API Client - OAuth2 Auth + Job Fetching
// =============================================================================

const KEKA_TOKEN_URL = "https://login.keka.com/connect/token";

export function isKekaConfigured(): boolean {
  return !!(
    process.env.KEKA_CLIENT_ID &&
    process.env.KEKA_CLIENT_SECRET &&
    process.env.KEKA_API_KEY &&
    process.env.KEKA_COMPANY
  );
}

function getBaseUrl(): string {
  return `https://${process.env.KEKA_COMPANY}.keka.com`;
}

// =============================================================================
// Types
// =============================================================================

export interface KekaJobLocation {
  name?: string;
  city?: string;
  state?: string;
  country?: string;
}

export interface KekaJobRaw {
  id: string;
  title: string;
  description: string;
  departmentName: string;
  jobType: string;
  jobLocations: KekaJobLocation[];
  experience: string;
  noOfOpenings: number;
  status: number;
  canListOnCareersSite: boolean;
  careerPortalUrl: string;
  publishedOn: string;
  createdOn: string;
  orgJobId?: string;
  isReferralEnabled?: boolean;
}

interface KekaJobsResponse {
  succeeded: boolean;
  data: KekaJobRaw[];
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalRecords: number;
}

// =============================================================================
// Token Management
// =============================================================================

let cachedToken: { token: string; expiresAt: number } | null = null;

async function getAccessToken(): Promise<string> {
  // Return cached token if still valid (with 60s buffer)
  if (cachedToken && Date.now() < cachedToken.expiresAt - 60_000) {
    return cachedToken.token;
  }

  const body = new URLSearchParams({
    grant_type: "kekaapi",
    scope: "kekaapi",
    client_id: process.env.KEKA_CLIENT_ID!,
    client_secret: process.env.KEKA_CLIENT_SECRET!,
    api_key: process.env.KEKA_API_KEY!,
  });

  const response = await fetch(KEKA_TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Keka auth failed (${response.status}): ${text}`);
  }

  const data = await response.json();
  cachedToken = {
    token: data.access_token,
    expiresAt: Date.now() + (data.expires_in || 3600) * 1000,
  };

  return cachedToken.token;
}

// =============================================================================
// Job Fetching
// =============================================================================

export const fetchKekaJobs = cache(async (): Promise<KekaJobRaw[]> => {
  if (!isKekaConfigured()) {
    return [];
  }

  try {
    const token = await getAccessToken();
    const allJobs: KekaJobRaw[] = [];
    let pageNumber = 1;
    let hasMore = true;

    while (hasMore) {
      const url = new URL(`${getBaseUrl()}/api/v1/hire/jobs`);
      url.searchParams.set("pageNumber", String(pageNumber));
      url.searchParams.set("pageSize", "200");

      const response = await fetch(url.toString(), {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Keka jobs fetch failed (${response.status}): ${text}`);
      }

      const result: KekaJobsResponse = await response.json();

      if (result.data && Array.isArray(result.data)) {
        allJobs.push(...result.data);
      }

      hasMore = pageNumber < (result.totalPages || 1);
      pageNumber++;
    }

    return allJobs.filter((job) => job.canListOnCareersSite);
  } catch (error) {
    console.error("Error fetching jobs from Keka:", error);
    return [];
  }
});
