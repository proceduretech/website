import { cache } from "react";
import { notion, BLOG_DATA_SOURCE_ID, isNotionConfigured } from "./notion";
import type { BlogPost, BlogCategory, Author, PostType } from "./blog-types";
import type {
  PageObjectResponse,
  QueryDataSourceResponse,
  BlockObjectResponse,
  ListBlockChildrenResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { cacheBlogCover, cacheContentImages } from "./notion-image-cache";

// =============================================================================
// Extended Types for Blog Detail Pages
// =============================================================================

export interface BlogPostDetail extends BlogPost {
  pageId: string;
  notionContent: BlogContent[];
}

export interface RichTextSegment {
  text: string;
  href?: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
}

export interface TableCell {
  richText: RichTextSegment[];
  text: string;
}

export interface TableRow {
  cells: TableCell[];
}

export interface BlogContent {
  type:
    | "paragraph"
    | "heading_1"
    | "heading_2"
    | "heading_3"
    | "bulleted_list_item"
    | "numbered_list_item"
    | "quote"
    | "callout"
    | "image"
    | "divider"
    | "code"
    | "table"
    | "embed"
    | "video"
    | "bookmark";
  text?: string;
  richText?: RichTextSegment[];
  url?: string;
  language?: string;
  icon?: string; // Emoji or icon URL for callouts
  tableRows?: TableRow[]; // For table blocks
  hasColumnHeader?: boolean; // Whether first row is header
  hasRowHeader?: boolean; // Whether first column is header
  caption?: string; // For embeds/videos/images
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

function getNumber(property: NotionProperty | undefined): number | null {
  if (!property) return null;
  if (property.type === "number") {
    return property.number;
  }
  return null;
}

function getFiles(property: NotionProperty | undefined): string | null {
  if (!property) return null;
  if (property.type === "files" && property.files.length > 0) {
    const file = property.files[0];
    if (file.type === "external") {
      return file.external.url;
    } else if (file.type === "file") {
      return file.file.url;
    }
  }
  return null;
}

function getPerson(property: NotionProperty | undefined): string | null {
  if (!property) return null;
  if (property.type === "people" && property.people.length > 0) {
    const person = property.people[0];
    if ("name" in person && person.name) {
      return person.name;
    }
  }
  return null;
}

// =============================================================================
// Category Mapping
// =============================================================================

const CATEGORY_MAP: Record<string, BlogCategory> = {
  "AI Engineering": {
    id: "ai-engineering",
    name: "AI Engineering",
    slug: "ai-engineering",
    description: "Deep dives into AI/ML engineering practices",
    color: "teal",
  },
  "LLM Applications": {
    id: "llm-applications",
    name: "LLM Applications",
    slug: "llm-applications",
    description: "Building with large language models",
    color: "blue",
  },
  Engineering: {
    id: "engineering",
    name: "Engineering",
    slug: "engineering",
    description: "Software engineering best practices",
    color: "default",
  },
  "Product Development": {
    id: "product-development",
    name: "Product Development",
    slug: "product-development",
    description: "Product engineering and development",
    color: "highlight",
  },
  "Industry Insights": {
    id: "industry-insights",
    name: "Industry Insights",
    slug: "industry-insights",
    description: "Trends and insights from the industry",
    color: "default",
  },
};

function mapCategory(categoryName: string | null): BlogCategory {
  if (!categoryName) {
    return CATEGORY_MAP["Engineering"];
  }
  return (
    CATEGORY_MAP[categoryName] || {
      id: categoryName.toLowerCase().replace(/\s+/g, "-"),
      name: categoryName,
      slug: categoryName.toLowerCase().replace(/\s+/g, "-"),
      description: "",
      color: "default",
    }
  );
}

// =============================================================================
// Author Mapping
// =============================================================================

const AUTHOR_MAP: Record<string, Author> = {
  "Procedure Team": {
    id: "procedure-team",
    name: "Procedure Team",
    avatar: "/team/default.jpg",
    role: "Engineering Team",
    bio: "Expert engineers building production AI systems.",
  },
};

function mapAuthor(
  authorName: string | null,
  authorBio?: string,
  authorTitle?: string
): Author {
  if (!authorName) {
    return AUTHOR_MAP["Procedure Team"];
  }
  const existingAuthor = AUTHOR_MAP[authorName];
  if (existingAuthor) {
    return {
      ...existingAuthor,
      // Override with Notion values if provided
      bio: authorBio || existingAuthor.bio,
      role: authorTitle || existingAuthor.role,
    };
  }
  return {
    id: authorName.toLowerCase().replace(/\s+/g, "-"),
    name: authorName,
    avatar: "/team/default.jpg",
    role: authorTitle || "Engineer",
    bio: authorBio || "",
  };
}

// =============================================================================
// Slug Generation
// =============================================================================

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

// =============================================================================
// Read Time Calculation
// =============================================================================

function calculateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

// =============================================================================
// Transform Notion Page to BlogPost
// =============================================================================

interface TransformResult {
  blogPost: BlogPost;
  detail: Omit<BlogPostDetail, "notionContent">;
}

async function transformNotionPageToBlogPost(
  page: PageObjectResponse
): Promise<TransformResult | null> {
  const props = page.properties;

  // Extract title (Notion uses "Name" for the title property by default)
  const title = getTitleText(props["Name"]) || getTitleText(props["Title"]);
  if (!title) {
    return null;
  }

  // Check status - only include published posts
  const status = getSelect(props["Status"]);
  if (status !== "Published" && status !== "Live") {
    return null;
  }

  // Extract properties based on actual Notion database schema
  const categoryName =
    getSelect(props["Topic"]) || getSelect(props["Category"]);
  const authorName =
    getPerson(props["Author"]) ||
    getRichText(props["Author"]) ||
    getSelect(props["Author"]);
  const authorBio = getRichText(props["author bio"]) || "";
  const authorTitle = getRichText(props["author title"]) || "";
  const metaDescription = getRichText(props["Meta Description"]) || "";
  const excerpt =
    getRichText(props["Notes"]) ||
    getRichText(props["Excerpt"]) ||
    getRichText(props["Description"]) ||
    "";
  const tags = getMultiSelect(props["Tags"]);
  const featured = getCheckbox(props["Featured"]);
  const publishDate =
    getDate(props["Publish Date"]) ||
    getDate(props["Published"]) ||
    getDate(props["Date"]);
  const updatedDate = getDate(props["Updated"]);
  const readTime = getNumber(props["Read Time"]) || 5;
  // Slug property (renamed from URL) - use rich text Slug as primary
  const customSlug = getRichText(props["Slug"]) || getUrl(props["URL"]);
  // Cover image from Notion files property (primary) with fallbacks
  const featuredImage =
    getFiles(props["Cover"]) ||
    getFiles(props["Featured Image"]) ||
    getUrl(props["Cover Image"]) ||
    getUrl(props["Image"]);

  // Generate slug from Slug property or title
  let slug: string;
  if (customSlug) {
    // If it's a full URL, extract the last part; otherwise use as-is
    if (customSlug.includes("/")) {
      const urlParts = customSlug.split("/");
      slug = urlParts[urlParts.length - 1] || generateSlug(title);
    } else {
      slug = customSlug;
    }
  } else {
    slug = generateSlug(title);
  }

  // Map category and author
  const category = mapCategory(categoryName);
  const author = mapAuthor(authorName, authorBio, authorTitle);

  // Cache cover image to public folder (downloads from Notion and saves locally)
  const cachedFeaturedImage = await cacheBlogCover(featuredImage, slug);

  const blogPost: BlogPost = {
    id: slug,
    slug,
    title,
    excerpt,
    content: "", // Will be populated from page content
    featuredImage: cachedFeaturedImage || "/blog/default.jpg",
    category,
    postType: "article" as PostType,
    author,
    publishedAt: publishDate || new Date().toISOString(),
    updatedAt: updatedDate || undefined,
    readTime,
    tags,
    featured,
    metaDescription: metaDescription || excerpt || undefined,
  };

  const detail: Omit<BlogPostDetail, "notionContent"> = {
    ...blogPost,
    pageId: page.id,
  };

  return { blogPost, detail };
}

// =============================================================================
// Content Block Extraction
// =============================================================================

interface NotionRichText {
  plain_text: string;
  href?: string | null;
  annotations?: {
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    strikethrough?: boolean;
    code?: boolean;
  };
}

function extractRichTextContent(richText: NotionRichText[]): string {
  return richText.map((t) => t.plain_text).join("");
}

function extractRichTextSegments(
  richText: NotionRichText[]
): RichTextSegment[] {
  return richText.map((t) => ({
    text: t.plain_text,
    href: t.href || undefined,
    bold: t.annotations?.bold,
    italic: t.annotations?.italic,
    underline: t.annotations?.underline,
    strikethrough: t.annotations?.strikethrough,
    code: t.annotations?.code,
  }));
}

function transformBlock(block: BlockObjectResponse): BlogContent | null {
  switch (block.type) {
    case "paragraph":
      return {
        type: "paragraph",
        text: extractRichTextContent(
          block.paragraph.rich_text as NotionRichText[]
        ),
        richText: extractRichTextSegments(
          block.paragraph.rich_text as NotionRichText[]
        ),
      };
    case "heading_1":
      return {
        type: "heading_1",
        text: extractRichTextContent(
          block.heading_1.rich_text as NotionRichText[]
        ),
        richText: extractRichTextSegments(
          block.heading_1.rich_text as NotionRichText[]
        ),
      };
    case "heading_2":
      return {
        type: "heading_2",
        text: extractRichTextContent(
          block.heading_2.rich_text as NotionRichText[]
        ),
        richText: extractRichTextSegments(
          block.heading_2.rich_text as NotionRichText[]
        ),
      };
    case "heading_3":
      return {
        type: "heading_3",
        text: extractRichTextContent(
          block.heading_3.rich_text as NotionRichText[]
        ),
        richText: extractRichTextSegments(
          block.heading_3.rich_text as NotionRichText[]
        ),
      };
    case "bulleted_list_item":
      return {
        type: "bulleted_list_item",
        text: extractRichTextContent(
          block.bulleted_list_item.rich_text as NotionRichText[]
        ),
        richText: extractRichTextSegments(
          block.bulleted_list_item.rich_text as NotionRichText[]
        ),
      };
    case "numbered_list_item":
      return {
        type: "numbered_list_item",
        text: extractRichTextContent(
          block.numbered_list_item.rich_text as NotionRichText[]
        ),
        richText: extractRichTextSegments(
          block.numbered_list_item.rich_text as NotionRichText[]
        ),
      };
    case "quote":
      return {
        type: "quote",
        text: extractRichTextContent(block.quote.rich_text as NotionRichText[]),
        richText: extractRichTextSegments(
          block.quote.rich_text as NotionRichText[]
        ),
      };
    case "callout":
      // Extract icon (emoji or external URL)
      let calloutIcon: string | undefined;
      if (block.callout.icon) {
        if (block.callout.icon.type === "emoji") {
          calloutIcon = block.callout.icon.emoji;
        } else if (block.callout.icon.type === "external") {
          calloutIcon = block.callout.icon.external.url;
        }
      }
      return {
        type: "callout",
        text: extractRichTextContent(
          block.callout.rich_text as NotionRichText[]
        ),
        richText: extractRichTextSegments(
          block.callout.rich_text as NotionRichText[]
        ),
        icon: calloutIcon,
      };
    case "code":
      return {
        type: "code",
        text: extractRichTextContent(block.code.rich_text as NotionRichText[]),
        language: block.code.language,
      };
    case "image":
      const imageUrl =
        block.image.type === "external"
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
    case "embed":
      return {
        type: "embed",
        url: block.embed.url,
        caption: block.embed.caption
          ? extractRichTextContent(block.embed.caption as NotionRichText[])
          : undefined,
      };
    case "video":
      const videoUrl =
        block.video.type === "external"
          ? block.video.external.url
          : block.video.type === "file"
          ? block.video.file.url
          : null;
      if (videoUrl) {
        return {
          type: "video",
          url: videoUrl,
          caption: block.video.caption
            ? extractRichTextContent(block.video.caption as NotionRichText[])
            : undefined,
        };
      }
      return null;
    case "bookmark":
      return {
        type: "bookmark",
        url: block.bookmark.url,
        caption: block.bookmark.caption
          ? extractRichTextContent(block.bookmark.caption as NotionRichText[])
          : undefined,
      };
    case "link_preview":
      return {
        type: "embed",
        url: (block as { link_preview: { url: string } }).link_preview.url,
      };
    // Table is handled separately in fetchPageContent since it needs children
    default:
      return null;
  }
}

async function fetchTableRows(tableBlockId: string): Promise<TableRow[]> {
  try {
    const response = await notion.blocks.children.list({
      block_id: tableBlockId,
      page_size: 100,
    });

    const rows: TableRow[] = [];

    for (const block of response.results) {
      if (!("type" in block)) continue;
      const rowBlock = block as BlockObjectResponse;

      if (rowBlock.type === "table_row") {
        const cells: TableCell[] = rowBlock.table_row.cells.map(
          (cellRichText) => ({
            text: extractRichTextContent(cellRichText as NotionRichText[]),
            richText: extractRichTextSegments(cellRichText as NotionRichText[]),
          })
        );
        rows.push({ cells });
      }
    }

    return rows;
  } catch (error) {
    console.error(`Error fetching table rows for ${tableBlockId}:`, error);
    return [];
  }
}

async function fetchPageContent(pageId: string): Promise<BlogContent[]> {
  try {
    const content: BlogContent[] = [];
    let hasMore = true;
    let startCursor: string | undefined = undefined;

    // Paginate through all blocks
    while (hasMore) {
      const response: ListBlockChildrenResponse =
        await notion.blocks.children.list({
          block_id: pageId,
          page_size: 100,
          start_cursor: startCursor,
        });

      for (const block of response.results) {
        if (!("type" in block)) continue;
        const typedBlock = block as BlockObjectResponse;

        // Handle table blocks specially - need to fetch children
        if (typedBlock.type === "table") {
          const tableRows = await fetchTableRows(typedBlock.id);
          content.push({
            type: "table",
            tableRows,
            hasColumnHeader: typedBlock.table.has_column_header,
            hasRowHeader: typedBlock.table.has_row_header,
          });
          continue;
        }

        const transformed = transformBlock(typedBlock);
        if (transformed) {
          content.push(transformed);
        }
      }

      hasMore = response.has_more;
      startCursor = response.next_cursor || undefined;
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

// Cache for storing detailed blog post data
let cachedDetails: Map<string, Omit<BlogPostDetail, "notionContent">> | null =
  null;

/**
 * Fetch all published blog posts from Notion
 */
export const getNotionBlogPosts = cache(async (): Promise<BlogPost[]> => {
  if (!isNotionConfigured()) {
    console.warn("Notion token not configured, returning empty blog posts");
    return [];
  }

  try {
    // Query without filter first to see all posts, then filter in code
    const response: QueryDataSourceResponse = await notion.dataSources.query({
      data_source_id: BLOG_DATA_SOURCE_ID,
      sorts: [
        {
          property: "Publish Date",
          direction: "descending",
        },
      ],
    });

    const blogPosts: BlogPost[] = [];
    cachedDetails = new Map();

    for (const page of response.results) {
      if (!("properties" in page)) {
        continue;
      }

      const result = await transformNotionPageToBlogPost(
        page as PageObjectResponse
      );
      if (result) {
        blogPosts.push(result.blogPost);
        cachedDetails.set(result.blogPost.slug, result.detail);
      }
    }

    return blogPosts;
  } catch (error) {
    console.error("Error fetching blog posts from Notion:", error);
    cachedDetails = null;
    return [];
  }
});

/**
 * Get featured blog posts from Notion
 */
export const getNotionFeaturedBlogPosts = cache(
  async (): Promise<BlogPost[]> => {
    const allPosts = await getNotionBlogPosts();
    return allPosts.filter((post) => post.featured);
  }
);

/**
 * Get unique categories for filtering
 */
export async function getNotionBlogCategories(): Promise<BlogCategory[]> {
  const posts = await getNotionBlogPosts();
  const categoryMap = new Map<string, BlogCategory>();

  for (const post of posts) {
    if (!categoryMap.has(post.category.slug)) {
      categoryMap.set(post.category.slug, post.category);
    }
  }

  return Array.from(categoryMap.values());
}

// =============================================================================
// Individual Blog Post Functions (for detail pages)
// =============================================================================

/**
 * Get all blog post slugs for generateStaticParams
 */
export async function getNotionBlogSlugs(): Promise<string[]> {
  const posts = await getNotionBlogPosts();
  return posts.map((post) => post.slug);
}

/**
 * Get a single blog post by slug with full content
 */
export const getNotionBlogPostBySlug = cache(
  async (slug: string): Promise<BlogPostDetail | null> => {
    // First, ensure all blog posts are loaded (this populates cachedDetails)
    await getNotionBlogPosts();

    // Check if we have the detail in cache
    if (cachedDetails && cachedDetails.has(slug)) {
      const detail = cachedDetails.get(slug)!;

      // Fetch page content from Notion
      const notionContent = await fetchPageContent(detail.pageId);

      // Cache any images in the content to public folder
      await cacheContentImages(notionContent, slug, "blog");

      // Generate content string for read time calculation
      const contentText = notionContent
        .filter((block) => block.text)
        .map((block) => block.text)
        .join(" ");

      const readTime = calculateReadTime(contentText) || detail.readTime;

      return {
        ...detail,
        content: contentText,
        readTime,
        notionContent,
      };
    }

    return null;
  }
);

/**
 * Get related blog posts - prioritizes same category, then fills with latest
 */
export async function getRelatedBlogPosts(
  currentSlug: string,
  limit: number = 3
): Promise<BlogPost[]> {
  const allPosts = await getNotionBlogPosts();
  const current = allPosts.find((post) => post.slug === currentSlug);

  if (!current) {
    return allPosts.slice(0, limit);
  }

  const otherPosts = allPosts.filter((post) => post.slug !== currentSlug);

  // First, get posts from the same category (already sorted by date from Notion)
  const sameCategoryPosts = otherPosts.filter(
    (post) => post.category.slug === current.category.slug
  );

  // If we have enough same-category posts, return them
  if (sameCategoryPosts.length >= limit) {
    return sameCategoryPosts.slice(0, limit);
  }

  // Otherwise, fill with latest posts from other categories
  const otherCategoryPosts = otherPosts.filter(
    (post) => post.category.slug !== current.category.slug
  );

  const result = [...sameCategoryPosts, ...otherCategoryPosts];
  return result.slice(0, limit);
}

// =============================================================================
// Fallback Functions (for when Notion returns no data)
// =============================================================================

/**
 * Get blog posts - tries Notion first, falls back to MDX
 */
export async function getBlogPostsWithFallback(): Promise<BlogPost[]> {
  const notionPosts = await getNotionBlogPosts();

  if (notionPosts.length > 0) {
    return notionPosts;
  }

  // Fall back to MDX content
  try {
    const { getBlogPostsForListing } = await import("./content");
    return getBlogPostsForListing();
  } catch {
    return [];
  }
}

/**
 * Get categories with fallback
 */
export async function getCategoriesWithFallback(): Promise<BlogCategory[]> {
  const notionCategories = await getNotionBlogCategories();

  if (notionCategories.length > 0) {
    return notionCategories;
  }

  // Fall back to MDX content
  try {
    const { getCategoriesForListing } = await import("./content");
    return getCategoriesForListing();
  } catch {
    return [];
  }
}

/**
 * Get featured posts with fallback
 */
export async function getFeaturedPostsWithFallback(): Promise<BlogPost[]> {
  const notionFeatured = await getNotionFeaturedBlogPosts();

  if (notionFeatured.length > 0) {
    return notionFeatured;
  }

  // Fall back to MDX content
  try {
    const { getFeaturedBlogPostsForListing } = await import("./content");
    return getFeaturedBlogPostsForListing();
  } catch {
    return [];
  }
}
