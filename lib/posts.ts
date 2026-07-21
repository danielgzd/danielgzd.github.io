import fs from "node:fs";
import path from "node:path";
import GithubSlugger from "github-slugger";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { Post, PostFrontmatter, TableOfContentsItem } from "@/types/post";

const postsDirectory = path.join(process.cwd(), "content/blog");

function getTableOfContents(content: string): TableOfContentsItem[] {
  const slugger = new GithubSlugger();
  return [...content.matchAll(/^(#{2,3})\s+(.+)$/gm)].map((match) => {
    const title = match[2].replace(/[`*_]/g, "").trim();
    return { id: slugger.slug(title), title, level: match[1].length as 2 | 3 };
  });
}

function readPost(filename: string): Post {
  const slug = filename.replace(/\.mdx$/, "");
  const source = fs.readFileSync(path.join(postsDirectory, filename), "utf8");
  const { content, data } = matter(source);
  const frontmatter = data as PostFrontmatter;

  return {
    ...frontmatter,
    slug,
    content,
    readingTime: `${Math.max(1, Math.ceil(readingTime(content).minutes))} 分钟阅读`,
    tableOfContents: getTableOfContents(content),
  };
}

export function getAllPosts() {
  return fs
    .readdirSync(postsDirectory)
    .filter((filename) => filename.endsWith(".mdx"))
    .map(readPost)
    .filter((post) => !post.draft)
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));
}

export function getPost(slug: string) {
  const filename = `${slug}.mdx`;
  return fs.existsSync(path.join(postsDirectory, filename)) ? readPost(filename) : undefined;
}

export function formatPostDate(date: string) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Shanghai",
  }).format(new Date(`${date}T00:00:00+08:00`));
}
