import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Daniel — iOS 开发者与 AI 产品构建者",
    short_name: "Daniel",
    description: "Daniel 的个人网站，记录 iOS、Web、AI 产品实践与技术思考。",
    start_url: "/",
    display: "standalone",
    background_color: "#09090B",
    theme_color: "#09090B",
    lang: "zh-CN",
  };
}
