import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { serviceCategories } from "@/lib/content";

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
        image={service.image}
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <div className="glass-panel rounded-lg p-8">
          <span className="font-mono text-primary">[ WORK ]</span>
          <h2 className="mt-6 text-3xl font-semibold">Delivery Method</h2>
          <p className="mt-5 leading-7 text-muted-foreground">
            Dockside manages {service.title.toLowerCase()} work through planning workshops,
            cost and schedule controls, quality inspections, vendor coordination and safe
            handover documentation.
          </p>
          <h3 className="mt-8 text-xl font-semibold">Typical deliverables</h3>
          <ul className="mt-4 grid gap-3 text-sm text-muted-foreground">
            {service.deliverables.map((item) => (
              <li key={item} className="flex gap-3"><span className="font-mono text-primary">[ + ]</span>{item}</li>
            ))}
          </ul>
          <div className="mt-8 rounded-lg border border-primary/20 bg-primary/10 p-5">
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-primary">Execution proof</span>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{service.proof}</p>
          </div>
        </div>
        <div className="service-detail-media">
          <Image
            src={service.image}
            alt={`${service.title} delivery visual`}
            fill
            sizes="(min-width: 1024px) 48vw, 100vw"
          />
        </div>
      </section>
    </>
  );
}
