import { getBlogPostsWithFallback } from "@/lib/notion-blog";

export const dynamic = "force-static";

const SITE_URL = "https://procedure.tech";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const posts = await getBlogPostsWithFallback();

  const sortedPosts = posts
    .filter((p) => p.publishedAt)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

  const latestDate =
    sortedPosts.length > 0
      ? new Date(sortedPosts[0].publishedAt).toUTCString()
      : new Date().toUTCString();

  const items = sortedPosts
    .map(
      (post) => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${SITE_URL}/blogs/${post.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/blogs/${post.slug}</guid>
      <description>${escapeXml(post.excerpt || post.metaDescription || "")}</description>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>${post.category?.name ? `\n      <category>${escapeXml(post.category.name)}</category>` : ""}${post.author?.name ? `\n      <author>${escapeXml(post.author.name)}</author>` : ""}
    </item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Procedure Engineering Blog</title>
    <link>${SITE_URL}/blogs</link>
    <description>Insights on AI engineering, software development, and building production systems from Procedure's engineering team.</description>
    <language>en-us</language>
    <lastBuildDate>${latestDate}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
