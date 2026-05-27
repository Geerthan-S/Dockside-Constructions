import { About } from "@/components/sections/About";
import { CTA } from "@/components/sections/CTA";
import { Hero } from "@/components/sections/Hero";
import { Insights } from "@/components/sections/Insights";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { Divider } from "@/components/ui/Divider";
import { Marquee } from "@/components/ui/Marquee";
import { clientLogos } from "@/lib/content";
import { getFeaturedProjects, getPosts } from "@/lib/repositories";

function CertificationsStrip() {
  const certificates = [
    ["ISO 9001:2015", "Quality Management System"],
    ["ISO 14001:2015", "Environmental Management System"],
    ["ISO 45001:2018", "Occupational Health & Safety"],
  ];

  return (
    <section className="cert-strip" aria-label="Certifications">
      {certificates.map(([standard, scope]) => (
        <article key={standard}>
          <svg viewBox="0 0 40 40" aria-hidden="true">
            <rect x="4" y="4" width="32" height="32" fill="none" />
            <text x="20" y="24" textAnchor="middle">ISO</text>
          </svg>
          <div>
            <strong>{standard}</strong>
            <span>{scope}</span>
          </div>
        </article>
      ))}
    </section>
  );
}

export default async function HomePage() {
  const [projects, posts] = await Promise.all([getFeaturedProjects(), getPosts()]);

  return (
    <>
      <Hero />
      <Marquee items={clientLogos} />
      <Stats />
      <Divider />
      <About />
      <Services />
      <Projects projects={projects} />
      <CertificationsStrip />
      <Insights posts={posts} />
      <CTA />
    </>
  );
}
