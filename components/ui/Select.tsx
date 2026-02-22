"use client";

import { forwardRef, SelectHTMLAttributes, useState } from "react";
import { m, AnimatePresence } from "framer-motion";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "children"
> {
  label: string;
  options: SelectOption[];
  placeholder?: string;
  error?: string;
  hint?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      options,
      placeholder = "Select an option",
      error,
      hint,
      className = "",
      id,
      ...props
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(
      !!props.value || !!props.defaultValue,
    );
    const selectId = id || label.toLowerCase().replace(/\s+/g, "-");

    const handleFocus = () => setIsFocused(true);
    const handleBlur = (e: React.FocusEvent<HTMLSelectElement>) => {
      setIsFocused(false);
      setHasValue(!!e.target.value);
    };
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setHasValue(!!e.target.value);
      props.onChange?.(e);
    };

    return (
      <div className={`relative ${className}`}>
        <div className="relative">
          {/* Static floating label - always at top for select */}
          <label
            htmlFor={selectId}
            className={`
              absolute left-4 top-2 text-xs font-medium
              transition-colors duration-200 ease-out
              pointer-events-none z-10
              ${
                error
                  ? "text-error"
                  : isFocused
                    ? "text-accent-light"
                    : "text-text-muted"
              }
            `}
          >
            {label}
            {props.required && (
              <span className="text-accent-light ml-0.5">*</span>
            )}
          </label>

          <select
            ref={ref}
            id={selectId}
            defaultValue=""
            {...props}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            className={`
              peer w-full px-4 pt-6 pb-2 pr-10
              bg-surface-elevated border rounded-xl
              text-base
              transition-all duration-200 ease-out
              outline-none appearance-none cursor-pointer
              ${hasValue ? "text-text-primary" : "text-text-muted"}
              ${
                error
                  ? "border-error/50 focus:border-error focus:ring-2 focus:ring-error/20"
                  : "border-border hover:border-border-light focus:border-accent focus:ring-2 focus:ring-accent/20"
              }
              disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-border
            `}
          >
            <option value="" disabled hidden>
              {placeholder}
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          {/* Dropdown arrow */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg
              className={`w-5 h-5 transition-transform duration-200 ${
                isFocused
                  ? "text-accent-light rotate-180"
                  : "text-text-muted"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>

        {/* Hint text */}
        {hint && !error && (
          <p className="mt-1.5 text-xs text-text-muted">{hint}</p>
        )}

        {/* Error message with animation */}
        <AnimatePresence mode="wait">
          {error && (
            <m.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
              className="mt-1.5 text-xs text-error flex items-center gap-1"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                />
              </svg>
              {error}
            </m.p>
          )}
        </AnimatePresence>
      </div>
    );
  },
);

Select.displayName = "Select";
