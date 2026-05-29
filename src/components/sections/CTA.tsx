import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { industrialImages } from "@/lib/content";

export function CTA() {
  return (
    <section className="premium-cta" style={{ backgroundImage: `url(${industrialImages.crane})` }}>
      <div>
        <span>Ready to start your project?</span>
        <h2>Let&apos;s build something great together</h2>
        <nav>
          <Link href="/get-quote" className="studio-button studio-button--fill">
            Get a free quote <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </section>
  );
}
