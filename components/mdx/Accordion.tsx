"use client";

import { ReactNode, Children, isValidElement, useState } from "react";

interface AccordionProps {
  children: ReactNode;
  multiple?: boolean;
}

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export function Accordion({ children, multiple = false }: AccordionProps) {
  const childArray = Children.toArray(children).filter(isValidElement);

  // Extract item data from children
  const items = childArray.map((child) => {
    const props = child.props as AccordionItemProps;
    return {
      title: props.title,
      children: props.children,
      defaultOpen: props.defaultOpen,
    };
  });

  const [openItems, setOpenItems] = useState<Set<number>>(() => {
    const initial = new Set<number>();
    items.forEach((item, index) => {
      if (item.defaultOpen) {
        initial.add(index);
      }
    });
    return initial;
  });

  const toggleItem = (index: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        if (!multiple) {
          next.clear();
        }
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className="my-8 border border-border rounded-xl overflow-hidden divide-y divide-border">
      {items.map((item, index) => {
        const isOpen = openItems.has(index);
        return (
          <div key={index} className="bg-surface-elevated/50">
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex items-center justify-between gap-4 p-4 text-left hover:bg-surface transition-colors"
            >
              <span className="font-medium text-text-primary">
                {item.title}
              </span>
              <svg
                className={`w-5 h-5 text-text-muted flex-shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ${
                isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-4 pb-4 text-text-secondary text-sm">
                {item.children}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function AccordionItem({ children }: AccordionItemProps) {
  // This component is just a marker - Accordion reads its props directly
  return <>{children}</>;
}
