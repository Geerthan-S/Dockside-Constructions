import { CTA } from "@/components/sections/CTA";
import { Hero } from "@/components/sections/Hero";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustSystems } from "@/components/sections/TrustSystems";
import { SiteContentSections } from "@/components/site-content-sections";
import { getFeaturedProjects, getSitePage } from "@/lib/repositories";

export default async function HomePage() {
  const [projects, page] = await Promise.all([
    getFeaturedProjects(),
    getSitePage("home"),
  ]);
  const sections = page?.sections ?? [];
  const pick = (...ids: string[]) => sections.filter((section) => ids.includes(section.id));
  const ctaSection = sections.find((section) => section.id === "get-a-quote-cta");

  return (
    <>
      <Hero
        title={page?.heroTitle}
        description={page?.heroDescription}
        primaryLabel="View project proof"
        primaryHref="/projects"
      />
      <TrustSystems />
      <SiteContentSections sections={pick("company-introduction")} />
      <Services />
      <Projects projects={projects} />
      <SiteContentSections sections={pick("why-choose-us")} />
      <ProcessTimeline />
      <Testimonials projects={projects} />
      <SiteContentSections sections={pick("faqs")} />
      <CTA
        eyebrow={ctaSection?.label}
        title={ctaSection?.heading}
        label={ctaSection?.cta?.label}
        href={ctaSection?.cta?.href}
        image={ctaSection?.media}
      />
    </>
  );
}
