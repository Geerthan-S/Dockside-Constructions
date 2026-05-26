import Link from "next/link";
import { FolderKanban } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { industrialImages } from "@/lib/content";
import { getProjects } from "@/lib/repositories";

export const metadata = { title: "Project Categories" };

export default async function ProjectCategoriesPage() {
  const projects = await getProjects();
  const categories = Array.from(new Set(projects.map((project) => project.industry)));

  return (
    <>
      <PageHero
        eyebrow="Project Categories"
        title="Browse projects by construction sector."
        description="Portfolio categories help clients understand Dockside's experience across residential, commercial, industrial and infrastructure work."
        image={industrialImages.site}
      />
      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-20 sm:px-6 md:grid-cols-3 lg:px-8">
        {categories.map((category) => (
          <Link key={category} href="/projects" className="glass-panel rounded-lg p-7 transition hover:border-primary/40">
            <FolderKanban className="mb-6 size-7 text-primary" />
            <h2 className="text-2xl font-semibold">{category}</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              View relevant case studies, scope summaries and delivery highlights.
            </p>
          </Link>
        ))}
      </section>
    </>
  );
}

