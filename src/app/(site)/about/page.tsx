import { PageHero } from "@/components/page-hero";
import { SiteContentSections } from "@/components/site-content-sections";
import { getSitePage } from "@/lib/repositories";
import { industrialImages } from "@/lib/content";

export const metadata = { title: "About" };

export default async function AboutPage() {
  const page = await getSitePage("about");

  return (
    <>
      <PageHero
        eyebrow="About Dockside"
        title={page?.heroTitle ?? "A professionally driven infrastructure company."}
        description={page?.heroDescription ?? "Dockside delivers high-quality engineering solutions across industrial, commercial and public sectors."}
        image={page?.heroImage ?? industrialImages.aboutHero}
      />
      <SiteContentSections sections={page?.sections ?? []} />
    </>
  );
}
