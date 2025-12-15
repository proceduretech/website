"use client";

import { ReactNode, Children, isValidElement, useState } from "react";

interface TabsProps {
  children: ReactNode;
  defaultValue?: string;
}

interface TabProps {
  value: string;
  label: string;
  children: ReactNode;
}

export function Tabs({ children, defaultValue }: TabsProps) {
  const childArray = Children.toArray(children).filter(isValidElement);

  // Extract tab data from children
  const tabs = childArray.map((child) => {
    const props = child.props as TabProps;
    return {
      value: props.value,
      label: props.label,
      children: props.children,
    };
  });

  const [activeTab, setActiveTab] = useState(
    defaultValue || tabs[0]?.value || "",
  );

  const activeTabContent = tabs.find(
    (tab) => tab.value === activeTab,
  )?.children;

  return (
    <div className="my-8">
      {/* Tab buttons */}
      <div className="flex flex-wrap gap-1 p-1 bg-surface-elevated rounded-xl border border-border mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
              activeTab === tab.value
                ? "bg-accent-teal/20 text-accent-teal-light border border-accent-teal/30"
                : "text-text-muted hover:text-text-secondary hover:bg-surface"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* Tab content */}
      <div className="p-4 bg-surface-elevated/50 rounded-xl border border-border">
        {activeTabContent}
      </div>
    </div>
  );
}

export function Tab({ children }: TabProps) {
  // This component is just a marker - Tabs reads its props directly
  return <>{children}</>;
}
