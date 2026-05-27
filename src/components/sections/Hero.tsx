import Image from "next/image";
import Link from "next/link";
import { industrialImages } from "@/lib/content";

export function Hero() {
  return (
    <section className="studio-hero">
      <div className="studio-hero__copy">
        <p className="studio-label">CIVIL | INDUSTRIAL | PUBLIC INFRASTRUCTURE</p>
        <h1>
          <span>Dockside Constructions </span>
          <span>Private Limited</span>
        </h1>
        <i className="studio-rule" />
        <p className="studio-hero__text">
          Professionally driven infrastructure and construction company delivering
          high-quality engineering solutions across industrial, commercial and public sectors.
        </p>
        <div className="studio-hero__actions">
          <Link href="/projects" className="studio-button studio-button--fill">View Portfolio</Link>
          <Link href="/get-quote" className="studio-button studio-button--outline">Request Proposal</Link>
        </div>
        <div className="studio-capability-strip">
          <span>ISO 9001, 14001, 45001</span>
          <span>Roads and buildings</span>
          <span>Industrial civil works</span>
          <span>Project management</span>
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
          <strong>INR 360 Cr+</strong>
          <span>Profiled Project Value</span>
        </div>
      </div>
    </section>
  );
}
