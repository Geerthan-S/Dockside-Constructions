import { PageHero } from "@/components/page-hero";
import { SiteContentSections } from "@/components/site-content-sections";
import { industrialImages } from "@/lib/content";
import { getSitePage } from "@/lib/repositories";

export const metadata = { title: "Services" };

export default async function ServicesPage() {
  const page = await getSitePage("services");

  return (
    <>
      <PageHero
        eyebrow="Services"
        title={page?.heroTitle ?? "Core construction services from site planning to handover."}
        description={page?.heroDescription ?? "Residential, commercial, industrial, renovation and interior solutions backed by infrastructure capabilities."}
        image={page?.heroImage ?? industrialImages.servicesHero}
      />
      <SiteContentSections sections={page?.sections ?? []} />
    </>
  );
}
