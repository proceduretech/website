"use client";

import { useState, ReactNode } from "react";

interface FileTreeProps {
  children: ReactNode;
}

interface FileTreeItem {
  name: string;
  type: "file" | "folder";
  children?: FileTreeItem[];
  highlight?: boolean;
}

// Parse the children text into a file tree structure
function parseFileTree(text: string): FileTreeItem[] {
  const lines = text.trim().split("\n");
  const result: FileTreeItem[] = [];
  const stack: { indent: number; items: FileTreeItem[] }[] = [
    { indent: -1, items: result },
  ];

  for (const line of lines) {
    const trimmed = line.replace(/^[\s│├└─]+/, "");
    if (!trimmed) continue;

    const indent = line.search(/\S/);
    const highlight = trimmed.endsWith("*");
    const name = highlight ? trimmed.slice(0, -1).trim() : trimmed.trim();
    const isFolder = name.endsWith("/") || !name.includes(".");

    const item: FileTreeItem = {
      name: isFolder ? name.replace(/\/$/, "") : name,
      type: isFolder ? "folder" : "file",
      highlight,
      children: isFolder ? [] : undefined,
    };

    // Pop stack until we find the right parent
    while (stack.length > 1 && stack[stack.length - 1].indent >= indent) {
      stack.pop();
    }

    // Add to current parent
    stack[stack.length - 1].items.push(item);

    // If folder, push to stack
    if (isFolder && item.children) {
      stack.push({ indent, items: item.children });
    }
  }

  return result;
}

function FileIcon({ type }: { type: "file" | "folder" }) {
  if (type === "folder") {
    return (
      <svg
        className="w-4 h-4 text-warning"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
        />
      </svg>
    );
  }
  return (
    <svg
      className="w-4 h-4 text-text-muted"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  );
}

function FileTreeNode({
  item,
  depth = 0,
}: {
  item: FileTreeItem;
  depth?: number;
}) {
  const [isOpen, setIsOpen] = useState(true);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div>
      <div
        className={`flex items-center gap-2 py-1 px-2 rounded hover:bg-surface transition-colors ${
          item.highlight ? "bg-accent/10" : ""
        }`}
        style={{ paddingLeft: `${depth * 16 + 8}px` }}
      >
        {hasChildren ? (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 text-left"
          >
            <svg
              className={`w-3 h-3 text-text-muted transition-transform ${
                isOpen ? "rotate-90" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <FileIcon type={item.type} />
            <span
              className={`text-sm ${
                item.highlight
                  ? "text-accent-light font-medium"
                  : "text-text-secondary"
              }`}
            >
              {item.name}
            </span>
          </button>
        ) : (
          <>
            <span className="w-3" />
            <FileIcon type={item.type} />
            <span
              className={`text-sm ${
                item.highlight
                  ? "text-accent-light font-medium"
                  : "text-text-secondary"
              }`}
            >
              {item.name}
            </span>
          </>
        )}
      </div>
      {hasChildren && isOpen && (
        <div>
          {item.children!.map((child, index) => (
            <FileTreeNode key={index} item={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export function FileTree({ children }: FileTreeProps) {
  const text = typeof children === "string" ? children : "";
  const items = parseFileTree(text);

  return (
    <div className="my-8 rounded-xl border border-border bg-surface-elevated/50 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2 bg-surface-elevated border-b border-border">
        <svg
          className="w-4 h-4 text-text-muted"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
          />
        </svg>
        <span className="text-sm text-text-muted">Project Structure</span>
      </div>
      <div className="p-2 font-mono text-sm">
        {items.map((item, index) => (
          <FileTreeNode key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
