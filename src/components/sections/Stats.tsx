import { CountUp } from "@/components/ui/CountUp";

const stats = [
  { number: <><CountUp end={65} suffix="+" /></>, label: "WORKS", descriptor: "Profiled repeat projects" },
  { number: <><CountUp end={360} prefix="INR " suffix="Cr+" /></>, label: "VALUE", descriptor: "Profiled project value" },
  { number: <><CountUp end={3} suffix=" ISO" /></>, label: "SYSTEMS", descriptor: "Quality, environment, safety" },
  { number: <CountUp end={0} text="ON-TIME" />, label: "DISCIPLINE", descriptor: "Reliability and execution focus" },
];

export function Stats() {
  return (
    <section className="studio-stats" aria-label="Company statistics">
      {stats.map((stat) => (
        <article key={stat.label} className="studio-stats__cell">
          <strong>{stat.number}</strong>
          <span>{stat.label}</span>
          <em>{stat.descriptor}</em>
        </article>
      ))}
    </section>
  );
}
