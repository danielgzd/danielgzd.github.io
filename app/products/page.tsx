import type { Metadata } from "next";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { PageContainer } from "@/components/layout/page-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { ProductMark } from "@/features/products/product-mark";

export const metadata: Metadata = {
  title: "产品中心",
  description: "浏览 Daniel Products 的 macOS、iOS 与 iPadOS 原生生产力工具。",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <main id="main-content">
      <section className="product-page-hero border-border border-b">
        <PageContainer className="py-20 sm:py-28">
          <Badge variant="success">Daniel Products</Badge>
          <h1 className="text-foreground mt-6 max-w-4xl text-5xl font-black tracking-[-0.05em] sm:text-7xl">
            小而专注的工具，
            <span className="product-gradient-text">解决每天都会遇到的问题。</span>
          </h1>
          <p className="text-muted-foreground mt-7 max-w-2xl text-base leading-8 sm:text-lg">
            产品按独立路由、版本和下载渠道维护。后续新增软件时，可以直接扩展产品数据而无需重做站点结构。
          </p>
        </PageContainer>
      </section>

      <PageContainer className="py-16 sm:py-24">
        <div className="grid gap-6">
          {products.map((product, index) => (
            <article
              className={`product-list-card product-card-${product.accent}`}
              key={product.slug}
            >
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex max-w-3xl flex-col gap-6 sm:flex-row">
                  <ProductMark className="size-20 text-2xl" product={product} />
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-primary font-mono text-xs">0{index + 1}</span>
                      <Badge variant="secondary">{product.category}</Badge>
                      <span className="text-muted-foreground text-sm">{product.version}</span>
                    </div>
                    <h2 className="text-foreground mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                      {product.name}
                    </h2>
                    <p className="text-muted-foreground mt-4 text-base leading-8">
                      {product.introduction}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {product.platforms.map((platform) => (
                        <span className="product-chip" key={platform}>
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex shrink-0 flex-wrap gap-3 lg:flex-col">
                  <Button asChild size="lg">
                    <Link href={`/products/${product.slug}`}>
                      产品详情 <ArrowRight />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href={product.downloads[0].href}>
                      下载 <Download />
                    </Link>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </PageContainer>
    </main>
  );
}
