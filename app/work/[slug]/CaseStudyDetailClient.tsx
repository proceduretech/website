"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CalButton } from "@/components/CalButton";
import { CaseStudyCard } from "@/components/ui";
import type { CaseStudyDetail, CaseStudyContent } from "@/lib/notion-case-studies";
import type { CaseStudy } from "@/lib/case-studies-data";

// Client name to logo mapping - add new clients here
const clientLogos: Record<string, string> = {
  "Setu": "/logos/client/setu.svg",
  "Pine Labs": "/logos/client/pinelabs.svg",
  "KredX": "/logos/client/kredx.svg",
  "ESPN": "/logos/client/espn.svg",
  "Treebo": "/logos/client/treebo.svg",
  "Turtlemint": "/logos/client/turtlemint.svg",
  "Timely": "/logos/client/timely.svg",
  "Tenmeya": "/logos/client/tenmeya.svg",
  "Last9": "/logos/client/last9.svg",
  "Aster": "/logos/client/aster.svg",
  "Workshop Ventures": "/logos/client/workshopventure.svg",
  "MCLabs": "/logos/client/mclabs.svg", // Add logo file when available
};

/**
 * Get client logo path if available
 */
function getClientLogo(clientName: string): string | null {
  // Try exact match first
  if (clientLogos[clientName]) {
    return clientLogos[clientName];
  }
  // Try case-insensitive match
  const lowerName = clientName.toLowerCase();
  for (const [key, value] of Object.entries(clientLogos)) {
    if (key.toLowerCase() === lowerName) {
      return value;
    }
  }
  return null;
}

interface CaseStudyDetailClientProps {
  caseStudy: CaseStudyDetail;
  relatedCaseStudies: CaseStudy[];
}

/**
 * Render a content block from Notion
 */
