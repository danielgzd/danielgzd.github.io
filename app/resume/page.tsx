import type { Metadata } from "next";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Download,
  Mail,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { timeline } from "@/app/content";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { profile, skillGroups } from "@/data/profile";
import { projects } from "@/data/projects";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "履历",
  description: "Daniel 的 11 年开发经历、代表项目、工作方式与技术能力。",
  alternates: { canonical: "/resume" },
};

const strengths = [
  {
    title: "独立负责完整工作",
    body: "能从需求讨论开始，完成方案、开发、检查、发布和后续支持，不只关注写代码这一个环节。",
  },
  {
    title: "处理复杂业务问题",
    body: "长期服务银行移动应用，能够在规则多、参与方多、时间紧的情况下理清重点并稳定推进。",
  },
  {
    title: "重视长期质量",
    body: "会主动考虑异常情况、旧版本影响和后续维护成本，让功能不仅能上线，也能持续可靠地使用。",
  },
  {
    title: "持续改进工作方式",
    body: "愿意整理经验、完善文档并使用合适的新工具，帮助自己和团队减少重复劳动。",
  },
] as const;

const workingPrinciples = [
  "先确认要解决的问题和使用者真正需要什么，再开始设计实现方式。",
  "重要功能同时考虑正常流程、异常情况、旧版本兼容和上线后的维护。",
  "遇到跨团队问题时，先收集事实、缩小范围，再给出清楚且可验证的结论。",
  "对新技术保持开放，但以能否提高质量、效率和用户体验作为采用标准。",
] as const;

export default function ResumePage() {
  return (
    <main
      className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      id="main-content"
    >
      <Reveal className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="max-w-4xl">
          <Badge variant="success">11 年开发经验 · 上海</Badge>
          <h1 className="text-foreground mt-6 text-5xl font-bold tracking-[-0.04em] sm:text-6xl">
            11 年持续深耕移动开发，能够独立承担复杂产品的长期建设。
          </h1>
          <p className="text-muted-foreground mt-6 max-w-3xl text-base leading-8 sm:text-lg">
            长期参与银行和企业移动应用，从早期功能开发逐步成长为能够理解业务、设计方案、协调协作、保障上线并持续维护的资深开发工程师。近年也在把人工智能能力用于产品功能和日常开发。
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href="/Daniel-iOS-Resume-2026.md">
              <Download />
              下载 Markdown 简历
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href={siteConfig.links.email}>
              <Mail />
              联系我
            </Link>
          </Button>
        </div>
      </Reveal>

      <Reveal
        className="border-border mt-14 grid grid-cols-3 gap-3 border-y py-7 sm:max-w-2xl"
        delay={0.08}
      >
        {profile.stats.map((stat) => (
          <div className="border-border border-l pl-4 first:border-l-0 first:pl-0" key={stat.label}>
            <strong className="text-foreground block text-2xl font-bold sm:text-3xl">
              {stat.value}
              {stat.suffix}
            </strong>
            <span className="text-muted-foreground mt-1 block text-xs leading-5 sm:text-sm">
              {stat.label}
            </span>
          </div>
        ))}
      </Reveal>

      <section className="mt-20 sm:mt-28" aria-labelledby="resume-strengths">
        <Reveal>
          <p className="text-primary text-xs font-semibold tracking-[0.18em] uppercase">个人优势</p>
          <h2 className="text-foreground mt-3 text-3xl font-bold" id="resume-strengths">
            核心价值
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {strengths.map((item, index) => (
            <Reveal delay={index * 0.04} key={item.title}>
              <Card className="h-full p-6">
                <Sparkles className="text-primary size-5" />
                <h3 className="text-foreground mt-8 text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground mt-3 text-sm leading-7">{item.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-20 sm:mt-28" aria-labelledby="experience">
        <Reveal>
          <p className="text-primary text-xs font-semibold tracking-[0.18em] uppercase">工作经历</p>
          <h2 className="text-foreground mt-3 text-3xl font-bold" id="experience">
            工作与成长经历
          </h2>
        </Reveal>
        <div className="border-border relative mt-10 ml-3 border-l md:ml-40">
          {timeline.map((item, index) => (
            <Reveal
              className="relative pb-12 pl-8 last:pb-0"
              delay={Math.min(index * 0.035, 0.15)}
              key={`${item.period}-${item.title}`}
            >
              <span className="border-background bg-primary absolute top-1 -left-1.5 size-3 rounded-full border-2 shadow-[0_0_0_4px_var(--background)]" />
              <time className="text-primary mb-2 block font-mono text-xs md:absolute md:top-1 md:right-[calc(100%+2rem)] md:w-32 md:text-right">
                {item.period}
              </time>
              <h3 className="text-foreground text-lg font-semibold">{item.title}</h3>
              <p className="text-muted-foreground mt-3 max-w-4xl text-sm leading-7">{item.body}</p>
              {item.highlights && (
                <ul className="mt-5 grid max-w-4xl gap-3">
                  {item.highlights.map((highlight) => (
                    <li
                      className="text-muted-foreground flex gap-3 text-sm leading-7"
                      key={highlight}
                    >
                      <CheckCircle2 className="text-primary mt-1 size-4 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-20 sm:mt-28" aria-labelledby="working-principles">
        <Reveal>
          <p className="text-primary text-xs font-semibold tracking-[0.18em] uppercase">工作方式</p>
          <h2 className="text-foreground mt-3 text-3xl font-bold" id="working-principles">
            11 年经验沉淀下来的判断
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {workingPrinciples.map((principle, index) => (
            <Reveal delay={index * 0.04} key={principle}>
              <Card className="flex h-full gap-4 p-6">
                <span className="text-primary font-mono text-sm font-semibold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-muted-foreground text-sm leading-7">{principle}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-20 sm:mt-28" aria-labelledby="resume-projects">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-primary text-xs font-semibold tracking-[0.18em] uppercase">
                代表作品
              </p>
              <h2 className="text-foreground mt-3 text-3xl font-bold" id="resume-projects">
                代表项目
              </h2>
            </div>
            <Button asChild variant="ghost">
              <Link href="/projects">
                完整项目档案 <ArrowUpRight />
              </Link>
            </Button>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {projects.slice(0, 4).map((project, index) => (
            <Reveal delay={index * 0.04} key={project.slug}>
              <Link
                className="group focus-visible:ring-ring block rounded-xl focus-visible:ring-2 focus-visible:outline-none"
                href={`/projects/${project.slug}`}
              >
                <Card className="group-hover:border-primary/35 h-full p-6 transition-colors">
                  <div className="flex items-center justify-between">
                    <BriefcaseBusiness className="text-primary size-5" />
                    <span className="text-muted-foreground font-mono text-xs">
                      {project.metric}
                    </span>
                  </div>
                  <h3 className="text-foreground group-hover:text-primary mt-7 text-xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mt-3 text-sm leading-7">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.slice(0, 4).map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-20 sm:mt-28" aria-labelledby="resume-skills">
        <Reveal>
          <p className="text-primary text-xs font-semibold tracking-[0.18em] uppercase">技术能力</p>
          <h2 className="text-foreground mt-3 text-3xl font-bold" id="resume-skills">
            技术能力
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal delay={index * 0.04} key={group.title}>
              <Card className="h-full p-6">
                <h3 className="text-foreground text-lg font-semibold">{group.title}</h3>
                <p className="text-muted-foreground mt-1 text-sm">{group.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
