import Link from "next/link";
import { PageContainer } from "./page-container";
import { MobileNav } from "./mobile-nav";
import { NavigationLinks } from "./navigation-links";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <header className="border-border bg-background/80 supports-[backdrop-filter]:bg-background/70 sticky top-0 z-40 border-b font-sans backdrop-blur-xl">
      <PageContainer className="flex h-16 items-center justify-between">
        <Link
          className="group focus-visible:ring-ring flex items-center gap-3 rounded-lg focus-visible:ring-2 focus-visible:outline-none"
          href="/"
        >
          <span className="brand-mark grid size-9 place-items-center text-sm font-black text-white transition-transform group-hover:scale-105">
            D/
          </span>
          <span className="hidden leading-tight sm:block">
            <strong className="text-foreground block text-sm font-bold">Daniel Products</strong>
            <small className="text-muted-foreground block text-xs">独立软件工作室</small>
          </span>
        </Link>

        <div className="flex items-center gap-1">
          <div className="hidden md:block">
            <NavigationLinks />
          </div>
          <ThemeToggle />
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </PageContainer>
    </header>
  );
}
