import { CountUp } from "@/components/ui/CountUp";

const stats = [
  { number: <><CountUp end={25} suffix="+" /></>, label: "YEARS", descriptor: "Leadership experience" },
  { number: <><CountUp end={1200} prefix="INR " suffix="Cr+" /></>, label: "DELIVERED", descriptor: "Projects governed" },
  { number: <><CountUp end={4.8} decimals={1} suffix="M sq.ft." /></>, label: "BUILT", descriptor: "Industrial space" },
  { number: <CountUp end={0} text="ZERO HARM" />, label: "PHILOSOPHY", descriptor: "Safety governance" },
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

