import { getAllPosts } from "@/lib/posts";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

function escapeXml(value: string) {
  return value.replace(
    /[<>&'"]/g,
    (character) =>
      ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" })[character] ??
      character,
  );
}

export function GET() {
  const posts = getAllPosts();
  const items = posts
    .map(
      (post) => `<item>
    <title>${escapeXml(post.title)}</title>
    <link>${siteConfig.url}/blog/${post.slug}</link>
    <guid>${siteConfig.url}/blog/${post.slug}</guid>
    <description>${escapeXml(post.description)}</description>
    <pubDate>${new Date(`${post.publishedAt}T00:00:00+08:00`).toUTCString()}</pubDate>
    <category>${escapeXml(post.category)}</category>
  </item>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(siteConfig.name)} Blog</title>
    <link>${siteConfig.url}/blog</link>
    <description>${escapeXml(siteConfig.description)}</description>
    <language>zh-CN</language>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
