import { PracticeGrid, TopNav } from "../components";

export default function ProjectsPage() {
  return (
    <main className="site-shell anime-shell">
      <TopNav />

      <section className="page-hero">
        <p className="eyebrow">Projects</p>
        <h1>项目</h1>
        <p>
          更具体的项目经历。重点是“我的云”长期迭代，也包括 MSP、掌握、前端管理平台与早期硬件/地图类应用。
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
