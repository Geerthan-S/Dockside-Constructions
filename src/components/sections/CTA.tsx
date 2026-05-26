import Link from "next/link";
import { industrialImages } from "@/lib/content";

export function CTA() {
  return (
    <section className="studio-cta" style={{ backgroundImage: `linear-gradient(rgba(13,13,13,0.88), rgba(13,13,13,0.88)), url(${industrialImages.crane})` }}>
      <h2>
        Plan your next<br />
        infrastructure project
      </h2>
      <p>Share your scope, timelines and business goals. Our team will respond with the right technical next step.</p>
      <div>
        <Link href="/get-quote" className="studio-button studio-button--fill">Request Proposal</Link>
        <a href="tel:+912240001188" className="studio-button studio-button--outline">Call +91 22 4000 1188</a>
      </div>
    </section>
  );
}
