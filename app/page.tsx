import Link from "next/link";
import { SkillList, TopNav } from "./components";

const portals = [
  {
    href: "/resume",
    title: "履历",
    body: "10 年移动端开发，聚焦金融科技、iOS 原生容器、混合架构、React/TS 移动 H5 和 AI 落地。",
  },
  {
    href: "/projects",
    title: "项目",
    body: "我的云 iOS/H5、AI 问答与对练、作战地图、实时获客、MSP Pad 和掌握。",
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
            2015 年入行，10 年移动端开发经验。长期主力参与招商银行“我的云”iOS 原生容器与 H5 外勤平台建设，覆盖 Native + H5、React/TypeScript、地图定位、OCR/活体检测、数据看板和 AI 问答/对练能力。
          </p>
          <div className="hero-actions">
            <a href="https://github.com/danielgzd">GitHub</a>
            <Link href="/resume">查看履历</Link>
          </div>
        </div>
        <aside className="profile-card anime-card" aria-label="profile snapshot">
          <div>
            <span>Focus</span>
            <strong>iOS 容器、混合架构、React/TS 移动 H5、AI Coding</strong>
          </div>
          <div>
            <span>Style</span>
            <strong>熟悉金融业务、问题定位扎实、长期项目交付稳定</strong>
          </div>
          <div>
            <span>Impact</span>
            <strong>我的云 iOS 1,990 次提交，H5 2,194 次提交</strong>
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
