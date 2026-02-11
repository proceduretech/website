// =============================================================================
// Hero Section
// =============================================================================

export const heroData = {
  badge: ".NET Staff Augmentation",
  headline: "Hire Senior .NET Developers Without the Recruitment Overhead",
  headlineAccent: "",
  tagline: "",
  description:
    "Extend your development team with pre-vetted .NET experts who integrate with your existing workflows. Start in days, not months.",
  primaryCTA: {
    text: "Talk to Our Team",
    href: "/contact-us",
  },
  trustSignals: [
    "Senior engineers only",
    "5 days to start",
    "Flexible engagement terms",
  ],
};

// =============================================================================
// Problem Signals (Why Staff Augmentation)
// =============================================================================

export interface ProblemSignal {
  title: string;
  description: string;
  icon: string;
}

export const problemSignals: ProblemSignal[] = [
  {
    title: "Project-specific expertise",
    description:
      "You need .NET expertise for a specific project or initiative",
    icon: "cube",
  },
  {
    title: "Team capacity constraints",
    description:
      "Your team is stretched thin and deadlines are approaching",
    icon: "users",
  },
  {
    title: "Flexible headcount",
    description:
      "You want to add senior capacity without long-term headcount commitments",
    icon: "chart",
  },
  {
    title: "Modernization skills gap",
    description:
      "You are modernizing legacy .NET Framework applications and need specialized skills",
    icon: "cog",
  },
  {
    title: "Cloud-native expertise",
    description:
      "You require Azure or cloud-native .NET experience your team lacks",
    icon: "cloud",
  },
];

export const problemTitle =
  "Why Engineering Teams Choose .NET Staff Augmentation";

export const problemIntro =
  "Finding qualified .NET developers takes time. The average hiring cycle for a senior .NET engineer runs 4 to 6 months when you factor in sourcing, screening, interviewing, and onboarding. Meanwhile, your projects wait.";

export const problemBody =
  "Staff augmentation solves this by giving you access to production-ready talent without the recruitment overhead. You get senior .NET developers who already know ASP.NET Core, Entity Framework, and Azure, and they can contribute from week one.";

// =============================================================================
// What You Get (Service Features)
// =============================================================================

export interface ServiceFeature {
  title: string;
  description: string;
  items?: string[];
}

export const serviceFeatures: ServiceFeature[] = [
  {
    title: "Senior Engineers Only",
    description:
      "Every .NET developer in our team has shipped production applications. They have worked with enterprise codebases, handled complex integrations, and solved the kinds of problems that only come from years of real-world experience. No junior developers learning on your project.",
  },
  {
    title: "Full .NET Stack Coverage",
    description: "Our engineers work across the entire .NET ecosystem.",
    items: [
      "Backend: ASP.NET Core, .NET 8, Entity Framework Core, Dapper",
      "Frontend: Blazor, Razor Pages, integration with React and Angular",
      "Cloud: Azure App Service, Azure Functions, Azure SQL, Azure DevOps",
      "Desktop: WPF, WinForms, .NET MAUI for cross-platform",
      "Architecture: Microservices, REST APIs, gRPC, message queues",
    ],
  },
  {
    title: "Your Process, Your Tools",
    description:
      "Our developers adapt to your development workflow. Whether you use Azure DevOps, GitHub Actions, Jira, or another toolset, they integrate with your existing processes. No need to change how your team works.",
  },
];

export const serviceFeaturesTitle =
  "What Our .NET Staff Augmentation Includes";

// =============================================================================
// How It Works (for ProcessTimeline component)
// =============================================================================

export interface ApproachStep {
  number: number;
  title: string;
  description: string;
}

export const approachSteps: ApproachStep[] = [
  {
    number: 1,
    title: "Requirements Discussion",
    description:
      "We start with a focused conversation about your technical needs. What .NET skills does your project require? What is your team structure? What are your timelines? This typically takes 30 minutes.",
  },
  {
    number: 2,
    title: "Candidate Matching (1 to 2 days)",
    description:
      "Based on your requirements, we present senior .NET developers who match your needs. You receive detailed profiles covering their technical expertise, project history, and relevant experience.",
  },
  {
    number: 3,
    title: "Your Interview",
    description:
      "You interview candidates directly. Ask technical questions, discuss your architecture, assess communication style. The hiring decision stays with your team.",
  },
  {
    number: 4,
    title: "Onboarding (within 5 days)",
    description:
      "Once you select a developer, they start within 5 business days. We handle contracts, equipment, and administrative details. You focus on getting them productive.",
  },
  {
    number: 5,
    title: "Ongoing Support",
    description:
      "We stay involved throughout the engagement. Regular check-ins ensure the relationship is working. If project needs change, we help adjust scope or add capacity.",
  },
];

