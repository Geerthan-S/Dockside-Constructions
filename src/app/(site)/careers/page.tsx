import { PageHero } from "@/components/page-hero";
import { SiteContentSections } from "@/components/site-content-sections";
import { industrialImages } from "@/lib/content";
import { getSitePage } from "@/lib/repositories";

export const metadata = { title: "Careers" };

export default async function CareersPage() {
  const page = await getSitePage("careers");

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={page?.heroTitle ?? "Build infrastructure with people who respect the craft."}
        description={page?.heroDescription ?? "We hire site engineers, planners, safety professionals, project managers and commercial specialists."}
        image={page?.heroImage ?? industrialImages.careersHero}
      />
      <SiteContentSections sections={page?.sections ?? []} />
    </>
  );
}
