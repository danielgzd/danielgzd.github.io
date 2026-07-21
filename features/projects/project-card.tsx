import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/content";
import { ProjectVisual } from "./project-visual";

export function ProjectCard({
  project,
  featured = false,
  delay = 0,
}: {
  project: Project;
  featured?: boolean;
  delay?: number;
}) {
  return (
    <Reveal className={cn(featured && "md:col-span-2")} delay={delay}>
      <Link
        className="group focus-visible:ring-ring block h-full rounded-xl focus-visible:ring-2 focus-visible:outline-none"
        href={`/projects/${project.slug}`}
      >
        <Card
          className={cn(
            "group-hover:border-primary/35 group-hover:shadow-primary/5 h-full overflow-hidden p-3 transition-[transform,border-color,box-shadow] duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl",
            featured && "md:grid md:grid-cols-[1.2fr_0.8fr] md:items-stretch",
          )}
        >
          <ProjectVisual compact project={project} />
          <div className="flex min-h-56 flex-col p-4 sm:p-5">
            <div className="flex items-center justify-between gap-4">
              <Badge variant={project.category === "AI" ? "success" : "secondary"}>
                {project.category}
              </Badge>
              <span className="text-muted-foreground font-mono text-xs">{project.period}</span>
            </div>
            <h2
              className={cn(
                "text-foreground mt-6 font-semibold tracking-tight",
                featured ? "text-2xl sm:text-3xl" : "text-xl",
              )}
            >
              {project.title}
            </h2>
            <p className="text-muted-foreground mt-3 text-sm leading-7">{project.description}</p>
            <div className="mt-auto flex items-end justify-between gap-4 pt-6">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 3).map((tag) => (
                  <span className="text-muted-foreground text-xs" key={tag}>
                    #{tag.replaceAll(" ", "-")}
                  </span>
                ))}
              </div>
              <ArrowUpRight className="text-muted-foreground group-hover:text-primary size-5 shrink-0 transition-[color,transform] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </Card>
      </Link>
    </Reveal>
  );
}
