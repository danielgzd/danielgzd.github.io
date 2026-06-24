import { writeFile } from "node:fs/promises";

const categories = [
  {
    id: "ai",
    label: "AI",
    description: "人工智能、模型、智能硬件与 AI 产品动态。",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    feeds: [
      { source: "MIT Technology Review", url: "https://www.technologyreview.com/feed/" },
      { source: "The Decoder", url: "https://the-decoder.com/feed/" },
    ],
    fallback: [
      ["AI 产品继续从聊天框走向工作流", "模型能力正在进入搜索、代码、办公和终端设备，真正的竞争点会回到场景完成度。"],
      ["端侧智能成为新一轮硬件关键词", "隐私、响应速度和续航会决定 AI 功能能否从演示走向日常使用。"],
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
      ["国际局势持续牵动能源、贸易与科技产业链", "地缘政治的变化正在影响企业供应链、市场预期和普通人的消费选择。"],
      ["全球公共议题进入更复杂的协商阶段", "气候、移民、安全和技术治理继续交织，信息判断比单点新闻更重要。"],
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
      ["全球市场继续围绕利率与科技股重新定价", "资金正在寻找增长确定性，AI、芯片、能源和消费成为观察重点。"],
      ["公司增长叙事更依赖真实现金流", "宏观不确定时，盈利质量、成本控制和业务韧性会被市场重新审视。"],
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
    ],
    fallback: [
      ["消费电子重新强调系统级体验", "硬件参数之外，AI 能力、跨设备协同和软件更新正在成为更强的购买理由。"],
      ["互联网产品继续向工具化和订阅化演进", "平台开始把效率、内容和智能助手整合进更完整的使用场景。"],
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
      ["智能汽车竞争继续转向软件体验", "当电动平台逐渐趋同，座舱、辅助驾驶、补能和长期 OTA 会更容易拉开差距。"],
      ["车企开始用生态能力争夺用户时间", "车机应用、手机互联和智能助手会影响用户对一辆车的长期满意度。"],
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
      ["游戏行业继续寻找大作与长线运营的平衡", "研发成本、玩家时间和社区生态决定了新作品能否长期留在日常里。"],
      ["创作者工具正在改变玩家和游戏的关系", "模组、UGC 和直播社区让游戏不只是消费品，也是一套持续生长的内容系统。"],
    ],
  },
  {
    id: "dev",
    label: "开发",
    description: "开发者工具、开源、代码平台、工程效率与安全。",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
    feeds: [
      { source: "GitHub Blog", url: "https://github.blog/changelog/feed/" },
      { source: "Hacker News", url: "https://hnrss.org/frontpage" },
    ],
    fallback: [
      ["开发者工具继续向自动化协作升级", "代码生成只是起点，真正有价值的是能帮助理解上下文、执行验证和降低维护成本。"],
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
];

const today = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Shanghai",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}).format(new Date());

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
  const translated = payload?.[0]?.map((part) => part?.[0] ?? "").join("").trim();
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

function extractLink(item) {
  const linkText = tagValue(item, "link");
  const href = item.match(/<link[^>]+href="([^"]+)"/i)?.[1];
  return decode(href ?? linkText);
}

function extractImage(item, fallback) {
  const media = item.match(/<media:content[^>]+url="([^"]+)"/i);
  const thumbnail = item.match(/<media:thumbnail[^>]+url="([^"]+)"/i);
  const enclosure = item.match(/<enclosure[^>]+url="([^"]+)"/i);
  return decode(media?.[1] ?? thumbnail?.[1] ?? enclosure?.[1] ?? fallback);
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
  const entries = xml.match(/<item[\s\S]*?<\/item>/gi) ?? xml.match(/<entry[\s\S]*?<\/entry>/gi) ?? [];

  return entries
    .slice(0, 5)
    .reduce(async (promise, item) => {
      const list = await promise;
      const rawTitle = tagValue(item, "title");
      const description =
        tagValue(item, "description") || tagValue(item, "summary") || tagValue(item, "content:encoded");

      const parsed = {
        title: await localize(rawTitle, category.label),
        summary: summaryFrom(description, category.label),
        source: feed.source,
        url: extractLink(item),
        image: category.image,
        time: extractTime(item),
      };

      parsed.summary = await parsed.summary;
      if (parsed.title && parsed.url) {
        list.push(parsed);
      }
      return list;
    }, Promise.resolve([]));
}

function fallbackItems(category) {
  return category.fallback.map(([title, summary]) => ({
    title,
    summary,
    source: "Daily Radar",
    url: "https://danielgzd.github.io/",
    image: category.image,
    time: today.slice(5),
  }));
}

async function buildCategory(category) {
  const results = await Promise.allSettled(category.feeds.map((feed) => fetchFeed(feed, category)));
  const fetched = results
    .filter((result) => result.status === "fulfilled")
    .flatMap((result) => result.value);

  const used = new Set();
  const items = fetched.filter((item) => {
    if (used.has(item.url)) {
      return false;
    }
    used.add(item.url);
    return true;
  });

  return {
    id: category.id,
    label: category.label,
    description: category.description,
    items: items.slice(0, 6).length >= 2 ? items.slice(0, 6) : fallbackItems(category),
  };
}

const output = {
  updatedAt: today,
  categories: await Promise.all(categories.map(buildCategory)),
};

await writeFile(
  new URL("../data/daily-headlines.json", import.meta.url),
  `${JSON.stringify(output, null, 2)}\n`,
);

console.log(`Updated ${output.categories.length} radar categories for ${today}.`);
