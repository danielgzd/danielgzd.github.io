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
  "iOS / Swift",
  "React Native",
  "H5 交互",
  "React / Angular",
  "TypeScript",
  "OCR / 活体检测",
  "地图 SDK",
  "蓝牙与硬件对接",
  "App 上架",
  "AI 工作流",
];

const timeline = [
  {
    period: "2026 - 至今",
    title: "深圳长亮科技有限公司上海分公司 / iOS 开发工程师",
    body: "继续参与金融移动端与“我的云”等相关项目迭代，负责 iOS 功能开发、H5 交互、问题定位和版本交付，保障信用卡获客、数据回显、电话联络、记录查看等核心流程稳定推进。",
  },
  {
    period: "2022 - 2025",
    title: "深圳市拓保软件有限公司-上海分公司 / iOS 开发工程师",
    body: "负责企业级金融移动应用持续开发和维护，覆盖“我的云”“掌握”等项目，围绕贷款、活动、公告、业绩指标、客户联络等场景进行功能建设、H5 协作和体验优化。",
  },
  {
    period: "2017 - 2021",
    title: "上海微创软件 / 高级 iOS 开发工程师",
    body: "负责 iOS、iPad 与 React Native 跨平台项目开发，参与信用卡获客、移动进件、地图定位、OCR 证件识别、活体检测、Native 与 H5/RN 交互等核心能力建设。",
  },
  {
    period: "2016",
    title: "上海眼控科技 / 中级 iOS 开发工程师",
    body: "负责 iOS 模块开发、测试和问题修复，完成蓝牙硬件模块、人眼识别 SDK、统计 SDK 与企业 App 集成，具备独立上架与驳回处理经验。",
  },
  {
    period: "2015 - 2016",
    title: "上海佰点网络 / 初级 iOS 开发工程师",
    body: "从模块开发、真机测试、BUG 修复和文档编写开始，逐步独立负责 App 开发与维护，覆盖定位、推送、H5 交互、动画、数据展示和 UI 适配。",
  },
  {
    period: "教育",
    title: "软件工程本科 / 计算机网络应用背景",
    body: "软件工程与计算机网络复合背景，早期参与学生组织和校级科技、电竞活动组织，形成了对技术、协作和用户体验的长期兴趣。",
  },
];

const practices = [
  {
    title: "MSP 信用卡申请客户端",
    body: "面向分行网点和大堂经理的移动办理工具，使用 React Native、Redux、Swift 与 Native 交互，接入活体检测、身份证 OCR，并适配 iOS、iPad 与 Android Pad 场景。",
  },
  {
    title: "我的云 / 信用卡获客工具",
    body: "自 2017 年起持续开发迭代，经历微创、拓保、长亮多个阶段。使用 Swift 构建业务主流程，接入 OCR、活体检测和地图 SDK，实现自定义地图、后台定位上传、业绩指标、数据回显、电话联络、记录查看和获客数据图表展示。",
  },
  {
    title: "掌握 / 金融服务工具",
    body: "面向贷款、活动、公告等业务场景，负责 iOS 端与 H5 相关开发，参与需求拆解、页面开发、接口联调、问题修复和版本迭代。",
  },
  {
    title: "前端管理平台与跨端协作",
    body: "使用 React、AngularJS 和 H5 技术开发管理平台与嵌入式页面，配合移动端完成交互闭环，重视体验细节、问题定位和交付节奏。",
  },
  {
    title: "人眼检测统计系统 SDK",
    body: "独立完成人脸检测识别与统计 SDK，用于识别使用者身份，并统计使用时长、习惯和关注点，最终集成到企业 App 使用。",
  },
  {
    title: "车载与地图类应用",
    body: "参与汽车之音、护驾宝等项目，涉及在线广播、语音通话、即时聊天、蓝牙连接、百度地图鹰眼 SDK、轨迹回放、本地存储和免登录体验。",
  },
  {
    title: "个人自动化与信息流",
    body: "在工作之外持续整理自动化、AI 工具链和每日信息雷达，把兴趣内容转化成可运行、可维护、可持续更新的个人系统。",
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
          <p className="eyebrow">iOS / Cross-platform / Product-minded Engineer</p>
          <h1>Daniel</h1>
          <p className="hero-text">
            2015 年入行，10 年开发经验，长期参与企业级金融、获客工具、硬件识别、地图定位和前端管理平台建设。喜欢把复杂业务拆成稳定、清晰、体验友好的产品模块。
          </p>
          <div className="hero-actions">
            <a href="https://github.com/danielgzd">GitHub</a>
            <a href="#radar">查看今日信息</a>
          </div>
        </div>
        <aside className="profile-card" aria-label="profile snapshot">
          <div>
            <span>Focus</span>
            <strong>10 年开发经验，聚焦 iOS、React Native、企业级移动应用</strong>
          </div>
          <div>
            <span>Style</span>
            <strong>重视体验、定位问题快、交付稳定</strong>
          </div>
          <div>
            <span>Now</span>
            <strong>把移动端经验、跨端能力和 AI 工具链结合起来</strong>
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
            我更喜欢把复杂业务拆成清晰的小系统：页面路径、Native 能力、前端交互、接口边界、异常处理和后续维护。做移动端时在意稳定和体验，做跨端时在意协作成本，做工具时在意它明天还会不会继续好用。
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
          <h2>从 iOS 到跨端，从业务交付到体验优化。</h2>
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
          <h2>更具体的项目经历。</h2>
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
