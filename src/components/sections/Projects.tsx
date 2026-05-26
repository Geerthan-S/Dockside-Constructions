import Image from "next/image";
import Link from "next/link";
import type { ProjectView } from "@/lib/content";

export function Projects({ projects }: { projects: ProjectView[] }) {
  return (
    <section className="studio-projects">
      {projects.slice(0, 4).map((project, index) => (
        <Link
          href={`/projects/${project.slug}`}
          className={`studio-project-card studio-project-card--${index}`}
          key={project.id}
        >
          <div className="studio-project-card__top">
            <span>{project.clientName}</span>
            <em className={project.status === "COMPLETED" ? "is-complete" : ""}>
              {project.status.replace("_", " ")}
            </em>
          </div>
          <div className="studio-project-card__image">
            <Image src={project.featuredImage} alt={project.title} fill sizes="(min-width: 900px) 50vw, 100vw" />
          </div>
          <h3>{project.title}</h3>
          <p>{project.location} — {project.projectValue}</p>
          <i>→</i>
        </Link>
      ))}
    </section>
  );
}

