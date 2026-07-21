export type RadarItem = {
  title: string;
  summary: string;
  source: string;
  url: string;
  image: string;
  time?: string;
};

export type RadarCategory = {
  id: string;
  label: string;
  description: string;
  items: RadarItem[];
};

export type RadarData = {
  updatedAt: string;
  categories: RadarCategory[];
};
