"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

type ElementTag = keyof JSX.IntrinsicElements;

export interface SplitTextProps<TTag extends ElementTag = "span">
  extends Omit<React.ComponentPropsWithoutRef<TTag>, "children"> {
  text: string;
  as?: TTag;
  stagger?: number;
}

export function SplitText<TTag extends ElementTag = "span">({
  text,
  as,
  className,
  stagger = 0.045,
  ...rest
}: SplitTextProps<TTag>) {
  const Component = (as ?? "span") as ElementTag;
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return React.createElement(
    Component,
    {
      className: cn("inline-flex flex-wrap gap-y-2", className),
      "aria-label": text,
      ...rest,
    },
    text.split("").map((char, index) => (
      <span
        key={`${char}-${index}`}
        className={cn(
          "inline-block transform transition duration-300 ease-out will-change-transform",
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        )}
        style={{ transitionDelay: `${index * stagger}s` }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ))
  );
}