// =============================================================================
// Skills Table
// =============================================================================

export interface SkillEntry {
  technology: string;
  experienceLevel: string;
  typicalUseCases: string;
}

export const skillsTitle =
  ".NET Skills Available Through Staff Augmentation";

export const skillsTable: SkillEntry[] = [
  {
    technology: "ASP.NET Core",
    experienceLevel: "5+ years",
    typicalUseCases: "Web APIs, microservices, enterprise applications",
  },
  {
    technology: "C#",
    experienceLevel: "7+ years",
    typicalUseCases: "Backend development, business logic, integrations",
  },
  {
    technology: "Entity Framework Core",
    experienceLevel: "4+ years",
    typicalUseCases: "Data access, database migrations, query optimization",
  },
  {
    technology: "Azure",
    experienceLevel: "4+ years",
    typicalUseCases: "Cloud hosting, serverless functions, managed services",
  },
  {
    technology: "Blazor",
    experienceLevel: "2+ years",
    typicalUseCases: "Interactive web UIs with C# instead of JavaScript",
  },
  {
    technology: ".NET MAUI",
    experienceLevel: "2+ years",
    typicalUseCases: "Cross-platform mobile and desktop applications",
  },
];

export const specializedSkills: string[] = [
  "Legacy .NET Framework to .NET 8 migration",
  "WCF to gRPC or REST modernization",
  "Azure DevOps pipeline configuration",
  "Performance optimization and profiling",
  "Security implementation and code review",
];

// =============================================================================
// Use Cases
// =============================================================================

export interface UseCase {
  title: string;
  description: string;
}

export const useCasesTitle =
  "When Teams Bring In .NET Staff Augmentation";

export const useCases: UseCase[] = [
  {
    title: "Project Acceleration",
    description:
      "A fintech company needed to deliver a payment processing feature before a regulatory deadline. Their two .NET developers were already committed to maintenance work. We added two senior ASP.NET Core developers for four months. The feature shipped on time, and the augmented team handled ongoing iterations while the internal team caught up.",
  },
  {
    title: "Specialized Expertise",
    description:
      "An enterprise with a large .NET Framework codebase wanted to modernize to .NET 8 without disrupting operations. Their team knew the business logic but lacked migration experience. We provided two developers with specific experience in incremental modernization strategies. They worked alongside the internal team, transferring knowledge while executing the migration.",
  },
  {
    title: "Capacity During Growth",
    description:
      "A SaaS company secured new enterprise contracts that doubled their implementation workload. Rather than rush permanent hires, they augmented with three .NET developers for six months. This gave them time to make thoughtful hiring decisions while meeting customer commitments.",
  },
];

// =============================================================================
// Why Procedure (Value Props)
// =============================================================================

export interface ValueProp {
  title: string;
  description: string;
}

export const whyProcedureTitle =
  "Why Engineering Teams Choose Procedure for .NET Staff Augmentation";

export const whyProcedure: ValueProp[] = [
  {
    title: "Production Experience",
    description:
      "Our .NET developers come from building products, not just completing coursework. They have worked on payment systems, healthcare platforms, fintech applications, and enterprise integrations. When they join your team, they bring patterns and practices from real production environments.",
  },
  {
    title: "Certified Best Workplace Culture",
    description:
      "We have built a team culture that retains talent. Our engineers stay because they are engaged with interesting work and supported by colleagues who care about craft. When you augment with our team, you get professionals who are invested in their work, not contractors counting hours.",
  },
  {
    title: "Same Timezone Collaboration",
    description:
      "With teams in India and access to developers across timezones, we structure engagements for meaningful overlap with your working hours. Daily standups, real-time collaboration, and quick responses are standard, not exceptions.",
  },
  {
    title: "Flexible Terms",
    description:
      "Start with one developer and expand to a full team. Reduce capacity between major releases. Extend engagements as projects evolve. No rigid contracts that lock you into arrangements that no longer fit your needs.",
  },
];

