import { ReactNode } from "react";

interface StepsProps {
  children: ReactNode;
}

interface StepProps {
  title: string;
  children: ReactNode;
}

export function Steps({ children }: StepsProps) {
  return (
    <div className="my-8 relative steps-container">
      {/* Vertical line */}
      <div className="absolute left-[15px] top-4 bottom-4 w-0.5 bg-border" />
      <div className="space-y-6">{children}</div>
    </div>
  );
}

export function Step({ title, children }: StepProps) {
  return (
    <div className="relative flex gap-4 step-item">
      {/* Step number - uses CSS counter via .step-number::before */}
      <div className="step-number relative z-10 flex-shrink-0 w-8 h-8 rounded-full bg-surface-elevated border-2 border-accent-teal flex items-center justify-center text-sm font-bold text-accent-teal-light" />
      {/* Step content */}
      <div className="flex-1 pt-0.5">
        <h4 className="text-base font-semibold text-text-primary mb-2">
          {title}
        </h4>
        <div className="text-text-secondary text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
