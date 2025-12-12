export interface Author {
  id: string;
  name: string;
  avatar: string;
  role: string;
  bio: string;
  twitter?: string;
  linkedin?: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: "teal" | "blue" | "default" | "highlight";
}

export type PostType = "article" | "guide" | "case-study" | "news";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  category: BlogCategory;
  postType: PostType;
  author: Author;
  publishedAt: string;
  updatedAt?: string;
  readTime: number;
  tags?: string[];
  featured?: boolean;
}

export interface BlogFilterState {
  category: string;
  searchQuery?: string;
}
