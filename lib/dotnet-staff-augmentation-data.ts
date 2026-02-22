// =============================================================================
// Hero Section
// =============================================================================

export const heroData = {
  badge: ".NET Staff Augmentation",
  headline: "Hire Senior .NET Developers",
  headlineAccent: "Without the Recruitment Overhead",
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
      "You are modernizing [legacy .NET Framework](/technologies/dotnet/modernization) applications and need specialized skills",
    icon: "cog",
  },
  {
    title: "Cloud-native expertise",
    description:
      "You require [Azure or cloud-native](/services/cloud) .NET experience your team lacks",
    icon: "cloud",
  },
];

export const problemTitle =
  "When Does .NET Staff Augmentation Make Sense?";

export const problemIntro =
  "Hiring a senior .NET engineer takes 4 to 6 months. Procedure's staff augmentation gives you production-ready .NET talent who contribute from week one.";

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
      "Every .NET developer in our team has a minimum of 5 years of production experience, shipping real applications for enterprise clients. They have worked with large-scale codebases, handled complex integrations, and solved the kinds of problems that only come with years in production environments. No junior developers learning on your project.",
  },
  {
    title: "Full .NET Stack Coverage",
    description: "Our engineers work across the entire .NET ecosystem.",
    items: [
      "Backend: [ASP.NET Core](/technologies/dotnet/), .NET 8, Entity Framework Core, Dapper",
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
  "What You Get with .NET Staff Augmentation";

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
      "Based on your requirements, we present senior .NET developers from Procedure's engineering team who match your needs. You receive detailed profiles covering their technical expertise, project history, and relevant experience.",
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
  "Senior .NET Developer Skills & Experience Levels";

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
  category: string;
  highlight: string;
  icon: string;
}

export const useCasesTitle =
  "When Teams Bring In .NET Staff Augmentation";

export const useCases: UseCase[] = [
  {
    title: "Project Acceleration",
    description:
      "A fintech company needed to deliver a payment processing feature before a regulatory deadline. Their two .NET developers were already committed to maintenance work. We added two senior ASP.NET Core developers for four months. The feature shipped on time, and the augmented team handled ongoing iterations while the internal team caught up.",
    category: "Fintech",
    highlight: "Feature shipped before regulatory deadline",
    icon: "bolt",
  },
  {
    title: "Specialized Expertise",
    description:
      "An enterprise with a large .NET Framework codebase wanted to [modernize to .NET 8](/technologies/dotnet/modernization) without disrupting operations. Their team knew the business logic but lacked migration experience. We provided two developers with specific experience in incremental modernization strategies. They worked alongside the internal team, transferring knowledge while executing the migration.",
    category: "Enterprise",
    highlight: "Incremental migration without disruption",
    icon: "cog",
  },
  {
    title: "Capacity During Growth",
    description:
      "A SaaS company secured new enterprise contracts that doubled their implementation workload. Rather than rush permanent hires, they augmented with three .NET developers for six months. This gave them time to make thoughtful hiring decisions while meeting customer commitments.",
    category: "SaaS",
    highlight: "Doubled implementation capacity in one week",
    icon: "chart",
  },
];

// =============================================================================
// Why Procedure (Value Props)
// =============================================================================

export interface ValueProp {
  title: string;
  description: string;
  icon: string;
}

export const whyProcedureTitle =
  "Why Engineering Teams Choose Procedure for .NET Staff Augmentation";

export const whyProcedure: ValueProp[] = [
  {
    title: "Production Experience",
    description:
      "Procedure's .NET developers come from building products, not just completing coursework. They have worked on [payment systems](/industries/financial-services), healthcare platforms, [fintech applications](/industries/financial-services), and enterprise integrations. When they join your team, they bring patterns and practices from real production environments.",
    icon: "code",
  },
  {
    title: "Certified Best Workplace Culture",
    description:
      "We have built a team culture that retains talent. Our engineers stay because they are engaged with interesting work and supported by colleagues who care about craft. When you augment with our team, you get professionals who are invested in their work, not contractors counting hours.",
    icon: "shield",
  },
  {
    title: "Same Timezone Collaboration",
    description:
      "With engineering teams in Mumbai and San Francisco and access to developers across timezones, we structure engagements for meaningful overlap with your working hours. Daily standups, real-time collaboration, and quick responses are standard, not exceptions.",
    icon: "globe",
  },
  {
    title: "Flexible Terms",
    description:
      "Start with one developer and expand to a full team. Reduce capacity between major releases. Extend engagements as projects evolve. No rigid contracts that lock you into arrangements that no longer fit your needs.",
    icon: "puzzle",
  },
];

// =============================================================================
// Engagement Models
// =============================================================================

export interface EngagementModel {
  title: string;
  description: string;
  teamSize: string;
  bestFor: string;
  typicalDuration?: string;
}

export const engagementModelsTitle =
  "Engagement Options for .NET Staff Augmentation";

export const engagementModels: EngagementModel[] = [
  {
    title: "Individual Developer",
    description:
      "Add a single senior .NET developer to your existing team. They participate in your standups, follow your processes, and report to your technical lead. Best for filling specific skill gaps or adding capacity to an established team.",
    teamSize: "1",
    bestFor: "Skill gaps & capacity boost",
    typicalDuration: "Typical duration: 3-6 months",
  },
  {
    title: "Pod Model",
    description:
      "Bring in a small, self-contained unit: typically a senior developer and a mid-level developer who work together. The senior developer provides technical leadership while both contribute to delivery. Best for projects that need more than one person but not a full team.",
    teamSize: "2",
    bestFor: "Focused project delivery",
    typicalDuration: "Typical duration: 4-12 months",
  },
  {
    title: "Extended Team",
    description:
      "Augment with multiple developers across different seniority levels, potentially including QA and DevOps expertise. We can include a technical lead who coordinates the augmented team's work. Best for significant initiatives where you need substantial capacity.",
    teamSize: "3+",
    bestFor: "Large-scale initiatives",
    typicalDuration: "Typical duration: 6-18 months",
  },
];

// =============================================================================
// Comparison Table (Staff Augmentation vs Full-Time Hiring)
// =============================================================================

export interface ComparisonRow {
  factor: string;
  fullTimeHire: string;
  staffAug: string;
}

export const comparisonTitle =
  "Staff Augmentation vs Full-Time Hiring: What Makes Sense?";

export const comparisonRows: ComparisonRow[] = [
  {
    factor: "Time to start",
    fullTimeHire: "4-6 months (recruiting + onboarding)",
    staffAug: "5 business days",
  },
  {
    factor: "Annual cost (senior)",
    fullTimeHire: "$150K-$200K+ (total comp)",
    staffAug: "Flexible - pay only for what you use",
  },
  {
    factor: "Commitment",
    fullTimeHire: "Long-term headcount",
    staffAug: "Month-to-month after initial period",
  },
  {
    factor: "Scaling",
    fullTimeHire: "New hire per person needed",
    staffAug: "Add or reduce capacity in days",
  },
  {
    factor: "Risk if project changes",
    fullTimeHire: "Layoff or redeployment",
    staffAug: "Adjust engagement scope",
  },
  {
    factor: "Best for",
    fullTimeHire: "Core team, long-term product roles",
    staffAug: "Project-specific needs, capacity bursts, specialized skills",
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
      "Procedure's .NET developers can start within 5 business days of your selection. We maintain a bench of senior .NET developers from our Mumbai and San Francisco offices specifically to enable fast starts. For specialized requirements like legacy migration expertise, matching may take 1 to 2 weeks.",
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
      ".NET staff augmentation rates at Procedure range from $30 to $65 per hour depending on seniority level, engagement model, and duration. Individual senior .NET developers typically fall in the $40 to $60/hour range for engagements of 3 months or longer. Pod model and extended team engagements are priced per team rather than per developer, and longer commitments come with better rates. We provide a detailed cost breakdown after the initial requirements discussion - no hidden fees or surprise markups. [Talk to our team](/contact-us) for a quote tailored to your project.",
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
  {
    question:
      "What is the difference between .NET staff augmentation and outsourcing?",
    answer:
      "Staff augmentation and outsourcing solve different problems. With .NET staff augmentation, Procedure's developers join your existing team - they attend your standups, use your tools, and report to your technical lead. You retain full control over architecture decisions, code reviews, and priorities. With outsourcing, you hand off an entire project or workstream to an external team that manages itself. Staff augmentation is the better fit when you have a strong engineering culture and need to add specific skills or capacity without giving up control. Outsourcing works when you want to delegate a self-contained deliverable and don't want to manage the team directly. Most of our .NET clients choose staff augmentation because their CTOs want to maintain code quality standards and architectural consistency across the codebase.",
  },
  {
    question:
      "Can I hire a .NET developer for a short-term project (under 3 months)?",
    answer:
      "Yes. While our most common .NET staff augmentation engagements run 3 to 12 months, we regularly support shorter projects - particularly for deadline-driven deliverables, migration sprints, or proof-of-concept work. For engagements under 3 months, we recommend the individual developer model where one senior .NET developer integrates with your team for a focused initiative. The minimum engagement is typically 4 weeks. Short-term engagements follow the same process: requirements discussion, candidate matching within 48 hours, and onboarding within 5 business days.",
  },
  {
    question:
      "How long do .NET staff augmentation engagements typically last?",
    answer:
      "Most .NET staff augmentation engagements at Procedure run between 3 and 12 months, though we support everything from 4-week sprints to multi-year partnerships. The most common pattern: a client starts with one senior developer for 3 months, then extends or expands as the working relationship proves out. There are no long-term lock-ins - engagements renew monthly after an initial commitment period. About 70% of our staff augmentation clients extend beyond their original timeline.",
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
