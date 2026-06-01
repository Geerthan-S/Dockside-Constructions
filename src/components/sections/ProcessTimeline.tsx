import Link from "next/link";
import { ArrowRight, ClipboardCheck, Handshake, PenTool, ShieldCheck, Wrench } from "lucide-react";
import { RevealText } from "@/components/motion/reveal";

const steps = [
  {
    phase: "01",
    title: "Scope Review",
    text: "Understanding site constraints, drawings, quantities and delivery goals.",
    icon: Handshake,
  },
  {
    phase: "02",
    title: "Planning",
    text: "Sequencing, procurement, budget alignment and milestone governance.",
    icon: PenTool,
  },
  {
    phase: "03",
    title: "Execution",
    text: "Field delivery with safety controls, QA checks and site discipline.",
    icon: Wrench,
  },
  {
    phase: "04",
    title: "Handover",
    text: "Closeout records, inspection closure and owner-ready handover proof.",
    icon: ClipboardCheck,
  },
  {
    phase: "05",
    title: "Support",
    text: "Practical post-handover coordination for long-term asset confidence.",
    icon: ShieldCheck,
  },
];

export function ProcessTimeline() {
  return (
    <section className="luxury-timeline" id="process">
      <div className="luxury-timeline__sticky">
        <span>Our process</span>
        <RevealText>
          <h2 data-text-reveal>Controlled from scope review to handover</h2>
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
