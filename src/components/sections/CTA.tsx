import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { industrialImages } from "@/lib/content";

export function CTA({
  eyebrow = "Project intake",
  title = "Bring the right technical team into the conversation early.",
  label = "Request a quote",
  href = "/get-quote",
  image = industrialImages.crane,
}: {
  eyebrow?: string;
  title?: string;
  label?: string;
  href?: string;
  image?: string;
}) {
  return (
    <section className="premium-cta" style={{ backgroundImage: `url(${image})` }}>
      <div>
        <span>{eyebrow}</span>
        <h2>{title}</h2>
        <nav>
          <Link href={href} className="studio-button studio-button--fill">
            {label} <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </section>
  );
}
