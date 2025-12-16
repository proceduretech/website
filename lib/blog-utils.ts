import { BlogPost, BlogCategory } from "./blog-types";

export function filterPostsByCategory(
  posts: BlogPost[],
  categorySlug: string,
): BlogPost[] {
  if (categorySlug === "all") {
    return posts;
  }
  return posts.filter((post) => post.category.slug === categorySlug);
}

export function sortPostsByDate(
  posts: BlogPost[],
  order: "asc" | "desc" = "desc",
): BlogPost[] {
  return [...posts].sort((a, b) => {
    const dateA = new Date(a.publishedAt).getTime();
    const dateB = new Date(b.publishedAt).getTime();
    return order === "desc" ? dateB - dateA : dateA - dateB;
  });
}

export function getFeaturedPosts(posts: BlogPost[]): BlogPost[] {
  return posts.filter((post) => post.featured);
}

export function getRelatedPosts(
  currentPost: BlogPost,
  allPosts: BlogPost[],
  limit: number = 3,
): BlogPost[] {
  // First, try to find posts in the same category
  const sameCategoryPosts = allPosts.filter(
    (post) =>
      post.id !== currentPost.id &&
      post.category.id === currentPost.category.id,
  );

  // If we have enough, return them sorted by date
  if (sameCategoryPosts.length >= limit) {
    return sortPostsByDate(sameCategoryPosts).slice(0, limit);
  }

  // Otherwise, add posts with shared tags
  const currentTags = new Set(currentPost.tags || []);
  const otherPosts = allPosts.filter(
    (post) =>
      post.id !== currentPost.id &&
      post.category.id !== currentPost.category.id,
  );

  const postsWithSharedTags = otherPosts
    .map((post) => ({
      post,
      sharedTags: (post.tags || []).filter((tag) => currentTags.has(tag))
        .length,
    }))
    .filter((item) => item.sharedTags > 0)
    .sort((a, b) => b.sharedTags - a.sharedTags)
    .map((item) => item.post);

  const combined = [...sameCategoryPosts, ...postsWithSharedTags];

  // If still not enough, add recent posts
  if (combined.length < limit) {
    const remainingPosts = allPosts.filter(
      (post) =>
        post.id !== currentPost.id && !combined.some((p) => p.id === post.id),
    );
    combined.push(...sortPostsByDate(remainingPosts));
  }

  return combined.slice(0, limit);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatDateShort(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function getCategoryColor(color: BlogCategory["color"]): {
  bg: string;
  border: string;
  text: string;
} {
  const colors = {
    teal: {
      bg: "bg-accent/60",
      border: "border-accent/50",
      text: "text-white",
    },
    blue: {
      bg: "bg-accent-secondary/60",
      border: "border-accent-secondary/50",
      text: "text-white",
    },
    default: {
      bg: "bg-surface-elevated/80",
      border: "border-border",
      text: "text-text-primary",
    },
    highlight: {
      bg: "bg-highlight/20",
      border: "border-highlight/30",
      text: "text-highlight",
    },
  };
  return colors[color];
}

export function getPostTypeLabel(postType: BlogPost["postType"]): string {
  const labels = {
    article: "Article",
    guide: "Guide",
    "case-study": "Case Study",
    news: "News",
  };
  return labels[postType];
}

export function searchPosts(posts: BlogPost[], query: string): BlogPost[] {
  const normalizedQuery = query.toLowerCase().trim();
  if (!normalizedQuery) return posts;

  return posts.filter((post) => {
    const searchableText = [
      post.title,
      post.excerpt,
      post.category.name,
      post.author.name,
      ...(post.tags || []),
    ]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(normalizedQuery);
  });
}
