import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { RevealText } from "@/components/motion/reveal";
import type { ProjectView } from "@/lib/content";

export function Projects({ projects }: { projects: ProjectView[] }) {
  return (
    <section className="premium-projects">
      <div className="premium-projects__header">
        <div>
          <span>Our work</span>
          <RevealText>
            <h2>Featured Projects</h2>
          </RevealText>
          <p>
            Four high-value infrastructure stories across industrial facilities, logistics parks,
            civil works and commercial campus development.
          </p>
        </div>
        <Link href="/projects" className="studio-button studio-button--outline">
          View all projects <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
      <div className="premium-project-rail" aria-label="Featured projects">
        {projects.slice(0, 4).map((project, index) => (
          <Link
            href={`/projects/${project.slug}`}
            className="premium-project-card"
            key={project.id}
            style={{ ["--index" as string]: index }}
          >
            <div className="premium-project-card__image">
              <Image
                src={project.featuredImage}
                alt={project.title}
                fill
                data-parallax-media
                sizes="(min-width: 900px) 52vw, 92vw"
              />
            </div>
            <div className="premium-project-card__glass">
              <div>
                <span>{project.clientName}</span>
                <em className={project.status === "COMPLETED" ? "is-complete" : ""}>
                  {project.status.replace("_", " ")}
                </em>
              </div>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <dl>
                <div><dt>Location</dt><dd>{project.location}</dd></div>
                <div><dt>Value</dt><dd>{project.projectValue}</dd></div>
                <div><dt>Sector</dt><dd>{project.industry}</dd></div>
                <div><dt>Timeline</dt><dd>{project.timeline}</dd></div>
              </dl>
              <div className="premium-project-card__gallery" aria-label={`${project.title} gallery preview`}>
                {project.gallery.slice(0, 3).map((image, galleryIndex) => (
                  <span key={image}>
                    <Image
                      src={image}
                      alt={`${project.title} site visual ${galleryIndex + 1}`}
                      fill
                      sizes="120px"
                    />
                  </span>
                ))}
              </div>
              <ul>
                {project.servicesUsed.slice(0, 4).map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
