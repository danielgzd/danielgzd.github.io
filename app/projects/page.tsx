import { PracticeGrid, TopNav } from "../components";

export default function ProjectsPage() {
  return (
    <main className="site-shell anime-shell">
      <TopNav />

      <section className="page-hero">
        <p className="eyebrow">Projects</p>
        <h1>项目</h1>
        <p>
          重点展示“我的云”iOS 原生容器与 H5 外勤平台的长期贡献，也包括 AI 问答/对练、作战地图、实时获客、MSP Pad、掌握和早期硬件/地图类应用。
        </p>
      </section>

      <section className="section">
        <div className="section-title">
          <p>Practice</p>
          <h2>长期项目和代表实践。</h2>
        </div>
        <PracticeGrid />
      </section>
    </main>
  );
}
