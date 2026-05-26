import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { ProjectView } from "@/lib/content";

export function ProjectCard({ project }: { project: ProjectView }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="glass-panel group block overflow-hidden rounded-lg transition hover:-translate-y-1 hover:border-primary/40"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.featuredImage}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/88 via-background/10 to-transparent" />
        <Badge className="absolute left-4 top-4 bg-background/80 text-foreground backdrop-blur">
          {project.status.replace("_", " ")}
        </Badge>
      </div>
      <div className="p-5">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-primary">{project.clientName}</p>
            <h3 className="mt-2 text-xl font-semibold leading-tight">{project.title}</h3>
          </div>
          <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition group-hover:text-primary" />
        </div>
        <p className="line-clamp-2 text-sm leading-6 text-muted-foreground">{project.summary}</p>
        <div className="mt-5 flex items-center justify-between gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <MapPin className="size-3.5" />
            {project.location}
          </span>
          <span>{project.projectValue}</span>
        </div>
      </div>
    </Link>
  );
}
