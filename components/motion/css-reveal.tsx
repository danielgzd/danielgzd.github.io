import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type CssRevealProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  delay?: number;
};

export function CssReveal({ children, className, delay = 0, style, ...props }: CssRevealProps) {
  return (
    <div
      className={cn("scroll-reveal", className)}
      style={{ "--reveal-delay": `${delay}s`, ...style } as CSSProperties}
      {...props}
    >
      {children}
    </div>
  );
}
