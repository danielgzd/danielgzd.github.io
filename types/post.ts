export type PostFrontmatter = {
  title: string;
  description: string;
  publishedAt: string;
  category: "AI" | "iOS" | "Swift" | "Engineering";
  tags: string[];
  draft?: boolean;
};

export type TableOfContentsItem = {
  id: string;
  title: string;
  level: 2 | 3;
};

export type Post = PostFrontmatter & {
  slug: string;
  content: string;
  readingTime: string;
  tableOfContents: TableOfContentsItem[];
};
