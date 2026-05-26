import Image from "next/image";
import Link from "next/link";
import { industrialImages } from "@/lib/content";

export function Hero() {
  return (
    <section className="studio-hero">
      <div className="studio-hero__copy">
        <p className="studio-label">EPC | INDUSTRIAL | MARINE INFRASTRUCTURE</p>
        <h1>
          <span>Dockside Constructions </span>
          <span>Private Limited</span>
        </h1>
        <i className="studio-rule" />
        <p className="studio-hero__text">
          A premium construction partner for ports, logistics parks, industrial
          campuses, manufacturing facilities and critical infrastructure across India.
        </p>
        <div className="studio-hero__actions">
          <Link href="/projects" className="studio-button studio-button--fill">View Portfolio</Link>
          <Link href="/get-quote" className="studio-button studio-button--outline">Request Proposal</Link>
        </div>
        <div className="studio-capability-strip">
          <span>ISO-led systems</span>
          <span>Program governance</span>
          <span>Safety-first delivery</span>
          <span>Client-ready documentation</span>
        </div>
      </div>
      <div className="studio-hero__image">
        <Image
          src={industrialImages.hero}
          alt="Industrial construction site at golden hour"
          fill
          priority
          sizes="45vw"
        />
        <div className="studio-hero__overlay" />
        <div className="studio-hero__stat">
          <strong>INR 1,200 Cr+</strong>
          <span>Projects Governed</span>
        </div>
      </div>
    </section>
  );
}
