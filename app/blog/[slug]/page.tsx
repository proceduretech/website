import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  getNotionBlogSlugs,
  getNotionBlogPostBySlug,
  getRelatedBlogPosts,
} from "@/lib/notion-blog";
import type { BlogContent } from "@/lib/notion-blog";
import { formatDate, getCategoryColor } from "@/lib/blog-utils";
import { getImageMetadata } from "@/lib/image-utils";
import {
  BlogAuthorBio,
  BlogRelatedPosts,
  BlogShareButtons,
  BlogCTA,
} from "@/components/blog";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { NotionCodeBlock } from "@/components/notion/CodeBlock";

// Force static generation at build time
export const dynamic = "force-static";
export const revalidate = false;

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all blog posts from Notion
export async function generateStaticParams() {
  const slugs = await getNotionBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getNotionBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | Procedure Blog",
    };
  }

  return {
    title: `${post.title} | Procedure Blog`,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      tags: post.tags,
      images: post.featuredImage ? [post.featuredImage] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

// Loading fallback for content
function ContentLoading() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-4 bg-surface-elevated rounded w-3/4" />
      <div className="h-4 bg-surface-elevated rounded w-full" />
      <div className="h-4 bg-surface-elevated rounded w-5/6" />
      <div className="h-32 bg-surface-elevated rounded mt-6" />
      <div className="h-4 bg-surface-elevated rounded w-2/3 mt-6" />
      <div className="h-4 bg-surface-elevated rounded w-full" />
    </div>
  );
}

// Render Notion content blocks
// Styles aligned with .mdx-content from globals.css
function NotionContentBlock({ block }: { block: BlogContent }) {
  switch (block.type) {
    case "paragraph":
      if (!block.text) return null;
      return (
        <p className="mb-4 text-lg leading-[1.75] text-(--color-prose-body)">
          {block.text}
        </p>
      );
    case "heading_1":
      return (
        <h2
          id={block.text?.toLowerCase().replace(/\s+/g, "-")}
          className="font-display text-[1.875rem] font-bold text-(--color-prose-headings) mt-8 mb-5 scroll-mt-24"
        >
          {block.text}
        </h2>
      );
    case "heading_2":
      return (
        <h3
          id={block.text?.toLowerCase().replace(/\s+/g, "-")}
          className="font-display text-2xl font-semibold text-(--color-prose-headings) mt-7 mb-4 scroll-mt-24"
        >
          {block.text}
        </h3>
      );
    case "heading_3":
      return (
        <h4
          id={block.text?.toLowerCase().replace(/\s+/g, "-")}
          className="font-display text-xl font-semibold text-(--color-prose-headings) mt-6 mb-3.5 scroll-mt-24"
        >
          {block.text}
        </h4>
      );
    case "bulleted_list_item":
      return (
        <li className="text-lg leading-[1.75] text-(--color-prose-body) ml-6 mb-2 list-disc marker:text-(--color-prose-bullets)">
          {block.text}
        </li>
      );
    case "numbered_list_item":
      return (
        <li className="text-lg leading-[1.75] text-(--color-prose-body) ml-6 mb-2 list-decimal marker:text-(--color-prose-bullets)">
          {block.text}
        </li>
      );
    case "quote":
      return (
        <blockquote
          className="border-l-4 border-accent pl-6 p-6 pb-2 my-8 italic text-text-secondary rounded-r-xl"
          style={{ backgroundColor: "var(--color-blockquote-bg)" }}
        >
          <p className="mb-4">{block.text}</p>
        </blockquote>
      );
    case "callout":
      return (
        <div className="bg-(--color-callout-note-bg) border border-(--color-callout-note-border) rounded-xl p-6 my-8">
          <p className="text-lg text-(--color-prose-body) mb-0">{block.text}</p>
        </div>
      );
    case "code":
      return (
        <NotionCodeBlock code={block.text || ""} language={block.language} />
      );
    case "image":
      if (!block.url) return null;
      return (
        <figure className="my-8">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border">
            <Image
              src={block.url}
              alt="Blog post image"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
        </figure>
      );
    case "divider":
      return <hr className="border-(--color-hr) my-12" />;
    default:
      return null;
  }
}