// =============================================================================
// Engagement Models
// =============================================================================

export interface EngagementModel {
  title: string;
  description: string;
}

export const engagementModelsTitle =
  "Engagement Options for .NET Staff Augmentation";

export const engagementModels: EngagementModel[] = [
  {
    title: "Individual Developer",
    description:
      "Add a single senior .NET developer to your existing team. They participate in your standups, follow your processes, and report to your technical lead. Best for filling specific skill gaps or adding capacity to an established team.",
  },
  {
    title: "Pod Model",
    description:
      "Bring in a small, self-contained unit: typically a senior developer and a mid-level developer who work together. The senior developer provides technical leadership while both contribute to delivery. Best for projects that need more than one person but not a full team.",
  },
  {
    title: "Extended Team",
    description:
      "Augment with multiple developers across different seniority levels, potentially including QA and DevOps expertise. We can include a technical lead who coordinates the augmented team's work. Best for significant initiatives where you need substantial capacity.",
  },
];

// =============================================================================
// FAQs
// =============================================================================

export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "How quickly can .NET developers start?",
    answer:
      "Typically within 5 business days of your selection. We maintain a bench of available senior .NET developers specifically to enable fast starts. For specialized requirements, matching may take 1 to 2 weeks.",
  },
  {
    question: "What if the developer is not the right fit?",
    answer:
      "We offer a replacement guarantee. If the developer is not working out, let us know and we will provide a replacement at no additional cost. Our goal is a successful engagement, not a contractual standoff.",
  },
  {
    question: "How do you vet .NET developers?",
    answer:
      "Every developer goes through technical assessments covering C#, ASP.NET Core, and relevant frameworks. We evaluate code quality, problem-solving approach, and communication skills. Only developers who meet our standards join the team.",
  },
  {
    question: "Can I interview candidates before deciding?",
    answer:
      "Yes. You interview every candidate we present. We believe the hiring decision should rest with your team since you understand your codebase, culture, and project needs better than anyone.",
  },
  {
    question: "What are the typical rates for .NET staff augmentation?",
    answer:
      "Rates vary based on seniority, specific skills, and engagement duration. Contact us for a detailed quote based on your requirements. We provide transparent pricing with no hidden fees.",
  },
  {
    question: "Do developers work exclusively on my project?",
    answer:
      "Yes. Augmented developers are dedicated to your project for the duration of the engagement. They are not splitting attention across multiple clients.",
  },
  {
    question: "How does communication work with remote developers?",
    answer:
      "Developers integrate with your communication tools, whether that is Slack, Teams, or email. We structure engagements for timezone overlap so you have real-time collaboration during your working hours.",
  },
  {
    question: "Can staff augmentation help with .NET modernization projects?",
    answer:
      "Yes. Many of our .NET developers have specific experience migrating .NET Framework applications to .NET 8. They can work alongside your team to execute modernization while transferring knowledge.",
  },
];

// =============================================================================
// CTA Section
// =============================================================================

export const ctaData = {
  title: "Ready to Extend Your .NET Team?",
  description:
    "Tell us about your project requirements and we will present qualified .NET developers within 48 hours.",
  closingNote:
    "No commitment required. Start with a conversation about your needs.",
  buttonText: "Talk to Our Team",
  buttonLink: "/contact-us",
};

// =============================================================================
// Related Services
// =============================================================================

export interface RelatedService {
  title: string;
  description: string;
  href: string;
}

export const relatedServices: RelatedService[] = [
  {
    title: "Custom .NET Development",
    description:
      "Building new .NET applications from scratch? Our team delivers production-ready systems using .NET 8, Azure, and modern DevOps practices.",
    href: "/technologies/dotnet",
  },
  {
    title: ".NET Modernization",
    description:
      "Migrating legacy .NET Framework applications to .NET 8? We handle the complexity of incremental migration while keeping your systems running.",
    href: "/technologies/dotnet/modernization",
  },
  {
    title: "Cloud Architecture",
    description:
      "Need Azure infrastructure alongside your .NET team? We design and implement cloud architectures optimized for .NET workloads.",
    href: "/services/cloud",
  },
];
