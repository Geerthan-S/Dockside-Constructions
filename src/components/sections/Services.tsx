"use client";

import { useState } from "react";

const services = [
  ["PORTS & MARINE WORKS", "Berth interfaces, marine civil works, yard development, drainage systems and heavy-duty pavement delivery for waterfront assets.", ["Berth-side civil works", "Crane rail foundations", "Utility corridors"]],
  ["INDUSTRIAL MANUFACTURING", "High-bay production halls, process foundations, PEB systems and expansion-ready manufacturing infrastructure.", ["Structural steel", "Process floors", "Vendor coordination"]],
  ["LOGISTICS & WAREHOUSING", "Warehouse shells, loading infrastructure, cold-chain coordination, roads, yards and operational support spaces.", ["Dock levellers", "Stormwater systems", "Truck circulation"]],
  ["ENERGY & UTILITIES", "Civil and structural delivery for utility yards, power distribution areas, fire systems and resilient infrastructure networks.", ["Equipment foundations", "Fire water networks", "Electrical coordination"]],
  ["CORPORATE CAMPUSES", "Corporate offices, admin blocks and mixed-use campuses with premium finishes and disciplined program controls.", ["Office shells", "Interior coordination", "Handover documentation"]],
  ["PUBLIC INFRASTRUCTURE", "Roads, public works, external development and civic infrastructure with transparent reporting and audit-ready documentation.", ["Road works", "Drainage", "QA documentation"]],
];

export function Services() {
  const [open, setOpen] = useState(0);

  return (
    <section className="studio-accordion" id="services">
      {services.map(([name, description, deliverables], index) => {
        const active = open === index;
        return (
          <article className={`studio-accordion__row ${active ? "is-open" : ""}`} key={name as string}>
            <button type="button" onClick={() => setOpen(active ? -1 : index)}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{name as string}</strong>
              <i>{active ? "×" : "+"}</i>
            </button>
            <div className="studio-accordion__panel">
              <p>{description as string}</p>
              <ul>
                {(deliverables as string[]).map((item) => (
                  <li key={item}>→ {item}</li>
                ))}
              </ul>
            </div>
          </article>
        );
      })}
    </section>
  );
}

