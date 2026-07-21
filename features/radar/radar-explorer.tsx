"use client";

import { ArrowUpRight, Search } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import radarJson from "@/data/daily-headlines.json";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { RadarData } from "@/types/radar";

const radar = radarJson as RadarData;

export function RadarExplorer() {
  const [categoryId, setCategoryId] = useState(radar.categories[0]?.id ?? "");
  const [query, setQuery] = useState("");
  const category = radar.categories.find((item) => item.id === categoryId) ?? radar.categories[0];
  const items = useMemo(() => {
    const keyword = query.trim().toLowerCase();
    if (!keyword) return category?.items ?? [];
    return (category?.items ?? []).filter((item) =>
      `${item.title} ${item.summary} ${item.source}`.toLowerCase().includes(keyword),
    );
  }, [category, query]);

  return (
    <div>
      <div className="border-border bg-background/90 sticky top-16 z-30 -mx-4 border-y px-4 py-4 backdrop-blur-xl sm:-mx-6 sm:px-6 lg:mx-0 lg:rounded-xl lg:border lg:p-4">
        <div
          className="flex scrollbar-none gap-2 overflow-x-auto pb-1"
          role="tablist"
          aria-label="信息分类"
        >
          {radar.categories.map((item) => (
            <button
              aria-selected={item.id === categoryId}
              className={cn(
                "focus-visible:ring-ring shrink-0 rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none",
                item.id === categoryId
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
              key={item.id}
              onClick={() => setCategoryId(item.id)}
              role="tab"
              type="button"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Badge variant="secondary">{category?.label}</Badge>
          <p className="text-muted-foreground mt-3 max-w-2xl text-sm leading-7">
            {category?.description}
          </p>
        </div>
        <label className="relative block w-full sm:max-w-xs">
          <span className="sr-only">搜索当前分类</span>
          <Search
            aria-hidden="true"
            className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2"
          />
          <input
            className="border-border bg-card text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 h-11 w-full rounded-lg border pr-4 pl-10 text-sm transition-colors outline-none focus:ring-2"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="搜索标题、摘要或来源"
            type="search"
            value={query}
          />
        </label>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3" role="tabpanel">
        {items.map((item, index) => (
          <a
            className="group focus-visible:ring-ring block rounded-xl focus-visible:ring-2 focus-visible:outline-none"
            href={item.url}
            key={`${categoryId}-${item.url}`}
            rel="noreferrer"
            target="_blank"
          >
            <Card className="group-hover:border-primary/35 group-hover:shadow-primary/5 h-full overflow-hidden transition-[transform,border-color,box-shadow] duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl">
              <div className="bg-muted relative aspect-[16/9] overflow-hidden">
                <Image
                  alt=""
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  fill
                  loading={index === 0 ? "eager" : "lazy"}
                  onError={(event) => {
                    const image = event.currentTarget;
                    if (!image.src.endsWith("/images/radar-fallback.svg")) {
                      image.src = "/images/radar-fallback.svg";
                    }
                  }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  src={item.image}
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-primary text-xs font-medium">{item.source}</span>
                  <span className="text-muted-foreground text-xs">{item.time}</span>
                </div>
                <h2 className="text-foreground mt-3 line-clamp-2 text-lg leading-7 font-semibold">
                  {item.title}
                </h2>
                <p className="text-muted-foreground mt-3 line-clamp-3 text-sm leading-6">
                  {item.summary}
                </p>
                <ArrowUpRight className="text-muted-foreground group-hover:text-primary mt-5 ml-auto size-4 transition-[color,transform] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Card>
          </a>
        ))}
      </div>

      {items.length === 0 && (
        <div className="border-border mt-8 rounded-xl border border-dashed px-6 py-16 text-center">
          <p className="text-muted-foreground text-sm">当前分类中没有匹配内容。</p>
          <button
            className="text-primary mt-3 text-sm font-medium"
            onClick={() => setQuery("")}
            type="button"
          >
            清除搜索
          </button>
        </div>
      )}
    </div>
  );
}
