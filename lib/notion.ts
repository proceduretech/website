import { Client } from "@notionhq/client";

// Initialize Notion client with the token from environment
// This token should be set in .env.local for local dev and in the build environment for production
// Using API version 2025-09-03 which is required for SDK v5
export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
  notionVersion: "2025-09-03",
});

// Case Studies database ID (the database container)
export const CASE_STUDIES_DATABASE_ID = "ad9669123eeb40fb96cb6565769aca24";

// Case Studies data source ID (for querying pages)
// This is the data source within the database, obtained from the database schema
export const CASE_STUDIES_DATA_SOURCE_ID = "eb93bf9f-cee9-430c-bffd-168e1d80f92d";

// Type guard to check if Notion client is properly configured
export function isNotionConfigured(): boolean {
  return !!process.env.NOTION_TOKEN;
}
