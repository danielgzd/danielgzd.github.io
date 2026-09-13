import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { products } from "@/data/products";
import { siteConfig } from "@/lib/site-config";
import { geistSans } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: siteConfig.title, template: "%s | Daniel" },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  keywords: [
    "Daniel Products",
    "LumaCapture",
    "MarkdownTextTool",
    "macOS 截图",
    "macOS 录屏",
    "Markdown 编辑器",
    "Swift",
  ],
  authors: [{ name: "Daniel Gao", url: siteConfig.url }],
  creator: "Daniel Gao",
  alternates: { types: { "application/rss+xml": "/feed.xml" } },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Daniel — iOS Developer & AI Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} bg-background text-foreground min-h-screen antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
          enableSystem={false}
        >
          <script
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                  {
                    "@type": "Organization",
                    name: siteConfig.name,
                    url: siteConfig.url,
                    founder: {
                      "@type": "Person",
                      name: "Daniel Gao",
                      url: `${siteConfig.url}/resume`,
                    },
                    sameAs: [siteConfig.links.github],
                  },
                  ...products.map((product) => ({
                    "@type": "SoftwareApplication",
                    name: product.name,
                    url: `${siteConfig.url}/products/${product.slug}`,
                    operatingSystem: product.platforms.join(", "),
                    applicationCategory: "ProductivityApplication",
                    description: product.description,
                  })),
                ],
              }).replace(/</g, "\\u003c"),
            }}
            type="application/ld+json"
          />
          <a className="skip-link" href="#main-content">
            跳到主要内容
          </a>
          <SiteHeader />
          {children}
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
