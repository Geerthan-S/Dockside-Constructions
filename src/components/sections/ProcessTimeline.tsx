import Link from "next/link";
import { ArrowRight, ClipboardCheck, Handshake, PenTool, ShieldCheck, Wrench } from "lucide-react";
import { RevealText } from "@/components/motion/reveal";

const steps = [
  {
    phase: "01",
    title: "Consultation",
    text: "Understanding your needs, site constraints and delivery goals.",
    icon: Handshake,
  },
  {
    phase: "02",
    title: "Planning",
    text: "Design, budgeting and strategy development with clear milestones.",
    icon: PenTool,
  },
  {
    phase: "03",
    title: "Execution",
    text: "Building with precision, quality controls and site discipline.",
    icon: Wrench,
  },
  {
    phase: "04",
    title: "Delivery",
    text: "On-time delivery with complete satisfaction and handover proof.",
    icon: ClipboardCheck,
  },
  {
    phase: "05",
    title: "Support",
    text: "Ongoing support beyond completion for long-term confidence.",
    icon: ShieldCheck,
  },
];

export function ProcessTimeline() {
  return (
    <section className="luxury-timeline" id="process">
      <div className="luxury-timeline__sticky">
        <span>Our process</span>
        <RevealText>
          <h2 data-text-reveal>Built on trust, delivered with excellence</h2>
        </RevealText>
        <Link href="/about" className="studio-button studio-button--outline">
          Learn more about us <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
      <div className="luxury-timeline__steps" data-stagger-reveal>
        {steps.map((step) => {
          const Icon = step.icon;
          return (
          <article key={step.phase}>
            <div className="process-step-icon">
              <Icon className="size-4" aria-hidden="true" />
            </div>
            <span>{step.phase}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
          );
        })}
      </div>
    </section>
  );
}
