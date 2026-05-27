import { PageHero } from "@/components/page-hero";
import { serviceCategories, industrialImages } from "@/lib/content";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Core construction services from site planning to handover."
        description="Civil construction, roads, railway-related infrastructure, electrical utilities, industrial works, water infrastructure, drainage and traffic systems."
        image={industrialImages.crane}
      />
      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-20 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {serviceCategories.map((service) => (
          <div key={service.slug} className="glass-panel rounded-lg p-6">
            <span className="mb-5 block font-mono text-primary">[ WORK ]</span>
            <h2 className="text-lg font-semibold">{service.title}</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {service.description}
            </p>
          </div>
        ))}
      </section>
    </>
  );
}
