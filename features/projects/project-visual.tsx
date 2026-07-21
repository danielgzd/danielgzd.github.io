import { ProjectIcon } from "./project-icon";
import type { Project } from "@/types/content";

export function ProjectVisual({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  return (
    <div className="project-visual relative overflow-hidden rounded-xl border border-white/8 bg-[#0c0c0f]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="bg-primary/20 absolute -top-16 -right-12 size-48 rounded-full blur-3xl" />
      <div className="bg-accent/10 absolute -bottom-20 -left-12 size-44 rounded-full blur-3xl" />
      <div
        className={
          compact
            ? "relative flex min-h-44 items-center justify-center"
            : "relative flex min-h-72 items-center justify-center sm:min-h-96"
        }
      >
        <div className="border-primary/20 absolute size-32 rounded-full border sm:size-44" />
        <div className="absolute size-52 rounded-full border border-white/6 sm:size-72" />
        <span className="border-primary/30 bg-primary grid size-16 place-items-center rounded-2xl border text-white shadow-[0_0_60px_rgba(37,99,235,0.4)] sm:size-20">
          <ProjectIcon className="size-7 sm:size-9" icon={project.icon} />
        </span>
        <span className="absolute right-4 bottom-4 rounded-md border border-white/10 bg-black/50 px-2.5 py-1.5 font-mono text-[10px] text-zinc-400 backdrop-blur sm:right-6 sm:bottom-6 sm:text-xs">
          {project.metric}
        </span>
      </div>
    </div>
  );
}
