"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const Sheet = Dialog.Root;
const SheetTrigger = Dialog.Trigger;
const SheetClose = Dialog.Close;

function SheetContent({ className, children, ...props }: ComponentProps<typeof Dialog.Content>) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="data-[state=closed]:animate-out data-[state=open]:animate-in fixed inset-0 z-50 bg-black/70 backdrop-blur-sm" />
      <Dialog.Content
        className={cn(
          "border-border bg-background fixed inset-y-0 right-0 z-50 w-[min(88vw,22rem)] border-l p-6 shadow-2xl outline-none",
          className,
        )}
        {...props}
      >
        {children}
        <Dialog.Close className="text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:ring-ring absolute top-4 right-4 grid size-10 place-items-center rounded-lg transition-colors focus-visible:ring-2 focus-visible:outline-none">
          <X aria-hidden="true" className="size-5" />
          <span className="sr-only">关闭导航</span>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  );
}

const SheetTitle = Dialog.Title;
const SheetDescription = Dialog.Description;

export { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger };
