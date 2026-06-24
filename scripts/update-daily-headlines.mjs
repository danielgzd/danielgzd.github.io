import { writeFile } from "node:fs/promises";

const feeds = [
  {
    category: "开发",
    source: "Hacker News",
    url: "https://hnrss.org/frontpage",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "汽车",
    source: "The Verge",
    url: "https://www.theverge.com/rss/transportation/index.xml",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "电子",
    source: "The Verge",
    url: "https://www.theverge.com/rss/tech/index.xml",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "游戏",
    source: "IGN",
    url: "https://feeds.feedburner.com/ign/news",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
  },
];

const fallbackItems = [
  {
    title: "开发者工具正在进入 AI 原生阶段",
    source: "Daily Radar",
    category: "开发",
    summary:
      "从代码补全到任务代理，下一代工程效率工具不只是回答问题，而是参与排障、重构、测试与发布。",
    url: "https://github.blog/changelog/",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "智能汽车的竞争焦点继续转向座舱与软件体验",
    source: "Daily Radar",
    category: "汽车",
    summary:
      "电驱平台趋同之后，车机、辅助驾驶、生态互联和长期 OTA 能力会成为更容易被用户感知的差异。",
    url: "https://www.theverge.com/transportation",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "消费电子重新押注端侧智能",
    source: "Daily Radar",
    category: "电子",
    summary:
      "手机、电脑、耳机与可穿戴设备正在把 AI 能力下沉到本地，隐私、续航和系统级体验会一起被考验。",
    url: "https://www.theverge.com/tech",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "游戏体验的上限越来越像一套完整技术栈",
    source: "Daily Radar",
    category: "游戏",
    summary:
      "画面、叙事、物理、网络、社区与创作者工具共同决定一款游戏能否长期留在玩家的日常里。",
    url: "https://www.ign.com/news",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
  },
];

const today = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Shanghai",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}).format(new Date());

function decode(value = "") {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
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

function tagValue(item, tag) {
  const match = item.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"));
  return decode(match?.[1]);
}

function extractImage(item, fallback) {
  const media = item.match(/<media:content[^>]+url="([^"]+)"/i);
  const enclosure = item.match(/<enclosure[^>]+url="([^"]+)"/i);
  return decode(media?.[1] ?? enclosure?.[1] ?? fallback);
}

function summaryFrom(description) {
  if (!description || description.includes("Article URL:") || description.includes("Comments URL:")) {
    return "今天值得放进雷达的一条动态，适合后续整理成更完整的专题观察。";
  }

  const text = description.slice(0, 138);
  return text.length < description.length ? `${text}...` : text;
}

async function fetchFeed(feed) {
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

  if (entries.length === 0) {
    throw new Error(`${feed.source} empty feed`);
  }

  return entries
    .slice(0, 8)
    .map((item) => {
      const title = tagValue(item, "title");
      const link = tagValue(item, "link") || item.match(/<link[^>]+href="([^"]+)"/i)?.[1];
      const description =
        tagValue(item, "description") || tagValue(item, "summary") || tagValue(item, "content:encoded");

      return {
        title,
        source: feed.source,
        category: feed.category,
        summary: summaryFrom(description),
        url: decode(link),
        image: extractImage(item, feed.image),
      };
    })
    .filter((item) => item.title && item.url);
}

const results = await Promise.allSettled(feeds.map(fetchFeed));
const fetched = results
  .filter((result) => result.status === "fulfilled")
  .flatMap((result) => result.value);

const usedUrls = new Set();
const items = feeds.map((feed, index) => {
  const item = fetched.find((candidate) => {
    return candidate.category === feed.category && !usedUrls.has(candidate.url);
  });

  if (item) {
    usedUrls.add(item.url);
    return item;
  }

  return fallbackItems[index];
});

await writeFile(
  new URL("../data/daily-headlines.json", import.meta.url),
  `${JSON.stringify({ updatedAt: today, items }, null, 2)}\n`,
);

console.log(`Updated ${items.length} daily radar items for ${today}.`);
