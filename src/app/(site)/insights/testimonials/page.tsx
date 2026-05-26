import { Quote } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { industrialImages } from "@/lib/content";
import { getProjects } from "@/lib/repositories";

export const metadata = { title: "Testimonials" };

export default async function TestimonialsPublicPage() {
  const projects = await getProjects();
  const testimonials = projects.flatMap((project) =>
    project.testimonial ? [{ project: project.title, ...project.testimonial }] : [],
  );

  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Client confidence, captured from real project delivery."
        description="Testimonials are connected to project case studies and manageable from the CMS."
        image={industrialImages.structure}
      />
      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-20 sm:px-6 md:grid-cols-2 lg:px-8">
        {testimonials.map((item) => (
          <div key={`${item.company}-${item.personName}`} className="glass-panel rounded-lg p-7">
            <Quote className="size-7 text-primary" />
            <p className="mt-6 text-xl leading-8">“{item.quote}”</p>
            <p className="mt-5 text-sm text-muted-foreground">
              {item.personName}, {item.designation}, {item.company}
            </p>
          </div>
        ))}
      </section>
    </>
  );
}

