import { readFile, writeFile } from "node:fs/promises";

const categories = [
  {
    id: "cn-market",
    label: "A股",
    description: "A 股公司公告、盘面变化、政策与行业催化，优先来自财联社公开电报。",
    image:
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80",
    clsTopic: "cn-market",
    feeds: [],
    fallback: [
      [
        "A 股市场进入新一轮信息窗口",
        "关注公司公告、产业政策、成交结构与主要指数变化，并以交易所公告为准。",
      ],
      ["市场热点需要结合基本面验证", "短期消息可能放大波动，阅读快讯后仍应回到公告和正式披露。"],
    ],
  },
  {
    id: "us-market",
    label: "美股",
    description: "美股指数、科技公司、美联储与全球资金动态，优先来自财联社公开电报。",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
    clsTopic: "us-market",
    feeds: [{ source: "CNBC", url: "https://www.cnbc.com/id/100003114/device/rss/rss.html" }],
    fallback: [
      [
        "美股市场继续关注盈利与利率路径",
        "主要指数、科技公司财报和美联储预期共同影响全球风险偏好。",
      ],
      [
        "跨市场波动需要关注交易时段差异",
        "盘前、盘中与盘后消息可能产生不同影响，应结合正式披露持续观察。",
      ],
    ],
  },
  {
    id: "middle-east",
    label: "中东",
    description: "中东安全局势、外交进展、能源运输与市场影响，优先来自财联社公开电报。",
    image:
      "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1200&q=80",
    clsTopic: "middle-east",
    feeds: [{ source: "BBC 中文", url: "https://feeds.bbci.co.uk/zhongwen/simp/rss.xml" }],
    fallback: [
      [
        "中东局势持续影响能源与航运预期",
        "关注各方正式声明、外交斡旋和主要航道变化，避免依赖未经核实的单一消息。",
      ],
      [
        "地缘冲突信息需要交叉验证",
        "快讯适合发现线索，重要进展仍应结合政府、国际组织与多家媒体报道判断。",
      ],
    ],
  },
  {
    id: "ai",
    label: "AI",
    description: "人工智能、模型、智能硬件与 AI 产品动态。",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    feeds: [
      { source: "Google AI", url: "https://blog.google/technology/ai/rss/" },
      { source: "MIT Technology Review", url: "https://www.technologyreview.com/feed/" },
      { source: "The Decoder", url: "https://the-decoder.com/feed/" },
    ],
    fallback: [
      [
        "AI 产品继续从聊天框走向工作流",
        "模型能力正在进入搜索、代码、办公和终端设备，真正的竞争点会回到场景完成度。",
      ],
      [
        "端侧智能成为新一轮硬件关键词",
        "隐私、响应速度和续航会决定 AI 功能能否从演示走向日常使用。",
      ],
    ],
  },
  {
    id: "world",
    label: "世界",
    description: "国际局势、社会议题与全球公共事件。",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    feeds: [
      { source: "BBC 中文", url: "https://feeds.bbci.co.uk/zhongwen/simp/rss.xml" },
      { source: "纽约时报中文网", url: "https://cn.nytimes.com/rss/" },
    ],
    fallback: [
      [
        "国际局势持续牵动能源、贸易与科技产业链",
        "地缘政治的变化正在影响企业供应链、市场预期和普通人的消费选择。",
      ],
      [
        "全球公共议题进入更复杂的协商阶段",
        "气候、移民、安全和技术治理继续交织，信息判断比单点新闻更重要。",
      ],
    ],
  },
  {
    id: "finance",
    label: "财经",
    description: "市场、公司、消费、宏观经济与投资观察。",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
    feeds: [
      { source: "FT 中文网", url: "https://www.ftchinese.com/rss/feed" },
      { source: "CNBC", url: "https://www.cnbc.com/id/100003114/device/rss/rss.html" },
    ],
    fallback: [
      [
        "全球市场继续围绕利率与科技股重新定价",
        "资金正在寻找增长确定性，AI、芯片、能源和消费成为观察重点。",
      ],
      [
        "公司增长叙事更依赖真实现金流",
        "宏观不确定时，盈利质量、成本控制和业务韧性会被市场重新审视。",
      ],
    ],
  },
  {
    id: "tech",
    label: "科技",
    description: "消费电子、互联网产品、平台生态与新硬件。",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    feeds: [
      { source: "The Verge", url: "https://www.theverge.com/rss/tech/index.xml" },
      { source: "Engadget", url: "https://www.engadget.com/rss.xml" },
      { source: "Apple Developer", url: "https://developer.apple.com/news/rss/news.rss" },
      { source: "Ars Technica", url: "https://feeds.arstechnica.com/arstechnica/index" },
      { source: "web.dev", url: "https://web.dev/feed.xml" },
      { source: "Mozilla Hacks", url: "https://hacks.mozilla.org/feed/" },
    ],
    fallback: [
      [
        "消费电子重新强调系统级体验",
        "硬件参数之外，AI 能力、跨设备协同和软件更新正在成为更强的购买理由。",
      ],
      [
        "互联网产品继续向工具化和订阅化演进",
        "平台开始把效率、内容和智能助手整合进更完整的使用场景。",
      ],
    ],
  },
  {
    id: "car",
    label: "汽车",
    description: "智能汽车、电动化、座舱、辅助驾驶和产业趋势。",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    feeds: [
      { source: "The Verge", url: "https://www.theverge.com/rss/transportation/index.xml" },
      { source: "Motor1", url: "https://www.motor1.com/rss/news/all/" },
    ],
    fallback: [
      [
        "智能汽车竞争继续转向软件体验",
        "当电动平台逐渐趋同，座舱、辅助驾驶、补能和长期 OTA 会更容易拉开差距。",
      ],
      [
        "车企开始用生态能力争夺用户时间",
        "车机应用、手机互联和智能助手会影响用户对一辆车的长期满意度。",
      ],
    ],
  },
  {
    id: "game",
    label: "游戏",
    description: "主机、PC、移动游戏、产业新闻与玩家文化。",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
    feeds: [
      { source: "IGN", url: "https://feeds.feedburner.com/ign/news" },
      { source: "GameSpot", url: "https://www.gamespot.com/feeds/news/" },
    ],
    fallback: [
      [
        "游戏行业继续寻找大作与长线运营的平衡",
        "研发成本、玩家时间和社区生态决定了新作品能否长期留在日常里。",
      ],
      [
        "创作者工具正在改变玩家和游戏的关系",
        "模组、UGC 和直播社区让游戏不只是消费品，也是一套持续生长的内容系统。",
      ],
    ],
  },
  {
    id: "dev",
    label: "开发",
    description: "开发者工具、开源、代码平台、工程效率与安全。",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
    feeds: [
      { source: "GitHub Engineering", url: "https://github.blog/engineering/feed/" },
      { source: "GitHub Blog", url: "https://github.blog/changelog/feed/" },
      { source: "Cloudflare Blog", url: "https://blog.cloudflare.com/rss/" },
      { source: "Hacker News", url: "https://hnrss.org/frontpage" },
      {
        source: "Android Developers",
        url: "https://android-developers.googleblog.com/feeds/posts/default",
      },
      { source: "Swift.org", url: "https://www.swift.org/atom.xml" },
    ],
    fallback: [
      [
        "开发者工具继续向自动化协作升级",
        "代码生成只是起点，真正有价值的是能帮助理解上下文、执行验证和降低维护成本。",
      ],
      ["开源生态更重视供应链安全", "依赖管理、自动化审计和发布流程正在成为现代工程的基础能力。"],
    ],
  },
  {
    id: "life",
    label: "生活",
    description: "影像、城市、效率工具、文化消费和日常灵感。",
    image:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80",
    feeds: [
      { source: "少数派", url: "https://sspai.com/feed" },
      { source: "Lifehacker", url: "https://lifehacker.com/rss" },
    ],
    fallback: [
      ["好工具的价值在于减少日常摩擦", "真正留下来的工具往往不是功能最多，而是最适合反复使用。"],
      ["生活方式内容越来越像个人操作系统", "设备、空间、习惯和信息源一起决定一个人的节奏感。"],
    ],
  },
  {
    id: "anime",
    label: "动漫",
    description: "动画、漫画、声优、二次元文化和新番动态。",
    image:
      "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&w=1200&q=80",
    feeds: [
      {
        source: "Anime News Network",
        url: "https://www.animenewsnetwork.com/all/rss.xml?ann-edition=us",
      },
    ],
    fallback: [
      [
        "新番观察：题材、制作公司和宣发节奏值得一起看",
        "动漫资讯不只看作品上线，也可以关注制作团队、声优阵容、平台排播和海外反馈。",
      ],
      [
        "轻量追番清单可以按季度维护",
        "把想看的动画、漫画和展会活动分开记录，会比临时收藏更适合长期跟进。",
      ],
    ],
  },
  {
    id: "events",
    label: "展会",
    description: "动漫展、同人展、汉服活动、城市文化展和周末出行灵感。",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=80",
    feeds: [],
    fallback: [
      [
        "动漫展与同人展适合提前做城市清单",
        "重点关注购票时间、嘉宾阵容、摊位图、交通路线和返图规则，周末安排会轻松很多。",
      ],
      [
        "汉服展会可以从主题、场景和摄影友好度筛选",
        "看活动时不只看规模，也看场地光线、布景、换装便利度和是否适合人像拍摄。",
      ],
      [
        "展会记录可以做成图片故事",
        "从入场、摊位、人物、舞台到城市夜景，按时间线整理比单张照片更有记忆点。",
      ],
    ],
  },
  {
    id: "photo",
    label: "摄影",
    description: "摄影技巧、人物、人像、风景、器材和后期灵感。",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    feeds: [
      { source: "PetaPixel", url: "https://petapixel.com/feed/" },
      { source: "DIY Photography", url: "https://www.diyphotography.net/feed/" },
    ],
    fallback: [
      [
        "人像摄影先处理光线，再处理姿态",
        "自然光、眼神光、背景距离和人物手部动作，往往比器材参数更影响出片质感。",
      ],
      [
        "风景摄影可以提前看天气和机位动线",
        "日出日落、云层、前景、长焦压缩和步行路线，会决定一组照片能不能形成完整叙事。",
      ],
      [
        "展会摄影要提前设定拍摄边界",
        "人物授权、现场光线、拥挤动线和快门安全值，是动漫展和汉服展拍摄最容易忽略的部分。",
      ],
    ],
  },
];

