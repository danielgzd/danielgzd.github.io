import { HighlightGrid, PracticeGrid, SkillList, Timeline, TopNav } from "../components";

export default function ResumePage() {
  return (
    <main className="site-shell anime-shell">
      <TopNav />

      <section className="page-hero">
        <p className="eyebrow">Resume</p>
        <h1>履历</h1>
        <p>
          主线是金融科技、iOS 原生容器、Native + H5 混合架构、React/TypeScript 移动 H5，以及正在落地的 AI Coding 与业务 AI 能力。
        </p>
        <div className="hero-actions resume-actions">
          <a href="/Daniel-iOS-Resume-2026.md">Markdown 简历</a>
          <a href="mailto:daniel.gzd@outlook.com">联系我</a>
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <p>Highlights</p>
          <h2>先看重点。</h2>
        </div>
        <HighlightGrid />
      </section>

      <section className="section">
        <div className="section-title">
          <p>Experience</p>
          <h2>工作经历。</h2>
        </div>
        <Timeline />
      </section>

      <section className="section">
        <div className="section-title">
          <p>Projects</p>
          <h2>代表项目。</h2>
        </div>
        <PracticeGrid />
      </section>

      <section className="section">
        <div className="section-title">
          <p>Skills</p>
          <h2>技术能力。</h2>
        </div>
        <SkillList />
      </section>
    </main>
  );
}
