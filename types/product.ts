export type ProductDownload = {
  label: string;
  detail: string;
  href: string;
  primary?: boolean;
};

export type Product = {
  slug: string;
  name: string;
  monogram: string;
  category: string;
  version: string;
  status: string;
  description: string;
  introduction: string;
  platforms: string[];
  requirements: string;
  accent: "violet" | "cyan";
  features: Array<{ title: string; description: string }>;
  workflow: string[];
  downloads: ProductDownload[];
  releaseUrl: string;
  sourceUrl: string;
  sourceLabel: string;
  privacy: string;
};
