import { PageHero } from "@/components/page-hero";
import { certifications, industrialImages } from "@/lib/content";

export const metadata = { title: "Certifications & Safety" };

export default function SafetyPage() {
  return (
    <>
      <PageHero
        eyebrow="Certifications & Safety"
        title="Safety systems designed into the operating rhythm."
        description="Quality, environmental and occupational-health controls are integrated into planning, procurement, execution and handover."
        image={industrialImages.safety}
      />
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-5">
          {certifications.map((certification) => (
            <div key={certification} className="flex gap-5 rounded-lg border border-white/10 bg-card/45 p-6">
              <span className="mt-1 shrink-0 font-mono text-primary">[ ISO ]</span>
              <div>
                <h2 className="text-xl font-semibold">{certification}</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Supported by documented inspections, method statements, toolbox talks and management reviews.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
