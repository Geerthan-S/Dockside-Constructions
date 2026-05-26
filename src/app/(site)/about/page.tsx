import Image from "next/image";
import { Award, CheckCircle2, Crown, Target } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { certifications, industrialImages } from "@/lib/content";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Dockside"
        title="An engineering-first construction company for complex corporate assets."
        description="Dockside Constructions Private Limited brings governance, safety and project-control discipline to residential, commercial, industrial and infrastructure delivery."
        image={industrialImages.structure}
      />
      <section id="company-overview" className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="glass-panel rounded-lg p-8">
          <h2 className="text-3xl font-semibold">Company Overview</h2>
          <p className="mt-5 leading-7 text-muted-foreground">
            We operate as a premium corporate construction partner for owners who need clarity:
            program governance, transparent reporting, site discipline, vendor coordination
            and documentation that stands up to audits.
          </p>
          <div className="mt-8 grid gap-4">
            {["Integrated planning", "Safety-led execution", "Quality gates", "Procurement discipline"].map((item) => (
              <p key={item} className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle2 className="size-5 text-primary" />
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-white/10">
          <Image src={industrialImages.site} alt="Dockside project site" fill className="object-cover" />
        </div>
      </section>
      <section id="vision-mission" className="border-y border-white/10 bg-card/20 py-20">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <div className="glass-panel rounded-lg p-8">
            <Target className="size-7 text-primary" />
            <h2 className="mt-6 text-3xl font-semibold">Vision</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              To become the most trusted engineering-led construction company for clients who demand performance, transparency and long-term asset value.
            </p>
          </div>
          <div className="glass-panel rounded-lg p-8">
            <Crown className="size-7 text-primary" />
            <h2 className="mt-6 text-3xl font-semibold">Mission</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Deliver residential, commercial, industrial and infrastructure projects through disciplined planning, skilled teams and uncompromising safety systems.
            </p>
          </div>
        </div>
      </section>
      <section id="leadership" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold">Leadership</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {["Managing Director", "Head of Projects", "Director - Safety & Quality"].map((role) => (
            <div key={role} className="glass-panel rounded-lg p-6">
              <div className="mb-5 size-14 rounded-md border border-primary/25 bg-primary/10" />
              <h3 className="text-xl font-semibold">{role}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Senior construction leadership focused on governance, engineering decisions and client accountability.
              </p>
            </div>
          ))}
        </div>
      </section>
      <section id="certifications" className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-lg p-8">
          <Award className="size-8 text-primary" />
          <h2 className="mt-6 text-3xl font-semibold">Certifications</h2>
          <div className="mt-6 grid gap-4">
            {certifications.map((item) => (
              <p key={item} className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle2 className="size-5 text-primary" />
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
