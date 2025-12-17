import { ReactNode } from "react";

type CalloutType = "info" | "warning" | "error" | "success" | "tip" | "note";

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: ReactNode;
}

const calloutStyles: Record<
  CalloutType,
  {
    bg: string;
    border: string;
    icon: string;
    iconBg: string;
    title: string;
  }
> = {
  info: {
    bg: "bg-info/5",
    border: "border-info/20",
    icon: "text-info",
    iconBg: "bg-info/10",
    title: "Info",
  },
  warning: {
    bg: "bg-warning/5",
    border: "border-warning/20",
    icon: "text-warning",
    iconBg: "bg-warning/10",
    title: "Warning",
  },
  error: {
    bg: "bg-error/5",
    border: "border-error/20",
    icon: "text-error",
    iconBg: "bg-error/10",
    title: "Error",
  },
  success: {
    bg: "bg-success/5",
    border: "border-success/20",
    icon: "text-success",
    iconBg: "bg-success/10",
    title: "Success",
  },
  tip: {
    bg: "bg-tip/5",
    border: "border-tip/20",
    icon: "text-tip",
    iconBg: "bg-tip/10",
    title: "Tip",
  },
  note: {
    bg: "bg-accent/5",
    border: "border-accent/20",
    icon: "text-accent-light",
    iconBg: "bg-accent/10",
    title: "Note",
  },
};

const icons: Record<CalloutType, ReactNode> = {
  info: (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  warning: (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      />
    </svg>
  ),
  error: (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  success: (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  tip: (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    </svg>
  ),
  note: (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
      />
    </svg>
  ),
};

export function Callout({ type = "info", title, children }: CalloutProps) {
  const styles = calloutStyles[type];
  const displayTitle = title || styles.title;

  return (
    <div
      className={`my-8 rounded-xl border ${styles.bg} ${styles.border} overflow-hidden`}
    >
      <div className="flex items-start gap-4 p-3">
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-lg ${styles.iconBg} flex items-center justify-center ${styles.icon}`}
        >
          {icons[type]}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-text-primary mb-0.5">{displayTitle}</p>
          <div className="text-text-secondary text-sm [&>p]:mb-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
