import { ReactNode } from "react";

// Icons as React components
const SearchIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
    />
  </svg>
);

const DocumentIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
    />
  </svg>
);

const ChatIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
    />
  </svg>
);

const VectorIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
    />
  </svg>
);

const SparklesIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
    />
  </svg>
);

const BoltIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
    />
  </svg>
);

const ClockIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);

const UserGroupIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
    />
  </svg>
);

const CogIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
    />
  </svg>
);

const ChartIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
    />
  </svg>
);

const ShieldIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
    />
  </svg>
);

const ArrowPathIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
    />
  </svg>
);

const InboxIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-17.5 0a2.25 2.25 0 0 0-2.25 2.25v1.5a2.25 2.25 0 0 0 2.25 2.25h17.25a2.25 2.25 0 0 0 2.25-2.25v-1.5a2.25 2.25 0 0 0-2.25-2.25m-17.5 0V6.375A2.25 2.25 0 0 1 4.875 4.125h14.25A2.25 2.25 0 0 1 21.375 6.375v7.125"
    />
  </svg>
);

const CheckCircleIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);

const AdjustmentsIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
    />
  </svg>
);

const EyeIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
  </svg>
);

// Types
export interface UseCaseFAQ {
  question: string;
  answer: string;
}

export interface UseCaseFeature {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface UseCaseStep {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface UseCaseMetric {
  value: string;
  label: string;
  context: string;
}

export interface UseCaseData {
  slug: string;
  meta: {
    title: string;
    description: string;
  };
  hero: {
    badge: string;
    headline: string;
    highlightedText: string;
    tagline: string;
    description: string;
  };
  problemSolution: {
    before: string[];
    after: string[];
  };
  architecture: {
    title: string;
    subtitle: string;
    steps: UseCaseStep[];
  };
  features: {
    title: string;
    subtitle: string;
    items: UseCaseFeature[];
  };
  metrics: UseCaseMetric[];
  whyProcedure: {
    title: string;
    points: string[];
  };
  cta: {
    headline: string;
    description: string;
    primaryCTA: { text: string; href: string };
    secondaryCTA: { text: string; href: string };
  };
  faqs: UseCaseFAQ[];
  relatedIndustries: string[];
}

// Use Cases Data
export const useCasesData: UseCaseData[] = [
  // AI-Powered Search
  {
    slug: "ai-search",
    meta: {
      title: "AI-Powered Search | Semantic Search | Procedure",
      description:
        "Build semantic search that understands user intent. Vector databases, embeddings, and intelligent discovery. Ship in weeks.",
    },
    hero: {
      badge: "Use Case",
      headline: "Search That",
      highlightedText: "Understands What Users Mean",
      tagline: "Beyond keywords. True understanding.",
      description:
        "Traditional search fails when users don't know the right words. Semantic search understands intent—finding relevant results even when queries don't match exact keywords. We build search systems that surface what users actually need, dramatically improving discovery and conversion.",
    },
    problemSolution: {
      before: [
        "Users abandon search after finding nothing relevant",
        "Exact keyword matching misses obvious connections",
        "Zero-result searches frustrate users and lose revenue",
        "Search relevance requires constant manual tuning",
      ],
      after: [
        "Users find relevant results on first query",
        "Semantic understanding connects concepts",
        "Near-zero empty result pages",
        "Self-improving relevance with minimal maintenance",
      ],
    },
    architecture: {
      title: "How It Works",
      subtitle:
        "Our semantic search pipeline transforms queries into meaningful results",
      steps: [
        {
          icon: <SparklesIcon />,
          title: "Query Understanding",
          description:
            "Parse user queries to understand intent, correct typos, and expand concepts.",
        },
        {
          icon: <VectorIcon />,
          title: "Vector Embedding",
          description:
            "Convert queries and documents into semantic vectors that capture meaning.",
        },
        {
          icon: <SearchIcon />,
          title: "Similarity Search",
          description:
            "Find semantically similar content using efficient vector indexes.",
        },
        {
          icon: <AdjustmentsIcon />,
          title: "Hybrid Re-ranking",
          description:
            "Combine semantic similarity with business rules, freshness, and personalization.",
        },
      ],
    },
    features: {
      title: "Key Features",
      subtitle: "Everything you need for world-class search",
      items: [
        {
          icon: <SparklesIcon />,
          title: "Semantic Understanding",
          description:
            'Search that grasps concepts, not just keywords. "budget laptop" finds "affordable notebook computers" without manual synonyms.',
        },
        {
          icon: <VectorIcon />,
          title: "Hybrid Search Architecture",
          description:
            "Combine vector similarity with traditional keyword matching. Get the precision of keywords with the recall of semantic search.",
        },
        {
          icon: <BoltIcon />,
          title: "Real-Time Indexing",
          description:
            "New content searchable in seconds, not hours. Keep search results fresh without batch processing delays.",
        },
        {
          icon: <SparklesIcon />,
          title: "Query Enhancement",
          description:
            "Autocomplete, spell correction, and query suggestions powered by AI. Help users find what they need faster.",
        },
        {
          icon: <UserGroupIcon />,
          title: "Personalized Results",
          description:
            "Incorporate user history and preferences into ranking. Surface relevant results unique to each user.",
        },
        {
          icon: <ChartIcon />,
          title: "Analytics & Optimization",
          description:
            "Understand what users search for, what they find, and where they struggle. Data to continuously improve search quality.",
        },
      ],
    },
    metrics: [
      {
        value: "34%",
        label: "Higher Conversion",
        context: "vs. keyword search baseline",
      },
      {
        value: "2.3x",
        label: "Search-to-Purchase",
        context: "industry avg: 1.2x",
      },
      { value: "<100ms", label: "Query Latency", context: "p99 performance" },
      {
        value: "89%",
        label: "User Satisfaction",
        context: "with search experience",
      },
    ],
    whyProcedure: {
      title: "Why Procedure for AI Search?",
      points: [
        "Vector database expertise: We've built on Pinecone, Weaviate, Chroma, and pgvector",
        "Production scale: Search systems handling millions of queries daily",
        "Full-stack delivery: From infrastructure to search UI components",
        "Measurable impact: We track metrics that matter to your business",
      ],
    },
    cta: {
      headline: "Build Search That Converts",
      description:
        "Talk to our search engineers. We'll show you how semantic search can improve discovery and drive business results.",
      primaryCTA: { text: "Book a Call", href: "/contact" },
      secondaryCTA: { text: "See Search Demo", href: "/contact" },
    },
    faqs: [
      {
        question: "How is semantic search different from Elasticsearch?",
        answer:
          'Elasticsearch (and similar) match keywords. Semantic search matches meaning—understanding that "running shoes" and "jogging sneakers" are the same concept. We often combine both: keyword precision with semantic understanding.',
      },
      {
        question: "What vector database should we use?",
        answer:
          "It depends on your scale, latency requirements, and infrastructure preferences. Pinecone for managed simplicity, Weaviate for flexibility, pgvector if you're already on Postgres. We help you choose and implement the right option.",
      },
      {
        question: "How long does semantic search take to implement?",
        answer:
          "A production-ready semantic search system typically takes 4-8 weeks. We can have a working prototype in your data within the first week.",
      },
      {
        question: "Can you improve our existing search?",
        answer:
          "Yes. We often augment existing search with semantic capabilities—adding vector search alongside keyword matching for better results without replacing your current infrastructure.",
      },
    ],
    relatedIndustries: ["saas", "financial-services"],
  },

  // Document Intelligence
  {
    slug: "document-ai",
    meta: {
      title: "Document Intelligence | AI Document Processing | Procedure",
      description:
        "Extract, classify, and analyze documents at scale. OCR, NLP, and structured extraction for enterprise document workflows.",
    },
    hero: {
      badge: "Use Case",
      headline: "Turn Documents Into",
      highlightedText: "Actionable Data",
      tagline: "Extract. Classify. Analyze. At scale.",
      description:
        "Your organization runs on documents—contracts, invoices, reports, applications. We build AI systems that read, understand, and extract structured data from documents at scale. Stop manual data entry. Start making decisions from document insights.",
    },
    problemSolution: {
      before: [
        "Manual document review bottlenecks operations",
        "Data entry errors corrupt downstream systems",
        "Important information buried in document archives",
        "Compliance audits require weeks of document gathering",
      ],
      after: [
        "Documents processed in seconds, not hours",
        "95%+ extraction accuracy, validated automatically",
        "Instant search across all document content",
        "Audit-ready with complete processing trails",
      ],
    },
    architecture: {
      title: "How It Works",
      subtitle: "Our document processing pipeline handles any format at scale",
      steps: [
        {
          icon: <InboxIcon />,
          title: "Document Ingestion",
          description:
            "Accept documents in any format: PDF, images, scans, emails. Handle quality variations automatically.",
        },
        {
          icon: <EyeIcon />,
          title: "OCR & Preprocessing",
          description:
            "Extract text from scanned documents with high accuracy. Correct orientation, enhance quality.",
        },
        {
          icon: <SparklesIcon />,
          title: "Entity Extraction",
          description:
            "Identify and extract key information: names, dates, amounts, clauses. Custom extractors for your document types.",
        },
        {
          icon: <CheckCircleIcon />,
          title: "Validation & Output",
          description:
            "Confidence scoring, human review for edge cases, and structured output in your preferred format.",
        },
      ],
    },
    features: {
      title: "Key Features",
      subtitle: "Complete document intelligence capabilities",
      items: [
        {
          icon: <DocumentIcon />,
          title: "Multi-Format Processing",
          description:
            "Handle any document type: structured forms, semi-structured invoices, or unstructured contracts. One pipeline for all your documents.",
        },
        {
          icon: <SparklesIcon />,
          title: "Custom Entity Extraction",
          description:
            "Extract the specific fields your business needs. We train extractors for your document types and terminology.",
        },
        {
          icon: <ArrowPathIcon />,
          title: "Intelligent Classification",
          description:
            "Automatically sort documents by type, priority, or workflow. Route to the right process without human triage.",
        },
        {
          icon: <DocumentIcon />,
          title: "Contract Analysis",
          description:
            "Extract key clauses, identify risks, and compare terms across contracts. Legal review at document scale.",
        },
        {
          icon: <ShieldIcon />,
          title: "Compliance Audit Trails",
          description:
            "Complete logging of document processing decisions. Know what was extracted, when, and with what confidence.",
        },
        {
          icon: <UserGroupIcon />,
          title: "Human-in-the-Loop Workflows",
          description:
            "Confidence-based routing to human reviewers. Catch edge cases while processing the majority automatically.",
        },
      ],
    },
    metrics: [
      {
        value: "95%+",
        label: "Extraction Accuracy",
        context: "validated against ground truth",
      },
      {
        value: "80%",
        label: "Time Reduction",
        context: "in manual processing",
      },
      { value: "10x", label: "Faster Retrieval", context: "document search" },
      { value: "99.9%", label: "Uptime", context: "processing pipeline" },
    ],
    whyProcedure: {
      title: "Why Procedure for Document Intelligence?",
      points: [
        "Enterprise scale: We've processed millions of documents for clients",
        "Domain adaptation: Custom models for your specific document types",
        "Compliance focus: Audit trails and accuracy validation built in",
        "Full pipeline: From ingestion to integration with your systems",
      ],
    },
    cta: {
      headline: "Automate Your Document Workflows",
      description:
        "Talk to our document AI team. We'll show you how to extract value from your documents at scale.",
      primaryCTA: { text: "Book a Call", href: "/contact" },
      secondaryCTA: { text: "See Document AI Demo", href: "/contact" },
    },
    faqs: [
      {
        question: "How accurate is AI document extraction?",
        answer:
          "For well-defined document types, we typically achieve 95%+ accuracy. We implement confidence scoring and human review workflows to catch the remaining edge cases, ensuring downstream data quality.",
      },
      {
        question: "Can you handle my specific document types?",
        answer:
          "Yes. We build custom extractors trained on your actual documents. Whether you have specialized forms, industry-specific contracts, or legacy formats, we adapt to your needs.",
      },
      {
        question: "How do you handle poor quality scans?",
        answer:
          "We implement preprocessing pipelines that enhance image quality, correct orientation, and handle various scanning artifacts. For truly unreadable documents, we route to human review.",
      },
      {
        question: "What about document security?",
        answer:
          "Document processing happens in secure, isolated environments. We implement encryption, access controls, and retention policies appropriate for sensitive documents. SOC 2 and HIPAA compliance available.",
      },
    ],
    relatedIndustries: ["financial-services", "healthcare"],
  },

  // Conversational AI
  {
    slug: "conversational-ai",
    meta: {
      title: "Conversational AI | Enterprise Chatbots | Procedure",
      description:
        "Build AI assistants that actually solve problems. LLM-powered chatbots with enterprise integration and human escalation.",
    },
    hero: {
      badge: "Use Case",
      headline: "Conversations That",
      highlightedText: "Actually Solve Problems",
      tagline: "Beyond scripted responses. Real resolution.",
      description:
        "Chatbots have a reputation problem—because most chatbots are frustrating dead ends. We build conversational AI that understands context, takes action, and resolves issues. LLM-powered assistants that customers prefer to waiting on hold.",
    },
    problemSolution: {
      before: [
        "Chatbots frustrate users with circular conversations",
        "Simple queries still require human agents",
        "No memory across sessions or channels",
        "Integration gaps prevent actual resolution",
      ],
      after: [
        "Natural conversations that understand intent",
        "40-60% of queries resolved without human escalation",
        "Context maintained across interactions",
        "Actions taken in backend systems automatically",
      ],
    },
    architecture: {
      title: "How It Works",
      subtitle: "Our conversational AI pipeline delivers real resolution",
      steps: [
        {
          icon: <SparklesIcon />,
          title: "Intent Recognition",
          description:
            "Understand what users want, even when they express it imperfectly. Handle variations, typos, and implicit requests.",
        },
        {
          icon: <ChatIcon />,
          title: "Context Management",
          description:
            "Maintain conversation history and user context. Know what was discussed before and what information is relevant.",
        },
        {
          icon: <CogIcon />,
          title: "Action Execution",
          description:
            "Connect to backend systems to actually solve problems. Look up orders, update accounts, schedule appointments.",
        },
        {
          icon: <UserGroupIcon />,
          title: "Smart Escalation",
          description:
            "Recognize when human help is needed. Smooth handoff with full context to human agents.",
        },
      ],
    },
    features: {
      title: "Key Features",
      subtitle: "Enterprise-grade conversational capabilities",
      items: [
        {
          icon: <SparklesIcon />,
          title: "LLM-Powered Understanding",
          description:
            "Move beyond keyword matching to true language understanding. Handle the way real people actually communicate.",
        },
        {
          icon: <ChatIcon />,
          title: "Multi-Turn Conversations",
          description:
            "Manage complex, multi-step interactions naturally. Remember context and guide users to resolution.",
        },
        {
          icon: <CogIcon />,
          title: "Backend Integration",
          description:
            "Connect to your systems to take action: CRMs, order management, ticketing, scheduling. Resolution, not just responses.",
        },
        {
          icon: <PhoneIcon />,
          title: "Omnichannel Deployment",
          description:
            "Deploy across web, mobile, SMS, WhatsApp, Slack—wherever your users are. Consistent experience across channels.",
        },
        {
          icon: <UserGroupIcon />,
          title: "Smart Escalation",
          description:
            "Know when to bring in humans. Smooth handoff with conversation history and context for agents.",
        },
        {
          icon: <SparklesIcon />,
          title: "Voice Integration",
          description:
            "Extend to voice channels with speech recognition and synthesis. Same capabilities, voice interface.",
        },
      ],
    },
    metrics: [
      {
        value: "40-60%",
        label: "Deflection Rate",
        context: "resolved without human",
      },
      {
        value: "85%+",
        label: "User Satisfaction",
        context: "with AI interactions",
      },
      {
        value: "60%",
        label: "Cost Reduction",
        context: "vs. fully human support",
      },
      { value: "<5 sec", label: "Avg Response", context: "for most queries" },
    ],
    whyProcedure: {
      title: "Why Procedure for Conversational AI?",
      points: [
        "LLM expertise: We know how to harness LLMs for reliable conversations",
        "Integration focus: Chatbots are only useful if they connect to systems",
        "Safety-conscious: Guardrails and escalation paths for appropriate handling",
        "Production experience: We've built assistants handling thousands of conversations",
      ],
    },
    cta: {
      headline: "Build AI That Resolves Issues",
      description:
        "Talk to our conversational AI team. We'll show you how to deploy assistants that customers actually want to use.",
      primaryCTA: { text: "Book a Call", href: "/contact" },
      secondaryCTA: { text: "See Chatbot Demo", href: "/contact" },
    },
    faqs: [
      {
        question:
          "How is LLM-powered conversational AI different from traditional chatbots?",
        answer:
          "Traditional chatbots follow decision trees and keyword matching—they break when users deviate from expected inputs. LLM-powered systems understand natural language, handle variations, and generate contextual responses. The experience is dramatically more natural and effective.",
      },
      {
        question: "How do you prevent the AI from saying something wrong?",
        answer:
          "We implement multiple layers: system prompts that establish boundaries, output filtering for problematic content, guardrails that limit what the AI can claim or promise, and escalation triggers for sensitive topics. Plus comprehensive logging to catch and fix issues.",
      },
      {
        question: "Can conversational AI integrate with our existing systems?",
        answer:
          "Yes—that's essential for resolution. We build integrations with CRMs, ticketing systems, order management, and custom backends. The AI can look up information and take actions, not just provide canned responses.",
      },
      {
        question: "How long until we have a working chatbot?",
        answer:
          "A production-ready conversational AI typically takes 6-10 weeks, depending on integration complexity. We start with core capabilities and expand based on real conversation data.",
      },
    ],
    relatedIndustries: ["healthcare", "education", "saas"],
  },
];

// Helper functions
export function getAllUseCaseSlugs(): string[] {
  return useCasesData.map((useCase) => useCase.slug);
}

export function getUseCasePage(slug: string): UseCaseData | undefined {
  return useCasesData.find((useCase) => useCase.slug === slug);
}

export function getRelatedUseCases(currentSlug: string): UseCaseData[] {
  return useCasesData
    .filter((useCase) => useCase.slug !== currentSlug)
    .slice(0, 2);
}
