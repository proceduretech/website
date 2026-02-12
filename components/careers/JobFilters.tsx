"use client";

interface JobFiltersProps {
  departments: string[];
  activeFilter: string;
  onFilterChange: (department: string) => void;
  jobCounts: Record<string, number>;
}

export function JobFilters({
  departments,
  activeFilter,
  onFilterChange,
  jobCounts,
}: JobFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
      <span className="text-sm text-text-muted font-medium shrink-0">
        Department:
      </span>
      <div className="flex flex-wrap gap-2 overflow-x-auto scrollbar-hide">
        {departments.map((dept) => {
          const count = dept === "All" ? undefined : jobCounts[dept];
          return (
            <button
              key={dept}
              onClick={() => onFilterChange(dept)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
                activeFilter === dept
                  ? "bg-accent/20 text-accent-light border border-accent/30"
                  : "bg-surface-elevated text-text-secondary border border-border hover:border-accent/30 hover:text-text-primary"
              }`}
            >
              {dept}
              {count !== undefined && (
                <span className="ml-1.5 text-xs opacity-70">({count})</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
