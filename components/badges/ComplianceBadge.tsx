interface ComplianceBadgeProps {
  icon: "star" | "clock" | "check" | "shield";
  title: string;
  subtitle: string;
  iconColor?: "teal" | "blue";
}

export function ComplianceBadge({
  icon,
  title,
  subtitle,
  iconColor = "teal",
}: ComplianceBadgeProps) {
  const iconColorClass =
    iconColor === "teal" ? "text-accent" : "text-info";
  const iconBgClass =
    iconColor === "teal" ? "bg-accent/15" : "bg-info/15";

  return (
    <div className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-surface-elevated border border-border">
      <div className={`w-10 h-10 rounded-full ${iconBgClass} flex items-center justify-center`}>
        {icon === "star" && (
          <svg
            className={`w-5 h-5 ${iconColorClass}`}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2L14.47 7.06L20 7.82L16 11.72L16.94 17.23L12 14.64L7.06 17.23L8 11.72L4 7.82L9.53 7.06L12 2Z" />
          </svg>
        )}
        {icon === "clock" && (
          <svg
            className={`w-5 h-5 ${iconColorClass}`}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" />
            <path
              d="M12 6V12L16 14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        )}
        {icon === "check" && (
          <svg
            className={`w-5 h-5 ${iconColorClass}`}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
          </svg>
        )}
        {icon === "shield" && (
          <svg
            className={`w-5 h-5 ${iconColorClass}`}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2L2 7V12C2 17.55 6.16 22.74 12 24C17.84 22.74 22 17.55 22 12V7L12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
          </svg>
        )}
      </div>
      <div>
        <div className="text-xs font-semibold text-text-primary">{title}</div>
        <div className="text-xs text-text-secondary">{subtitle}</div>
      </div>
    </div>
  );
}
