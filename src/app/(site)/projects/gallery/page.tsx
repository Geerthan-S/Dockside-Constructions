import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { industrialImages } from "@/lib/content";
import { getProjects } from "@/lib/repositories";

export const metadata = { title: "Project Gallery" };

export default async function ProjectGalleryPage() {
  const projects = await getProjects();
  const images = projects.flatMap((project) =>
    project.gallery.map((image) => ({ image, title: project.title })),
  );

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Project visuals from active and completed sites."
        description="A CMS-driven gallery powered by project uploads and case-study media."
        image={industrialImages.hero}
      />
      <section className="mx-auto grid max-w-7xl gap-4 px-4 py-20 sm:px-6 md:grid-cols-3 lg:px-8">
        {images.map((item, index) => (
          <div key={`${item.image}-${index}`} className="glass-panel relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image src={item.image} alt={item.title} fill className="object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-sm">
              {item.title}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

