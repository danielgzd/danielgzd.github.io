import { GitBranch, Mail, Rss } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { PageContainer } from "./page-container";

const footerLinks = [
  { href: siteConfig.links.github, label: "GitHub", icon: GitBranch },
  { href: siteConfig.links.email, label: "Email", icon: Mail },
  { href: "/feed.xml", label: "RSS", icon: Rss },
];

export function SiteFooter() {
  return (
    <footer className="border-border mt-20 border-t font-sans">
      <PageContainer className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-foreground text-sm font-medium">Daniel Gao</p>
          <p className="text-muted-foreground mt-1 text-sm">
            Build thoughtful products with Swift, Web &amp; AI.
          </p>
        </div>
        <div className="flex items-center gap-1">
          {footerLinks.map(({ href, icon: Icon, label }) => (
            <Link
              className="text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:ring-ring flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors focus-visible:ring-2 focus-visible:outline-none"
              href={href}
              key={label}
            >
              <Icon aria-hidden="true" className="size-4" /> {label}
            </Link>
          ))}
        </div>
      </PageContainer>
    </footer>
  );
}
