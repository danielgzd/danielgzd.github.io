import type { Metadata } from "next";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import radar from "@/data/daily-headlines.json";
import { RadarExplorer } from "@/features/radar/radar-explorer";

export const metadata: Metadata = {
  title: "每日雷达",
  description: "Daniel 的 AI、市场、科技、开发与生活兴趣信息雷达。",
  alternates: { canonical: "/radar" },
};

export default function RadarPage() {
  return (
    <main
      className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      id="main-content"
    >
      <Reveal className="max-w-3xl">
        <Badge variant="success">Updated {radar.updatedAt}</Badge>
        <h1 className="text-foreground mt-6 text-5xl font-bold tracking-[-0.04em] sm:text-6xl">
          Signals, not noise.
        </h1>
        <p className="text-muted-foreground mt-6 text-base leading-8 sm:text-lg">
          聚合 AI、市场、科技、开发、摄影与生活灵感。每六小时整理一次，保留值得继续阅读的线索。
        </p>
      </Reveal>
      <section className="mt-14 sm:mt-20" aria-label="每日信息流">
        <RadarExplorer />
      </section>
    </main>
  );
}
