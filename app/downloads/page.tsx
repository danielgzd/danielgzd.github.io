import type { Metadata } from "next";
import { Download, ExternalLink, MonitorDown } from "lucide-react";
import Link from "next/link";
import { PageContainer } from "@/components/layout/page-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { ProductMark } from "@/features/products/product-mark";

export const metadata: Metadata = {
  title: "下载中心",
  description: "下载 Daniel Products 的最新 macOS、iOS 与 iPadOS 版本。",
  alternates: { canonical: "/downloads" },
};

export default function DownloadsPage() {
  return (
    <main id="main-content">
      <PageContainer className="py-16 sm:py-24">
        <Badge variant="success">
          <MonitorDown className="size-3.5" /> 下载中心
        </Badge>
        <h1 className="text-foreground mt-6 max-w-4xl text-5xl font-black tracking-[-0.05em] sm:text-7xl">
          获取最新版本
        </h1>
        <p className="text-muted-foreground mt-6 max-w-2xl text-base leading-8 sm:text-lg">
          请选择适合设备的安装包。测试包会明确标注签名状态，正式版本上线后将在这里提供稳定下载渠道。
        </p>

        <div className="mt-14 grid gap-6">
          {products.map((product) => (
            <section
              className="border-border bg-card rounded-2xl border p-6 sm:p-8"
              key={product.slug}
            >
              <div className="flex flex-col gap-7 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex gap-4">
                  <ProductMark product={product} />
                  <div>
                    <h2 className="text-foreground text-2xl font-bold">{product.name}</h2>
                    <p className="text-muted-foreground mt-1 text-sm">
                      {product.version} · {product.requirements}
                    </p>
                  </div>
                </div>
                <Button asChild variant="ghost">
                  <Link href={`/products/${product.slug}`}>
                    产品详情 <ExternalLink />
                  </Link>
                </Button>
              </div>
              <div className="mt-8 grid gap-3 md:grid-cols-2">
                {product.downloads.map((download) => (
                  <Link className="download-option group" href={download.href} key={download.label}>
                    <span>
                      <strong className="text-foreground block text-base">{download.label}</strong>
                      <span className="text-muted-foreground mt-1 block text-sm">
                        {download.detail}
                      </span>
                    </span>
                    <Download className="text-primary size-5 transition-transform group-hover:translate-y-0.5" />
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="border-border text-muted-foreground mt-10 border-t pt-7 text-sm leading-7">
          macOS 显示“无法验证开发者”时，请先确认下载来源和版本说明。未签名 iOS / iPadOS IPA
          需要开发者自行签名，不能直接安装到真机。
        </div>
      </PageContainer>
    </main>
  );
}
