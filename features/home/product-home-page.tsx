import { ArrowRight, Download, ShieldCheck, Sparkles, Zap } from "lucide-react";
import Link from "next/link";
import { PageContainer } from "@/components/layout/page-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProductMark } from "@/features/products/product-mark";
import { products } from "@/data/products";

export function ProductHomePage() {
  return (
    <main id="main-content">
      <section className="product-hero overflow-hidden border-b border-white/10">
        <PageContainer className="grid min-h-[46rem] items-center gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative z-10 max-w-3xl">
            <Badge className="mb-7 border-white/15 bg-white/8 text-white" variant="outline">
              Daniel Products · 原生工具实验室
            </Badge>
            <h1 className="max-w-3xl text-5xl font-black tracking-[-0.06em] text-balance text-white sm:text-7xl lg:text-[5.4rem] lg:leading-[0.98]">
              把日常工具，
              <span className="product-gradient-text">做得更快一点。</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
              为 macOS 与 Apple
              平台打造简洁、可靠、尊重隐私的生产力软件。每个产品独立迭代，也共享一致的设计与质量标准。
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="bg-white text-black hover:bg-zinc-200" size="lg">
                <Link href="/products">
                  浏览全部产品 <ArrowRight />
                </Link>
              </Button>
              <Button
                asChild
                className="border-white/20 bg-white/5 text-white hover:bg-white/10"
                size="lg"
                variant="outline"
              >
                <Link href="/downloads">
                  <Download /> 下载中心
                </Link>
              </Button>
            </div>
          </div>

          <div aria-label="当前产品" className="product-stage relative min-h-[31rem]">
            <div className="product-stage-grid absolute inset-0" />
            {products.map((product, index) => (
              <Link
                className={`product-float-card product-float-card-${index + 1} group`}
                href={`/products/${product.slug}`}
                key={product.slug}
              >
                <div className="flex items-start justify-between gap-4">
                  <ProductMark className="size-16" product={product} />
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">
                    {product.version}
                  </span>
                </div>
                <div className="mt-12">
                  <p className="text-xs font-semibold tracking-[0.16em] text-zinc-500 uppercase">
                    {product.category}
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-white">{product.name}</h2>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">{product.description}</p>
                </div>
              </Link>
            ))}
            <div className="product-orbit" />
          </div>
        </PageContainer>
      </section>

      <PageContainer>
        <section className="py-20 sm:py-28" aria-labelledby="products-heading">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-primary text-sm font-bold tracking-[0.16em] uppercase">Products</p>
              <h2
                className="text-foreground mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl"
                id="products-heading"
              >
                两款产品，各自解决一个具体问题
              </h2>
            </div>
            <Link
              className="text-primary flex items-center gap-2 text-sm font-semibold"
              href="/products"
            >
              产品中心 <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {products.map((product) => (
              <article className={`product-card product-card-${product.accent}`} key={product.slug}>
                <div className="flex items-center gap-4">
                  <ProductMark product={product} />
                  <div>
                    <p className="text-muted-foreground text-xs font-semibold tracking-[0.14em] uppercase">
                      {product.category}
                    </p>
                    <h3 className="text-foreground mt-1 text-2xl font-bold">{product.name}</h3>
                  </div>
                </div>
                <p className="text-muted-foreground mt-8 max-w-xl text-base leading-8">
                  {product.introduction}
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {product.platforms.map((platform) => (
                    <span className="product-chip" key={platform}>
                      {platform}
                    </span>
                  ))}
                </div>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Button asChild>
                    <Link href={`/products/${product.slug}`}>
                      了解产品 <ArrowRight />
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href={product.downloads[0].href}>
                      立即下载 <Download />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="border-border bg-border grid gap-px overflow-hidden rounded-2xl border md:grid-cols-3"
          aria-label="产品原则"
        >
          {[
            {
              icon: Zap,
              title: "原生性能",
              body: "围绕系统能力构建，减少等待和无意义的后台负担。",
            },
            {
              icon: ShieldCheck,
              title: "本地优先",
              body: "能在设备完成的处理留在设备，清楚说明必要的数据行为。",
            },
            { icon: Sparkles, title: "克制设计", body: "常用操作一步可达，复杂能力在需要时出现。" },
          ].map(({ icon: Icon, title, body }) => (
            <div className="bg-card p-7 sm:p-9" key={title}>
              <Icon className="text-primary size-6" />
              <h3 className="text-foreground mt-12 text-xl font-bold">{title}</h3>
              <p className="text-muted-foreground mt-3 text-sm leading-7">{body}</p>
            </div>
          ))}
        </section>

        <section className="bg-foreground text-background my-20 flex flex-col gap-7 rounded-3xl px-7 py-10 sm:my-28 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <div>
            <p className="text-sm font-bold tracking-[0.14em] uppercase opacity-60">Developer</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight">由 Daniel 独立设计与开发</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 opacity-70">
              了解开发经历、技术能力和项目实践。
            </p>
          </div>
          <Button
            asChild
            className="bg-background text-foreground hover:bg-background/90 shrink-0"
            size="lg"
          >
            <Link href="/resume">
              查看开发者履历 <ArrowRight />
            </Link>
          </Button>
        </section>
      </PageContainer>
    </main>
  );
}
