import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { formatPostDate } from "@/lib/posts";
import type { Post } from "@/types/post";

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      className="group focus-visible:ring-ring block h-full rounded-xl focus-visible:ring-2 focus-visible:outline-none"
      href={`/blog/${post.slug}`}
    >
      <Card className="group-hover:border-primary/35 group-hover:shadow-primary/5 flex h-full min-h-72 flex-col p-6 transition-[transform,border-color,box-shadow] duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl sm:p-7">
        <div className="flex items-center justify-between gap-4">
          <Badge variant={post.category === "AI" ? "success" : "secondary"}>{post.category}</Badge>
          <span className="text-muted-foreground text-xs">{post.readingTime}</span>
        </div>
        <h2 className="text-foreground group-hover:text-primary mt-8 text-2xl font-semibold tracking-tight transition-colors">
          {post.title}
        </h2>
        <p className="text-muted-foreground mt-4 text-sm leading-7">{post.description}</p>
        <div className="mt-auto flex items-end justify-between gap-4 pt-8">
          <time className="text-muted-foreground text-xs" dateTime={post.publishedAt}>
            {formatPostDate(post.publishedAt)}
          </time>
          <ArrowUpRight className="text-muted-foreground group-hover:text-primary size-5 transition-[color,transform] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </Card>
    </Link>
  );
}
