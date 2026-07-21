import type { Metadata } from "next";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/features/projects/project-card";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "项目",
  description: "Daniel 的移动端、AI、Web 与自动化项目实践。",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  const featured = projects.filter((project) => project.featured);
  const archive = projects.filter((project) => !project.featured);

  return (
    <main
      className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      id="main-content"
    >
      <Reveal className="max-w-3xl">
        <Badge variant="success">项目实践 · 2016—2026</Badge>
        <h1 className="text-foreground mt-6 text-5xl font-bold tracking-[-0.04em] sm:text-6xl">
          为真实需求而构建的项目
        </h1>
        <p className="text-muted-foreground mt-6 text-base leading-8 sm:text-lg">
          从金融移动平台、地图与跨端业务，到 AI 问答、Agent
          工作流和个人自动化。这些项目强调长期交付、复杂边界与真实结果。
        </p>
        <div className="mt-7 flex flex-wrap gap-2">
          {["移动端", "AI", "Web", "自动化"].map((category) => (
            <Badge key={category} variant="outline">
              {category}
            </Badge>
          ))}
        </div>
      </Reveal>

      <section className="mt-16 sm:mt-24" aria-labelledby="featured-projects">
        <Reveal>
          <p className="text-primary text-xs font-semibold tracking-[0.18em] uppercase">精选项目</p>
          <h2
            className="text-foreground mt-3 text-3xl font-bold tracking-tight"
            id="featured-projects"
          >
            核心项目
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {featured.map((project, index) => (
            <ProjectCard
              delay={index * 0.05}
              featured={index === 0}
              key={project.slug}
              project={project}
            />
          ))}
        </div>
      </section>

      <section className="mt-20 sm:mt-28" aria-labelledby="project-archive">
        <Reveal>
          <p className="text-primary text-xs font-semibold tracking-[0.18em] uppercase">项目归档</p>
          <h2
            className="text-foreground mt-3 text-3xl font-bold tracking-tight"
            id="project-archive"
          >
            更多实践
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {archive.map((project, index) => (
            <ProjectCard delay={index * 0.035} key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
