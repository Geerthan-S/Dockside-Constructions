import Link from "next/link";
import { Building2, DraftingCompass, HardHat, Route } from "lucide-react";
import { serviceCategories } from "@/lib/content";

const serviceIcons = [Building2, DraftingCompass, HardHat, Route];

export function Services() {
  return (
    <section className="premium-services" id="services">
      <div className="premium-services__header">
        <div className="premium-section-heading">
          <span>What we do</span>
          <h2>Our Services</h2>
        </div>
        <Link href="/services" className="studio-button studio-button--outline">View all services</Link>
      </div>
      <div className="premium-services__grid">
        {serviceCategories.slice(0, 4).map((service, index) => {
          const Icon = serviceIcons[index] ?? Building2;
          return (
          <article className="premium-service-card" key={service.slug}>
            <div className="premium-service-card__content">
              <Icon className="size-5" aria-hidden="true" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </article>
        );
      })}
      </div>
    </section>
  );
}
