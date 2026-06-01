import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SiteContentSections } from "@/components/site-content-sections";
import { industrialImages } from "@/lib/content";
import { getSitePage, getTestimonials } from "@/lib/repositories";

export const metadata = {
  title: "Testimonials",
  description:
    "Client testimonials and delivery confidence notes for Dockside Constructions Private Limited.",
};

const fallbackNotes = [
  {
    title: "Repeat industrial work",
    text: "Testimonials are connected to project delivery, repeat scope confidence and field execution standards.",
  },
  {
    title: "Project-linked proof",
    text: "Each client note should ideally connect back to a project, sector, scope or documented delivery context.",
  },
  {
    title: "CMS manageable",
    text: "Admins can add, publish and connect testimonials from the Dockside Ops testimonial panel.",
  },
];

export default async function TestimonialsPage() {
  const [page, testimonials] = await Promise.all([
    getSitePage("testimonials"),
    getTestimonials(),
  ]);

  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title={page?.heroTitle ?? "Client Confidence Connected To Real Project Delivery"}
        description={page?.heroDescription ?? "Client feedback, repeat-work proof and project-linked confidence notes from Dockside delivery programs."}
        image={page?.heroImage ?? industrialImages.testimonialsHero}
      />
      <SiteContentSections sections={page?.sections ?? []} />
      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-20 sm:px-6 md:grid-cols-2 lg:px-8">
        {testimonials.map((item) => (
          <article key={item.id} className="glass-panel rounded-lg p-7">
            <Quote className="size-8 text-primary" aria-hidden="true" />
            <blockquote className="mt-6 text-xl leading-8">&ldquo;{item.quote}&rdquo;</blockquote>
            <div className="mt-6 border-t border-white/10 pt-5">
              <p className="font-semibold">{item.personName}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {item.designation} / {item.company}
              </p>
              {item.projectSlug ? (
                <Link
                  href={`/projects/${item.projectSlug}`}
                  className="mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-primary"
                >
                  View related project
                  <ArrowRight className="size-3.5" aria-hidden="true" />
                </Link>
              ) : null}
            </div>
          </article>
        ))}
        {testimonials.length === 0
          ? fallbackNotes.map((note) => (
              <article key={note.title} className="glass-panel rounded-lg p-7">
                <span className="font-mono text-xs uppercase tracking-[0.12em] text-primary">
                  Client feedback
                </span>
                <h2 className="mt-5 text-2xl font-semibold">{note.title}</h2>
                <p className="mt-3 leading-7 text-muted-foreground">{note.text}</p>
              </article>
            ))
          : null}
      </section>
    </>
  );
}
