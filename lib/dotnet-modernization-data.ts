// =============================================================================
// Hero Section
// =============================================================================

export const heroData = {
  badge: ".NET Modernization",
  headline: ".NET Migration Services",
  headlineAccent: "",
  tagline: "",
  description:
    "Migrate your legacy .NET Framework applications to modern .NET with confidence. We handle the complexity so you can focus on your business.",
  primaryCTA: {
    text: "Get Free Migration Assessment",
    href: "/contact-us",
  },
  secondaryCTA: {
    text: "No obligation \u00b7 2-week assessment \u00b7 Technical roadmap included",
    href: "",
  },
};

// =============================================================================
// Problem Signals
// =============================================================================

export interface ProblemSignal {
  title: string;
  description: string;
  icon: string;
}

export const problemSignals: ProblemSignal[] = [
  {
    title: "Security exposure",
    description:
      ".NET Framework 4.8 only receives critical security patches. Microsoft has explicitly stated no new features will be added. Every month without migration increases your attack surface.",
    icon: "shield",
  },
  {
    title: "Rising maintenance costs",
    description:
      "[Finding developers who want to work on legacy .NET is getting harder](/technologies/dotnet/staff-augmentation) (and more expensive). Your best engineers are leaving for teams that use modern stacks.",
    icon: "chart",
  },
  {
    title: "Deployment friction",
    description:
      "Windows-only hosting. No [containerization](/services/kubernetes). Manual deployments. Your competitors are shipping features while you're fighting infrastructure.",
    icon: "server",
  },
  {
    title: "Integration bottlenecks",
    description:
      "Modern APIs, cloud services, and AI capabilities assume you're on .NET 6+. Legacy frameworks create friction at every integration point.",
    icon: "workflow",
  },
  {
    title: "Performance ceiling",
    description:
      "Modern .NET delivers 20-40% better throughput than .NET Framework on identical hardware, according to Microsoft's TechEmpower benchmark results. That's real money on cloud hosting bills.",
    icon: "bolt",
  },
];

export const problemIntro =
  "Legacy .NET applications don't just slow down your developers. They slow down your entire business. Here's what we see in organizations still running .NET Framework 4.x";

// =============================================================================
// Migration Paths
// =============================================================================

export interface MigrationPath {
  from: string;
  to: string;
  complexity: "Low" | "Low-Medium" | "Medium" | "Medium-High" | "High";
  timeline: string;
  bestFor: string;
}

export const migrationPaths: MigrationPath[] = [
  {
    from: ".NET Framework 4.8",
    to: ".NET 8",
    complexity: "Medium",
    timeline: "3-6 months",
    bestFor: "Well-structured MVC apps",
  },
  {
    from: "ASP.NET Web Forms",
    to: "[Blazor or React](/services/frontend-development)",
    complexity: "High",
    timeline: "6-12 months",
    bestFor: "UI-heavy applications",
  },
  {
    from: "WCF Services",
    to: "[gRPC or REST APIs](/services/backend-development)",
    complexity: "Medium-High",
    timeline: "4-8 months",
    bestFor: "Service-oriented architectures",
  },
  {
    from: "Entity Framework 6",
    to: "EF Core 8",
    complexity: "Low-Medium",
    timeline: "2-4 months",
    bestFor: "Data access layer upgrades",
  },
  {
    from: ".NET Core 3.1",
    to: ".NET 8",
    complexity: "Low",
    timeline: "2-6 weeks",
    bestFor: "Already modernized apps",
  },
  {
    from: "Windows Services",
    to: "Worker Services + Containers",
    complexity: "Medium",
    timeline: "3-5 months",
    bestFor: "Background processing",
  },
  {
    from: ".NET 8",
    to: ".NET 10 (LTS)",
    complexity: "Low",
    timeline: "2-4 weeks",
    bestFor: "Teams already on modern .NET needing LTS upgrade",
  },
];

export const migrationPathsIntro =
  "Every legacy .NET application is different. We assess your codebase, dependencies, and business constraints to recommend the right approach, not the most expensive one.";

export const migrationPathsNote =
  "Timeline estimates assume a mid-sized application (50K-200K lines of code) with typical dependencies. Your assessment will include specific estimates for your codebase. Most enterprise migrations target .NET 8 as the first modern .NET milestone. From there, upgrading to .NET 10 is a smaller, lower-risk step. We recommend this two-stage approach for teams still on .NET Framework.";

// =============================================================================
// Approach Steps (for ProcessTimeline component)
// =============================================================================

export interface ApproachStep {
  number: number;
  title: string;
  description: string;
}

