// Shared case studies data used across the site

export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudy {
  id: string;
  industry: string;
  serviceType: "AI Engineering" | "Product Engineering";
  title: string;
  description: string;
  metrics: CaseStudyMetric[];
  tags: string[];
  image: string;
  featured?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "fintech-fraud-detection",
    industry: "Financial Services",
    serviceType: "AI Engineering",
    title: "Real-Time Fraud Detection That Saved $47M in Year One",
    description:
      "A Fortune 500 bank needed to replace their rules-based fraud system that was missing sophisticated attacks while flagging legitimate transactions. We deployed a multi-model AI ensemble that analyzes transactions in under 50ms, catching fraud patterns their legacy system never could.",
    metrics: [
      { value: "94%", label: "Fraud detection rate" },
      { value: "67%", label: "Fewer false positives" },
      { value: "$47M", label: "Prevented losses" },
    ],
    tags: ["PyTorch", "Kafka", "AWS SageMaker", "Real-time ML"],
    image: "/case-studies/fintech.jpg",
    featured: true,
  },
  {
    id: "healthcare-clinical-ai",
    industry: "Healthcare",
    serviceType: "AI Engineering",
    title: "Clinical Documentation AI That Gives Physicians 2 Hours Back Daily",
    description:
      "Physicians at a 12-hospital network were spending 40% of their time on documentation instead of patient care. We built a HIPAA-compliant AI assistant that listens to patient encounters and generates structured clinical notes, reducing documentation time by 75%.",
    metrics: [
      { value: "2hrs", label: "Saved per physician daily" },
      { value: "98.7%", label: "Clinical accuracy" },
      { value: "4.8/5", label: "Physician satisfaction" },
    ],
    tags: ["LLMs", "Speech-to-Text", "HIPAA", "Azure"],
    image: "/case-studies/healthcare.jpg",
    featured: true,
  },
  {
    id: "ecommerce-personalization",
    industry: "E-Commerce",
    serviceType: "AI Engineering",
    title: "AI-Powered Search That Increased Revenue by $180M Annually",
    description:
      "A leading online retailer struggled with search relevance—customers were abandoning searches and leaving the site. We rebuilt their search infrastructure with semantic understanding and real-time personalization, transforming their highest-traffic feature into their highest-converting one.",
    metrics: [
      { value: "34%", label: "Higher conversion rate" },
      { value: "$180M", label: "Additional annual revenue" },
      { value: "2.3x", label: "Search-to-purchase rate" },
    ],
    tags: [
      "Vector Search",
      "Elasticsearch",
      "Python",
      "Recommendation Systems",
    ],
    image: "/case-studies/ecommerce.jpg",
    featured: true,
  },
  {
    id: "saas-ai-copilot",
    industry: "SaaS",
    serviceType: "Product Engineering",
    title: "AI Copilot Feature That Became Their Fastest-Growing Product Line",
    description:
      "A B2B software company wanted to add AI capabilities but lacked the expertise to build production-grade features. We embedded with their product team to ship an AI copilot that now accounts for 40% of new customer acquisition and commands premium pricing.",
    metrics: [
      { value: "40%", label: "New customer attribution" },
      { value: "28%", label: "Price premium vs. competitors" },
      { value: "12wks", label: "Time to market" },
    ],
    tags: ["React", "Node.js", "OpenAI", "PostgreSQL"],
    image: "/case-studies/saas.jpg",
  },
  {
    id: "manufacturing-predictive",
    industry: "Manufacturing",
    serviceType: "AI Engineering",
    title: "Predictive Maintenance AI That Cut Downtime by 73%",
    description:
      "Unplanned equipment failures were costing this manufacturer $2M per incident in lost production. We deployed IoT sensors and built ML models that predict failures 72 hours in advance, enabling scheduled maintenance that keeps production lines running.",
    metrics: [
      { value: "73%", label: "Reduction in unplanned downtime" },
      { value: "72hrs", label: "Advance failure prediction" },
      { value: "$12M", label: "Annual savings" },
    ],
    tags: ["IoT", "Time Series ML", "Edge Computing", "Python"],
    image: "/case-studies/manufacturing.jpg",
  },
  {
    id: "tech-platform-rebuild",
    industry: "Technology",
    serviceType: "Product Engineering",
    title: "Platform Modernization That Enabled 10x Scale",
    description:
      "A fast-growing tech company hit a wall—their monolithic architecture could not handle increasing load and slowed development to a crawl. Our engineers led a strategic microservices transformation that unlocked both technical scalability and team velocity.",
    metrics: [
      { value: "10x", label: "Traffic capacity increase" },
      { value: "3x", label: "Faster deployment cycles" },
      { value: "99.99%", label: "Uptime achieved" },
    ],
    tags: ["Kubernetes", "Go", "gRPC", "Terraform"],
    image: "/case-studies/technology.jpg",
  },
];

// Featured case studies for homepage (filtered by featured flag)
export const featuredCaseStudies = caseStudies.filter(
  (study) => study.featured,
);

// Service type filter options
export const serviceFilters = ["All", "AI Engineering", "Product Engineering"];

// Industry filter options
export const industryFilters = [
  "All",
  "Financial Services",
  "Healthcare",
  "E-Commerce",
  "SaaS",
  "Manufacturing",
  "Technology",
];
