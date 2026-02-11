import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Contact Procedure | Start Your AI Project Today",
  description:
    "Get senior AI engineers embedded with your team in 2-5 days. Schedule a strategy call with our AI engineering leads. Enterprise-ready, NDA available.",
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    title: "Contact Procedure | Start Your AI Project Today",
    description:
      "Get senior AI engineers embedded with your team in 2-5 days. Schedule a strategy call with our AI engineering leads. Enterprise-ready, NDA available.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Procedure | Start Your AI Project Today",
    description:
      "Connect with Procedure's AI engineering team. Senior engineers, enterprise-ready. Schedule a strategy call and start building production AI systems.",
    site: "@procedurehq",
    creator: "@procedurehq",
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://procedure.tech/contact-us/#contactpage",
  url: "https://procedure.tech/contact-us",
  name: "Contact Procedure",
  description:
    "Contact the Procedure team for AI, product engineering, and development consulting.",
  publisher: {
    "@id": "https://procedure.tech/#organization",
  },
};

const contactFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What happens on the strategy call?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The strategy call is a focused 30-minute conversation with a senior AI engineer—not a sales rep. We'll discuss your technical requirements, existing infrastructure, and goals. You'll leave with a clear understanding of potential approaches, realistic timelines, and whether Procedure is the right fit for your project.",
      },
    },
    {
      "@type": "Question",
      name: "How do you determine pricing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pricing depends on engagement model and scope. AI Sprints start at $15K for rapid prototypes. Forward-deployed teams begin at $50K/month for embedded senior engineers. We provide detailed estimates during the strategy call based on your specific technical requirements, timeline, and compliance needs.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work under NDA before the first call?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Enterprise clients often require NDAs before technical discussions. We can sign your standard NDA or provide ours before the strategy call. Just mention this when booking, and we'll handle the paperwork first.",
      },
    },
    {
      "@type": "Question",
      name: "What if we're not sure what we need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "That's exactly what the strategy call is for. Bring your business problem, and our senior engineers will help you identify the right AI approach—whether that's LLM integration, custom models, or AI agents. We'll outline realistic options and timelines based on what you're trying to achieve.",
      },
    },
  ],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Preconnect to Cal.com for faster calendar widget loading */}
      <link rel="preconnect" href="https://app.cal.com" />
      <link rel="dns-prefetch" href="https://app.cal.com" />
      <Script
        id="contact-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageSchema),
        }}
      />
      <Script
        id="contact-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactFAQSchema),
        }}
      />
      {children}
    </>
  );
}
