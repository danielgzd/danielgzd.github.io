# Daniel Personal Site

Daniel 的个人品牌、项目档案、技术博客与兴趣信息雷达。站点使用静态优先架构部署到 GitHub Pages，设计语言以 Dark First、清晰层级和克制动效为核心。

## Technology

- Next.js 16 App Router
- React 19 and TypeScript
- Tailwind CSS 4
- shadcn/ui conventions and Radix primitives
- Framer Motion and CSS View Timeline
- Lucide and Simple Icons
- MDX, Shiki, GFM and RSS
- GitHub Pages static export

## Routes

- `/` — 个人主页与精选内容
- `/projects` — 项目档案和静态 Case Study
- `/blog` — MDX 技术文章
- `/resume` — 工作经历、能力与简历下载
- `/radar` — 每六小时更新的兴趣信息流
- `/feed.xml` — 博客 RSS
- `/sitemap.xml` — 搜索引擎站点地图

## Structure

```text
app/          Routes, metadata and static endpoints
components/   Shared layout, motion and UI primitives
content/      MDX articles
data/         Profile, navigation, projects and radar data
features/     Page-level feature components
lib/          Content readers, site config and utilities
styles/       Design tokens
types/        Shared domain types
scripts/      Radar collection and update scripts
```

## Development

```bash
npm ci
npm run dev
```

Production validation:

```bash
npm run lint
npm run typecheck
npm run format:check
npm run build
npm run preview
```

## Writing

Blog posts live in `content/blog/*.mdx`. Frontmatter is the canonical source for listing pages, metadata, reading time and RSS.

```yaml
---
title: "Article title"
description: "Short search and social description"
publishedAt: "2026-07-21"
category: "AI"
tags:
  - Agent
  - Engineering
---
```

Use semantic headings without manual numbering. Add a language identifier to every fenced code block.

## Projects

Project metadata and Case Study content live in `data/projects.ts`. Enterprise projects intentionally omit private source and internal demo links.

## Daily Radar

Update the local radar dataset with:

```bash
npm run headlines:update
```

The scheduled GitHub workflow runs every six hours, validates and deduplicates links, retains the latest ten days, then triggers a Pages deployment.

## Deployment

Pushing to `gh-pages` triggers the GitHub Pages workflow. Next.js exports the complete site to `out/`; no runtime Node.js server is required.
