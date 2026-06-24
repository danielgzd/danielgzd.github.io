import Image from "next/image";
import radar from "@/data/daily-headlines.json";

type RadarItem = {
  title: string;
  summary: string;
  source: string;
  url: string;
  image: string;
  time?: string;
};

type RadarCategory = {
  id: string;
  label: string;
  description: string;
  items: RadarItem[];
};

const skills = [
  "React / Next.js",
  "TypeScript",
  "Node.js 自动化",
  "移动端体验",
  "AI 工具链",
  "网络与规则",
  "GitHub Actions",
  "macOS 工作流",
];

const timeline = [
  {
    period: "现在",
    title: "工程效率与 AI 工作流",
    body: "把本地脚本、信息整理、通知渠道和 AI 助手组合成可持续运行的日常系统，关注真实效率而不是一次性演示。",
  },
  {
    period: "近年",
    title: "Web 与移动端交付",
    body: "参与企业级页面、移动端交互和后台系统建设，熟悉从需求拆解、接口联调、体验打磨到上线排障的完整路径。",
  },
  {
    period: "长期",
    title: "保持好奇的实践者",
    body: "喜欢拆解工具、搭建服务、整理规则，也愿意把汽车、数码、游戏、财经、AI 等兴趣持续沉淀成信息判断。",
  },
];

const practices = [
  {
    title: "自动化与个人信息中枢",
    body: "把重复的签到、通知、日报、巡检和资料收集做成稳定流程，让日常工作少一点摩擦。",
  },
  {
    title: "规则、网络与工具维护",
    body: "长期关注代理规则、客户端配置、家庭服务器和跨设备协同，追求能解释、可维护、真可用。",
  },
  {
    title: "AI 辅助工程实践",
    body: "把 Codex、命令行、浏览器和本地知识连起来，用 AI 做代码协作、排障、资料整理和快速原型。",
  },
];

const categories = radar.categories as RadarCategory[];

export default function Home() {
  return (
    <main className="site-shell">
      <nav className="top-nav">
        <a href="#top" className="brand">
          Daniel
        </a>
        <div>
          <a href="#about">关于</a>
          <a href="#work">履历</a>
          <a href="#radar">雷达</a>
        </div>
      </nav>

      <section id="top" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Engineer / Builder / Curious Operator</p>
          <h1>Daniel</h1>
          <p className="hero-text">
            一个偏实战的工程师，喜欢把前端体验、自动化脚本、网络工具和 AI 工作流整理成可以长期运转的系统。这里是我的个人主页，也是一份持续更新的信息雷达。
          </p>
          <div className="hero-actions">
            <a href="https://github.com/danielgzd">GitHub</a>
            <a href="#radar">查看今日信息</a>
          </div>
        </div>
        <aside className="profile-card" aria-label="profile snapshot">
          <div>
            <span>Focus</span>
            <strong>前端、自动化、AI 工作流</strong>
          </div>
          <div>
            <span>Style</span>
            <strong>先跑起来，再打磨成体系</strong>
          </div>
          <div>
            <span>Now</span>
            <strong>把兴趣和工程能力放在同一个页面里</strong>
          </div>
        </aside>
      </section>

      <section id="about" className="section">
        <div className="section-title">
          <p>About</p>
          <h2>轻量、务实、持续迭代。</h2>
        </div>
        <div className="about-grid">
          <p className="soft-panel intro">
            我更喜欢把复杂问题拆成清晰的小系统：用户路径、数据来源、自动化边界、异常处理和后续维护。写页面时在意体验，写脚本时在意稳定，做工具时在意它明天还会不会继续好用。
          </p>
          <div className="skill-list">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="section">
        <div className="section-title">
          <p>Resume</p>
          <h2>经历浓缩成几个关键词。</h2>
        </div>
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
      </section>

      <section className="section">
        <div className="section-title">
          <p>Practice</p>
          <h2>一些长期保留的实践方向。</h2>
        </div>
        <div className="practice-grid">
          {practices.map((item) => (
            <article className="soft-panel" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="radar" className="section radar-section">
        <div className="section-title compact">
          <p>Daily Radar</p>
          <h2>今日信息流</h2>
          <span>更新时间：{radar.updatedAt}，内容每天自动刷新，中文优先展示。</span>
        </div>

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
      </section>
    </main>
  );
}
