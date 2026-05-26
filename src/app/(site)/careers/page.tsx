import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { industrialImages } from "@/lib/content";

export const metadata = { title: "Careers" };

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build infrastructure with people who respect the craft."
        description="We hire site engineers, planners, safety professionals, project managers and commercial specialists."
        image={industrialImages.crane}
      />
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-white/10 bg-card/45 p-8">
          <h2 className="text-3xl font-semibold">Current openings</h2>
          <div className="mt-8 grid gap-4">
            {["Project Manager - Industrial Civil", "Planning Engineer", "Safety Officer", "QA/QC Engineer"].map((role) => (
              <div key={role} className="flex items-center justify-between gap-4 rounded-md border border-white/10 p-4">
                <span>{role}</span>
                <Button asChild variant="ghost">
                  <Link href="/contact">Apply <ArrowRight className="size-4" /></Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

