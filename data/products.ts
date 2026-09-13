import type { Product } from "@/types/product";

export const products = [
  {
    slug: "lumacapture",
    name: "LumaCapture",
    monogram: "LC",
    category: "屏幕效率",
    version: "0.1.11 公测版",
    status: "可下载",
    description: "为 macOS 打造的原生截图、录屏与图像标注工作台。",
    introduction:
      "从区域捕获到标注、OCR、二维码与 GIF，把高频的屏幕工作集中在一个轻快、安静的原生应用里。支持 Apple Silicon 与 Intel Mac。",
    platforms: ["macOS", "Apple Silicon", "Intel"],
    requirements: "macOS 15 或更高版本",
    accent: "violet",
    features: [
      {
        title: "截图与录屏",
        description: "区域或全屏捕获，支持系统声音、麦克风、倒计时与 H.264 录制。",
      },
      {
        title: "即时编辑",
        description: "截图后直接标注、输入文字、涂鸦、添加马赛克、贴图、缩放与旋转。",
      },
      {
        title: "本地智能工具",
        description: "离线 OCR、二维码识别与生成、图片和 Base64 双向转换。",
      },
      {
        title: "低打扰工作流",
        description: "菜单栏快速操作、可自定义快捷键、开机启动与剪贴板直达。",
      },
    ],
    workflow: ["选择区域", "截图或录制", "按需编辑", "保存或复制"],
    downloads: [
      {
        label: "下载 macOS DMG",
        detail: "Universal 2 · 公测版",
        href: "https://github.com/danielgzd/LumaCapture/releases/download/v0.1.11/LumaCapture-0.1.11-universal.dmg",
        primary: true,
      },
      {
        label: "下载 ZIP",
        detail: "Universal 2 · 备用格式",
        href: "https://github.com/danielgzd/LumaCapture/releases/download/v0.1.11/LumaCapture-0.1.11-universal.zip",
      },
    ],
    releaseUrl: "https://github.com/danielgzd/LumaCapture/releases/tag/v0.1.11",
    sourceUrl: "https://github.com/danielgzd/LumaCapture",
    sourceLabel: "查看公测版源码",
    privacy: "截图、录屏、OCR、二维码和转换操作均在本机完成。",
  },
  {
    slug: "markdown-text-tool",
    name: "MarkdownTextTool",
    monogram: "MT",
    category: "写作工具",
    version: "1.1.0",
    status: "可下载",
    description: "跨 macOS、iPhone 与 iPad 的原生 Markdown 写作工具。",
    introduction:
      "专注写作本身：本地文件夹工作区、实时预览、同步滚动以及 HTML、PDF 导出，在桌面与移动设备间保持熟悉的编辑体验。",
    platforms: ["macOS", "iOS", "iPadOS"],
    requirements: "macOS 12+ / iOS 与 iPadOS 15+",
    accent: "cyan",
    features: [
      {
        title: "三种阅读布局",
        description: "在编辑、分栏与阅读模式间快速切换，分栏预览支持同步滚动。",
      },
      {
        title: "文件夹工作区",
        description: "直接管理本地或 iCloud Drive 文档，并自动保存当前内容。",
      },
      {
        title: "完整写作工具栏",
        description: "标题、列表、任务、引用、代码块、表格、链接与图片一键插入。",
      },
      { title: "灵活导出", description: "生成独立 HTML 或 A4 PDF，便于发布、打印和分享。" },
    ],
    workflow: ["打开工作区", "专注编写", "实时预览", "导出分享"],
    downloads: [
      {
        label: "下载 macOS DMG",
        detail: "未签名测试包",
        href: "https://github.com/danielgzd/MarkdownTextTool/releases/download/v1.1.0/MarkdownTextTool-macOS-unsigned.dmg",
        primary: true,
      },
      {
        label: "下载 iOS / iPadOS IPA",
        detail: "未签名测试包 · 需自行签名",
        href: "https://github.com/danielgzd/MarkdownTextTool/releases/download/v1.1.0/MarkdownTextTool-iOS-iPadOS-unsigned.ipa",
      },
    ],
    releaseUrl: "https://github.com/danielgzd/MarkdownTextTool/releases/tag/v1.1.0",
    sourceUrl: "https://github.com/danielgzd/MarkdownTextTool",
    sourceLabel: "查看项目源码",
    privacy: "文档读取、编辑、预览与导出均在设备本地完成。",
  },
] satisfies Product[];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
