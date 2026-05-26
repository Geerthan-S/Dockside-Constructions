import { SectionLabel } from "@/components/ui/SectionLabel";

export function About() {
  return (
    <section className="studio-section studio-about">
      <SectionLabel value="02 / COMPANY" />
      <div className="studio-section__content">
        <h2>ENGINEERING DISCIPLINE FOR COMPLEX CONSTRUCTION.</h2>
        <div className="studio-about__text">
          <p>
            Dockside combines civil engineering, procurement discipline, safety governance
            and digital project controls to deliver complex construction programs with
            clear accountability from planning to handover.
          </p>
          <p>
            We operate as a corporate construction partner for owners who need clarity:
            program governance, transparent reporting, site discipline, vendor coordination
            and documentation that stands up to audits.
          </p>
        </div>
        <div className="studio-pills">
          {["CIVIL", "MARINE", "INDUSTRIAL", "EPC", "INFRASTRUCTURE"].map((item) => (
            <span key={item}>[ {item} ]</span>
          ))}
        </div>
      </div>
    </section>
  );
}
