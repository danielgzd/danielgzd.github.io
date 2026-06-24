import Image from "next/image";
import headlines from "@/data/daily-headlines.json";

type Headline = {
  title: string;
  source: string;
  category: string;
  summary: string;
  url: string;
  image: string;
};

const skills = [
  "前端工程",
  "React / Next.js",
  "Node.js 自动化",
  "iOS 生态",
  "代理网络与规则",
  "效率工具",
  "脚本编排",
  "AI 工作流",
];

const timeline = [
  {
    period: "现在",
    title: "把复杂工具链变成可复用系统",
    body: "持续打磨个人自动化、信息聚合、代理规则、远程运维和 AI 助手工作流，目标是让机器替人记住细节，让人专注判断。",
  },
  {
    period: "近年",
    title: "业务研发与工程交付",
    body: "参与企业级 Web、移动端与后台系统建设，熟悉从需求拆解、接口协作、页面体验到上线排障的一整套节奏。",
  },
  {
    period: "长期",
    title: "跨端折腾派工程师",
    body: "从 iOS、前端、脚本到家庭服务器和网络工具都愿意动手，喜欢把兴趣项目做成真正能每天跑起来的东西。",
  },
];

const projects = [
  {
    name: "个人自动化中枢",
    desc: "把签到、通知、日报、系统巡检、信息收集等流程串起来，减少重复操作，提升日常掌控感。",
    tags: ["Node", "Shell", "LaunchAgent"],
  },
  {
    name: "代理规则与网络工具",
    desc: "维护面向 Clash、Loon、Shadowrocket 等客户端的规则与配置，关注可读性、可维护性和真实可用性。",
    tags: ["Clash", "Rules", "GitHub Actions"],
  },
  {
    name: "AI 辅助工程工作台",
    desc: "把 Codex、命令行、浏览器、通知渠道和本地资料连接起来，让开发、排障、资料整理更像一次连续协作。",
    tags: ["AI", "Workflow", "macOS"],
  },
];

const interests = [
  "汽车工业与智能座舱",
  "消费电子与数码装备",
  "主机游戏与开放世界",
  "开发者工具与效率系统",
  "家庭服务器与网络实验",
  "电影、音乐与城市漫游",
];

const metrics = [
  { value: "10+", label: "年持续折腾代码与工具" },
  { value: "24h", label: "把灵感变成可运行原型" },
  { value: "∞", label: "对好工具和新技术的好奇心" },
];

const categoryTone: Record<string, string> = {
  开发: "border-cyan-300/40 bg-cyan-300/10 text-cyan-100",
  汽车: "border-lime-300/40 bg-lime-300/10 text-lime-100",
  电子: "border-fuchsia-300/40 bg-fuchsia-300/10 text-fuchsia-100",
  游戏: "border-amber-300/40 bg-amber-300/10 text-amber-100",
};

export default function Home() {
  const dailyHeadlines = headlines.items as Headline[];

  return (
    <main className="min-h-screen overflow-hidden bg-[#061015] text-slate-50">
      <section className="hero-shell relative min-h-screen px-5 py-6 sm:px-8 lg:px-12">
        <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between border-b border-white/10 pb-5 text-sm text-slate-300">
          <a className="font-semibold tracking-[0.24em] text-white" href="#top">
            DANIEL GZD
          </a>
          <div className="hidden gap-6 md:flex">
            <a href="#profile">介绍</a>
            <a href="#work">履历</a>
            <a href="#practice">实践</a>
            <a href="#radar">头条</a>
          </div>
        </nav>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 pb-16 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-24 lg:pt-24">
          <div id="top">
            <p className="mb-5 inline-flex border border-cyan-300/40 bg-cyan-300/10 px-3 py-1 text-sm font-medium text-cyan-100">
              求职版个人主页 / Engineer, Builder, Operator
            </p>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] text-white sm:text-7xl lg:text-8xl">
              高东东
              <span className="block text-cyan-200">把想法做成系统。</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              我是一个偏实战的工程师，擅长把前端体验、自动化脚本、网络工具和 AI 工作流揉在一起。喜欢快速找到问题的主线，也喜欢把个人兴趣做成能长期运转的产品雏形。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="action-button primary" href="https://github.com/danielgzd">
                查看 GitHub
              </a>
              <a className="action-button" href="#radar">
                看我的兴趣雷达
              </a>
            </div>
          </div>

          <div className="hero-panel">
            <div className="terminal-bar">
              <span />
              <span />
              <span />
            </div>
            <div className="space-y-5 p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">live profile</p>
              <div className="grid gap-4 sm:grid-cols-3">
                {metrics.map((item) => (
                  <div className="metric" key={item.label}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
              <div className="code-card">
                <p>const candidate = &#123;</p>
                <p>&nbsp;&nbsp;style: &quot;能落地，也能把东西做漂亮&quot;,</p>
                <p>&nbsp;&nbsp;focus: [&quot;Web&quot;, &quot;Automation&quot;, &quot;AI&quot;],</p>
                <p>&nbsp;&nbsp;signal: &quot;长期主义 + 强执行力&quot;</p>
                <p>&#125;</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="profile" className="section-wrap">
        <div className="section-heading">
          <p>PROFILE</p>
          <h2>一个能把技术、审美和执行力连起来的人。</h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="statement">
            <p>
              我适合需要“马上能上手、同时能把事情越做越顺”的团队。相比只做单点任务，我更享受把流程、体验、维护成本一起想清楚：用户怎么进入，系统怎么稳定，后续怎么自动化，出了问题怎么定位。
            </p>
          </div>
          <div className="skill-cloud">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="section-wrap">
        <div className="section-heading">
          <p>RESUME</p>
          <h2>履历不是流水账，是持续升级的工程半径。</h2>
        </div>
        <div className="timeline">
          {timeline.map((item) => (
            <article className="timeline-item" key={item.title}>
              <span>{item.period}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="practice" className="section-wrap">
        <div className="section-heading">
          <p>PRACTICE</p>
          <h2>个人实践偏“能跑起来”，不止停在收藏夹。</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <h3>{project.name}</h3>
              <p>{project.desc}</p>
              <div>
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap">
        <div className="section-heading">
          <p>INTERESTS</p>
          <h2>爱好很杂，但共同点是：我会拆开看，也会动手试。</h2>
        </div>
        <div className="interest-grid">
          {interests.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </section>

      <section id="radar" className="section-wrap pb-24">
        <div className="section-heading">
          <p>DAILY RADAR</p>
          <h2>每日兴趣头条：汽车、电子、游戏、开发，先做成展示模块，后续可以独立成信息站。</h2>
        </div>
        <div className="headline-grid">
          {dailyHeadlines.map((item) => (
            <a className="headline-card" href={item.url} key={`${item.category}-${item.url}`}>
              <Image
                alt={item.title}
                height={750}
                loading="eager"
                src={item.image}
                unoptimized
                width={1200}
              />
              <div>
                <span className={categoryTone[item.category] ?? categoryTone.开发}>
                  {item.category} / {item.source}
                </span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </div>
            </a>
          ))}
        </div>
        <p className="mt-6 text-sm text-slate-400">
          更新时间：{headlines.updatedAt}。数据文件可由 GitHub Actions 每天自动更新，也可以手动编辑。
        </p>
      </section>
    </main>
  );
}
