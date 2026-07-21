import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Clock3 } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mdxComponents } from "@/features/blog/mdx-components";
import { formatPostDate, getAllPosts, getPost } from "@/lib/posts";
import { siteConfig } from "@/lib/site-config";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    authors: [{ name: "Daniel Gao" }],
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  const posts = getAllPosts();
  const index = posts.findIndex((item) => item.slug === post.slug);
  const newer = index > 0 ? posts[index - 1] : undefined;
  const older = index < posts.length - 1 ? posts[index + 1] : undefined;

  return (
    <main
      className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
      id="main-content"
    >
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            datePublished: post.publishedAt,
            author: { "@type": "Person", name: "Daniel Gao", url: siteConfig.url },
            mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
          }).replace(/</g, "\\u003c"),
        }}
        type="application/ld+json"
      />
      <Button asChild variant="ghost">
        <Link href="/blog">
          <ArrowLeft />
          返回博客列表
        </Link>
      </Button>
      <article className="mt-10">
        <header className="border-border mx-auto max-w-4xl border-b pb-12 text-center">
          <Badge variant={post.category === "AI" ? "success" : "default"}>{post.category}</Badge>
          <h1 className="text-foreground mt-6 text-4xl font-bold tracking-[-0.04em] text-balance sm:text-6xl">
            {post.title}
          </h1>
          <p className="text-muted-foreground mx-auto mt-6 max-w-3xl text-base leading-8 sm:text-lg">
            {post.description}
          </p>
          <div className="text-muted-foreground mt-7 flex flex-wrap items-center justify-center gap-3 text-sm">
            <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock3 className="size-4" />
              {post.readingTime}
            </span>
          </div>
        </header>

        <div className="mx-auto mt-12 grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,46rem)_14rem] lg:items-start lg:justify-center">
          <div className="mdx-content min-w-0">
            <MDXRemote
              components={mdxComponents}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [
                    rehypeSlug,
                    [rehypePrettyCode, { theme: "github-dark-default", keepBackground: false }],
                  ],
                },
              }}
              source={post.content}
            />
          </div>
          <aside className="hidden lg:sticky lg:top-28 lg:block">
            <p className="text-muted-foreground text-xs font-semibold tracking-[0.15em] uppercase">
              On this page
            </p>
            <nav aria-label="文章目录" className="border-border mt-4 border-l">
              {post.tableOfContents.map((item) => (
                <Link
                  className={`text-muted-foreground hover:border-primary hover:text-foreground block border-l px-4 py-1.5 text-sm leading-5 transition-colors ${item.level === 3 ? "pl-7 text-xs" : ""}`}
                  href={`#${item.id}`}
                  key={item.id}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </aside>
        </div>

        <footer className="border-border mx-auto mt-20 grid max-w-4xl gap-3 border-t pt-8 sm:grid-cols-2">
          {newer ? (
            <Link
              className="group border-border hover:border-primary/40 rounded-xl border p-5 transition-colors"
              href={`/blog/${newer.slug}`}
            >
              <span className="text-muted-foreground text-xs">上一篇</span>
              <strong className="text-foreground mt-2 flex items-center gap-2 text-sm">
                <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
                {newer.title}
              </strong>
            </Link>
          ) : (
            <span />
          )}
          {older && (
            <Link
              className="group border-border hover:border-primary/40 rounded-xl border p-5 text-right transition-colors"
              href={`/blog/${older.slug}`}
            >
              <span className="text-muted-foreground text-xs">下一篇</span>
              <strong className="text-foreground mt-2 flex items-center justify-end gap-2 text-sm">
                {older.title}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </strong>
            </Link>
          )}
        </footer>
      </article>
    </main>
  );
}
