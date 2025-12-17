import { ReactNode } from "react";

interface ComparisonProps {
  left: {
    title: string;
    type?: "good" | "bad" | "neutral";
  };
  right: {
    title: string;
    type?: "good" | "bad" | "neutral";
  };
  children: ReactNode;
}

interface ComparisonSideProps {
  side: "left" | "right";
  children: ReactNode;
}

const typeStyles = {
  good: {
    icon: (
      <svg
        className="w-5 h-5 text-success"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
    border: "border-success/30",
    bg: "bg-success/5",
    title: "text-success",
  },
  bad: {
    icon: (
      <svg
        className="w-5 h-5 text-error"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    ),
    border: "border-error/30",
    bg: "bg-error/5",
    title: "text-error",
  },
  neutral: {
    icon: null,
    border: "border-border",
    bg: "bg-surface-elevated/50",
    title: "text-text-primary",
  },
};

export function Comparison({ left, right, children }: ComparisonProps) {
  const leftStyles = typeStyles[left.type || "neutral"];
  const rightStyles = typeStyles[right.type || "neutral"];

  // Split children into left and right
  const childArray = Array.isArray(children) ? children : [children];
  const leftContent = childArray.find(
    (child) =>
      child &&
      typeof child === "object" &&
      "props" in child &&
      child.props.side === "left",
  );
  const rightContent = childArray.find(
    (child) =>
      child &&
      typeof child === "object" &&
      "props" in child &&
      child.props.side === "right",
  );

  return (
    <div className="my-8 grid md:grid-cols-2 gap-4">
      {/* Left side */}
      <div
        className={`rounded-xl border ${leftStyles.border} ${leftStyles.bg} overflow-hidden`}
      >
        <div
          className={`flex items-center gap-2 px-4 py-3 border-b ${leftStyles.border}`}
        >
          {leftStyles.icon}
          <span className={`font-semibold ${leftStyles.title}`}>
            {left.title}
          </span>
        </div>
        <div className="p-4 text-sm text-text-secondary">
          {leftContent?.props?.children}
        </div>
      </div>

      {/* Right side */}
      <div
        className={`rounded-xl border ${rightStyles.border} ${rightStyles.bg} overflow-hidden`}
      >
        <div
          className={`flex items-center gap-2 px-4 py-3 border-b ${rightStyles.border}`}
        >
          {rightStyles.icon}
          <span className={`font-semibold ${rightStyles.title}`}>
            {right.title}
          </span>
        </div>
        <div className="p-4 text-sm text-text-secondary">
          {rightContent?.props?.children}
        </div>
      </div>
    </div>
  );
}

// Helper component to mark sides
export function ComparisonSide({ children }: ComparisonSideProps) {
  return <>{children}</>;
}
