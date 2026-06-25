import { SkillList, Timeline, TopNav } from "../components";

export default function ResumePage() {
  return (
    <main className="site-shell anime-shell">
      <TopNav />

      <section className="page-hero">
        <p className="eyebrow">Resume</p>
        <h1>履历</h1>
        <p>
          从 iOS 到跨端，从业务交付到体验优化。主线是企业级金融移动应用、长期项目迭代、稳定交付，以及最近半年持续深化的 AI Coding 实践。
        </p>
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
          <p>Skills</p>
          <h2>技术能力。</h2>
        </div>
        <SkillList />
      </section>
    </main>
  );
}
