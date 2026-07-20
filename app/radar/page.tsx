import { RadarHeading, RadarTabs, TopNav } from "../components";

export default function RadarPage() {
  return (
    <main className="site-shell anime-shell">
      <TopNav />

      <section className="page-hero">
        <p className="eyebrow">Daily Radar</p>
        <h1>今日信息流</h1>
        <p>
          聚合 A 股、美股、中东局势与科技趋势，也收集动漫、摄影和生活灵感。每六小时整理一次，只保留值得继续阅读的线索。
        </p>
      </section>

      <section className="section radar-section">
        <RadarHeading />
        <RadarTabs />
      </section>
    </main>
  );
}
