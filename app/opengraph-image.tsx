import { ImageResponse } from "next/og";

export const alt = "Daniel — iOS 开发者与 AI 产品构建者";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: "#09090b",
        color: "#fafafa",
        display: "flex",
        height: "100%",
        justifyContent: "center",
        position: "relative",
        width: "100%",
      }}
    >
      <div
        style={{
          background: "radial-gradient(circle, rgba(37,99,235,.32), transparent 62%)",
          height: 700,
          left: -100,
          position: "absolute",
          top: -250,
          width: 900,
        }}
      />
      <div style={{ display: "flex", flexDirection: "column", padding: "80px", width: "100%" }}>
        <div
          style={{
            color: "#a1a1aa",
            display: "flex",
            fontSize: 26,
            letterSpacing: 5,
            textTransform: "uppercase",
          }}
        >
          Daniel Gao · 工程师与产品构建者
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 78,
            fontWeight: 700,
            letterSpacing: -4,
            lineHeight: 1.05,
            marginTop: 34,
            maxWidth: 950,
          }}
        >
          用 Swift 与 Web 构建 AI 产品
        </div>
        <div style={{ color: "#60a5fa", display: "flex", fontSize: 28, marginTop: 42 }}>
          iOS 开发者 · AI 产品构建者 · 开源爱好者
        </div>
      </div>
    </div>,
    size,
  );
}
