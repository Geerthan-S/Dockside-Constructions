import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { certifications, industrialImages } from "@/lib/content";

export const metadata = { title: "About" };

const leadership = [
  {
    name: "Ms. Kalaimakalle Alice",
    role: "Managing Director",
    text: "A visionary leader driving DCPL with a strong focus on quality, growth and operational excellence, building a performance-driven organization centered on client satisfaction and long-term value creation.",
  },
  {
    name: "Ms. Viviya Reddy",
    role: "Director - Technical",
    text: "A civil engineering professional with expertise in project execution, design coordination and engineering management across residential, commercial and industrial sectors.",
  },
  {
    name: "Mr. Sravan Reddy",
    role: "Director - Projects",
    text: "An experienced construction professional focused on project management, execution, operational strategy, cost optimization, quality control and timely delivery.",
  },
  {
    name: "Mr. R. Senthamizhselvan",
    role: "Director - Engineering & Strategy",
    text: "A seasoned professional with structural engineering and infrastructure development expertise, guiding engineering decisions and strategic growth.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Dockside"
        title="A professionally driven infrastructure and construction company."
        description="Dockside Constructions Private Limited delivers high-quality engineering solutions across industrial, commercial and public sectors with reliability, precision and timely execution."
        image={industrialImages.structure}
      />
      <section id="company-overview" className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="glass-panel rounded-lg p-8">
          <h2 className="text-3xl font-semibold">Company Overview</h2>
          <p className="mt-5 leading-7 text-muted-foreground">
            DCPL is backed by experienced engineers, a skilled workforce and advanced
            machinery. The company executes industrial facilities, road infrastructure,
            structural works and turnkey civil solutions for corporate and government
            clients.
          </p>
          <div className="mt-8 grid gap-4">
            {["Reliability", "Precision", "Timely execution", "Quality, safety and sustainability"].map((item) => (
              <p key={item} className="flex items-center gap-3 text-muted-foreground">
                <span className="text-primary">{"\u25C6"}</span>
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
            <span className="font-mono text-primary">[ V ]</span>
            <h2 className="mt-6 text-3xl font-semibold">Vision</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              To be a benchmark-driven infrastructure company delivering world-class
              construction solutions, transforming ideas into enduring assets and
              contributing to national growth through innovation, precision and
              sustainable development.
            </p>
          </div>
          <div className="glass-panel rounded-lg p-8">
            <span className="font-mono text-primary">[ M ]</span>
            <h2 className="mt-6 text-3xl font-semibold">Mission</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Deliver projects with uncompromising quality, safety and efficiency;
              adopt advanced technologies and modern construction practices; create
              long-term client value; empower the workforce; and build responsibly.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div className="about-image-stack">
          <div>
            <Image
              src={industrialImages.planning}
              alt="Engineers reviewing construction drawings"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
            />
          </div>
          <div>
            <Image
              src={industrialImages.foundation}
              alt="Reinforced concrete foundation work"
              fill
              sizes="(min-width: 1024px) 34vw, 90vw"
            />
          </div>
        </div>
        <div className="glass-panel rounded-lg p-8">
          <span className="font-mono text-primary">[ CONTROL ]</span>
          <h2 className="mt-6 text-3xl font-semibold">Planning visible before execution starts.</h2>
          <p className="mt-5 leading-7 text-muted-foreground">
            The strongest construction outcomes are shaped before equipment reaches the site.
            Dockside frames each scope around drawings, quantities, sequencing, safety controls
            and documented QA checkpoints so field teams can move with clarity.
          </p>
        </div>
      </section>
      <section id="leadership" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold">Leadership</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {leadership.map((person) => (
            <div key={person.name} className="glass-panel rounded-lg p-6">
              <div className="mb-5 size-14 rounded-md border border-primary/25 bg-primary/10" />
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{person.name}</p>
              <h3 className="mt-2 text-xl font-semibold">{person.role}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{person.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="certifications" className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-lg p-8">
          <span className="font-mono text-primary">[ ISO ]</span>
          <h2 className="mt-6 text-3xl font-semibold">Certifications</h2>
          <div className="mt-6 grid gap-4">
            {certifications.map((item) => (
              <p key={item} className="flex items-center gap-3 text-muted-foreground">
                <span className="text-primary">{"\u25C6"}</span>
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
