import { compile, run } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
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
  ComparisonSide,
  Pre,
} from "@/components/mdx";

// Components available in MDX
const components = {
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
  ComparisonSide,
  // Override default elements
  pre: Pre,
  code: ({
    children,
    className,
    ...props
  }: React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
    className?: string;
  }) => {
    const isInline = !className;
    if (isInline) {
      return (
        <code
          className="px-1.5 py-0.5 text-sm font-mono text-highlight bg-surface-elevated rounded"
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
  a: ({
    href,
    children,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children?: React.ReactNode;
  }) => (
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
  blockquote: ({
    children,
    ...props
  }: React.BlockquoteHTMLAttributes<HTMLQuoteElement> & {
    children?: React.ReactNode;
  }) => (
    <blockquote
      className="border-l-4 border-accent pl-6 py-4 pr-6 my-8 italic text-text-secondary rounded-r-xl"
      style={{ backgroundColor: "var(--color-blockquote-bg)" }}
      {...props}
    >
      {children}
    </blockquote>
  ),
  table: ({
    children,
    ...props
  }: React.TableHTMLAttributes<HTMLTableElement> & {
    children?: React.ReactNode;
  }) => (
    <div className="overflow-x-auto my-8 rounded-xl border border-border">
      <table className="w-full text-left" {...props}>
        {children}
      </table>
    </div>
  ),
  th: ({
    children,
    ...props
  }: React.ThHTMLAttributes<HTMLTableCellElement> & {
    children?: React.ReactNode;
  }) => (
    <th
      className="px-4 py-3 text-sm font-semibold text-text-primary bg-surface-elevated border-b border-border"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({
    children,
    ...props
  }: React.TdHTMLAttributes<HTMLTableCellElement> & {
    children?: React.ReactNode;
  }) => (
    <td
      className="px-4 py-3 text-sm text-text-secondary border-b border-border"
      {...props}
    >
      {children}
    </td>
  ),
  hr: (props: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-12 border-border" {...props} />
  ),
  img: ({
    src,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement> & { src?: string }) => (
    <figure className="my-8">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt || ""}
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
};

interface MDXContentProps {
  source: string;
}

export async function MDXContent({ source }: MDXContentProps) {
  // Compile MDX to JavaScript with all plugins
  const code = await compile(source, {
    outputFormat: "function-body",
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "gruvbox-dark-soft",
          keepBackground: true,
          defaultLang: "typescript",
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: ["anchor"],
          },
        },
      ],
    ],
  });

  // Run the compiled code
  const { default: MDXComponent } = await run(String(code), {
    ...runtime,
    baseUrl: import.meta.url,
  });

  return (
    <div className="mdx-content">
      <MDXComponent components={components} />
    </div>
  );
}
