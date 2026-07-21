"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavigationLinks } from "./navigation-links";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet onOpenChange={setOpen} open={open}>
      <SheetTrigger asChild>
        <Button aria-label="打开导航" size="icon" type="button" variant="ghost">
          <Menu aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetTitle className="text-foreground text-lg font-semibold">Daniel</SheetTitle>
        <SheetDescription className="text-muted-foreground mt-1 text-sm">
          iOS 开发者 · AI 产品构建者
        </SheetDescription>
        <div className="mt-8">
          <NavigationLinks mobile onNavigate={() => setOpen(false)} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
