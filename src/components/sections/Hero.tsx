import Image from "next/image";
import Link from "next/link";
import { SplitText } from "@/components/ui/SplitText";
import { industrialImages } from "@/lib/content";

export function Hero() {
  return (
    <section className="studio-hero">
      <div className="studio-hero__copy">
        <p className="studio-label">[ EPC & INDUSTRIAL CONSTRUCTION ]</p>
        <h1>
          <SplitText text="BUILT TO" />
          <SplitText text="WITHSTAND." />
        </h1>
        <i className="studio-rule" />
        <p className="studio-hero__text">
          Engineering-led construction for ports, logistics parks, industrial campuses
          and critical infrastructure. 25 years of execution discipline.
        </p>
        <div className="studio-hero__actions">
          <Link href="/projects" className="studio-button studio-button--fill">VIEW PROJECTS</Link>
          <Link href="/get-quote" className="studio-link">REQUEST A QUOTE →</Link>
        </div>
        <div className="studio-ticker">
          <span>[ DEEPWATER BERTHS ] — [ MANUFACTURING CAMPUSES ] — [ COLD CHAIN HUBS ] — [ EPC DELIVERY ] — </span>
          <span>[ DEEPWATER BERTHS ] — [ MANUFACTURING CAMPUSES ] — [ COLD CHAIN HUBS ] — [ EPC DELIVERY ] — </span>
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

