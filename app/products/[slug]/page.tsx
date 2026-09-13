import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Download,
  ExternalLink,
  GitBranch,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageContainer } from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";
import { getProduct, products } from "@/data/products";
import { ProductMark } from "@/features/products/product-mark";

type ProductPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProduct((await params).slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.introduction,
    alternates: { canonical: `/products/${product.slug}` },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = getProduct((await params).slug);
  if (!product) notFound();

  return (
    <main id="main-content">
      <section className={`product-detail-hero product-detail-${product.accent}`}>
        <PageContainer className="relative py-16 sm:py-24">
          <Link
            className="mb-12 inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white"
            href="/products"
          >
            <ArrowLeft className="size-4" /> 返回产品中心
          </Link>
          <div className="grid gap-12 lg:grid-cols-[1fr_0.72fr] lg:items-center">
            <div>
              <div className="flex items-center gap-5">
                <ProductMark className="size-20 text-2xl" product={product} />
                <div>
                  <p className="text-sm font-bold tracking-[0.15em] text-zinc-400 uppercase">
                    {product.category}
                  </p>
                  <p className="mt-2 text-sm text-zinc-500">
                    {product.version} · {product.status}
                  </p>
                </div>
              </div>
              <h1 className="mt-9 text-5xl font-black tracking-[-0.055em] text-white sm:text-7xl">
                {product.name}
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg">
                {product.introduction}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="bg-white text-black hover:bg-zinc-200" size="lg">
                  <Link href={product.downloads[0].href}>
                    <Download /> {product.downloads[0].label}
                  </Link>
                </Button>
                <Button
                  asChild
                  className="border-white/20 bg-white/5 text-white hover:bg-white/10"
                  size="lg"
                  variant="outline"
                >
                  <Link href={product.releaseUrl}>
                    版本说明 <ExternalLink />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="product-terminal-card">
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
                <span className="size-2 rounded-full bg-[#ff5f57]" />
                <span className="size-2 rounded-full bg-[#febc2e]" />
                <span className="size-2 rounded-full bg-[#28c840]" />
                <span className="ml-auto font-mono text-xs text-zinc-500">{product.slug}.app</span>
              </div>
              <div className="space-y-5 p-6 font-mono text-sm">
                {product.workflow.map((step, index) => (
                  <div className="flex items-center gap-4" key={step}>
                    <span className="text-zinc-600">{String(index + 1).padStart(2, "0")}</span>
                    <span className="text-zinc-200">{step}</span>
                    {index < product.workflow.length - 1 && (
                      <ArrowRight className="ml-auto size-4 text-zinc-600" />
                    )}
                    {index === product.workflow.length - 1 && (
                      <Check className="ml-auto size-4 text-cyan-400" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      <PageContainer className="py-20 sm:py-28">
        <section aria-labelledby="feature-heading">
          <p className="text-primary text-sm font-bold tracking-[0.16em] uppercase">Capabilities</p>
          <h2
            className="text-foreground mt-3 text-4xl font-black tracking-tight"
            id="feature-heading"
          >
            核心能力
          </h2>
          <div className="border-border bg-border mt-10 grid gap-px overflow-hidden rounded-2xl border md:grid-cols-2">
            {product.features.map((feature, index) => (
              <article className="bg-card p-7 sm:p-9" key={feature.title}>
                <span className="text-primary font-mono text-xs">0{index + 1}</span>
                <h3 className="text-foreground mt-9 text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground mt-3 text-sm leading-7">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <div className="border-border bg-card rounded-2xl border p-7 sm:p-9">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-primary size-6" />
              <h2 className="text-foreground text-2xl font-bold">隐私与系统要求</h2>
            </div>
            <p className="text-muted-foreground mt-6 text-base leading-8">{product.privacy}</p>
            <p className="text-muted-foreground mt-3 text-sm">系统要求：{product.requirements}</p>
          </div>
          <div className="border-border bg-muted/40 rounded-2xl border p-7 sm:p-9">
            <h2 className="text-foreground text-2xl font-bold">项目与版本</h2>
            <p className="text-muted-foreground mt-4 text-sm leading-7">
              查看当前版本说明、已知限制和公开代码。
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild variant="outline">
                <Link href={product.sourceUrl}>
                  <GitBranch /> {product.sourceLabel}
                </Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="/downloads">
                  全部下载 <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </PageContainer>
    </main>
  );
}
