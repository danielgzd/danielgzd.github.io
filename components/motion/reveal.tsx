"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children: ReactNode;
  delay?: number;
};

export function Reveal({ children, className, delay = 0, ...props }: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      transition={{ delay, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ amount: 0.15, once: true }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
