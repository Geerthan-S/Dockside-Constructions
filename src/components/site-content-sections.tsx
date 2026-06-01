import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { SitePageSection } from "@/lib/site-content";

function SectionItemCard({ item }: { item: NonNullable<SitePageSection["items"]>[number] }) {
  const content = (
    <article className="cms-section-card">
      {item.image ? (
        <div className="cms-section-card__image">
          <Image src={item.image} alt={item.title} fill sizes="(min-width: 1024px) 28vw, 92vw" />
        </div>
      ) : null}
      {item.meta ? <span>{item.meta}</span> : null}
      <h3>{item.title}</h3>
      {item.text ? <p>{item.text}</p> : null}
      {item.items?.length ? (
        <ul>
          {item.items.map((entry) => (
            <li key={entry}>{entry}</li>
          ))}
        </ul>
      ) : null}
      {item.href ? (
        <em>
          Open <ArrowRight className="size-3.5" aria-hidden="true" />
        </em>
      ) : null}
    </article>
  );

  if (!item.href) return content;
  return (
    <Link className="cms-section-card-link" href={item.href}>
      {content}
    </Link>
  );
}

function renderSectionBody(section: SitePageSection) {
  if (section.layout === "faq") {
    return (
      <div className="cms-faq-list">
        {section.faqs?.map((faq) => (
          <details key={faq.question}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    );
  }

  if (section.layout === "cta") {
    return (
      <div
        className="cms-section-cta"
        style={section.media ? { backgroundImage: `url(${section.media})` } : undefined}
      >
        <div>
          {section.body ? <p>{section.body}</p> : null}
          {section.cta ? (
            <Link href={section.cta.href} className="studio-button studio-button--fill">
              {section.cta.label}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          ) : null}
        </div>
      </div>
    );
  }

  if (section.layout === "gallery") {
    return (
      <div className="cms-gallery-grid">
        {section.items?.map((item) => (
          <div className="cms-gallery-item" key={item.image ?? item.title}>
            {item.image ? <Image src={item.image} alt={item.title} fill sizes="(min-width: 900px) 32vw, 92vw" /> : null}
          </div>
        ))}
      </div>
    );
  }

  if (section.layout === "split") {
    return (
      <div className="cms-split-layout">
        <div className="cms-section-grid">
          {section.items?.map((item) => (
            <SectionItemCard key={`${item.title}-${item.meta ?? ""}`} item={item} />
          ))}
        </div>
        {section.media ? (
          <div className="cms-split-media">
            <Image src={section.media} alt="" fill sizes="(min-width: 1024px) 46vw, 92vw" />
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div className={`cms-section-grid cms-section-grid--${section.layout ?? "grid"}`}>
      {section.items?.map((item) => (
        <SectionItemCard key={`${item.title}-${item.meta ?? ""}`} item={item} />
      ))}
    </div>
  );
}

export function SiteContentSections({ sections }: { sections: SitePageSection[] }) {
  if (!sections.length) return null;

  return (
    <>
      {sections.map((section) => (
        <section
          className={`cms-section cms-section--${section.layout ?? "grid"}`}
          id={section.id}
          key={section.id}
        >
          <div className="cms-section__header">
            <span>{section.label}</span>
            <h2>{section.heading}</h2>
            {section.body && section.layout !== "cta" ? <p>{section.body}</p> : null}
          </div>
          {renderSectionBody(section)}
        </section>
      ))}
    </>
  );
}
