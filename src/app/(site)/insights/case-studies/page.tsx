import { PageHero } from "@/components/page-hero";
import { ProjectCard } from "@/components/project-card";
import { industrialImages } from "@/lib/content";
import { getProjects } from "@/lib/repositories";

export const metadata = { title: "Case Studies" };

export default async function CaseStudiesPage() {
  const projects = await getProjects();

  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Construction success stories with scope and delivery context."
        description="Case studies show client name, gallery, status, services, testimonial and SEO-ready content."
        image={industrialImages.crane}
      />
      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-20 sm:px-6 md:grid-cols-3 lg:px-8">
        {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
      </section>
    </>
  );
}