const today = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Shanghai",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}).format(new Date());

const outputUrl = new URL("../data/daily-headlines.json", import.meta.url);
const now = new Date();
const nowIso = now.toISOString();
const retentionMs = 10 * 24 * 60 * 60 * 1000;
const cutoff = new Date(now.getTime() - retentionMs);

const dictionary = new Map([
  ["artificial intelligence", "人工智能"],
  ["generative ai", "生成式 AI"],
  ["openai", "OpenAI"],
  ["google", "Google"],
  ["apple", "Apple"],
  ["microsoft", "Microsoft"],
  ["nvidia", "英伟达"],
  ["tesla", "特斯拉"],
  ["spacex", "SpaceX"],
  ["china", "中国"],
  ["u.s.", "美国"],
  ["us", "美国"],
  ["world", "世界"],
  ["markets", "市场"],
  ["market", "市场"],
  ["stocks", "股票"],
  ["stock", "股票"],
  ["inflation", "通胀"],
  ["fed", "美联储"],
  ["interest rates", "利率"],
  ["electric vehicle", "电动汽车"],
  ["ev", "电动车"],
  ["games", "游戏"],
  ["game", "游戏"],
  ["anime", "动画"],
  ["manga", "漫画"],
  ["cosplay", "Cosplay"],
  ["photography", "摄影"],
  ["portrait", "人像"],
  ["landscape", "风景"],
  ["camera", "相机"],
  ["lens", "镜头"],
  ["github", "GitHub"],
  ["developers", "开发者"],
  ["developer", "开发者"],
  ["security", "安全"],
  ["privacy", "隐私"],
  ["phone", "手机"],
  ["laptop", "笔记本电脑"],
  ["robot", "机器人"],
  ["startups", "创业公司"],
  ["startup", "创业公司"],
]);

