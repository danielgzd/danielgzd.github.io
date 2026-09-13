import { cn } from "@/lib/utils";
import type { Product } from "@/types/product";

export function ProductMark({ product, className }: { product: Product; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "product-mark grid size-14 shrink-0 place-items-center text-lg font-black tracking-[-0.08em] text-white",
        product.accent === "violet" ? "product-mark-violet" : "product-mark-cyan",
        className,
      )}
    >
      {product.monogram}
    </span>
  );
}
