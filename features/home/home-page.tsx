import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Code2,
  GitBranch,
  Layers3,
  Mail,
  Map,
  Radio,
  Smartphone,
  Sparkles,
  Terminal,
} from "lucide-react";
import Link from "next/link";
import {
  siDocker,
  siLinux,
  siNextdotjs,
  siPython,
  siReact,
  siSwift,
  siTailwindcss,
  siTypescript,
  type SimpleIcon,
} from "simple-icons";
import { NumberTicker } from "@/components/motion/number-ticker";
import { CssReveal as Reveal } from "@/components/motion/css-reveal";
import { TypingLine } from "@/components/motion/typing-line";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { timeline } from "@/app/content";
import { aboutCards, profile, skillGroups } from "@/data/profile";
import { projects } from "@/data/projects";
import { formatPostDate, getAllPosts } from "@/lib/posts";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const brandIcons: Record<string, SimpleIcon> = {
  Swift: siSwift,
  React: siReact,
  "Next.js": siNextdotjs,
  TypeScript: siTypescript,
  "Tailwind CSS": siTailwindcss,
  Python: siPython,
  Docker: siDocker,
  Linux: siLinux,
};

const projectIcons = {
  smartphone: Smartphone,
  sparkles: Sparkles,
  map: Map,
};

function BrandIcon({ icon }: { icon: SimpleIcon }) {
  return (
    <svg aria-hidden="true" className="size-4 fill-current" role="img" viewBox="0 0 24 24">
      <path d={icon.path} />
    </svg>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-8 max-w-2xl md:mb-10">
      <p className="text-primary mb-3 text-xs font-semibold tracking-[0.18em] uppercase">
        {eyebrow}
      </p>
      <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      <p className="text-muted-foreground mt-4 text-base leading-7 sm:text-lg">{description}</p>
    </div>
  );
}

