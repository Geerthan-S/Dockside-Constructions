"use client";

import { useState } from "react";

const services = [
  ["CIVIL CONSTRUCTION", "Residential, commercial and industrial civil works delivered through experienced engineers, site supervision, QA/QC gates and reliable workforce planning.", ["Residential and commercial works", "Industrial civil works", "Turnkey civil solutions"]],
  ["ROADS & HIGHWAYS", "BT and CC roads, road strengthening, renewal, grading and infrastructure development works for government and private-sector programs.", ["BT and CC road formation", "Road strengthening", "External development"]],
  ["RAILWAY WORKS", "Railway siding and related infrastructure support for logistics-linked, industrial and campus-scale developments.", ["Siding infrastructure", "Site coordination", "Civil interfaces"]],
  ["ELECTRICAL WORKS", "HT/LT installations, utilities, electrification and electrical coordination for industrial and infrastructure assets.", ["HT/LT installations", "Utilities", "Fire hydrant pipeline interfaces"]],
  ["WATER & DRAINAGE", "Storm water drains, culverts, drainage systems, water management and allied civil infrastructure delivered with practical site controls.", ["Storm water drains", "Culverts", "Water management"]],
  ["ROAD SAFETY SYSTEMS", "Supply and installation of road safety equipment, signage, barriers, road markings and traffic-control solutions.", ["Signage and barriers", "Road markings", "Traffic control"]],
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
              <i>{active ? "x" : "+"}</i>
            </button>
            <div className="studio-accordion__panel">
              <p>{description as string}</p>
              <ul>
                {(deliverables as string[]).map((item) => (
                  <li key={item}>-&gt; {item}</li>
                ))}
              </ul>
            </div>
          </article>
        );
      })}
    </section>
  );
}
