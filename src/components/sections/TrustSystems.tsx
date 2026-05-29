import { Building2, HardHat, Landmark, Trophy, UsersRound } from "lucide-react";

const trustMetrics = [
  { label: "Years of experience", value: "12+", icon: Building2 },
  { label: "Happy clients", value: "35+", icon: UsersRound },
  { label: "Completed projects", value: "65+", icon: HardHat },
  { label: "Industrial works", value: "20+", icon: Landmark },
  { label: "ISO systems", value: "3", icon: Trophy },
];

export function TrustSystems() {
  return (
    <section className="trust-systems" aria-label="Enterprise trust and delivery proof">
      <div className="trust-systems__metrics">
        {trustMetrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <article className="trust-metric" key={metric.label}>
              <div className="trust-metric__icon" aria-hidden="true">
                <Icon />
              </div>
              <div className="trust-metric__copy">
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
