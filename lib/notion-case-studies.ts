import { cache } from "react";
import { notion, CASE_STUDIES_DATA_SOURCE_ID, isNotionConfigured } from "./notion";
import type { CaseStudy, CaseStudyMetric } from "./case-studies-data";
import type {
  PageObjectResponse,
  QueryDataSourceResponse,
  BlockObjectResponse,
  ListBlockChildrenResponse,
} from "@notionhq/client/build/src/api-endpoints";
import {
  cacheCaseStudyCover,
  cacheContentImages,
} from "./notion-image-cache";

// =============================================================================
// Extended Types for Detail Pages
// =============================================================================

export interface CaseStudyDetail extends CaseStudy {
  pageId: string;
  client: string;
  publishDate: string | null;
  content: CaseStudyContent[];
}

export interface CaseStudyContent {
  type: "paragraph" | "heading_1" | "heading_2" | "heading_3" | "bulleted_list_item" | "numbered_list_item" | "quote" | "callout" | "image" | "divider" | "code" | "table";
  text?: string;
  url?: string;
  language?: string;
  tableData?: {
    hasColumnHeader: boolean;
    hasRowHeader: boolean;
    rows: string[][];
  };
}

// =============================================================================
// Types for Notion Property Extraction
// =============================================================================

type NotionProperties = PageObjectResponse["properties"];
type NotionProperty = NotionProperties[string];

// =============================================================================
// Helper Functions for Property Extraction
// =============================================================================

function getTitleText(property: NotionProperty | undefined): string {
  if (!property) return "";
  if (property.type === "title" && property.title.length > 0) {
    return property.title.map((t) => t.plain_text).join("");
  }
  return "";
}

function getRichText(property: NotionProperty | undefined): string {
  if (!property) return "";
  if (property.type === "rich_text" && property.rich_text.length > 0) {
    return property.rich_text.map((t) => t.plain_text).join("");
  }
  return "";
}

function getSelect(property: NotionProperty | undefined): string | null {
  if (!property) return null;
  if (property.type === "select" && property.select) {
    return property.select.name;
  }
  return null;
}

function getMultiSelect(property: NotionProperty | undefined): string[] {
  if (!property) return [];
  if (property.type === "multi_select") {
    return property.multi_select.map((s) => s.name);
  }
  return [];
}

function getCheckbox(property: NotionProperty | undefined): boolean {
  if (!property) return false;
  if (property.type === "checkbox") {
    return property.checkbox;
  }
  return false;
}

function getUrl(property: NotionProperty | undefined): string | null {
  if (!property) return null;
  if (property.type === "url") {
    return property.url;
  }
  return null;
}

function getDate(property: NotionProperty | undefined): string | null {
  if (!property) return null;
  if (property.type === "date" && property.date) {
    return property.date.start;
  }
  return null;
}

function getFileUrl(property: NotionProperty | undefined): string | null {
  if (!property) return null;
  if (property.type === "files" && property.files.length > 0) {
    const file = property.files[0];
    if (file.type === "file") {
      return file.file.url;
    } else if (file.type === "external") {
      return file.external.url;
    }
  }
  return null;
}

// =============================================================================
// Service Type Mapping
// =============================================================================

/**
 * Map Notion service values to display service type
 * Notion: AI/ML, Product Development, Engineering, Staff Augmentation
 * Display: AI Engineering, Product Engineering
 */
function mapServiceType(
  services: string[]
): "AI Engineering" | "Product Engineering" {
  // If AI/ML is in the services, it's AI Engineering
  if (services.includes("AI/ML")) {
    return "AI Engineering";
  }
  // Otherwise it's Product Engineering
  return "Product Engineering";
}

// =============================================================================
// Industry Mapping
// =============================================================================

/**
 * Map Notion industry values to display names
 */
function mapIndustryName(industry: string | null): string {
  if (!industry) return "Technology";

  const industryMap: Record<string, string> = {
    Healthcare: "Healthcare",
    Fintech: "Financial Services",
    "E-commerce": "E-Commerce",
    SaaS: "SaaS",
    Enterprise: "Enterprise",
  };

  return industryMap[industry] || industry;
}

// =============================================================================
// Results/Metrics Parsing
// =============================================================================

/**
 * Parse metrics from the Results text field
 * Expected formats:
 * - "94% Fraud detection rate, 67% Fewer false positives, $47M Prevented losses"
 * - "94% | Fraud detection rate; 67% | Fewer false positives"
 * - Or structured JSON if available
 */
