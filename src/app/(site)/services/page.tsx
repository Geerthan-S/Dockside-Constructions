import Image from "next/image";
import Link from "next/link";
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
        image={industrialImages.highRise}
      />
      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-20 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {serviceCategories.map((service) => (
          <Link href={`/services/${service.slug}`} key={service.slug} className="glass-panel service-index-card rounded-lg p-4">
            <div className="service-index-card__image">
              <Image
                src={service.image}
                alt={`${service.title} work`}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="p-2 pt-5">
              <span className="mb-5 block font-mono text-primary">[ WORK ]</span>
              <h2 className="text-lg font-semibold">{service.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {service.description}
              </p>
              <ul className="service-index-card__deliverables">
                {service.deliverables.slice(0, 3).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="service-index-card__proof">{service.proof}</p>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
