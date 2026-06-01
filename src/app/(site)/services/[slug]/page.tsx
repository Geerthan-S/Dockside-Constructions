import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { SiteContentSections } from "@/components/site-content-sections";
import { serviceCategories } from "@/lib/content";
import { getSitePage } from "@/lib/repositories";
import { serviceDetailPageSlug } from "@/lib/site-content";

export function generateStaticParams() {
  return serviceCategories.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = serviceCategories.find((item) => item.slug === slug);
  if (!service) notFound();

  const page = await getSitePage(serviceDetailPageSlug(slug));

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={page?.heroTitle ?? service.title}
        description={page?.heroDescription ?? service.description}
        image={page?.heroImage ?? service.image}
      />
      <SiteContentSections sections={page?.sections ?? []} />
    </>
  );
}
