import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import {
  getMDXPostBySlug,
  getAllMDXSlugs,
  getRelatedMDXPosts,
  calculateReadTime,
} from "@/lib/mdx";
import { formatDate, getCategoryColor } from "@/lib/blog-utils";
import { getImageMetadata } from "@/lib/image-utils";
import {
  BlogTableOfContents,
  BlogAuthorBio,
  BlogRelatedPosts,
  BlogShareButtons,
  BlogCTA,
} from "@/components/blog";
import { MDXContent } from "@/components/mdx";
import { TracingBeam } from "@/components/ui/tracing-beam";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all MDX blog posts
export async function generateStaticParams() {
  const mdxSlugs = getAllMDXSlugs();
  return mdxSlugs.map((slug) => ({ slug }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getMDXPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | Procedure Blog",
    };
  }

  const { frontmatter } = post;
  return {
    title: `${frontmatter.title} | Procedure Blog`,
    description: frontmatter.excerpt,
    keywords: frontmatter.tags,
    authors: [{ name: frontmatter.author.name }],
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.excerpt,
      type: "article",
      publishedTime: frontmatter.publishedAt,
      modifiedTime: frontmatter.updatedAt,
      authors: [frontmatter.author.name],
      tags: frontmatter.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: frontmatter.title,
      description: frontmatter.excerpt,
    },
  };
}

// Loading fallback for MDX content
function MDXContentLoading() {
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

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const mdxPost = getMDXPostBySlug(slug);

  if (!mdxPost) {
    notFound();
  }

  const { frontmatter, content } = mdxPost;
  const readTime = frontmatter.readTime || calculateReadTime(content);
  const categoryColors = getCategoryColor(frontmatter.category.color);
  const relatedMDXPosts = getRelatedMDXPosts(mdxPost, 3);

  // Get cover image metadata with blur placeholder
  const coverImageMetadata = frontmatter.featuredImage
    ? await getImageMetadata(frontmatter.featuredImage)
    : null;

  // Convert MDX posts to BlogPost format for related posts component
  const relatedPosts = relatedMDXPosts.map((p) => ({
    id: p.slug,
    slug: p.slug,
    title: p.frontmatter.title,
    excerpt: p.frontmatter.excerpt,
    content: p.content,
    featuredImage: p.frontmatter.featuredImage || "/blog/default.jpg",
    category: {
      id: p.frontmatter.category.slug,
      name: p.frontmatter.category.name,
      slug: p.frontmatter.category.slug,
      color: p.frontmatter.category.color,
      description: "",
    },
    postType: "article" as const,
    author: {
      id: p.frontmatter.author.name.toLowerCase().replace(/\s+/g, "-"),
      name: p.frontmatter.author.name,
      avatar: p.frontmatter.author.avatar || "/team/default.jpg",
      role: p.frontmatter.author.role,
      bio: "",
      twitter: p.frontmatter.author.twitter,
      linkedin: p.frontmatter.author.linkedin,
    },
    publishedAt: p.frontmatter.publishedAt,
    readTime: p.frontmatter.readTime || calculateReadTime(p.content),
    tags: p.frontmatter.tags,
    featured: p.frontmatter.featured,
  }));

  return (
    <main className="relative min-h-screen bg-base overflow-hidden">
      {/* Share buttons - sidebar (desktop only) */}
      <BlogShareButtons
        url={`/blog/${slug}`}
        title={frontmatter.title}
        variant="sidebar"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-8 sm:pb-12 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-surface via-base to-base" />
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
              href={`/blog?category=${frontmatter.category.slug}`}
              className="hover:text-accent-light transition-colors"
            >
              {frontmatter.category.name}
            </Link>
          </nav>

          {/* Category Badge */}
          <div
            className={`inline-flex px-3 py-1 text-xs font-medium rounded-full mb-4 ${categoryColors.bg} ${categoryColors.border} border ${categoryColors.text}`}
          >
            {frontmatter.category.name}
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-tight mb-6">
            {frontmatter.title}
          </h1>

          {/* Meta Row */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold text-white">
                  {frontmatter.author.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-text-primary">
                  {frontmatter.author.name}
                </p>
                <p className="text-xs text-text-muted">
                  {frontmatter.author.role}
                </p>
              </div>
            </div>

            {/* Separator */}
            <span className="w-1 h-1 rounded-full bg-border" />

            {/* Date */}
            <span className="text-sm text-text-muted">
              {formatDate(frontmatter.publishedAt)}
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
              {readTime} min read
            </span>
          </div>

          {/* Featured Image */}
          {coverImageMetadata ? (
            <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden">
              <Image
                src={coverImageMetadata.src}
                alt={frontmatter.title}
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL={coverImageMetadata.blurDataURL}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>
          ) : frontmatter.featuredImage ? (
            <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden">
              <Image
                src={frontmatter.featuredImage}
                alt={frontmatter.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>
          ) : (
            <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden bg-gradient-to-br from-accent/20 to-accent-secondary/20">
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
      <section className="relative py-12 sm:py-16 bg-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[280px_1fr] gap-12 lg:gap-16 items-start">
            {/* Table of Contents - Desktop */}
            <div className="hidden lg:block h-fit">
              <BlogTableOfContents content={content} />
            </div>

            {/* Article Content with Tracing Beam */}
            <TracingBeam className="hidden lg:block">
              <article className="max-w-3xl prose-container pl-8">
                <Suspense fallback={<MDXContentLoading />}>
                  <MDXContent source={content} />
                </Suspense>

                {/* Tags */}
                {frontmatter.tags && frontmatter.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-border">
                    <span className="text-sm text-text-muted mr-2">Tags:</span>
                    {frontmatter.tags.map((tag) => (
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
                <BlogAuthorBio
                  author={{
                    id: frontmatter.author.name
                      .toLowerCase()
                      .replace(/\s+/g, "-"),
                    name: frontmatter.author.name,
                    avatar: frontmatter.author.avatar || "/team/default.jpg",
                    role: frontmatter.author.role,
                    bio: "",
                    twitter: frontmatter.author.twitter,
                    linkedin: frontmatter.author.linkedin,
                  }}
                />
              </article>
            </TracingBeam>

            {/* Article Content - Mobile (no tracing beam) */}
            <article className="max-w-3xl prose-container lg:hidden">
              <Suspense fallback={<MDXContentLoading />}>
                <MDXContent source={content} />
              </Suspense>

              {/* Tags */}
              {frontmatter.tags && frontmatter.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-border">
                  <span className="text-sm text-text-muted mr-2">Tags:</span>
                  {frontmatter.tags.map((tag) => (
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
                  title={frontmatter.title}
                  variant="inline"
                />
              </div>

              {/* Author Bio */}
              <BlogAuthorBio
                author={{
                  id: frontmatter.author.name
                    .toLowerCase()
                    .replace(/\s+/g, "-"),
                  name: frontmatter.author.name,
                  avatar: frontmatter.author.avatar || "/team/default.jpg",
                  role: frontmatter.author.role,
                  bio: "",
                  twitter: frontmatter.author.twitter,
                  linkedin: frontmatter.author.linkedin,
                }}
              />
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
