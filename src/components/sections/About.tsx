import { SectionLabel } from "@/components/ui/SectionLabel";

export function About() {
  return (
    <section className="studio-section studio-about">
      <SectionLabel value="02 / COMPANY" />
      <div className="studio-section__content">
        <h2>BUILDING INFRASTRUCTURE. DELIVERING EXCELLENCE. CREATING VALUE.</h2>
        <div className="studio-about__text">
          <p>
            Dockside Constructions Private Limited is a professionally driven
            infrastructure and construction company delivering high-quality engineering
            solutions across industrial, commercial and public sectors.
          </p>
          <p>
            Backed by experienced engineers, skilled workforce and advanced machinery,
            DCPL executes industrial facilities, road infrastructure, structural works
            and turnkey civil solutions with reliability, precision and timely delivery.
          </p>
        </div>
        <div className="studio-pills">
          {["CIVIL", "ROADS", "INDUSTRIAL", "ELECTRICAL", "DRAINAGE"].map((item) => (
            <span key={item}>[ {item} ]</span>
          ))}
        </div>
      </div>
    </section>
  );
}
