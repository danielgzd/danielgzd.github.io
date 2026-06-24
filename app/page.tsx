import Link from "next/link";
import { SkillList, TopNav } from "./components";

const portals = [
  {
    href: "/resume",
    title: "履历",
    body: "10 年移动端开发经验，从 iOS、React Native 到金融业务长期迭代。",
  },
  {
    href: "/projects",
    title: "项目",
    body: "我的云、MSP、掌握、前端管理平台，以及早期硬件与地图类应用。",
  },
  {
    href: "/radar",
    title: "信息流",
    body: "AI、财经、动漫、展会、摄影、游戏、开发等兴趣雷达，每日自动刷新。",
  },
];

export default function Home() {
  return (
    <main className="site-shell anime-shell">
      <TopNav />

      <section className="hero compact-hero">
        <div className="hero-copy">
          <p className="eyebrow">iOS / Cross-platform / Product-minded Engineer</p>
          <h1>Daniel</h1>
          <p className="hero-text">
            2015 年入行，10 年开发经验，长期参与企业级金融、获客工具、硬件识别、地图定位和前端管理平台建设。这里保留简洁入口，详细内容拆到独立页面。
          </p>
          <div className="hero-actions">
            <a href="https://github.com/danielgzd">GitHub</a>
            <Link href="/resume">查看履历</Link>
          </div>
        </div>
        <aside className="profile-card anime-card" aria-label="profile snapshot">
          <div>
            <span>Focus</span>
            <strong>iOS、React Native、企业级移动应用</strong>
          </div>
          <div>
            <span>Style</span>
            <strong>重视体验、定位问题快、交付稳定</strong>
          </div>
          <div>
            <span>Radar</span>
            <strong>技术、动漫、展会、摄影和生活灵感</strong>
          </div>
        </aside>
      </section>

      <section className="section">
        <div className="section-title">
          <p>Index</p>
          <h2>内容分开看，信息更清楚。</h2>
        </div>
        <div className="portal-grid">
          {portals.map((item) => (
            <Link className="soft-panel portal-card" href={item.href} key={item.href}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <p>Stack</p>
          <h2>常用能力标签。</h2>
        </div>
        <SkillList />
      </section>
    </main>
  );
}