const translationCache = new Map();
let clsTelegraphCache;

const clsMatchers = {
  "cn-market": (item) =>
    item.stock_list?.some((stock) => /^(sh|sz|bj)/i.test(stock.StockID ?? "")) ||
    /(A股|沪指|深证|创业板|科创板|北交所|上证|两融|上市公司|证监会|交易所)/i.test(
      `${item.title ?? ""} ${item.brief ?? ""} ${item.subjects?.map((subject) => subject.subject_name).join(" ") ?? ""}`,
    ),
  "us-market": (item) =>
    /(美股|纳指|纳斯达克|道指|道琼斯|标普|华尔街|美联储|纽交所|英伟达|特斯拉|苹果公司|微软|Meta|亚马逊)/i.test(
      item.title ?? "",
    ),
  "middle-east": (item) =>
    /(中东|以色列|伊朗|加沙|巴勒斯坦|黎巴嫩|叙利亚|也门|胡塞|卡塔尔|沙特|阿联酋|伊拉克|约旦|霍尔木兹|红海|哈马斯|真主党)/i.test(
      `${item.title ?? ""} ${item.brief ?? ""}`,
    ),
};

const categoryContentMatchers = {
  "us-market":
    /(美股|纳指|纳斯达克|道指|道琼斯|标普|华尔街|美联储|纽交所|英伟达|特斯拉|苹果公司|微软|亚马逊|U\.S\. stocks?|Nasdaq|Dow Jones|S&P 500|Wall Street|Federal Reserve|NYSE|Nvidia|Tesla|Apple|Microsoft|Meta|Amazon)/i,
  "middle-east":
    /(中东|以色列|伊朗|加沙|巴勒斯坦|黎巴嫩|叙利亚|也门|胡塞|卡塔尔|沙特|阿联酋|伊拉克|约旦|霍尔木兹|红海|哈马斯|真主党|Middle East|Israel|Iran|Gaza|Palestin|Lebanon|Syria|Yemen|Houthi|Qatar|Saudi|UAE|Iraq|Jordan|Hormuz|Red Sea|Hamas|Hezbollah)/i,
};

