import { PageHero } from "@/components/page-hero";
import { ProjectCard } from "@/components/project-card";
import { industrialImages } from "@/lib/content";
import { getProjects } from "@/lib/repositories";

export const metadata = {
  title: "Projects",
  description: "Project showcase for Dockside Constructions across industrial, public infrastructure, logistics, roads, drainage and civil works.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Executed works for corporate and government clients."
        description="Selected project profiles from Whirlpool, Lodha Industrial Park, Adani Logistics, Chennai One IT SEZ and public infrastructure programs."
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
