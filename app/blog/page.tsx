import type { Metadata } from "next";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { PostCard } from "@/features/blog/post-card";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "博客",
  description: "关于 Swift、iOS、AI、LLM 与工程实践的技术文章。",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  return (
    <main
      className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      id="main-content"
    >
      <Reveal className="max-w-3xl">
        <Badge variant="success">来自一线实践的技术笔记</Badge>
        <h1 className="text-foreground mt-6 text-5xl font-bold tracking-[-0.04em] sm:text-6xl">
          写给实践者的技术文章
        </h1>
        <p className="text-muted-foreground mt-6 text-base leading-8 sm:text-lg">
          记录移动端工程、AI 产品体验和 Agent 工作流。内容优先服务于实践，也尽量解释方案背后的判断。
        </p>
        <div className="mt-7 flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge key={category} variant="outline">
              {category}
            </Badge>
          ))}
        </div>
      </Reveal>
      <section
        className="mt-16 grid gap-4 sm:mt-24 md:grid-cols-2 lg:grid-cols-3"
        aria-label="文章列表"
      >
        {posts.map((post, index) => (
          <Reveal delay={index * 0.05} key={post.slug}>
            <PostCard post={post} />
          </Reveal>
        ))}
      </section>
    </main>
  );
}
