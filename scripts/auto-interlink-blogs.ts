/**
 * Automated Blog Interlinking Script
 *
 * This script analyzes blog posts in Notion and automatically adds strategic
 * internal links to:
 * - Related service pages
 * - Related blog posts
 * - Pillar content
 *
 * Usage: npx tsx scripts/auto-interlink-blogs.ts
 */

interface BlogPost {
  title?: string;
  text?: string;
  pageId?: string;
  url?: string;
}

interface LinkOpportunity {
  pageId: string;
  pageTitle: string;
  pageUrl: string;
  suggestions: LinkSuggestion[];
}

interface LinkSuggestion {
  targetUrl: string;
  targetTitle: string;
  anchorText: string;
  reason: string;
  location: 'intro' | 'content' | 'related';
  confidence: 'high' | 'medium' | 'low';
}

// Service page mapping: keywords → service page
const SERVICE_MAPPINGS: Record<string, { url: string; title: string }> = {
  'ai engineering': { url: '/services/ai-engineering', title: 'AI Engineering Services' },
  'ai security': { url: '/services/ai-security', title: 'AI Security Services' },
  'ai agents': { url: '/services/ai-engineering', title: 'AI Engineering Services' },
  'llm': { url: '/services/ai-engineering', title: 'AI Engineering Services' },
  'machine learning': { url: '/services/ai-engineering', title: 'AI Engineering Services' },
  'backend': { url: '/services/backend-development', title: 'Backend Development' },
  'frontend': { url: '/services/frontend-development', title: 'Frontend Development' },
  'kubernetes': { url: '/services/kubernetes', title: 'Kubernetes Consulting' },
  'devops': { url: '/services/cloud', title: 'Cloud Infrastructure' },
  'mobile': { url: '/services/mobile-development', title: 'Mobile Development' },
  'testing': { url: '/services/software-testing-and-qa', title: 'QA & Testing' },
  'qa': { url: '/services/software-testing-and-qa', title: 'QA & Testing' },
  'design system': { url: '/services/design-systems', title: 'Design Systems' },
  'product design': { url: '/services/product-design', title: 'Product Design' },
};

// Content clusters: topic → related posts
const CONTENT_CLUSTERS: Record<string, string[]> = {
  'ai-agents': [
    'ai-agents-how-they-work-use-cases',
    'model-context-protocol-mcp-guide',
    'notion-mcp-connect-ai-agents'
  ],
  'llm-systems': [
    'server-sent-events-sse-llm-streaming',
    'model-context-protocol-mcp-guide'
  ],
  'database': [
    'zero-downtime-database-migrations-aurora',
    'mongodb-array-updates-optimization',
    'database-partitioning-list-hash'
  ],
  'frontend': [
    'web-workers-javascript-performance',
    'mdx-components-guide'
  ]
};

/**
 * Analyze blog post content and find interlinking opportunities
 */
function analyzeBlogPost(post: BlogPost): LinkOpportunity {
  const content = post.text?.toLowerCase() || '';
  const title = post.title?.toLowerCase() || '';
  const suggestions: LinkSuggestion[] = [];

  // 1. Find service page opportunities
  for (const [keyword, service] of Object.entries(SERVICE_MAPPINGS)) {
    if (content.includes(keyword) || title.includes(keyword)) {
      // Check if link doesn't already exist
      if (!content.includes(service.url)) {
        suggestions.push({
          targetUrl: `https://procedure.tech${service.url}`,
          targetTitle: service.title,
          anchorText: keyword,
          reason: `Post mentions "${keyword}" - link to relevant service`,
          location: 'intro',
          confidence: 'high'
        });
      }
    }
  }

  // 2. Find content cluster opportunities
  const postSlug = post.url?.split('/').pop() || '';
  for (const [clusterName, posts] of Object.entries(CONTENT_CLUSTERS)) {
    if (posts.includes(postSlug)) {
      // This post is part of a cluster - suggest links to other posts in cluster
      const relatedPosts = posts.filter(p => p !== postSlug);
      for (const relatedSlug of relatedPosts.slice(0, 3)) { // Max 3 related
        suggestions.push({
          targetUrl: `https://procedure.tech/blogs/${relatedSlug}`,
          targetTitle: `Related: ${relatedSlug.replace(/-/g, ' ')}`,
          anchorText: relatedSlug.replace(/-/g, ' '),
          reason: `Part of ${clusterName} content cluster`,
          location: 'related',
          confidence: 'high'
        });
      }
    }
  }

  return {
    pageId: post.pageId || '',
    pageTitle: post.title || 'Untitled',
    pageUrl: post.url || '',
    suggestions
  };
}

