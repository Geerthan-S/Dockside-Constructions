import { PageHero } from "@/components/page-hero";
import { ProjectCard } from "@/components/project-card";
import { industrialImages } from "@/lib/content";
import { getProjects } from "@/lib/repositories";

export const metadata = {
  title: "Projects",
  description: "CMS-powered project showcase for Dockside Constructions.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Dynamic case studies for premium construction delivery."
        description="Each project supports client logos, images, galleries, scope, timeline, value, status, services, testimonial and SEO metadata."
        image={industrialImages.hero}
      />
      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-20 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </>
  );
}