// Render all Notion content with proper list grouping
function NotionContent({ blocks }: { blocks: BlogContent[] }) {
  const groupedBlocks: (
    | BlogContent
    | { type: "ul" | "ol"; items: BlogContent[] }
  )[] = [];

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    const lastGroup = groupedBlocks[groupedBlocks.length - 1];
    const isListGroup =
      lastGroup && "items" in lastGroup && Array.isArray(lastGroup.items);

    if (block.type === "bulleted_list_item") {
      if (isListGroup && lastGroup.type === "ul") {
        lastGroup.items.push(block);
      } else {
        groupedBlocks.push({ type: "ul", items: [block] });
      }
    } else if (block.type === "numbered_list_item") {
      if (isListGroup && lastGroup.type === "ol") {
        lastGroup.items.push(block);
      } else {
        groupedBlocks.push({ type: "ol", items: [block] });
      }
    } else {
      groupedBlocks.push(block);
    }
  }

  return (
    <div className="notion-content">
      {groupedBlocks.map((item, idx) => {
        if ("items" in item) {
          // Render grouped list
          if (item.type === "ul") {
            return (
              <ul
                key={idx}
                className="mb-6 pl-6 list-disc marker:text-(--color-prose-bullets)"
              >
                {item.items.map((li, liIdx) => (
                  <li
                    key={liIdx}
                    className="text-lg leading-[1.75] text-(--color-prose-body) mb-2"
                  >
                    {li.text}
                  </li>
                ))}
              </ul>
            );
          } else {
            return (
              <ol
                key={idx}
                className="mb-6 pl-6 list-decimal marker:text-(--color-prose-bullets)"
              >
                {item.items.map((li, liIdx) => (
                  <li
                    key={liIdx}
                    className="text-lg leading-[1.75] text-(--color-prose-body) mb-2"
                  >
                    {li.text}
                  </li>
                ))}
              </ol>
            );
          }
        }
        return <NotionContentBlock key={idx} block={item} />;
      })}
    </div>
  );
}