/**
 * Generate markdown for "Related Resources" section
 */
function generateRelatedResourcesSection(suggestions: LinkSuggestion[]): string {
  if (suggestions.length === 0) return '';

  const highConfidence = suggestions.filter(s => s.confidence === 'high');
  if (highConfidence.length === 0) return '';

  let markdown = '\n\n## Related Resources\n\n';

  for (const suggestion of highConfidence.slice(0, 5)) { // Max 5 links
    markdown += `- [${suggestion.targetTitle}](${suggestion.targetUrl})\n`;
  }

  return markdown;
}

/**
 * Generate a report of interlinking opportunities
 */
function generateReport(opportunities: LinkOpportunity[]): string {
  let report = '# Blog Interlinking Opportunities Report\n\n';
  report += `Generated: ${new Date().toISOString()}\n\n`;
  report += `Total posts analyzed: ${opportunities.length}\n`;

  const totalSuggestions = opportunities.reduce((sum, opp) => sum + opp.suggestions.length, 0);
  report += `Total link opportunities: ${totalSuggestions}\n\n`;

  report += '---\n\n';

  for (const opportunity of opportunities) {
    if (opportunity.suggestions.length === 0) continue;

    report += `## ${opportunity.pageTitle}\n\n`;
    report += `**Page URL:** ${opportunity.pageUrl}\n\n`;
    report += `**Suggestions (${opportunity.suggestions.length}):**\n\n`;

    for (const suggestion of opportunity.suggestions) {
      report += `### ${suggestion.confidence.toUpperCase()} - ${suggestion.targetTitle}\n`;
      report += `- **Link to:** ${suggestion.targetUrl}\n`;
      report += `- **Anchor text:** "${suggestion.anchorText}"\n`;
      report += `- **Location:** ${suggestion.location}\n`;
      report += `- **Reason:** ${suggestion.reason}\n\n`;
    }

    // Generate ready-to-use markdown
    const relatedSection = generateRelatedResourcesSection(opportunity.suggestions);
    if (relatedSection) {
      report += '**Ready-to-use Markdown (add to end of post):**\n';
      report += '```markdown\n';
      report += relatedSection;
      report += '```\n\n';
    }

    report += '---\n\n';
  }

  return report;
}

// Example usage (you would integrate with Notion MCP)
const examplePost = {
  id: '2fc89071-0157-8050-9497-ca9b7a115c05',
  title: 'The Rise of AI Agents: How Modern Systems Observe, Decide, and Act',
  url: 'https://www.notion.so/2fc89071015780509497ca9b7a115c05',
  text: `
    AI agents have quietly transitioned from experiments to real-world production systems.
    They are now being used to review code, automate workflows, monitor systems, and execute
    multi-step tasks across teams. This shift is already visible in how modern software is
    being built and deployed with AI engineering practices.

    In healthcare, AI agents help with clinical trial coordination. In finance, they monitor
    market data. In legal and compliance, AI agents streamline contract review and research.

    For teams building production AI systems, understanding agent architecture, security,
    and deployment patterns is critical. Modern AI agents need robust backend systems,
    frontend interfaces, and secure cloud infrastructure to operate reliably.
  `
};

console.log('='.repeat(80));
console.log('BLOG INTERLINKING ANALYSIS TOOL');
console.log('='.repeat(80));
console.log('');

const opportunity = analyzeBlogPost(examplePost);
const report = generateReport([opportunity]);

console.log(report);

console.log('='.repeat(80));
console.log('NEXT STEPS:');
console.log('='.repeat(80));
console.log('');
console.log('1. Review the suggestions above');
console.log('2. For each post, open it in Notion');
console.log('3. Add the "Related Resources" section at the end (before CTA)');
console.log('4. Add 2-3 contextual links in the main content where natural');
console.log('5. Save and publish');
console.log('');
console.log('TIP: Copy the ready-to-use markdown and paste into Notion!');
console.log('');

export { analyzeBlogPost, generateReport, SERVICE_MAPPINGS, CONTENT_CLUSTERS };
