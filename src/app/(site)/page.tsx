import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Building2, CheckCircle2, HardHat, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FeaturedProjectsCarousel } from "@/components/featured-projects-carousel";
import { MotionReveal } from "@/components/motion-reveal";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import {
  certifications,
  industrialImages,
  industries,
  services,
} from "@/lib/content";
import { getClients, getFeaturedProjects, getPosts } from "@/lib/repositories";

export default async function HomePage() {
  const [projects, posts, clients] = await Promise.all([
    getFeaturedProjects(),
    getPosts(),
    getClients(),
  ]);

  return (
    <>
      <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden border-b border-white/10">
        <Image
          src={industrialImages.hero}
          alt="Industrial construction site at dusk"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/84 to-background/20" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background to-transparent" />
        <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
          <MotionReveal className="max-w-4xl">
            <Badge className="bg-primary/15 text-primary">Premium EPC and industrial construction</Badge>
            <h1 className="mt-7 text-5xl font-semibold tracking-tight text-balance sm:text-7xl lg:text-8xl">
              Dockside Constructions Private Limited
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Engineering-led construction for ports, logistics parks, industrial
              campuses and high-performance corporate infrastructure.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/projects">View Projects <ArrowRight className="size-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/get-quote">Start a Project</Link>
              </Button>
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        {[
          ["25+", "Years leadership experience"],
          ["INR 1,200Cr+", "Projects governed"],
          ["4.8M sq.ft.", "Industrial space delivered"],
          ["Zero Harm", "Safety operating philosophy"],
        ].map(([value, label]) => (
          <Card key={value} className="glass-panel">
            <CardContent className="p-6">
              <p className="text-3xl font-semibold text-primary">{value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{label}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="border-y border-white/10 bg-card/25 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <MotionReveal>
            <Badge variant="outline" className="border-primary/30 text-primary">Company overview</Badge>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-balance">
              Corporate construction with engineering controls at the center.
            </h2>
            <p className="mt-5 leading-7 text-muted-foreground">
              Dockside combines civil engineering, procurement discipline, safety governance
              and digital project controls to deliver complex construction programs without
              developer dependency for ongoing content operations.
            </p>
          </MotionReveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {services.slice(0, 6).map((service, index) => (
              <MotionReveal key={service} delay={index * 0.04}>
                <div className="glass-panel-soft h-full rounded-lg p-5">
                  <HardHat className="mb-5 size-6 text-primary" />
                  <p className="font-medium">{service}</p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured projects"
          title="Case studies that show operational discipline."
          description="Every card is CMS-ready, with galleries, client details, status, services, testimonial and SEO slug support."
        />
        <div className="mt-12">
          {projects.length > 3 ? (
            <FeaturedProjectsCarousel projects={projects} />
          ) : (
            <div className="grid gap-5 md:grid-cols-3">
              {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
            </div>
          )}
        </div>
      </section>

      <section className="border-y border-white/10 bg-card/25 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Industries served"
            title="Built for demanding industrial environments."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div key={industry} className="glass-panel-soft rounded-lg p-6">
                <Building2 className="mb-5 size-6 text-primary" />
                <p className="text-lg font-medium">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="glass-panel rounded-lg p-8">
          <Award className="size-8 text-primary" />
          <h2 className="mt-6 text-3xl font-semibold">ISO certifications and audit-ready systems</h2>
          <div className="mt-6 grid gap-4">
            {certifications.map((item) => (
              <p key={item} className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle2 className="size-5 text-primary" />
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="glass-panel rounded-lg p-8">
          <ShieldCheck className="size-8 text-primary" />
          <h2 className="mt-6 text-3xl font-semibold">Client confidence across sectors</h2>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {clients.map((client) => (
              <div key={client.id} className="glass-panel-soft rounded-md p-4 text-center text-xs font-semibold tracking-[0.18em] text-muted-foreground">
                {client.logoUrl ? client.name : client.name.toUpperCase()}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-card/25 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Insights & success stories" title="Thinking from the field." />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {posts.map((post) => (
              <Link key={post.id} href={`/insights/${post.slug}`} className="group rounded-lg border border-white/10 bg-background/45 p-6 transition hover:border-primary/40">
                <Badge variant="secondary">{post.category}</Badge>
                <h3 className="mt-5 text-2xl font-semibold group-hover:text-primary">{post.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-primary/25 bg-primary/10 p-8 text-center sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-5xl">Ready to plan your next industrial asset?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Share your scope, timeline and business goals. Dockside will convert it into an execution-ready project conversation.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/get-quote">Request a Quote <ArrowRight className="size-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
