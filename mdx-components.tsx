import type { MDXComponents } from "mdx/types";
import {
  CodeBlock,
  YouTube,
  Tweet,
  Callout,
  LinkPreview,
  ImageWithCaption,
  Steps,
  Step,
  Tabs,
  Tab,
  Accordion,
  AccordionItem,
  FileTree,
  Comparison,
} from "@/components/mdx";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Custom components available in MDX
    CodeBlock,
    YouTube,
    Tweet,
    Callout,
    LinkPreview,
    ImageWithCaption,
    Steps,
    Step,
    Tabs,
    Tab,
    Accordion,
    AccordionItem,
    FileTree,
    Comparison,
    // Override default elements with enhanced versions
    pre: ({ children, ...props }) => (
      <pre className="not-prose" {...props}>
        {children}
      </pre>
    ),
    code: ({ children, className, ...props }) => {
      // If it's an inline code (no className from rehype-pretty-code)
      const isInline = !className;
      if (isInline) {
        return (
          <code
            className="px-1.5 py-0.5 text-sm font-mono text-highlight bg-surface-elevated border border-border rounded"
            {...props}
          >
            {children}
          </code>
        );
      }
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
    a: ({ href, children, ...props }) => (
      <a
        href={href}
        className="text-highlight underline decoration-highlight/50 underline-offset-4 hover:decoration-highlight transition-colors"
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
        {...props}
      >
        {children}
      </a>
    ),
    blockquote: ({ children, ...props }) => (
      <blockquote
        className="border-l-4 border-accent pl-6 py-4 pr-6 my-8 italic text-text-secondary rounded-r-xl"
        style={{ backgroundColor: "var(--color-blockquote-bg)" }}
        {...props}
      >
        {children}
      </blockquote>
    ),
    table: ({ children, ...props }) => (
      <div className="overflow-x-auto my-8 rounded-xl border border-border">
        <table className="w-full text-left" {...props}>
          {children}
        </table>
      </div>
    ),
    th: ({ children, ...props }) => (
      <th
        className="px-4 py-3 text-sm font-semibold text-text-primary bg-surface-elevated border-b border-border"
        {...props}
      >
        {children}
      </th>
    ),
    td: ({ children, ...props }) => (
      <td
        className="px-4 py-3 text-sm text-text-secondary border-b border-border"
        {...props}
      >
        {children}
      </td>
    ),
    hr: (props) => <hr className="my-12 border-border" {...props} />,
    img: ({ src, alt, ...props }) => (
      <figure className="my-8">
        <img
          src={src}
          alt={alt}
          className="rounded-xl border border-border w-full"
          {...props}
        />
        {alt && (
          <figcaption className="mt-3 text-center text-sm text-text-muted">
            {alt}
          </figcaption>
        )}
      </figure>
    ),
    ...components,
  };
}