function parseMetrics(resultsText: string): CaseStudyMetric[] {
  if (!resultsText) {
    return [];
  }

  // Try to parse as JSON first
  try {
    const parsed = JSON.parse(resultsText);
    if (Array.isArray(parsed)) {
      return parsed.map((item) => ({
        value: String(item.value || ""),
        label: String(item.label || ""),
      }));
    }
  } catch {
    // Not JSON, try text parsing
  }

  // Try comma-separated format: "94% Fraud detection rate, 67% Fewer false positives"
  const metrics: CaseStudyMetric[] = [];

  // Split by common delimiters including bullet point (•) and newlines
  const parts = resultsText.split(/[,;•\n\r]+/).map((p) => p.trim()).filter(Boolean);

  for (const part of parts) {
    if (!part) continue;

    // Try to extract value and label
    // Pattern: "94% Fraud detection rate" or "$47M Prevented losses" or "2hrs Saved per day" or "10x Scale increase"
    // Improved regex to capture values like: 94%, $47M, 2hrs, 10x, 98.7%, 4.8/5, <50ms
    const match = part.match(
      /^([\d\.\,<>\/]+\s*[%\$MKxhrs]*)\s+(.+)$/i
    );

    if (match) {
      metrics.push({
        value: match[1].trim(),
        label: match[2].trim(),
      });
    } else {
      // If no pattern match, try pipe separator: "94% | Fraud detection rate"
      const pipeMatch = part.match(/^(.+?)\s*\|\s*(.+)$/);
      if (pipeMatch) {
        metrics.push({
          value: pipeMatch[1].trim(),
          label: pipeMatch[2].trim(),
        });
      } else {
        // Final fallback: if it starts with a number/symbol, try to split at first space after the value
        const fallbackMatch = part.match(/^([$<>]?[\d\.\,\/]+[%MKxhrswks]*)\s+(.+)$/i);
        if (fallbackMatch) {
          metrics.push({
            value: fallbackMatch[1].trim(),
            label: fallbackMatch[2].trim(),
          });
        }
      }
    }
  }

  return metrics;
}

// =============================================================================
// Slug Generation
// =============================================================================

/**
 * Generate URL-friendly slug from title
 */
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

// =============================================================================
// Transform Notion Page to CaseStudy
// =============================================================================

interface TransformResult {
  caseStudy: CaseStudy;
  detail: Omit<CaseStudyDetail, "content">;
}

async function transformNotionPageToCaseStudy(
  page: PageObjectResponse
): Promise<TransformResult | null> {
  const props = page.properties;

  // Extract properties
  const title = getTitleText(props["Title"]);
  if (!title) {
    console.warn(`Case study page ${page.id} has no title, skipping`);
    return null;
  }

  const status = getSelect(props["Status"]);
  // Only include published case studies
  if (status !== "Published") {
    return null;
  }

  const industry = getSelect(props["Industry"]);
  const services = getMultiSelect(props["Service"]);
  const client = getRichText(props["Client"]);
  const featured = getCheckbox(props["Featured"]);
  const results = getRichText(props["Results"]);
  const publishDate = getDate(props["Publish Date"]);
  // Slug property (renamed from URL) - use rich text Slug as primary
  const customSlug = getRichText(props["Slug"]) || getUrl(props["URL"]);
  // Cover image from Notion files property
  const coverImage = getFileUrl(props["Cover"]);

  // Generate ID/slug from Slug property or title
  let id: string;
  if (customSlug) {
    // If it's a full URL, extract the last part; otherwise use as-is
    if (customSlug.includes("/")) {
      id = customSlug.split("/").pop() || generateSlug(title);
    } else {
      id = customSlug;
    }
  } else {
    id = generateSlug(title);
  }

  // Parse metrics from results
  const metrics = parseMetrics(results);

  // Create description from client name and title context
  const description = client
    ? `${client}: ${title}`
    : `Case study: ${title}`;

  // Map services to tags
  const tags = services.length > 0 ? services : ["Engineering"];

  // Cache cover image to public folder (downloads from Notion and saves locally)
  const cachedCoverImage = await cacheCaseStudyCover(coverImage, id);

  const caseStudy: CaseStudy = {
    id,
    industry: mapIndustryName(industry),
    serviceType: mapServiceType(services),
    title,
    description,
    metrics,
    tags,
    image: cachedCoverImage || `/case-studies/${id}.jpg`, // Use cached image or fallback to default path
    featured,
  };

  const detail: Omit<CaseStudyDetail, "content"> = {
    ...caseStudy,
    pageId: page.id,
    client: client || "Confidential Client",
    publishDate,
  };

  return { caseStudy, detail };
}

