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
      "Get senior AI engineers embedded with your team in 2-5 days. Schedule a strategy call with our AI engineering leads. Enterprise-ready, NDA available.",
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
        text: "Pricing depends on engagement model, team composition, and project scope. AI Sprints typically range from $15K-$50K for 3-5 day engagements. Forward-deployed teams and full product builds are scoped based on duration and complexity. We provide transparent proposals with no hidden fees.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work under NDA before the first call?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We understand enterprise confidentiality requirements. Request an NDA in your message and we'll have one in your inbox within 24 hours. Many of our clients in financial services, healthcare, and defense require NDAs before any technical discussions.",
      },
    },
    {
      "@type": "Question",
      name: "What if we're not sure what we need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "That's precisely what the strategy call is for. Many clients come to us with a business problem rather than a technical specification. Our engineers help translate business objectives into concrete AI implementation plans. If you're exploring whether AI is right for a particular use case, we can advise on feasibility before any commitment.",
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
