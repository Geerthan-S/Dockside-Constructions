import Link from "next/link";
import { getProjects } from "@/lib/repositories";

export async function SiteFooter() {
  const projects = await getProjects();

  return (
    <footer className="industrial-footer">
      <div className="industrial-footer__grid">
        <div>
          <Link href="/" className="industrial-wordmark industrial-wordmark--footer">
            <span>DOCKSIDE</span>
            <i />
            <em>CONSTRUCTIONS PVT. LTD.</em>
          </Link>
          <p className="industrial-footer__tagline">
            Building infrastructure, delivering excellence and creating value across
            industrial, commercial and public-sector construction.
          </p>
          <div className="iso-cluster" aria-label="Certification badges">
            {["9001", "14001", "45001"].map((iso) => (
              <span key={iso}>ISO<br />{iso}</span>
            ))}
          </div>
        </div>
        <div>
          <h3>COMPANY</h3>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <h3>PROJECTS</h3>
          {projects.slice(0, 4).map((project) => (
            <Link key={project.id} href={`/projects/${project.slug}`}>
              {project.title}
            </Link>
          ))}
        </div>
        <div>
          <h3>CONTACT</h3>
          <address>
            Registered Office<br />
            No.56, V.G.P. Nagar East<br />
            Salamedu, Villupuram - 605401
          </address>
          <strong>+91 89259 22737</strong>
          <a href="mailto:admin@docksideconstructions.com">admin@docksideconstructions.com</a>
        </div>
      </div>
      <div className="industrial-footer__bar">
        <span>&copy; 2026 DOCKSIDE CONSTRUCTIONS PRIVATE LIMITED</span>
        <span>BUILDING INFRASTRUCTURE. DELIVERING EXCELLENCE.</span>
      </div>
    </footer>
  );
}
