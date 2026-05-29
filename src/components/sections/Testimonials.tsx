import type { ProjectView } from "@/lib/content";

type TestimonialItem = NonNullable<ProjectView["testimonial"]> & { project: string };

const fallbackTestimonials: TestimonialItem[] = [
  {
    quote:
      "Their execution quality and ability to handle complex public infrastructure works make DCPL a dependable delivery partner.",
    personName: "Executive Engineer",
    designation: "Public Infrastructure",
    company: "Public Works Department",
    project: "PWD infrastructure works",
  },
  {
    quote:
      "The industrial park development was delivered with strong planning, coordination and professional site execution.",
    personName: "Project Director",
    designation: "Industrial Park Development",
    company: "Lodha Industrial Park",
    project: "Lodha Industrial Park - Chennai",
  },
  {
    quote:
      "The team maintained practical site discipline across civil, structural and utility interfaces for logistics infrastructure.",
    personName: "Project Controls Lead",
    designation: "Logistics Infrastructure",
    company: "Adani Logistics Limited",
    project: "Adani Logistics Civil & Structural Works",
  },
];

export function Testimonials({ projects }: { projects: ProjectView[] }) {
  const testimonials = projects
    .map((project) => project.testimonial && { ...project.testimonial, project: project.title })
    .filter((item): item is TestimonialItem => Boolean(item))
    .concat(fallbackTestimonials)
    .filter((item, index, list) => list.findIndex((candidate) => candidate.company === item.company) === index)
    .slice(0, 3);

  if (testimonials.length === 0) return null;

  return (
    <section className="luxury-testimonials" aria-label="Client testimonials">
      <div>
        <span>Clients love us</span>
        <h2 data-text-reveal>What They Say</h2>
      </div>
      <div className="luxury-testimonials__grid" data-stagger-reveal>
        {testimonials.map((item) => (
          <figure key={item.project}>
            <blockquote>&ldquo;{item.quote}&rdquo;</blockquote>
            <figcaption>
              <strong>{item.personName}</strong>
              <span>{item.designation} / {item.company}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
