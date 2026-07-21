import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { getAllPosts } from "@/lib/posts";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/projects", "/blog", "/resume", "/radar"].map((pagePath) => ({
    url: `${siteConfig.url}${pagePath}`,
    lastModified: new Date(),
    changeFrequency: pagePath === "/radar" ? ("daily" as const) : ("monthly" as const),
    priority: pagePath === "" ? 1 : 0.8,
  }));
  const projectPages = projects.map((project) => ({
    url: `${siteConfig.url}/projects/${project.slug}`,
    lastModified: new Date("2026-07-21"),
    changeFrequency: "monthly" as const,
    priority: project.featured ? 0.8 : 0.6,
  }));
  const postPages = getAllPosts().map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(`${post.publishedAt}T00:00:00+08:00`),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));
  return [...staticPages, ...projectPages, ...postPages];
}
