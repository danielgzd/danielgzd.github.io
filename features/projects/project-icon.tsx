import {
  Car,
  Code2,
  CreditCard,
  Layers3,
  Map,
  Radar,
  Smartphone,
  Sparkles,
  Workflow,
} from "lucide-react";
import type { Project } from "@/types/content";

const icons = {
  smartphone: Smartphone,
  sparkles: Sparkles,
  map: Map,
  "credit-card": CreditCard,
  layers: Layers3,
  car: Car,
  workflow: Workflow,
  radar: Radar,
  code: Code2,
};

export function ProjectIcon({ icon, className }: { icon: Project["icon"]; className?: string }) {
  const Icon = icons[icon];
  return <Icon aria-hidden="true" className={className} />;
}
