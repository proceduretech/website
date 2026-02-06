// Content Types for MDX-based content system
// These interfaces define the frontmatter schema for each content type

// =============================================================================
// Shared Types
// =============================================================================

export interface SEOFrontmatter {
  title?: string;
  description?: string;
  canonical?: string;
  noIndex?: boolean;
}

export interface BaseFrontmatter {
  title: string;
  slug?: string; // Optional: defaults to filename
  draft?: boolean;
  seo?: SEOFrontmatter;
}

export interface MetricItem {
  value: string;
  label: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CTABlock {
  title: string;
  description?: string;
  buttonText: string;
  buttonLink: string;
}

// =============================================================================
// Author & Category (from YAML files)
// =============================================================================

export interface Author {
  name: string;
  role: string;
  avatar?: string;
  bio?: string;
  twitter?: string;
  linkedin?: string;
}

export interface BlogCategory {
  name: string;
  slug: string;
  description: string;
  color: "teal" | "blue" | "default" | "highlight";
}

// =============================================================================
// Blog Post
// =============================================================================

export interface BlogFrontmatter extends BaseFrontmatter {
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  author: string; // Reference to _authors.yaml key
  category: string; // Reference to _categories.yaml key
  tags?: string[];
  featuredImage?: string;
  featured?: boolean;
  readTime?: number; // Auto-calculated if omitted
}

// Resolved blog post with author/category objects
export interface ResolvedBlogPost {
  slug: string;
  frontmatter: Omit<BlogFrontmatter, "author" | "category"> & {
    author: Author;
    category: BlogCategory;
  };
  content: string;
  readTime: number;
}

// =============================================================================
// Case Study
// =============================================================================

export interface TestimonialBlock {
  quote: string;
  author: string;
  role?: string;
  company: string;
}

export interface CaseStudyFrontmatter extends BaseFrontmatter {
  client?: string; // Can be anonymized
  industry: string; // Reference to shared/industries.yaml
  serviceType: "ai-engineering" | "product-engineering";
  challenge: string;
  solution: string;
  results: MetricItem[];
  technologies: string[];
  testimonial?: TestimonialBlock;
  featured?: boolean;
  publishedAt: string;
  featuredImage?: string;
}

// =============================================================================
// Expertise Page
// =============================================================================

export interface CapabilityItem {
  title: string;
  description: string;
  icon: string; // Icon key for component mapping
}

export interface ExpertiseFrontmatter extends BaseFrontmatter {
  headline?: string; // Explicit headline (if provided)
  headlineAccent?: string; // Accent portion of headline (if provided)
  tagline: string;
  description: string;
  heroStats?: MetricItem[];
  capabilities: CapabilityItem[];
  technologies: string[];
  relatedExpertise?: string[]; // Slugs of related expertise pages
  faqs?: FAQItem[];
  testimonials?: Array<{
    name: string;
    role: string;
    company: string;
    quote: string;
  }>;
  cta?: CTABlock;
  // Optional frontend-specific sections
  whoWeWorkWith?: {
    audiences: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
    closingStatement?: string;
  };
  process?: Array<{
    number: number;
    title: string;
    description: string;
    icon?: string;
  }>;
  useCases?: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  whyChoose?: {
    reasons: string[];
    outcomes: Array<{
      value: string;
      label: string;
    }>;
  };
  qualityMatters?: {
    costs: Array<{
      title: string;
      description: string;
    }>;
    benefits: Array<{
      title: string;
    }>;
  };
}

// =============================================================================
// Industry Page
// =============================================================================

export interface ChallengeItem {
  title: string;
  description: string;
  icon?: string;
}

export interface SolutionItem {
  title: string;
  description: string;
  icon?: string;
  featured?: boolean;
}

export interface ComplianceItem {
  name: string;
  description?: string;
}

export interface IndustryFrontmatter extends BaseFrontmatter {
  tagline: string;
  description: string;
  heroStats?: MetricItem[];
  challenges?: ChallengeItem[];
  solutions?: SolutionItem[];
  compliance?: ComplianceItem[];
  useCases?: string[]; // Slugs of related use cases
  caseStudies?: string[]; // Slugs of related case studies
  relatedIndustries?: string[];
  faqs?: FAQItem[];
  cta?: CTABlock;
}

// =============================================================================
// Service Page
// =============================================================================

export interface ServiceBenefit {
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}

export interface ServiceProcessStep {
  step: string;
  title: string;
  duration: string;
  description: string;
}

export interface ServiceCTA {
  headline: string;
  headlineAccent?: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export interface ServiceFrontmatter extends BaseFrontmatter {
  headline: string;
  headlineAccent?: string;
  badge?: string;
  badgeVariant?: "teal" | "blue";
  description: string;
  primaryCTA: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
  benefits: ServiceBenefit[];
  benefitsTitle?: string;
  process: ServiceProcessStep[];
  processTitle?: string;
  services?: string[]; // List of services offered
  productTypes?: string[]; // Types of products built (for product-build)
  roles?: string[]; // Roles staffed (for staff-augmentation)
  sprintExamples?: string[]; // Sprint examples (for ai-sprints)
  compliance?: string[]; // Compliance certifications (for enterprise)
  relatedExpertise?: string[]; // Slugs of related expertise pages
  idealFor: string[];
  idealForTitle?: string;
  cta: ServiceCTA;
}

// =============================================================================
// Use Case Page
// =============================================================================

export interface UseCaseStep {
  title: string;
  description: string;
  icon?: string;
}

export interface UseCaseFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface ProblemSolution {
  before: string[];
  after: string[];
}

export interface UseCaseFrontmatter extends BaseFrontmatter {
  tagline: string;
  description: string;
  heroHighlight?: string; // The highlighted text in hero headline
  problemSolution?: ProblemSolution;
  architecture?: {
    title: string;
    subtitle: string;
    steps: UseCaseStep[];
  };
  features?: {
    title: string;
    subtitle: string;
    items: UseCaseFeature[];
  };
  metrics?: MetricItem[];
  whyProcedure?: {
    title: string;
    points: string[];
  };
  industries?: string[]; // Industries this applies to
  relatedUseCases?: string[];
  caseStudies?: string[]; // Related case studies
  faqs?: FAQItem[];
  cta?: CTABlock & {
    primaryCTA?: { text: string; href: string };
    secondaryCTA?: { text: string; href: string };
  };
}

// =============================================================================
// Generic Content Item
// =============================================================================

export interface ContentItem<T extends BaseFrontmatter = BaseFrontmatter> {
  slug: string;
  frontmatter: T;
  content: string;
}

// =============================================================================
// Content Types Enum
// =============================================================================

export type ContentType =
  | "blog"
  | "case-studies"
  | "expertise"
  | "industries"
  | "use-cases"
  | "services"
  | "pages";

// Map content types to their frontmatter interfaces
export type ContentTypeMap = {
  blog: BlogFrontmatter;
  "case-studies": CaseStudyFrontmatter;
  expertise: ExpertiseFrontmatter;
  industries: IndustryFrontmatter;
  "use-cases": UseCaseFrontmatter;
  services: ServiceFrontmatter;
  pages: BaseFrontmatter;
};