// =============================================================================
// Content Block Extraction
// =============================================================================

/**
 * Extract text from Notion rich text array
 */
function extractRichTextContent(richText: Array<{ plain_text: string }>): string {
  return richText.map((t) => t.plain_text).join("");
}

/**
 * Transform a Notion block to our content format
 */
function transformBlock(block: BlockObjectResponse): CaseStudyContent | null {
  switch (block.type) {
    case "paragraph":
      return {
        type: "paragraph",
        text: extractRichTextContent(block.paragraph.rich_text),
      };
    case "heading_1":
      return {
        type: "heading_1",
        text: extractRichTextContent(block.heading_1.rich_text),
      };
    case "heading_2":
      return {
        type: "heading_2",
        text: extractRichTextContent(block.heading_2.rich_text),
      };
    case "heading_3":
      return {
        type: "heading_3",
        text: extractRichTextContent(block.heading_3.rich_text),
      };
    case "bulleted_list_item":
      return {
        type: "bulleted_list_item",
        text: extractRichTextContent(block.bulleted_list_item.rich_text),
      };
    case "numbered_list_item":
      return {
        type: "numbered_list_item",
        text: extractRichTextContent(block.numbered_list_item.rich_text),
      };
    case "quote":
      return {
        type: "quote",
        text: extractRichTextContent(block.quote.rich_text),
      };
    case "callout":
      return {
        type: "callout",
        text: extractRichTextContent(block.callout.rich_text),
      };
    case "code":
      return {
        type: "code",
        text: extractRichTextContent(block.code.rich_text),
        language: block.code.language,
      };
    case "image":
      const imageUrl = block.image.type === "external"
        ? block.image.external.url
        : block.image.type === "file"
          ? block.image.file.url
          : null;
      if (imageUrl) {
        return {
          type: "image",
          url: imageUrl,
        };
      }
      return null;
    case "divider":
      return { type: "divider" };
    case "table":
      // Table blocks need special handling - rows fetched separately
      return {
        type: "table",
        tableData: {
          hasColumnHeader: block.table.has_column_header,
          hasRowHeader: block.table.has_row_header,
          rows: [], // Will be populated by fetchTableRows
        },
      };
    default:
      return null;
  }
}

/**
 * Fetch table rows from a table block
 */
async function fetchTableRows(tableBlockId: string): Promise<string[][]> {
  try {
    const response: ListBlockChildrenResponse = await notion.blocks.children.list({
      block_id: tableBlockId,
      page_size: 100,
    });

    const rows: string[][] = [];

    for (const block of response.results) {
      if (!("type" in block)) continue;
      const typedBlock = block as BlockObjectResponse;

      if (typedBlock.type === "table_row") {
        const cells = typedBlock.table_row.cells.map((cell) =>
          cell.map((richText) => richText.plain_text).join("")
        );
        rows.push(cells);
      }
    }

    return rows;
  } catch (error) {
    console.error(`Error fetching table rows for block ${tableBlockId}:`, error);
    return [];
  }
}

/**
 * Fetch page content blocks from Notion
 */
async function fetchPageContent(pageId: string): Promise<CaseStudyContent[]> {
  try {
    const response: ListBlockChildrenResponse = await notion.blocks.children.list({
      block_id: pageId,
      page_size: 100,
    });

    const content: CaseStudyContent[] = [];

    for (const block of response.results) {
      if (!("type" in block)) continue;

      const typedBlock = block as BlockObjectResponse;
      const transformed = transformBlock(typedBlock);

      if (transformed) {
        // If it's a table, fetch the rows
        if (transformed.type === "table" && transformed.tableData) {
          const rows = await fetchTableRows(typedBlock.id);
          transformed.tableData.rows = rows;
        }
        content.push(transformed);
      }
    }

    return content;
  } catch (error) {
    console.error(`Error fetching content for page ${pageId}:`, error);
    return [];
  }
}

// =============================================================================
// Main Data Fetching Functions
// =============================================================================

// Cache for storing detailed case study data (includes pageId mapping)
let cachedDetails: Map<string, Omit<CaseStudyDetail, "content">> | null = null;

/**
 * Fetch all published case studies from Notion
 * This function is cached with React's cache() for build-time optimization
 */
