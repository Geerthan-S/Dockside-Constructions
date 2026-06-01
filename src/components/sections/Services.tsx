import Link from "next/link";
import { Building2, Factory, HardHat, House, PanelsTopLeft, Wrench } from "lucide-react";
import { serviceCategories } from "@/lib/content";

const serviceIcons = [House, Building2, Factory, Wrench, PanelsTopLeft];

export function Services() {
  return (
    <section className="premium-services" id="services">
      <div className="premium-services__header">
        <div className="premium-section-heading">
          <span>What we do</span>
          <h2>Core Services</h2>
        </div>
        <Link href="/services" className="studio-button studio-button--outline">View all services</Link>
      </div>
      <div className="premium-services__grid">
        {serviceCategories.slice(0, 5).map((service, index) => {
          const Icon = serviceIcons[index] ?? HardHat;
          return (
          <Link href={`/services/${service.slug}`} className="premium-service-card" key={service.slug}>
            <div className="premium-service-card__content">
              <Icon className="size-5" aria-hidden="true" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </Link>
        );
      })}
      </div>
    </section>
  );
}
