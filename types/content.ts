export type ProjectLink = {
  demo?: string;
  github?: string;
};

export type ProjectCategory = "Mobile" | "AI" | "Web" | "Automation";

export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  category: ProjectCategory;
  period: string;
  role: string;
  metric: string;
  icon:
    | "smartphone"
    | "sparkles"
    | "map"
    | "credit-card"
    | "layers"
    | "car"
    | "workflow"
    | "radar"
    | "code";
  featured?: boolean;
  links?: ProjectLink;
  challenge: string;
  solution: string;
  outcome: string;
  highlights: string[];
};

export type TimelineEntry = {
  period: string;
  title: string;
  body: string;
};
