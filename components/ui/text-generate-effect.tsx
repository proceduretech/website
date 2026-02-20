"use client";
import { useEffect } from "react";
import { m, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  staggerDelay = 0.2,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  staggerDelay?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration,
        delay: stagger(staggerDelay),
      }
    );
  }, [animate, filter, duration, staggerDelay]);

  const renderWords = () => {
    return (
      <m.span ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <m.span
              key={word + idx}
              className="inline-block mr-[0.25em]"
              style={{
                opacity: 0.3,
                filter: filter ? "blur(5px)" : "none",
              }}
            >
              {word}
            </m.span>
          );
        })}
      </m.span>
    );
  };

  return <span className={cn(className)}>{renderWords()}</span>;
};

// Variant for highlighted text (different color)
export const TextGenerateEffectHighlight = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  staggerDelay = 0.2,
  initialDelay = 0,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  staggerDelay?: number;
  initialDelay?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    const timeout = setTimeout(() => {
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration,
          delay: stagger(staggerDelay),
        }
      );
    }, initialDelay * 1000);

    return () => clearTimeout(timeout);
  }, [animate, filter, duration, staggerDelay, initialDelay]);

  const renderWords = () => {
    return (
      <m.span ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <m.span
              key={word + idx}
              className="inline-block mr-[0.25em]"
              style={{
                opacity: 0.3,
                filter: filter ? "blur(5px)" : "none",
              }}
            >
              {word}
            </m.span>
          );
        })}
      </m.span>
    );
  };

  return <span className={cn(className)}>{renderWords()}</span>;
};
