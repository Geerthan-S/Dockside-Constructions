import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { getProjectBySlug, getProjects } from "@/lib/repositories";

function getExecutionBreakdown(project: Awaited<ReturnType<typeof getProjectBySlug>>) {
  if (!project) return [];

  return [
    {
      title: "Site challenge",
      text: `${project.clientName} required ${project.scopeOfWork.toLowerCase()} in a ${project.industry.toLowerCase()} context, where sequencing, access, safety and documentation directly affect delivery confidence.`,
    },
    {
      title: "Engineering response",
      text: `Dockside structured the work around ${project.servicesUsed.slice(0, 3).join(", ").toLowerCase()} with survey-led planning, vendor coordination, QA checkpoints and site supervision.`,
    },
    {
      title: "Execution controls",
      text: `The delivery rhythm combined milestone tracking, measurement records, safety reviews and owner-ready handover documentation across the ${project.timeline.toLowerCase()} timeline.`,
    },
  ];
}

function getMilestones(project: Awaited<ReturnType<typeof getProjectBySlug>>) {
  if (!project) return [];

  return [
    ["01", "Survey and scope lock", "Confirm quantities, site constraints, access routes and work packaging."],
    ["02", "Mobilization and sequencing", "Align manpower, equipment, vendor interfaces and safety method statements."],
    ["03", "Civil execution and QA", `Execute ${project.servicesUsed.slice(0, 2).join(" and ").toLowerCase()} with inspection gates and measurement records.`],
    ["04", "Closeout and handover", "Compile quality, safety and execution documentation for owner review."],
  ];
}

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
  const breakdown = getExecutionBreakdown(project);
  const milestones = getMilestones(project);

  return (
    <>
      <section className="premium-page-hero">
        <div className="premium-page-hero__media">
          <Image src={project.featuredImage} alt="" fill priority className="object-cover" />
        </div>
        <div className="premium-page-hero__content">
          <span>{project.status.replace("_", " ")} / {project.clientName}</span>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
        </div>
      </section>

      <section className="project-proof mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.72fr_0.28fr] lg:px-8">
        <article>
          <div className="project-proof__gallery">
            {project.gallery.map((image) => (
              <div key={image} className="relative aspect-[16/10] overflow-hidden rounded-[22px] border border-white/10">
                <Image src={image} alt={project.title} fill className="object-cover" />
              </div>
            ))}
          </div>
          <Separator className="my-10" />
          <div className="project-proof__brief">
            <div>
              <span>Scope of work</span>
              <h2>{project.scopeOfWork}</h2>
            </div>
            <p>{project.body}</p>
          </div>
          <div className="project-proof__breakdown">
            {breakdown.map((item) => (
              <section key={item.title}>
                <span>{item.title}</span>
                <p>{item.text}</p>
              </section>
            ))}
          </div>
          <section className="project-proof__timeline">
            <span>Execution timeline</span>
            <h2>How the work moves from scope to handover.</h2>
            <div>
              {milestones.map(([number, title, text]) => (
                <article key={number}>
                  <b>{number}</b>
                  <strong>{title}</strong>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </section>
          {project.testimonial ? (
            <blockquote className="glass-panel mt-10 rounded-[24px] p-6">
              <p className="text-xl leading-8">&ldquo;{project.testimonial.quote}&rdquo;</p>
              <footer className="mt-5 text-sm text-muted-foreground">
                {project.testimonial.personName}, {project.testimonial.designation}, {project.testimonial.company}
              </footer>
            </blockquote>
          ) : null}
        </article>
        <aside className="glass-panel h-fit rounded-[24px] p-6">
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
              <span key={service} className="rounded-full border border-primary/20 px-3 py-1 text-xs text-muted-foreground">
                {service}
              </span>
            ))}
          </div>
        </aside>
      </section>
    </>
  );
}