// Generate table of contents from Notion blocks
function NotionTableOfContents({ blocks }: { blocks: BlogContent[] }) {
  const headings = blocks.filter(
    (block) =>
      block.type === "heading_1" ||
      block.type === "heading_2" ||
      block.type === "heading_3"
  );

  if (headings.length === 0) return null;

  return (
    <nav className="sticky top-32">
      <h4 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">
        On This Page
      </h4>
      <ul className="space-y-2">
        {headings.map((heading, idx) => {
          const id = heading.text?.toLowerCase().replace(/\s+/g, "-") || "";
          const indentClass =
            heading.type === "heading_2"
              ? "ml-3"
              : heading.type === "heading_3"
              ? "ml-6"
              : "";
          return (
            <li key={idx} className={indentClass}>
              <a
                href={`#${id}`}
                className="text-sm text-text-muted hover:text-accent-light transition-colors line-clamp-2"
              >
                {heading.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getNotionBlogPostBySlug(slug);

  console.log(post);

  if (!post) {
    notFound();
  }

  const categoryColors = getCategoryColor(post.category.color);
  const relatedPosts = await getRelatedBlogPosts(slug, 3);

  // Get cover image metadata with blur placeholder (for local images)
  const coverImageMetadata =
    post.featuredImage && post.featuredImage.startsWith("/")
      ? await getImageMetadata(post.featuredImage)
      : null;

  return (
    <main className="relative min-h-screen bg-base overflow-hidden">
      {/* Share buttons - sidebar (desktop only) */}
      <BlogShareButtons
        url={`/blog/${slug}`}
        title={post.title}
        variant="sidebar"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-8 sm:pb-12 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-surface via-base to-base" />
          <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-accent/6 rounded-full blur-[100px]" />
          <div className="absolute top-40 left-1/4 w-[400px] h-[400px] bg-accent-secondary/5 rounded-full blur-[80px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-text-muted mb-6">
            <Link
              href="/blog"
              className="hover:text-accent-light transition-colors"
            >
              Blog
            </Link>
            <span>/</span>
            <Link
              href={`/blog?category=${post.category.slug}`}
              className="hover:text-accent-light transition-colors"
            >
              {post.category.name}
            </Link>
          </nav>

          {/* Category Badge */}
          <div
            className={`inline-flex px-3 py-1 text-xs font-medium rounded-full mb-4 ${categoryColors.bg} ${categoryColors.border} border ${categoryColors.text}`}
          >
            {post.category.name}
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-tight mb-6">
            {post.title}
          </h1>

          {/* Meta Row */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-accent to-accent-secondary flex items-center justify-center shrink-0">
                <span className="text-sm font-bold text-white">
                  {post.author.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-text-primary">
                  {post.author.name}
                </p>
                <p className="text-xs text-text-muted">{post.author.role}</p>
              </div>
            </div>

            {/* Separator */}
            <span className="w-1 h-1 rounded-full bg-border" />

            {/* Date */}
            <span className="text-sm text-text-muted">
              {formatDate(post.publishedAt)}
            </span>

            {/* Separator */}
            <span className="w-1 h-1 rounded-full bg-border" />

            {/* Read Time */}
            <span className="flex items-center gap-1 text-sm text-text-muted">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {post.readTime} min read
            </span>
          </div>

          {/* Featured Image */}
          {coverImageMetadata ? (
            <div className="relative w-full aspect-21/9 rounded-2xl overflow-hidden">
              <Image
                src={coverImageMetadata.src}
                alt={post.title}
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL={coverImageMetadata.blurDataURL}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>
          ) : post.featuredImage &&
            post.featuredImage !== "/blog/default.jpg" ? (
            <div className="relative w-full aspect-21/9 rounded-2xl overflow-hidden">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>
          ) : (
            <div className="relative w-full aspect-21/9 rounded-2xl overflow-hidden bg-linear-to-br from-accent/20 to-accent-secondary/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-2xl bg-surface-elevated/50 backdrop-blur border border-border flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-text-muted"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-8 sm:py-12 bg-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[280px_1fr] gap-12 lg:gap-16 items-start">
            {/* Table of Contents - Desktop */}
            <div className="hidden lg:block h-fit">
              <NotionTableOfContents blocks={post.notionContent} />
            </div>

            {/* Article Content with Tracing Beam */}
            <TracingBeam className="hidden lg:block">
              <article className="max-w-3xl prose-container pl-8">
                {/* Excerpt */}
                {post.excerpt && (
                  <p className="text-lg text-text-secondary leading-relaxed mb-8 font-medium">
                    {post.excerpt}
                  </p>
                )}

                {/* Notion Content */}
                {post.notionContent.length > 0 ? (
                  <NotionContent blocks={post.notionContent} />
                ) : (
                  <ContentLoading />
                )}

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-border">
                    <span className="text-sm text-text-muted mr-2">Tags:</span>
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium text-text-secondary bg-surface-elevated border border-border rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Author Bio */}
                <BlogAuthorBio author={post.author} />
              </article>
            </TracingBeam>

            {/* Article Content - Mobile (no tracing beam) */}
            <article className="max-w-3xl prose-container lg:hidden">
              {/* Excerpt */}
              {post.excerpt && (
                <p className="text-lg text-text-secondary leading-relaxed mb-8 font-medium">
                  {post.excerpt}
                </p>
              )}

              {/* Notion Content */}
              {post.notionContent.length > 0 ? (
                <NotionContent blocks={post.notionContent} />
              ) : (
                <ContentLoading />
              )}

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-border">
                  <span className="text-sm text-text-muted mr-2">Tags:</span>
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium text-text-secondary bg-surface-elevated border border-border rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Share Buttons - Inline (mobile/tablet) */}
              <div className="xl:hidden">
                <BlogShareButtons
                  url={`/blog/${slug}`}
                  title={post.title}
                  variant="inline"
                />
              </div>

              {/* Author Bio */}
              <BlogAuthorBio author={post.author} />
            </article>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="relative py-12 sm:py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <BlogRelatedPosts posts={relatedPosts} />
          </div>
        </section>
      )}

      {/* CTA Section */}
      <BlogCTA />
    </main>
  );
}
