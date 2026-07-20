import Image from "next/image";
import Link from "next/link";
import radar from "@/data/daily-headlines.json";
import { practices, resumeHighlights, skills, timeline, type RadarCategory } from "./content";

const categories = radar.categories as RadarCategory[];

export function TopNav() {
  return (
    <header className="site-header">
      <nav className="top-nav" aria-label="主导航">
        <Link href="/" className="brand" aria-label="Daniel 首页">
          <span className="brand-mark">D</span>
          <span className="brand-copy">
            <strong>Daniel</strong>
            <small>Engineer &amp; Builder</small>
          </span>
        </Link>
        <div className="nav-links">
          <Link href="/resume">履历</Link>
          <Link href="/projects">项目</Link>
          <Link href="/radar">雷达</Link>
        </div>
      </nav>
    </header>
  );
}

export function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <span key={skill}>{skill}</span>
      ))}
    </div>
  );
}

export function HighlightGrid() {
  return (
    <div className="highlight-grid">
      {resumeHighlights.map((item) => (
        <article className="soft-panel highlight-card" key={item.label}>
          <strong>{item.value}</strong>
          <h3>{item.label}</h3>
          <p>{item.body}</p>
        </article>
      ))}
    </div>
  );
}

export function Timeline() {
  return (
    <div className="timeline">
      {timeline.map((item) => (
        <article key={item.title}>
          <time>{item.period}</time>
          <div>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export function PracticeGrid() {
  return (
    <div className="practice-grid">
      {practices.map((item) => (
        <article className="soft-panel" key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </article>
      ))}
    </div>
  );
}

export function RadarTabs() {
  return (
    <div className="radar-tabs">
      {categories.map((category, index) => (
        <input
          aria-label={category.label}
          defaultChecked={index === 0}
          id={`tab-${category.id}`}
          key={category.id}
          name="radar-tab"
          type="radio"
        />
      ))}

      <div className="tab-labels">
        {categories.map((category) => (
          <label htmlFor={`tab-${category.id}`} key={category.id}>
            {category.label}
          </label>
        ))}
      </div>

      {categories.map((category) => (
        <div className="tab-panel" data-panel={category.id} key={category.id}>
          <div className="panel-note">{category.description}</div>
          <div className="news-grid">
            {category.items.map((item) => (
              <a className="news-card" href={item.url} key={`${category.id}-${item.url}`}>
                <Image
                  alt={item.title}
                  height={600}
                  loading="eager"
                  src={item.image}
                  unoptimized
                  width={960}
                />
                <div>
                  <span>
                    {item.source}
                    {item.time ? ` / ${item.time}` : ""}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function RadarHeading() {
  return (
    <div className="section-title compact">
      <p>Daily Radar</p>
      <h2>今日信息流</h2>
      <span>更新时间：{radar.updatedAt}，每 6 小时追加刷新，保留近 10 天有效内容，中文优先展示。</span>
    </div>
  );
}
