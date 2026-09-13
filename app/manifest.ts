import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Daniel Products — 独立软件与生产力工具",
    short_name: "Daniel Products",
    description: "LumaCapture、MarkdownTextTool 官方产品与下载中心。",
    start_url: "/",
    display: "standalone",
    background_color: "#07070A",
    theme_color: "#07070A",
    lang: "zh-CN",
  };
}
