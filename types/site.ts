export type SocialLinks = {
  email: `mailto:${string}`;
  github: `https://${string}`;
  rss: `https://${string}`;
  x?: `https://${string}`;
  linkedin?: `https://${string}`;
};

export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  url: `https://${string}`;
  locale: string;
  links: SocialLinks;
};
