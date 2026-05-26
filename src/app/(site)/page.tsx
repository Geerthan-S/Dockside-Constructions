import { About } from "@/components/sections/About";
import { CTA } from "@/components/sections/CTA";
import { Hero } from "@/components/sections/Hero";
import { Insights } from "@/components/sections/Insights";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { Divider } from "@/components/ui/Divider";
import { Marquee } from "@/components/ui/Marquee";
import { certifications, clientLogos } from "@/lib/content";
import { getFeaturedProjects, getPosts } from "@/lib/repositories";

function CertificationsStrip() {
  return (
    <section className="cert-strip" aria-label="Certifications">
      {certifications.map((certification) => (
        <article key={certification}>
          <svg viewBox="0 0 40 40" aria-hidden="true">
            <rect x="4" y="4" width="32" height="32" fill="none" />
            <text x="20" y="24" textAnchor="middle">ISO</text>
          </svg>
          <div>
            <strong>{certification.replace("ISO ", "")}</strong>
            <span>Verified operating system</span>
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

