# Daniel Personal Site

这是 Daniel 的个人宣传主页，用于展示移动端开发履历、AI Coding 实践、代表项目、个人实践和兴趣信息流。站点以中文为主，公共页面不展示头像，也不展示中文姓名。

## 内容结构

- `/`：个人主页入口，展示职业定位、技术关键词和主要模块。
- `/resume`：履历页面，突出银行“我的云”iOS/H5 长期贡献、金融移动端项目经验和 AI Coding/业务 AI 落地能力。
- `/projects`：项目页面，重点展示“我的云”iOS 原生容器、H5 外勤平台、AI 问答/对练、作战地图、实时获客、MSP、掌握和早期硬件/地图项目。
- `/radar`：每日信息流，按 tab 展示 AI、世界、财经、科技、汽车、游戏、开发、生活、动漫、展会、摄影等内容。

## 交互体验

站点使用 CSS 动效增强页面反馈：

- 页面、导航、Hero 和内容区块有轻量进入转场。
- 履历亮点、项目、入口和新闻卡片支持 hover 抬升、边框高亮、阴影增强和扫光反馈。
- 按钮、卡片和信息流 tab 在点击时有按下反馈，选中的 tab 会突出显示。
- 新闻卡片图片 hover 时轻微放大并增强质感。
- 支持 `prefers-reduced-motion`，系统设置减少动态效果时会自动降级。

## 信息流更新

信息流数据来自 `scripts/update-daily-headlines.mjs`，输出到 `data/daily-headlines.json`。

更新策略：

- GitHub Actions 每 6 小时执行一次。
- 每次更新会追加新内容，而不是只覆盖当天内容。
- 内容保留最近 10 天。
- 更新前会校验已有链接，明确失效的链接会被删除。
- 英文来源会尽量翻译为中文；翻译失败时会使用本地关键词转换和中文摘要兜底。

手动更新：

```bash
npm run headlines:update
```

## 本地开发

安装依赖：

```bash
npm ci
```

启动开发服务：

```bash
npm run dev
```

默认访问：

```text
http://localhost:3000
```

质量检查：

```bash
npm run lint
npm run build
```

## 部署

仓库使用 GitHub Pages 部署，分支为 `gh-pages`。推送到该分支后，`.github/workflows` 中的 Pages workflow 会自动构建并发布静态站点。

站点地址：

```text
https://danielgzd.github.io/
```

## 简历文件

公开 Markdown 简历随站点发布：

```text
https://danielgzd.github.io/Daniel-iOS-Resume-2026.md
```