export const approachSteps: ApproachStep[] = [
  {
    number: 1,
    title: "Discovery & Assessment (2 weeks)",
    description:
      "Procedure's discovery phase runs 2 weeks and costs between $5,000 and $15,000, depending on codebase size. We analyze your codebase, map dependencies, and identify migration blockers using tools like Microsoft's .NET Upgrade Assistant alongside manual review. You get a detailed report covering risk assessment, recommended strategy, and realistic timeline - before you commit any further budget.",
  },
  {
    number: 2,
    title: "Proof of Concept (2-4 weeks)",
    description:
      "Before committing to full migration, we migrate a representative module to validate our approach. This catches surprises early and gives your team confidence to proceed.",
  },
  {
    number: 3,
    title: "Incremental Migration (varies)",
    description:
      "Procedure's engineering team follows the Strangler Fig pattern, migrating module by module while keeping your application running. No big-bang deployments. No extended downtime. Zero disruption.",
  },
  {
    number: 4,
    title: "Validation & Testing (ongoing)",
    description:
      "Automated regression testing ensures every migrated component behaves exactly like its legacy counterpart. We don't call it done until your full test suite passes clean.",
  },
  {
    number: 5,
    title: "Knowledge Transfer & Handoff",
    description:
      "Your team gets documentation, architecture decision records, and hands-on training from Procedure's engineers in Mumbai and San Francisco. We build for self-sufficiency, not dependency. You own the modernized stack completely.",
  },
];

// =============================================================================
// Technical Capabilities
// =============================================================================

export interface CapabilityGroup {
  title: string;
  items: string[];
}

export const technicalCapabilities: CapabilityGroup[] = [
  {
    title: "Legacy Framework Migrations",
    items: [
      ".NET Framework 4.x \u2192 .NET 8",
      "ASP.NET MVC \u2192 ASP.NET Core MVC",
      "ASP.NET Web API \u2192 ASP.NET Core Web API",
      "ASP.NET Web Forms \u2192 Blazor Server/WASM or modern SPA",
    ],
  },
  {
    title: "Service Layer Modernization",
    items: [
      "WCF \u2192 gRPC (for internal services)",
      "WCF \u2192 REST APIs (for external integrations)",
      "ASMX Web Services \u2192 Modern REST/GraphQL",
      "Windows Services \u2192 Worker Services with hosting in containers",
    ],
  },
  {
    title: "Data Layer Upgrades",
    items: [
      "Entity Framework 6 \u2192 Entity Framework Core 8",
      "ADO.NET \u2192 Dapper or EF Core (depending on use case)",
      "Stored procedure-heavy \u2192 Code-first with migrations",
      "SQL Server optimization for .NET 8 compatibility",
    ],
  },
  {
    title: "Infrastructure Modernization",
    items: [
      "IIS-only \u2192 Kestrel with container support",
      "Windows Server \u2192 Linux containers (where appropriate)",
      "On-premises \u2192 [Azure App Services, AKS, or AWS ECS](/services/cloud)",
      "Manual deployments \u2192 [CI/CD with GitHub Actions or Azure DevOps](/technologies/dotnet)",
    ],
  },
];

// =============================================================================
// Risk Mitigation
// =============================================================================

export interface RiskScenario {
  title: string;
  description: string;
  icon: string;
}

export const riskScenarios: RiskScenario[] = [
  {
    title: "\u201CThe migration broke production\u201D",
    description:
      "Procedure never does big-bang migrations. We use the Strangler Fig pattern to migrate module by module with zero planned downtime - your application stays live throughout the entire process. If something goes wrong, we roll back one module, not your entire system.",
    icon: "shield",
  },
  {
    title: "\u201CIt took 3x longer than estimated\u201D",
    description:
      "Procedure's discovery phase identifies blockers before you commit budget. We've walked away from projects where the migration cost exceeded the business value. Honesty upfront saves everyone time.",
    icon: "chart",
  },
  {
    title: "\u201COur team can't maintain the new code\u201D",
    description:
      "Procedure involves your developers from day one. Pair programming, code reviews, and documentation ensure knowledge transfer happens throughout the project, not as an afterthought.",
    icon: "users",
  },
  {
    title: "\u201CDependencies weren't compatible\u201D",
    description:
      "We run automated compatibility analysis using Microsoft's .NET Upgrade Assistant and API Portability Analyzer against your full dependency tree. Third-party libraries without modern .NET support get flagged early, with alternatives recommended.",
    icon: "puzzle",
  },
  {
    title: "\u201CPerformance got worse after migration\u201D",
    description:
      "We benchmark before and after. .NET 8 should be faster. If it's not, we investigate and fix root causes before handoff.",
    icon: "bolt",
  },
];

export const riskIntro =
  ".NET modernization projects fail for predictable reasons. We've seen them all, and we've built processes to prevent each one.";

