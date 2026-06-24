import { RadarHeading, RadarTabs, TopNav } from "../components";

export default function RadarPage() {
  return (
    <main className="site-shell anime-shell">
      <TopNav />

      <section className="page-hero">
        <p className="eyebrow">Daily Radar</p>
        <h1>今日信息流</h1>
        <p>
          技术之外，也收集动漫、展会、汉服、摄影、人物、风景和生活灵感。这里更像一个轻量兴趣看板。
        </p>
      </section>

      <section className="section radar-section">
        <RadarHeading />
        <RadarTabs />
      </section>
    </main>
  );
}
