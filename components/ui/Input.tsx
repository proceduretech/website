"use client";

import { forwardRef, InputHTMLAttributes, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  hint?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, className = "", id, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);
    const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

    const handleFocus = () => setIsFocused(true);
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      setHasValue(!!e.target.value);
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHasValue(!!e.target.value);
      props.onChange?.(e);
    };

    const isLabelFloating =
      isFocused || hasValue || !!props.value || !!props.defaultValue;

    return (
      <div className={`relative ${className}`}>
        <div className="relative">
          <input
            ref={ref}
            id={inputId}
            {...props}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            className={`
              peer w-full px-4 pt-6 pb-2
              bg-surface-elevated border rounded-xl
              text-text-primary text-base
              placeholder-transparent
              transition-all duration-200 ease-out
              outline-none
              ${
                error
                  ? "border-red-500/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                  : "border-border hover:border-border-light focus:border-accent-teal focus:ring-2 focus:ring-accent-teal/20"
              }
              disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-border
            `}
            placeholder={label}
          />
          <label
            htmlFor={inputId}
            className={`
              absolute left-4
              transition-all duration-200 ease-out
              pointer-events-none
              ${
                isLabelFloating
                  ? "top-2 text-xs font-medium"
                  : "top-1/2 -translate-y-1/2 text-base"
              }
              ${
                error
                  ? "text-red-400"
                  : isFocused
                    ? "text-accent-teal-light"
                    : "text-text-muted"
              }
            `}
          >
            {label}
            {props.required && (
              <span className="text-accent-teal-light ml-0.5">*</span>
            )}
          </label>
        </div>

        {/* Hint text */}
        {hint && !error && (
          <p className="mt-1.5 text-xs text-text-muted">{hint}</p>
        )}

        {/* Error message with animation */}
        <AnimatePresence mode="wait">
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
              className="mt-1.5 text-xs text-red-400 flex items-center gap-1"
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
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    );
  },
);

Input.displayName = "Input";
