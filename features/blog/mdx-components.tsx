import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export const mdxComponents: MDXComponents = {
  h2: (props) => (
    <h2
      className="text-foreground mt-14 scroll-mt-24 text-2xl font-bold tracking-tight sm:text-3xl"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="text-foreground mt-10 scroll-mt-24 text-xl font-semibold tracking-tight"
      {...props}
    />
  ),
  p: (props) => <p className="text-muted-foreground mt-5 text-base leading-8" {...props} />,
  ul: (props) => (
    <ul
      className="text-muted-foreground marker:text-primary mt-5 list-disc space-y-2 pl-6 text-base leading-8"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="text-muted-foreground marker:text-primary mt-5 list-decimal space-y-2 pl-6 text-base leading-8"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="border-primary bg-primary/5 text-foreground mt-6 border-l-2 px-5 py-3"
      {...props}
    />
  ),
  a: ({ href = "", ...props }) => {
    const external = href.startsWith("http");
    return (
      <Link
        className="text-primary decoration-primary/30 hover:decoration-primary font-medium underline underline-offset-4"
        href={href}
        rel={external ? "noreferrer" : undefined}
        target={external ? "_blank" : undefined}
        {...props}
      />
    );
  },
  code: (props) => (
    <code
      className="bg-muted text-foreground rounded px-1.5 py-0.5 font-mono text-[0.9em]"
      {...props}
    />
  ),
  hr: () => <hr className="border-border my-12" />,
};
