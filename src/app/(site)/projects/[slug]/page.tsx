import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getProjectBySlug, getProjects } from "@/lib/repositories";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.seoTitle ?? project.title,
    description: project.seoDescription ?? project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [project.featuredImage],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image src={project.featuredImage} alt={project.title} fill priority className="object-cover opacity-45" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/25" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <Badge className="bg-primary/15 text-primary">{project.status.replace("_", " ")}</Badge>
          <h1 className="mt-6 max-w-5xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{project.summary}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.72fr_0.28fr] lg:px-8">
        <article>
          <div className="grid gap-4 sm:grid-cols-2">
            {project.gallery.map((image) => (
              <div key={image} className="relative aspect-[16/10] overflow-hidden rounded-lg border border-white/10">
                <Image src={image} alt={project.title} fill className="object-cover" />
              </div>
            ))}
          </div>
          <Separator className="my-10" />
          <h2 className="text-3xl font-semibold">Scope of work</h2>
          <p className="mt-5 leading-7 text-muted-foreground">{project.scopeOfWork}</p>
          <h2 className="mt-10 text-3xl font-semibold">Execution story</h2>
          <p className="mt-5 leading-7 text-muted-foreground">{project.body}</p>
          {project.testimonial ? (
            <blockquote className="mt-10 rounded-lg border border-primary/25 bg-primary/10 p-6">
              <p className="text-xl leading-8">“{project.testimonial.quote}”</p>
              <footer className="mt-5 text-sm text-muted-foreground">
                {project.testimonial.personName}, {project.testimonial.designation}, {project.testimonial.company}
              </footer>
            </blockquote>
          ) : null}
        </article>
        <aside className="h-fit rounded-lg border border-white/10 bg-card/45 p-6">
          <h2 className="text-xl font-semibold">Project facts</h2>
          <div className="mt-6 grid gap-5 text-sm">
            <p className="flex gap-3"><span className="font-mono text-primary">[ LOC ]</span> {project.location}</p>
            <p className="flex gap-3"><span className="font-mono text-primary">[ TIME ]</span> {project.timeline}</p>
            <p className="flex gap-3"><span className="font-mono text-primary">[ INR ]</span> {project.projectValue}</p>
            <p className="flex gap-3"><span className="font-mono text-primary">[ TYPE ]</span> {project.industry}</p>
          </div>
          <Separator className="my-6" />
          <div className="flex flex-wrap gap-2">
            {project.servicesUsed.map((service) => (
              <Badge key={service} variant="secondary">{service}</Badge>
            ))}
          </div>
        </aside>
      </section>
    </>
  );
}
