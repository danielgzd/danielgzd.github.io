"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNavigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

type NavigationLinksProps = {
  mobile?: boolean;
  onNavigate?: () => void;
};

export function NavigationLinks({ mobile = false, onNavigate }: NavigationLinksProps) {
  const pathname = usePathname();

  return (
    <nav
      aria-label={mobile ? "移动端主导航" : "主导航"}
      className={cn(mobile ? "grid gap-2" : "flex items-center gap-1")}
    >
      {primaryNavigation.map((item) => {
        const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        return (
          <Link
            aria-current={active ? "page" : undefined}
            className={cn(
              "focus-visible:ring-ring rounded-lg text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none",
              mobile ? "px-4 py-3 text-base" : "px-3 py-2",
              active
                ? "bg-muted text-foreground"
                : "text-muted-foreground hover:bg-muted/70 hover:text-foreground",
            )}
            href={item.href}
            key={item.href}
            onClick={onNavigate}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
