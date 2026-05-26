import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { industrialImages, serviceCategories } from "@/lib/content";

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

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.title}
        description={service.description}
        image={industrialImages.crane}
      />
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-lg p-8">
          <span className="font-mono text-primary">[ WORK ]</span>
          <h2 className="mt-6 text-3xl font-semibold">Delivery Method</h2>
          <p className="mt-5 leading-7 text-muted-foreground">
            Dockside manages {service.title.toLowerCase()} work through planning workshops,
            cost and schedule controls, quality inspections, vendor coordination and safe
            handover documentation.
          </p>
        </div>
      </section>
    </>
  );
}
