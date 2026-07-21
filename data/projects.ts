import type { Project } from "@/types/content";

export const projects = [
  {
    slug: "my-cloud-platform",
    title: "我的云移动平台",
    description:
      "面向银行外勤场景的 iOS 原生容器与 React/TypeScript H5 平台，覆盖客户、地图、数据看板与多角色工作台。",
    category: "Mobile",
    period: "2022 — Now",
    role: "iOS / 混合架构核心开发",
    metric: "45+ business views",
    icon: "smartphone",
    featured: true,
    tags: ["Swift", "React", "TypeScript", "WebView", "JSBridge"],
    challenge:
      "长期业务迭代涉及多角色、多权限、大量 H5 页面和地图、相机、定位等原生能力，需要在高频交付中保持容器稳定与跨端接口一致。",
    solution:
      "围绕 Native 容器、WebView 生命周期、JSBridge 能力协议和异常兜底建立清晰边界，并持续优化路由缓存、权限校验和跨团队联调流程。",
    outcome:
      "形成可支撑多条金融业务线的移动工作平台，覆盖 45+ 业务页面，并持续承载 AI 问答、数据看板和外勤作业能力。",
    highlights: [
      "原生能力统一封装",
      "多角色首页与权限体系",
      "地图、OCR、活体检测集成",
      "长期版本稳定交付",
    ],
  },
  {
    slug: "ai-coach",
    title: "AI 问答与情景对练",
    description: "围绕流式问答、知识库、历史会话和情景对练构建移动端业务 AI 体验。",
    category: "AI",
    period: "2025 — Now",
    role: "AI 产品工程师",
    metric: "Streaming AI UX",
    icon: "sparkles",
    featured: true,
    tags: ["LLM", "SSE", "Knowledge Base", "React", "Mobile UX"],
    challenge:
      "移动网络环境下的流式消息、会话状态、角色权限和空数据场景相互影响，单纯接入模型接口无法形成完整产品体验。",
    solution:
      "设计明确的消息状态机和 SSE 生命周期，补齐取消、错误恢复、历史记录、知识库入口和对练角色参数等交互边界。",
    outcome: "将 AI 能力从独立演示推进到真实金融业务入口，并积累适用于移动端流式交互的工程模式。",
    highlights: ["SSE 流式消息状态", "历史对话与知识库", "情景对练角色配置", "移动端异常恢复"],
  },
  {
    slug: "field-map",
    title: "作战地图与实时获客",
    description: "聚合 POI、驻点打卡、导航、客户线索与战况数据的外勤位置智能工具。",
    category: "Mobile",
    period: "2023 — 2025",
    role: "移动端功能负责人",
    metric: "Location intelligence",
    icon: "map",
    featured: true,
    tags: ["Map SDK", "LBS", "React", "Swift", "Data Visualization"],
    challenge:
      "地图聚合、筛选条件、定位权限和业务数据具有大量组合状态，同时需要适应弱网、后台定位和跨端导航。",
    solution:
      "拆分地图视图、列表状态和筛选映射，统一定位权限与原生导航能力，并为异常位置和接口空状态提供明确降级路径。",
    outcome: "把客户线索、网点、活动和打卡组织到统一空间视图中，缩短外勤人员查找与行动路径。",
    highlights: ["地图聚合与 POI 搜索", "定位权限与异常兜底", "场景打卡和导航", "筛选状态一致性"],
  },
  {
    slug: "msp-card-pad",
    title: "MSP 信用卡申请 Pad",
    description: "面向银行网点的跨平台移动进件工具，支持身份采集、活体检测与流程校验。",
    category: "Mobile",
    period: "2019 — 2021",
    role: "React Native / iOS 开发者",
    metric: "Multi-device workflow",
    icon: "credit-card",
    tags: ["React Native", "Redux", "Swift", "OCR", "Biometrics"],
    challenge:
      "同一业务流程需要运行在 iOS、iPad 和 Android Pad，并对接身份证 OCR、活体检测与多阶段表单校验。",
    solution:
      "使用 React Native 组织跨平台流程，通过 Native Bridge 封装设备能力，并统一表单校验和异常反馈。",
    outcome: "支持网点人员在移动设备上完成客户信息采集和信用卡申请，提高现场办理效率。",
    highlights: ["多端一致业务流程", "OCR 与活体检测", "Native Bridge", "复杂表单校验"],
  },
  {
    slug: "zhangwo-finance",
    title: "掌握金融服务工具",
    description: "围绕贷款、公告、活动和服务入口构建的企业级 iOS 与 H5 移动应用。",
    category: "Mobile",
    period: "2022 — 2024",
    role: "iOS 开发者",
    metric: "Reliable delivery",
    icon: "layers",
    tags: ["iOS", "Swift", "H5", "Financial Services"],
    challenge: "业务入口众多、版本节奏紧密，需要兼顾信息触达、流程清晰度和旧系统兼容。",
    solution: "以模块边界组织原生和 H5 页面，强化接口异常处理、入口参数校验与版本回归。",
    outcome: "持续支撑贷款服务、活动公告等业务迭代，保持稳定的移动端交付质量。",
    highlights: ["原生与 H5 协作", "业务入口治理", "接口异常处理", "版本回归与发布"],
  },
  {
    slug: "vehicle-vision-apps",
    title: "车载、地图与视觉应用",
    description: "汽车之音、护驾宝及人眼检测 SDK 等早期移动产品实践。",
    category: "Mobile",
    period: "2016",
    role: "iOS 开发者",
    metric: "Hardware × Mobile",
    icon: "car",
    tags: ["Bluetooth", "Map SDK", "IM", "Vision SDK", "iOS"],
    challenge:
      "产品同时涉及蓝牙硬件、地图轨迹、即时通信、语音和视觉检测，需要大量真机与外部 SDK 联调。",
    solution: "按设备能力拆分模块，建立连接状态和错误处理，并通过真机测试持续收敛兼容问题。",
    outcome: "完成多类硬件与地图场景交付，建立移动端设备集成和现场问题定位能力。",
    highlights: ["蓝牙硬件通信", "地图轨迹回放", "语音与即时通信", "人眼检测 SDK"],
  },
  {
    slug: "ai-coding-workflow",
    title: "AI Coding 工作流",
    description: "将 Codex、Skills、自动化脚本与结构化 Review 融入日常研发流程。",
    category: "Automation",
    period: "2025 — Now",
    role: "构建者 / 工作流设计者",
    metric: "Agentic engineering",
    icon: "workflow",
    tags: ["Codex", "Agent", "MCP", "Automation", "Review"],
    challenge:
      "零散使用 AI 工具容易产生上下文缺失、验证不足和不可复用的问题，难以稳定提高工程效率。",
    solution:
      "把读取上下文、任务拆分、实现、测试和 Review 固化为工作流，并通过 Skills 与脚本沉淀重复能力。",
    outcome: "AI 从代码补全工具转变为可协作的工程流程，覆盖代码改造、文档、信息采集和质量检查。",
    highlights: ["结构化上下文读取", "Codex Skills", "自动验证流程", "AI 辅助 Review"],
  },
  {
    slug: "daily-radar",
    title: "每日雷达",
    description: "自动采集、翻译、去重并持续更新的个人兴趣信息流。",
    category: "Automation",
    period: "2026",
    role: "设计 / 全栈开发",
    metric: "14 curated topics",
    icon: "radar",
    tags: ["Node.js", "RSS", "GitHub Actions", "SSG"],
    links: { demo: "/radar" },
    challenge:
      "不同 RSS 来源的数据格式、语言、链接质量和更新时间不一致，容易产生重复、失效或低价值信息。",
    solution:
      "建立分类匹配、内容清洗、翻译兜底、链接校验和十天滚动保留策略，通过 GitHub Actions 每六小时更新。",
    outcome: "形成覆盖 AI、市场、开发、摄影等 14 个主题的静态信息雷达，并保持零服务器部署。",
    highlights: ["多来源 RSS 清洗", "中文翻译兜底", "链接校验与去重", "自动静态部署"],
  },
  {
    slug: "personal-site",
    title: "Personal Site 2026",
    description: "以 Next.js、MDX 和现代设计系统构建的个人品牌与技术内容平台。",
    category: "Web",
    period: "2026",
    role: "设计 / 前端架构",
    metric: "Static-first platform",
    icon: "code",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    links: { demo: "/", github: "https://github.com/danielgzd/danielgzd.github.io" },
    challenge:
      "旧站点内容与样式高度集中，缺少博客、项目详情、设计系统和完整 SEO，同时必须保持 GitHub Pages 静态部署。",
    solution:
      "采用 Server Component 优先的模块架构、语义化 Token、静态内容模型和小型交互岛逐步重构。",
    outcome:
      "建立可持续扩展至博客、AI 工具和国际化的个人网站基础，同时控制客户端 JavaScript 和视觉复杂度。",
    highlights: ["Dark First 设计系统", "Server Component 优先", "静态生成", "渐进式模块重构"],
  },
] satisfies Project[];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
