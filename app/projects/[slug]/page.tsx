import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, Check, GitBranch } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getProject, projects } from "@/data/projects";
import { ProjectCard } from "@/features/projects/project-card";
import { ProjectVisual } from "@/features/projects/project-visual";
import { siteConfig } from "@/lib/site-config";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const related = projects
    .filter((item) => item.slug !== project.slug && item.category === project.category)
    .slice(0, 2);

  return (
    <main
      className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
      id="main-content"
    >
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: project.title,
            description: project.description,
            creator: { "@type": "Person", name: "Daniel Gao" },
            url: `${siteConfig.url}/projects/${project.slug}`,
            keywords: project.tags.join(", "),
          }).replace(/</g, "\\u003c"),
        }}
        type="application/ld+json"
      />
      <Reveal>
        <Button asChild variant="ghost">
          <Link href="/projects">
            <ArrowLeft />
            返回项目列表
          </Link>
        </Button>
      </Reveal>

      <article className="mt-10">
        <Reveal className="grid gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-end">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant={project.category === "AI" ? "success" : "default"}>
                {project.category}
              </Badge>
              <Badge variant="outline">{project.period}</Badge>
            </div>
            <h1 className="text-foreground mt-6 text-4xl font-bold tracking-[-0.04em] sm:text-6xl">
              {project.title}
            </h1>
            <p className="text-muted-foreground mt-6 max-w-3xl text-base leading-8 sm:text-lg">
              {project.description}
            </p>
          </div>
          <dl className="border-border grid grid-cols-2 gap-5 border-l pl-6">
            <div>
              <dt className="text-muted-foreground text-xs tracking-wider uppercase">负责角色</dt>
              <dd className="text-foreground mt-2 text-sm font-medium">{project.role}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground text-xs tracking-wider uppercase">项目成果</dt>
              <dd className="text-foreground mt-2 font-mono text-sm">{project.metric}</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal className="mt-12" delay={0.08}>
          <ProjectVisual project={project} />
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <Reveal>
            <aside className="lg:sticky lg:top-28">
              <p className="text-primary text-xs font-semibold tracking-[0.18em] uppercase">
                Stack
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              {(project.links?.demo || project.links?.github) && (
                <div className="mt-8 flex flex-wrap gap-3">
                  {project.links.demo && (
                    <Button asChild>
                      <Link href={project.links.demo}>
                        Open project <ArrowUpRight />
                      </Link>
                    </Button>
                  )}
                  {project.links.github && (
                    <Button asChild variant="outline">
                      <Link href={project.links.github} rel="noreferrer" target="_blank">
                        <GitBranch />
                        Source
                      </Link>
                    </Button>
                  )}
                </div>
              )}
              {!project.links && (
                <p className="border-border bg-muted/40 text-muted-foreground mt-8 rounded-lg border p-4 text-sm leading-6">
                  企业项目以脱敏 Case Study 展示，源代码与内部产品地址不公开。
                </p>
              )}
            </aside>
          </Reveal>

          <div className="space-y-12">
            {[
              { label: "01 · Challenge", title: "问题不是完成一个页面", body: project.challenge },
              { label: "02 · Approach", title: "把复杂度放进清晰边界", body: project.solution },
              { label: "03 · Outcome", title: "交付真实、可持续的结果", body: project.outcome },
            ].map((section, index) => (
              <Reveal delay={index * 0.04} key={section.label}>
                <section>
                  <p className="text-primary font-mono text-xs">{section.label}</p>
                  <h2 className="text-foreground mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground mt-4 text-base leading-8">{section.body}</p>
                </section>
              </Reveal>
            ))}

            <Reveal>
              <Card className="p-6 sm:p-8">
                <p className="text-primary text-xs font-semibold tracking-[0.18em] uppercase">
                  Highlights
                </p>
                <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                  {project.highlights.map((highlight) => (
                    <li
                      className="text-foreground flex items-start gap-3 text-sm leading-6"
                      key={highlight}
                    >
                      <span className="bg-accent/12 text-accent mt-0.5 grid size-5 shrink-0 place-items-center rounded-full">
                        <Check className="size-3" />
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-border mt-24 border-t pt-16" aria-labelledby="related-projects">
          <Reveal>
            <p className="text-primary text-xs font-semibold tracking-[0.18em] uppercase">
              Keep exploring
            </p>
            <h2 className="text-foreground mt-3 text-3xl font-bold" id="related-projects">
              相关项目
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {related.map((item, index) => (
              <ProjectCard delay={index * 0.04} key={item.slug} project={item} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