// =============================================================================
// FAQs
// =============================================================================

export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "How much does .NET modernization cost?",
    answer:
      ".NET modernization costs at Procedure range from $15,000 for simple version upgrades to $500,000+ for complex legacy rewrites, with most enterprise projects falling in the $50,000 to $150,000 range. Here's the breakdown: Simple migrations (.NET Core 3.1 \u2192 .NET 8/10): $15,000 - $40,000. Medium complexity (.NET Framework 4.8 \u2192 modern .NET): $50,000 - $150,000. Complex modernization (Web Forms/WCF \u2192 modern stack): $150,000 - $500,000+. Our discovery phase (2 weeks, $5,000 - $15,000) gives you accurate, codebase-specific estimates before committing to full migration.",
  },
  {
    question: "How long does a .NET migration take?",
    answer:
      "Typical timelines based on application complexity: Small applications (<50K LOC): 2-3 months. Medium applications (50K-200K LOC): 4-8 months. Large applications (200K+ LOC): 8-18 months. These assume incremental migration. A \"lift and shift\" to identical functionality is faster; adding architectural improvements takes longer.",
  },
  {
    question: "Is .NET Framework still supported?",
    answer:
      ".NET Framework 4.8 is supported as part of Windows, meaning it receives security patches. However, Microsoft has stated no new features will be added. .NET Framework 4.5.2, 4.6, and 4.6.1 reached end-of-life in April 2022. If you're on those versions, migration is urgent.",
  },
  {
    question: "Should we migrate WCF to gRPC or REST?",
    answer:
      "It depends on your use case. gRPC is best for internal service-to-service communication because it offers streaming, lower latency, and efficient binary serialization (requires HTTP/2). REST APIs are best for external integrations, browser clients, or when you need maximum compatibility since they're easier to test and debug. CoreWCF is an option if you need to maintain SOAP compatibility for legacy clients during a transitional period. We typically recommend gRPC for new internal services and REST for external APIs.",
  },
  {
    question: "Can we migrate incrementally without downtime?",
    answer:
      "Yes. We use the Strangler Fig pattern to migrate module by module. Your application stays running throughout the migration. Each module is validated independently before traffic is switched.",
  },
  {
    question: "Should we rewrite our .NET application or migrate incrementally?",
    answer:
      "In nearly every case, we recommend incremental migration over a full rewrite. Rewrites sound clean, but they're where .NET modernization projects go off the rails - scope creep, lost business logic, and timelines that double or triple. The Strangler Fig pattern lets you migrate one module at a time while keeping your application running in production. You get measurable progress every sprint, and you can pause or adjust priorities without losing work. The exception: if your application is under 20,000 lines of code and has good test coverage, a clean rewrite to modern .NET can sometimes be faster. Procedure's discovery phase will assess your specific situation and recommend the right approach with clear reasoning.",
  },
  {
    question: "What happens to our existing tests?",
    answer:
      "We migrate your test suites alongside your code. Unit tests are adapted to the new framework. Integration tests are updated to work with new hosting models. We also add regression tests to verify behavioral parity between old and new implementations.",
  },
  {
    question: "Should we migrate to .NET 8, 9, or 10?",
    answer:
      "For most enterprise migrations from .NET Framework, we recommend targeting .NET 8 (LTS) as your first milestone. .NET 8 has long-term support through November 2026, a mature ecosystem, and the widest library compatibility. Once you're on .NET 8, upgrading to .NET 10 (LTS, released November 2025, supported through November 2028) is a much smaller step - typically 2-4 weeks for a mid-sized application. We don't recommend targeting .NET 9 for production workloads since it's a Standard Term Support release and will lose support before .NET 10. The exception: if your migration timeline extends past mid-2026, we may recommend going directly to .NET 10 to avoid an intermediate upgrade.",
  },
];

// =============================================================================
// CTA Section
// =============================================================================

export const ctaData = {
  title: "Start with a Free Assessment",
  description:
    "Not sure where to begin? Our team will assess your architecture and provide honest feedback on migration strategy, realistic timeline, potential blockers, and budget range before you commit.",
  closingNote: "No sales pressure. If migration isn't right for you, we'll tell you.",
  buttonText: "Schedule Your Assessment",
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
    title: ".NET Staff Augmentation",
    description:
      "Need .NET developers to supplement your team? We provide senior engineers who integrate with your processes and hit the ground running.",
    href: "/technologies/dotnet/staff-augmentation",
  },
  {
    title: "Cloud Architecture",
    description:
      "Migrating to Azure alongside your .NET modernization? We design and implement cloud architectures optimized for .NET workloads.",
    href: "/services/cloud",
  },
];
