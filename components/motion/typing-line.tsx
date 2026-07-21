"use client";

import { useEffect, useState } from "react";

type TypingLineProps = {
  items: readonly string[];
};

export function TypingLine({ items }: TypingLineProps) {
  const [itemIndex, setItemIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const current = items[itemIndex] ?? "";

  useEffect(() => {
    const complete = length === current.length;
    const empty = length === 0;
    const delay = complete && !deleting ? 1500 : deleting ? 38 : 72;
    const timer = window.setTimeout(() => {
      if (complete && !deleting) {
        setDeleting(true);
      } else if (empty && deleting) {
        setDeleting(false);
        setItemIndex((index) => (index + 1) % items.length);
      } else {
        setLength((value) => value + (deleting ? -1 : 1));
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [current.length, deleting, items.length, length]);

  return (
    <span className="inline-flex items-center">
      <span className="sr-only">{items.join("、")}</span>
      <span aria-hidden="true">{current.slice(0, length)}</span>
      <span aria-hidden="true" className="bg-primary ml-0.5 h-[1em] w-px animate-pulse" />
    </span>
  );
}
