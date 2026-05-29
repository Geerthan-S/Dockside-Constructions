import { CTA } from "@/components/sections/CTA";
import { Hero } from "@/components/sections/Hero";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustSystems } from "@/components/sections/TrustSystems";
import { getFeaturedProjects } from "@/lib/repositories";

export default async function HomePage() {
  const projects = await getFeaturedProjects();

  return (
    <>
      <Hero />
      <TrustSystems />
      <Projects projects={projects} />
      <Services />
      <ProcessTimeline />
      <Testimonials projects={projects} />
      <CTA />
    </>
  );
}