function ContentBlock({ block }: { block: CaseStudyContent }) {
  switch (block.type) {
    case "paragraph":
      if (!block.text) return null;
      return (
        <p className="text-text-secondary leading-relaxed mb-4">{block.text}</p>
      );
    case "heading_1":
      return (
        <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-8 mb-4">
          {block.text}
        </h2>
      );
    case "heading_2":
      return (
        <h3 className="text-xl sm:text-2xl font-bold text-text-primary mt-6 mb-3">
          {block.text}
        </h3>
      );
    case "heading_3":
      return (
        <h4 className="text-lg font-bold text-text-primary mt-4 mb-2">
          {block.text}
        </h4>
      );
    case "bulleted_list_item":
      return (
        <li className="text-text-secondary ml-4 mb-2 list-disc">{block.text}</li>
      );
    case "numbered_list_item":
      return (
        <li className="text-text-secondary ml-4 mb-2 list-decimal">
          {block.text}
        </li>
      );
    case "quote":
      return (
        <blockquote className="border-l-4 border-accent pl-4 py-2 my-4 text-text-secondary italic">
          {block.text}
        </blockquote>
      );
    case "callout":
      return (
        <div className="bg-surface-elevated border border-border rounded-xl p-4 my-4">
          <p className="text-text-secondary">{block.text}</p>
        </div>
      );
    case "code":
      return (
        <pre className="bg-surface-elevated border border-border rounded-xl p-4 my-4 overflow-x-auto">
          <code className="text-sm text-text-secondary font-mono">
            {block.text}
          </code>
        </pre>
      );
    case "image":
      if (!block.url) return null;
      return (
        <div className="relative w-full aspect-video rounded-xl overflow-hidden my-6">
          <Image
            src={block.url}
            alt="Case study image"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
      );
    case "divider":
      return <hr className="border-border my-8" />;
    case "table":
      if (!block.tableData || block.tableData.rows.length === 0) return null;
      return (
        <div className="my-6 overflow-x-auto">
          <table className="w-full border-collapse">
            <tbody>
              {block.tableData.rows.map((row, rowIdx) => {
                const isHeader = block.tableData!.hasColumnHeader && rowIdx === 0;
                return (
                  <tr
                    key={rowIdx}
                    className={isHeader ? "bg-surface-elevated" : rowIdx % 2 === 0 ? "bg-surface/50" : ""}
                  >
                    {row.map((cell, cellIdx) => {
                      const isRowHeader = block.tableData!.hasRowHeader && cellIdx === 0;
                      const CellTag = isHeader || isRowHeader ? "th" : "td";
                      return (
                        <CellTag
                          key={cellIdx}
                          className={`border border-border px-4 py-3 text-left ${
                            isHeader || isRowHeader
                              ? "font-semibold text-text-primary"
                              : "text-text-secondary"
                          }`}
                        >
                          {cell}
                        </CellTag>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    default:
      return null;
  }
}

/**
 * Group consecutive list items into proper list structures
 * This ensures bullet points are wrapped in <ul> and numbered items in <ol>
 */
function groupListItems(blocks: CaseStudyContent[]): (CaseStudyContent | { type: "list"; listType: "bullet" | "number"; items: CaseStudyContent[] })[] {
  const result: (CaseStudyContent | { type: "list"; listType: "bullet" | "number"; items: CaseStudyContent[] })[] = [];
  let currentList: { type: "list"; listType: "bullet" | "number"; items: CaseStudyContent[] } | null = null;

  for (const block of blocks) {
    if (block.type === "bulleted_list_item") {
      if (currentList && currentList.listType === "bullet") {
        currentList.items.push(block);
      } else {
        if (currentList) result.push(currentList);
        currentList = { type: "list", listType: "bullet", items: [block] };
      }
    } else if (block.type === "numbered_list_item") {
      if (currentList && currentList.listType === "number") {
        currentList.items.push(block);
      } else {
        if (currentList) result.push(currentList);
        currentList = { type: "list", listType: "number", items: [block] };
      }
    } else {
      if (currentList) {
        result.push(currentList);
        currentList = null;
      }
      result.push(block);
    }
  }

  if (currentList) result.push(currentList);
  return result;
}

export function CaseStudyDetailClient({
  caseStudy,
  relatedCaseStudies,
}: CaseStudyDetailClientProps) {
  // Filter out heading_1 blocks that match the case study title to avoid repetition
  const filteredContent = caseStudy.content.filter((block) => {
    if (block.type === "heading_1" && block.text) {
      // Skip if heading matches the title (case-insensitive)
      const normalizedHeading = block.text.toLowerCase().trim();
      const normalizedTitle = caseStudy.title.toLowerCase().trim();
      if (normalizedHeading === normalizedTitle || normalizedHeading.includes(normalizedTitle) || normalizedTitle.includes(normalizedHeading)) {
        return false;
      }
    }
    return true;
  });

  // Group consecutive list items into proper lists
  const groupedContent = groupListItems(filteredContent);

  return (
    <main className="relative min-h-screen bg-base overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 sm:pb-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-surface via-base to-base" />
          <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-accent/6 rounded-full blur-[100px]" />
          <div className="absolute top-40 left-1/4 w-[400px] h-[400px] bg-accent-secondary/5 rounded-full blur-[80px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-sm text-text-muted mb-6"
          >
            <Link
              href="/work"
              className="hover:text-accent-light transition-colors"
            >
              Case Studies
            </Link>
            <span>/</span>
            <span className="text-text-secondary truncate">
              {caseStudy.title}
            </span>
          </motion.nav>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-wrap gap-2 mb-4"
          >
            <span className="inline-flex px-3 py-1 text-xs font-medium rounded-full bg-accent/10 border border-accent/20 text-accent-light">
              {caseStudy.serviceType}
            </span>
            <span className="inline-flex px-3 py-1 text-xs font-medium rounded-full bg-surface-elevated border border-border text-text-secondary">
              {caseStudy.industry}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-tight mb-6"
          >
            {caseStudy.title}
          </motion.h1>

          {/* Client - show logo if available, otherwise text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mb-8"
          >
            {getClientLogo(caseStudy.client) ? (
              <Image
                src={getClientLogo(caseStudy.client)!}
                alt={caseStudy.client}
                width={120}
                height={40}
                className="h-8 w-auto object-contain client-logo-filter"
              />
            ) : (
              <span className="font-medium text-text-secondary text-sm">
                {caseStudy.client}
              </span>
            )}
          </motion.div>

          {/* Hero Image */}
          {caseStudy.image && !caseStudy.image.includes("/case-studies/") && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden"
            >
              <Image
                src={caseStudy.image}
                alt={caseStudy.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base/60 via-transparent to-transparent" />
            </motion.div>
          )}
        </div>
      </section>

      {/* Metrics Section */}
      {caseStudy.metrics.length > 0 && (
        <section className="relative py-8 bg-surface border-y border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {caseStudy.metrics.map((metric, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-highlight mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm text-text-muted">{metric.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Content Section */}
      <section className="relative py-12 sm:py-16 bg-base">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {/* Description */}
            <div className="prose prose-lg prose-invert max-w-none mb-8">
              <p className="text-lg text-text-secondary leading-relaxed">
                {caseStudy.description}
              </p>
            </div>

            {/* Notion Content */}
            {groupedContent.length > 0 && (
              <div className="mt-8">
                {groupedContent.map((item, idx) => {
                  // Check if this is a grouped list
                  if ("listType" in item) {
                    const ListTag = item.listType === "bullet" ? "ul" : "ol";
                    return (
                      <ListTag
                        key={idx}
                        className={`mb-4 ml-6 ${
                          item.listType === "bullet" ? "list-disc" : "list-decimal"
                        }`}
                      >
                        {item.items.map((listItem, listIdx) => (
                          <li key={listIdx} className="text-text-secondary mb-2">
                            {listItem.text}
                          </li>
                        ))}
                      </ListTag>
                    );
                  }
                  // Regular content block
                  return <ContentBlock key={idx} block={item} />;
                })}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Ready to Build Your
              <br />
              <span className="text-highlight">Success Story?</span>
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Tell us about your AI challenges, and our engineers will give you
              an honest assessment of how we can help.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CalButton className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-cta-text bg-cta rounded-xl hover:brightness-110 transition-all duration-200 shadow-lg shadow-cta/25 cursor-pointer">
                Book a Strategy Call
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </CalButton>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-text-primary bg-surface-elevated border border-border rounded-xl hover:border-accent hover:bg-accent/10 transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Case Studies */}
      {relatedCaseStudies.length > 0 && (
        <section className="relative py-16 sm:py-24 bg-base">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <p className="text-xs sm:text-sm font-semibold tracking-widest text-accent-light uppercase mb-4">
                More Success Stories
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary">
                Related Case Studies
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {relatedCaseStudies.map((study, idx) => (
                <CaseStudyCard
                  key={study.id}
                  study={study}
                  index={idx}
                  variant="default"
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