function HeroVisual() {
  return (
    <div
      aria-hidden="true"
      className="hero-visual relative mx-auto aspect-square w-full max-w-[34rem]"
    >
      <div className="border-primary/20 absolute inset-[10%] rounded-full border" />
      <div className="border-border absolute inset-[22%] rounded-full border" />
      <div className="bg-primary/15 absolute inset-[34%] rounded-full blur-2xl" />
      <Card className="absolute top-[8%] right-[2%] w-[62%] border-white/10 bg-black/60 p-4 shadow-2xl backdrop-blur-xl">
        <div className="mb-4 flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-red-400/80" />
          <span className="size-2 rounded-full bg-amber-400/80" />
          <span className="size-2 rounded-full bg-green-400/80" />
          <span className="ml-auto font-mono text-[10px] text-zinc-500">agent.swift</span>
        </div>
        <pre className="overflow-hidden font-mono text-[10px] leading-5 text-zinc-400 sm:text-xs">
          <code>
            <span className="text-blue-400">let</span> product = AIProduct{`\n`}
            {"  "}.native(<span className="text-orange-300">Swift.self</span>){`\n`}
            {"  "}.web(<span className="text-cyan-300">NextJS.self</span>){`\n`}
            {"  "}.ship()
          </code>
        </pre>
      </Card>
      <Card className="absolute bottom-[12%] left-[2%] w-[58%] border-white/10 bg-black/60 p-4 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <span className="bg-accent/15 text-accent grid size-10 place-items-center rounded-xl">
            <Bot className="size-5" />
          </span>
          <div>
            <p className="text-xs text-zinc-500">智能体状态</p>
            <p className="mt-1 text-sm font-medium text-zinc-100">上下文已理解</p>
          </div>
          <Radio className="text-accent ml-auto size-4 animate-pulse" />
        </div>
      </Card>
      <div className="border-primary/30 bg-primary text-primary-foreground absolute top-[44%] left-[45%] grid size-16 place-items-center rounded-2xl border shadow-[0_0_50px_rgba(37,99,235,0.45)]">
        <Sparkles className="size-7" />
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative grid min-h-[calc(100svh-4rem)] items-center gap-12 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:py-20">
      <div className="relative z-10">
        <div>
          <Badge className="mb-6" variant="success">
            <span className="bg-accent size-1.5 rounded-full shadow-[0_0_10px_currentColor]" />
            {profile.availability}
          </Badge>
          <p className="text-muted-foreground text-sm font-semibold tracking-[0.18em] uppercase">
            {profile.name}
          </p>
          <h1 className="text-foreground mt-4 max-w-3xl text-5xl font-bold tracking-[-0.045em] text-balance sm:text-6xl lg:text-7xl">
            用 <span className="gradient-text">Swift 与 Web</span> 构建 AI 产品
          </h1>
          <p className="text-foreground mt-5 min-h-8 text-lg font-medium sm:text-xl">
            <TypingLine items={profile.roles} />
          </p>
          <p className="text-muted-foreground mt-5 max-w-2xl text-base leading-8 sm:text-lg">
            {profile.introduction}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/projects">
                查看项目 <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={siteConfig.links.email}>
                联系我 <Mail />
              </Link>
            </Button>
          </div>
        </div>
        <Reveal className="mt-12 grid max-w-xl grid-cols-3 gap-3" delay={0.12}>
          {profile.stats.map((stat) => (
            <div className="border-border border-l pl-4" key={stat.label}>
              <strong className="text-foreground block text-2xl font-bold tracking-tight sm:text-3xl">
                <NumberTicker suffix={stat.suffix} value={stat.value} />
              </strong>
              <span className="text-muted-foreground mt-1 block text-xs leading-5 sm:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
      <Reveal className="relative" delay={0.08}>
        <HeroVisual />
      </Reveal>
    </section>
  );
}

function AboutSection() {
  const icons = [Layers3, CheckCircle2, BrainCircuit, Code2];
  return (
    <section className="home-section" id="about">
      <Reveal>
        <SectionHeading
          description="我关心的不只是代码是否运行，也关心产品是否清楚、系统是否稳定，以及团队能否持续交付。"
          eyebrow="关于我"
          title="在工程深度与产品直觉之间"
        />
      </Reveal>
      <div className="grid gap-4 md:grid-cols-3">
        {aboutCards.map((card, index) => {
          const Icon = icons[index % icons.length];
          return (
            <Reveal className={card.className} delay={index * 0.04} key={card.title}>
              <Card className="group hover:border-primary/35 hover:shadow-primary/5 h-full overflow-hidden p-6 transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-7">
                <Icon className="text-primary mb-12 size-5 transition-transform group-hover:scale-110" />
                <p className="text-muted-foreground text-xs font-semibold tracking-[0.15em] uppercase">
                  {card.eyebrow}
                </p>
                <h3 className="text-foreground mt-3 text-xl font-semibold tracking-tight">
                  {card.title}
                </h3>
                <p className="text-muted-foreground mt-3 text-sm leading-7">{card.description}</p>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section className="home-section" id="skills">
      <Reveal>
        <SectionHeading
          description="不使用模糊的百分比描述能力，而是按实际工作场景组织稳定使用的技术与工具。"
          eyebrow="技术能力"
          title="跨越原生、Web 与 AI 的工具箱"
        />
      </Reveal>
      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Reveal delay={index * 0.04} key={group.title}>
            <Card className="h-full p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-foreground text-lg font-semibold">{group.title}</h3>
                  <p className="text-muted-foreground mt-1 text-sm">{group.description}</p>
                </div>
                <Terminal className="text-primary size-5" />
              </div>
              <div className="mt-7 flex flex-wrap gap-2">
                {group.skills.map((skill) => {
                  const brandIcon = brandIcons[skill];
                  return (
                    <Badge className="gap-2 px-3 py-2" key={skill} variant="secondary">
                      {brandIcon ? <BrandIcon icon={brandIcon} /> : <Sparkles className="size-4" />}
                      {skill}
                    </Badge>
                  );
                })}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section className="home-section" id="projects">
      <Reveal>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            description="选择能代表长期投入、复杂业务理解和 AI 产品探索的项目，而不是简单罗列功能。"
            eyebrow="代表作品"
            title="精选项目"
          />
          <Button asChild className="mb-10 w-fit" variant="ghost">
            <Link href="/projects">
              全部项目 <ArrowUpRight />
            </Link>
          </Button>
        </div>
      </Reveal>
      <div className="grid auto-rows-[minmax(18rem,auto)] gap-4 md:grid-cols-2">
        {featuredProjects.map((project, index) => {
          const Icon = projectIcons[project.icon as keyof typeof projectIcons];
          return (
            <Reveal
              className={index === 0 ? "md:col-span-2 md:row-span-2" : ""}
              delay={index * 0.05}
              key={project.slug}
            >
              <Link
                className="focus-visible:ring-ring block h-full rounded-xl focus-visible:ring-2 focus-visible:outline-none"
                href={`/projects/${project.slug}`}
              >
                <Card className="project-card group relative h-full overflow-hidden p-6 sm:p-8">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(37,99,235,0.17),transparent_35%)] opacity-70 transition-opacity group-hover:opacity-100" />
                  <div className="relative flex h-full flex-col">
                    <div className="flex items-start justify-between">
                      <span className="border-primary/20 bg-primary/10 text-primary grid size-11 place-items-center rounded-xl border">
                        <Icon className="size-5" />
                      </span>
                      <span className="text-muted-foreground font-mono text-xs">
                        {project.metric}
                      </span>
                    </div>
                    <div className="mt-auto pt-20">
                      <h3
                        className={cn(
                          "text-foreground font-semibold tracking-tight",
                          index === 0 ? "text-3xl" : "text-2xl",
                        )}
                      >
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mt-3 max-w-2xl text-sm leading-7">
                        {project.description}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="outline">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function BlogSection() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <section className="home-section" id="writing">
      <Reveal>
        <SectionHeading
          description="记录 Swift、iOS、LLM 和工程效率实践，让解决方案背后的判断也成为可以复用的知识。"
          eyebrow="技术写作"
          title="值得沉淀的思考与实践"
        />
      </Reveal>
      <div className="divide-border border-border divide-y border-y">
        {latestPosts.map((post, index) => (
          <Reveal delay={index * 0.04} key={post.title}>
            <Link
              className="group focus-visible:ring-ring grid gap-4 rounded-lg py-6 transition-colors focus-visible:ring-2 focus-visible:outline-none sm:grid-cols-[7rem_1fr_auto] sm:items-center sm:py-7"
              href={`/blog/${post.slug}`}
            >
              <Badge className="w-fit" variant="secondary">
                {post.category}
              </Badge>
              <div>
                <h3 className="text-foreground group-hover:text-primary text-lg font-semibold transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mt-2 text-sm leading-6">{post.description}</p>
              </div>
              <span className="text-muted-foreground text-xs">
                {formatPostDate(post.publishedAt)}
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function TimelineSection() {
  return (
    <section className="home-section" id="timeline">
      <Reveal>
        <SectionHeading
          description="从移动开发起步，逐步进入金融复杂业务、跨端工程和 AI 产品实践。"
          eyebrow="成长轨迹"
          title="持续构建，也持续升级方法"
        />
      </Reveal>
      <div className="border-border relative ml-3 border-l md:ml-36">
        {timeline.slice(0, 3).map((item, index) => (
          <Reveal className="relative pb-10 pl-8 last:pb-0" delay={index * 0.05} key={item.period}>
            <span className="border-background bg-primary absolute top-1 -left-1.5 size-3 rounded-full border-2 shadow-[0_0_0_4px_var(--background)]" />
            <time className="text-primary mb-2 block font-mono text-xs md:absolute md:top-1 md:right-[calc(100%+2rem)] md:w-28 md:text-right">
              {item.period}
            </time>
            <h3 className="text-foreground text-lg font-semibold">{item.title}</h3>
            <p className="text-muted-foreground mt-3 line-clamp-3 max-w-3xl text-sm leading-7">
              {item.body}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="home-section pb-4" id="contact">
      <Reveal>
        <Card className="border-primary/20 relative overflow-hidden px-6 py-12 text-center sm:px-12 sm:py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.2),transparent_48%)]" />
          <div className="relative mx-auto max-w-2xl">
            <Badge variant="success">期待有价值的交流与合作</Badge>
            <h2 className="text-foreground mt-6 text-3xl font-bold tracking-tight sm:text-5xl">
              一起把一个好想法，做成真正可用的产品。
            </h2>
            <p className="text-muted-foreground mt-5 text-base leading-7">
              如果你正在探索 iOS、Web、AI 产品或工程效率，欢迎交流。
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href={siteConfig.links.email}>
                  <Mail /> 发送邮件
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={siteConfig.links.github}>
                  <GitBranch /> GitHub
                </Link>
              </Button>
            </div>
          </div>
        </Card>
      </Reveal>
    </section>
  );
}

export function HomePage() {
  return (
    <main className="relative overflow-hidden" id="main-content">
      <div aria-hidden="true" className="aurora-background" />
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <BlogSection />
        <TimelineSection />
        <ContactSection />
      </div>
    </main>
  );
}