export const getNotionCaseStudies = cache(
  async (): Promise<CaseStudy[]> => {
    if (!isNotionConfigured()) {
      console.warn(
        "Notion token not configured, falling back to static case studies data"
      );
      // Fall back to static data if Notion is not configured
      const { caseStudies } = await import("./case-studies-data");
      return caseStudies;
    }

    try {
      // Use the new dataSources.query() API in SDK v5
      // This queries the data source (collection) within the database
      const response: QueryDataSourceResponse = await notion.dataSources.query({
        data_source_id: CASE_STUDIES_DATA_SOURCE_ID,
        filter: {
          property: "Status",
          select: {
            equals: "Published",
          },
        },
        sorts: [
          {
            property: "Publish Date",
            direction: "descending",
          },
        ],
      });

      const caseStudies: CaseStudy[] = [];
      cachedDetails = new Map();

      for (const page of response.results) {
        // Type guard: only process full page objects
        if (!("properties" in page)) {
          continue;
        }

        const result = await transformNotionPageToCaseStudy(
          page as PageObjectResponse
        );
        if (result) {
          caseStudies.push(result.caseStudy);
          cachedDetails.set(result.caseStudy.id, result.detail);
        }
      }

      // If no case studies found in Notion, fall back to static data
      if (caseStudies.length === 0) {
        console.warn(
          "No published case studies found in Notion, falling back to static data"
        );
        cachedDetails = null;
        const { caseStudies: staticCaseStudies } = await import(
          "./case-studies-data"
        );
        return staticCaseStudies;
      }

      return caseStudies;
    } catch (error) {
      console.error("Error fetching case studies from Notion:", error);
      cachedDetails = null;
      // Fall back to static data on error
      const { caseStudies } = await import("./case-studies-data");
      return caseStudies;
    }
  }
);

/**
 * Get featured case studies from Notion
 */
export const getNotionFeaturedCaseStudies = cache(
  async (): Promise<CaseStudy[]> => {
    const allCaseStudies = await getNotionCaseStudies();
    return allCaseStudies.filter((cs) => cs.featured);
  }
);

/**
 * Get unique service types for filtering
 */
export function getNotionServiceFilters(): string[] {
  return ["All", "AI Engineering", "Product Engineering"];
}

/**
 * Get unique industries for filtering (from fetched data)
 */
export async function getNotionIndustryFilters(): Promise<string[]> {
  const caseStudies = await getNotionCaseStudies();
  const industries = new Set(caseStudies.map((cs) => cs.industry));
  return ["All", ...Array.from(industries).sort()];
}

// =============================================================================
// Individual Case Study Functions (for detail pages)
// =============================================================================

/**
 * Get all case study slugs for generateStaticParams
 * This is used by Next.js to pre-render all case study pages at build time
 */
export async function getNotionCaseStudySlugs(): Promise<string[]> {
  const caseStudies = await getNotionCaseStudies();
  return caseStudies.map((cs) => cs.id);
}

/**
 * Get a single case study by slug with full content
 * Returns null if not found
 */
export const getNotionCaseStudyBySlug = cache(
  async (slug: string): Promise<CaseStudyDetail | null> => {
    // First, ensure all case studies are loaded (this populates cachedDetails)
    await getNotionCaseStudies();

    // Check if we have the detail in cache
    if (cachedDetails && cachedDetails.has(slug)) {
      const detail = cachedDetails.get(slug)!;

      // Fetch page content from Notion
      const content = await fetchPageContent(detail.pageId);

      // Cache any images in the content to public folder
      await cacheContentImages(content, slug, "case-study");

      return {
        ...detail,
        content,
      };
    }

    // If not in cache, it might be from static data - try to find it
    const { caseStudies } = await import("./case-studies-data");
    const staticCaseStudy = caseStudies.find((cs) => cs.id === slug);

    if (staticCaseStudy) {
      // Return static case study with empty content
      return {
        ...staticCaseStudy,
        pageId: "",
        client: "Confidential Client",
        publishDate: null,
        content: [],
      };
    }

    return null;
  }
);

/**
 * Get related case studies based on industry or service type
 */
export async function getRelatedCaseStudies(
  currentSlug: string,
  limit: number = 3
): Promise<CaseStudy[]> {
  const allCaseStudies = await getNotionCaseStudies();
  const current = allCaseStudies.find((cs) => cs.id === currentSlug);

  if (!current) {
    return allCaseStudies.slice(0, limit);
  }

  // Score case studies by relevance
  const scored = allCaseStudies
    .filter((cs) => cs.id !== currentSlug)
    .map((cs) => {
      let score = 0;
      // Same industry = 2 points
      if (cs.industry === current.industry) score += 2;
      // Same service type = 1 point
      if (cs.serviceType === current.serviceType) score += 1;
      return { caseStudy: cs, score };
    })
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map((s) => s.caseStudy);
}
