export const profile = {
  name: "Daniel Gao",
  roles: ["iOS 开发者", "AI 产品构建者", "开源爱好者"],
  statement: "用 Swift 与 Web 构建 AI 产品",
  introduction:
    "我专注于金融移动端、跨端产品与 AI 工程实践，把复杂业务沉淀为稳定、清晰且真正可用的产品体验。",
  availability: "Open to building thoughtful AI products",
  stats: [
    { value: 11, suffix: "+", label: "年开发经验" },
    { value: 45, suffix: "+", label: "业务页面交付" },
    { value: 9, suffix: "+", label: "代表项目实践" },
  ],
} as const;

export const aboutCards = [
  {
    eyebrow: "我在构建什么",
    title: "从原生容器到 AI 工作流",
    description:
      "长期参与金融级 iOS 容器、移动 H5、数据产品和流式 AI 问答，把跨端能力组织成可持续演进的产品基础。",
    className: "md:col-span-2",
  },
  {
    eyebrow: "我的工作方式",
    title: "先理解业务，再设计系统",
    description:
      "重视问题边界、异常路径和长期维护成本，让技术方案服务于真实交付，而不是停留在演示层。",
    className: "",
  },
  {
    eyebrow: "当前关注",
    title: "Swift × Web × AI",
    description:
      "探索端侧智能、LLM 产品体验、MCP 与 Agent 工作流，以及 AI Coding 对个人研发方式的重塑。",
    className: "",
  },
  {
    eyebrow: "代码之外",
    title: "摄影、动漫与持续学习",
    description: "通过影像、展会和信息雷达保持观察，也持续记录工具、产品和工程实践中的新想法。",
    className: "md:col-span-2",
  },
] as const;

export const skillGroups = [
  {
    title: "Apple Platforms",
    description: "原生体验与复杂移动业务",
    skills: ["Swift", "SwiftUI", "UIKit", "iOS"],
  },
  {
    title: "Web 工程",
    description: "现代前端与跨端交付",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "AI & Automation",
    description: "模型产品与智能体工作流",
    skills: ["Python", "AI / LLM", "MCP", "Agent Workflow"],
  },
  {
    title: "Infrastructure",
    description: "稳定部署与工程环境",
    skills: ["Docker", "Linux", "GitHub Actions", "SSG"],
  },
] as const;