function matchesCategoryContent(item, category) {
  const matcher = categoryContentMatchers[category.id];
  return !matcher || matcher.test(`${item.title ?? ""} ${item.summary ?? ""}`);
}

function decode(value = "") {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function hasChinese(text = "") {
  return /[\u3400-\u9fff]/.test(text);
}

async function translateWithGoogle(text) {
  const key = text.slice(0, 480);
  if (translationCache.has(key)) {
    return translationCache.get(key);
  }

  const endpoint = new URL("https://translate.googleapis.com/translate_a/single");
  endpoint.searchParams.set("client", "gtx");
  endpoint.searchParams.set("sl", "en");
  endpoint.searchParams.set("tl", "zh-CN");
  endpoint.searchParams.set("dt", "t");
  endpoint.searchParams.set("q", key);

  const response = await fetch(endpoint, {
    headers: {
      "user-agent": "danielgzd.github.io daily-radar",
    },
  });

  if (!response.ok) {
    throw new Error(`translate ${response.status}`);
  }

  const payload = await response.json();
  const translated = payload?.[0]
    ?.map((part) => part?.[0] ?? "")
    .join("")
    .trim();
  if (!translated) {
    throw new Error("translate empty");
  }

  translationCache.set(key, translated);
  return translated;
}

function dictionaryLocalize(text = "", categoryLabel = "") {
  let translated = text;
  for (const [from, to] of dictionary) {
    const escaped = from.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    translated = translated.replace(new RegExp(`\\b${escaped}\\b`, "gi"), to);
  }

  if (translated !== text) {
    return `译：${translated}`;
  }

  return `${categoryLabel}方向有一条新动态，适合继续跟进原文细节。`;
}

async function localize(text = "", categoryLabel = "") {
  const clean = decode(text);
  if (!clean) {
    return "";
  }

  if (hasChinese(clean)) {
    return clean;
  }

  try {
    return await translateWithGoogle(clean);
  } catch {
    return dictionaryLocalize(clean, categoryLabel);
  }
}

async function summaryFrom(description = "", categoryLabel = "") {
  const clean = decode(description);

  if (!clean || clean.includes("Article URL:") || clean.includes("Comments URL:")) {
    return `${categoryLabel}方向有一条新动态，适合继续跟进原文细节。`;
  }

  const text = await localize(clean, categoryLabel);
  const short = text.slice(0, 92);
  return short.length < text.length ? `${short}...` : short;
}

function tagValue(item, tag) {
  const match = item.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"));
  return decode(match?.[1]);
}

function attributeValue(tag = "", attribute) {
  const match = tag.match(new RegExp(`${attribute}\\s*=\\s*["']([^"']+)["']`, "i"));
  return decode(match?.[1]);
}

function absoluteUrl(value, baseUrl) {
  if (!value || value.startsWith("data:")) return "";
  try {
    return new URL(value, baseUrl).toString();
  } catch {
    return "";
  }
}

function extractEmbeddedImage(item, articleUrl) {
  const mediaTag = item.match(/<media:(?:content|thumbnail)\b[^>]*>/i)?.[0];
  const enclosureTags = item.match(/<enclosure\b[^>]*>/gi) ?? [];
  const imageEnclosure = enclosureTags.find((tag) => /type\s*=\s*["']image\//i.test(tag));
  const imageTag = item.match(/<img\b[^>]*>/i)?.[0];

  return absoluteUrl(
    attributeValue(mediaTag, "url") ||
      attributeValue(imageEnclosure, "url") ||
      attributeValue(imageTag, "src"),
    articleUrl,
  );
}

async function extractPageImage(articleUrl) {
  if (!articleUrl) return "";
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 6000);

  try {
    const response = await fetch(articleUrl, {
      redirect: "follow",
      signal: controller.signal,
      headers: {
        accept: "text/html,application/xhtml+xml",
        "user-agent": "Mozilla/5.0 (compatible; DanielDailyRadar/1.0)",
      },
    });
    if (!response.ok || !response.headers.get("content-type")?.includes("text/html")) return "";

    const html = await response.text();
    const metaTags = html.match(/<meta\b[^>]*>/gi) ?? [];
    const imageMeta = metaTags.find((tag) =>
      /(?:property|name)\s*=\s*["'](?:og:image(?::secure_url)?|twitter:image(?::src)?)["']/i.test(
        tag,
      ),
    );
    return absoluteUrl(attributeValue(imageMeta, "content"), response.url || articleUrl);
  } catch {
    return "";
  } finally {
    clearTimeout(timeout);
  }
}

function extractLink(item) {
  const linkText = tagValue(item, "link");
  const linkTag = item.match(/<link\b[^>]*>/i)?.[0];
  const href = attributeValue(linkTag, "href");
  return decode(href || linkText);
}

function extractTime(item) {
  const raw = tagValue(item, "pubDate") || tagValue(item, "published") || tagValue(item, "updated");
  if (!raw) {
    return "";
  }

  const date = new Date(raw);
  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

async function fetchFeed(feed, category) {
  const response = await fetch(feed.url, {
    headers: {
      "user-agent": "danielgzd.github.io daily-radar",
    },
  });

  if (!response.ok) {
    throw new Error(`${feed.source} ${response.status}`);
  }

  const xml = await response.text();
  const entries =
    xml.match(/<item[\s\S]*?<\/item>/gi) ?? xml.match(/<entry[\s\S]*?<\/entry>/gi) ?? [];

  return entries
    .slice(0, categoryContentMatchers[category.id] ? 20 : 5)
    .reduce(async (promise, item) => {
      const list = await promise;
      const rawTitle = tagValue(item, "title");
      const description =
        tagValue(item, "description") ||
        tagValue(item, "summary") ||
        tagValue(item, "content:encoded");
      const url = extractLink(item);

      if (!matchesCategoryContent({ title: rawTitle, summary: description }, category)) {
        return list;
      }

      const parsed = {
        title: await localize(rawTitle, category.label),
        summary: summaryFrom(description, category.label),
        source: feed.source,
        url,
        image: extractEmbeddedImage(item, url) || (await extractPageImage(url)) || category.image,
        time: extractTime(item),
        fetchedAt: nowIso,
      };

      parsed.summary = await parsed.summary;
      if (parsed.title && parsed.url && matchesCategoryContent(parsed, category)) {
        list.push(parsed);
      }
      return list;
    }, Promise.resolve([]));
}

async function fetchClsTelegraphs() {
  if (clsTelegraphCache) {
    return clsTelegraphCache;
  }

  const endpoint = new URL("https://www.cls.cn/api/cache");
  endpoint.searchParams.set("rn", "100");
  endpoint.searchParams.set("lastTime", String(Math.floor(Date.now() / 1000)));
  endpoint.searchParams.set("name", "telegraph");

  clsTelegraphCache = fetch(endpoint, {
    headers: {
      accept: "application/json",
      referer: "https://www.cls.cn/telegraph",
      "user-agent": "danielgzd.github.io daily-radar",
    },
  }).then(async (response) => {
    if (!response.ok) {
      throw new Error(`财联社 ${response.status}`);
    }

    const payload = await response.json();
    return Array.isArray(payload?.data?.roll_data) ? payload.data.roll_data : [];
  });

  return clsTelegraphCache;
}

async function fetchClsItems(category) {
  const matcher = clsMatchers[category.clsTopic];
  if (!matcher) {
    return [];
  }

  const telegraphs = await fetchClsTelegraphs();
  return telegraphs
    .filter((item) => matcher(item) && decode(item.brief || item.content || ""))
    .slice(0, 8)
    .map((item) => {
      const publishedAt = Number(item.ctime) > 0 ? new Date(Number(item.ctime) * 1000) : now;
      const rawSummary = decode(item.brief || item.content || "");
      const summary = rawSummary.slice(0, 116);

      return {
        title: decode(item.title),
        summary: summary.length < rawSummary.length ? `${summary}...` : summary,
        source: "财联社电报",
        url: `https://www.cls.cn/detail/${item.id}`,
        image: item.images?.[0] || category.image,
        time: new Intl.DateTimeFormat("zh-CN", {
          timeZone: "Asia/Shanghai",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(publishedAt),
        fetchedAt: publishedAt.toISOString(),
      };
    })
    .filter((item) => item.title && item.url);
}

function fallbackItems(category) {
  return category.fallback.map(([title, summary], index) => ({
    title,
    summary,
    source: "Daily Radar",
    url: `https://danielgzd.github.io/radar#${category.id}-${index}`,
    image: category.image,
    time: today.slice(5),
    fetchedAt: nowIso,
  }));
}

function normalizeExistingItem(item) {
  const fetchedAt = item.fetchedAt || item.createdAt || item.updatedAt || nowIso;
  return {
    title: item.title,
    summary: item.summary,
    source: item.source,
    url: item.url,
    image: item.image,
    time: item.time,
    fetchedAt,
  };
}

function isRecent(item) {
  const timestamp = new Date(item.fetchedAt);
  return !Number.isNaN(timestamp.getTime()) && timestamp >= cutoff;
}

async function readExistingCategories() {
  try {
    const raw = await readFile(outputUrl, "utf8");
    const parsed = JSON.parse(raw);
    return new Map(
      (parsed.categories ?? []).map((category) => [category.id, category.items ?? []]),
    );
  } catch {
    return new Map();
  }
}

async function probeUrl(url) {
  if (!url || url.startsWith("https://danielgzd.github.io/radar#")) {
    return true;
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  try {
    const response = await fetch(url, {
      method: "HEAD",
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "user-agent": "danielgzd.github.io daily-radar",
      },
    });

    if (response.status >= 200 && response.status < 400) {
      return true;
    }

    if ([404, 410, 451].includes(response.status)) {
      return false;
    }
  } catch {
    return true;
  } finally {
    clearTimeout(timeout);
  }

  return true;
}

async function validateExistingItems(items, category) {
  const normalized = items
    .map(normalizeExistingItem)
    .filter(
      (item) =>
        item.title &&
        item.summary &&
        item.source &&
        item.url &&
        item.image &&
        isRecent(item) &&
        matchesCategoryContent(item, category),
    );
  const checked = [];

  for (let index = 0; index < normalized.length; index += 8) {
    const batch = normalized.slice(index, index + 8);
    const results = await Promise.all(
      batch.map(async (item) => ({ item, valid: await probeUrl(item.url) })),
    );
    for (const result of results) {
      if (result.valid) {
        checked.push(result.item);
      }
    }
  }

  return checked;
}

function uniqueByUrl(items) {
  const used = new Set();
  return items.filter((item) => {
    if (used.has(item.url)) {
      return false;
    }
    used.add(item.url);
    return true;
  });
}

function interleave(lists) {
  const result = [];
  const longest = Math.max(0, ...lists.map((list) => list.length));
  for (let index = 0; index < longest; index += 1) {
    for (const list of lists) {
      if (list[index]) result.push(list[index]);
    }
  }
  return result;
}

async function buildCategory(category, existingMap) {
  const existing = await validateExistingItems(existingMap.get(category.id) ?? [], category);
  const sources = category.feeds.map((feed) => fetchFeed(feed, category));
  if (category.clsTopic) {
    sources.unshift(fetchClsItems(category));
  }
  const results = await Promise.allSettled(sources);
  const fetchedBySource = results
    .filter((result) => result.status === "fulfilled")
    .map((result) => result.value);

  const fresh = uniqueByUrl(interleave(fetchedBySource)).slice(0, 6);
  const items = uniqueByUrl([...fresh, ...existing]);

  return {
    id: category.id,
    label: category.label,
    description: category.description,
    items: items.length
      ? uniqueByUrl([...items, ...fallbackItems(category)]).slice(0, 6)
      : fallbackItems(category),
  };
}

const existingMap = await readExistingCategories();
const output = {
  updatedAt: today,
  generatedAt: nowIso,
  retentionDays: 10,
  categories: await Promise.all(categories.map((category) => buildCategory(category, existingMap))),
};

await writeFile(outputUrl, `${JSON.stringify(output, null, 2)}\n`);

console.log(
  `Updated ${output.categories.length} radar categories for ${today}; retained valid items for 10 days.`,
);
