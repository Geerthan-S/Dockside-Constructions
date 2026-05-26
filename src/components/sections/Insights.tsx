import Image from "next/image";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { PostView } from "@/lib/content";

export function Insights({ posts }: { posts: PostView[] }) {
  const [featured, ...rest] = posts;
  if (!featured) return null;

  return (
    <section className="studio-section studio-insights">
      <SectionLabel value="04 / INSIGHTS" />
      <div className="studio-insights__grid">
        <Link href={`/insights/${featured.slug}`} className="studio-insights__featured">
          <div>
            <Image src={featured.coverImage} alt={featured.title} fill sizes="60vw" />
          </div>
          <span>{featured.category}</span>
          <h2>{featured.title}</h2>
          <p>{featured.excerpt}</p>
        </Link>
        <div className="studio-insights__secondary">
          {rest.slice(0, 3).map((post) => (
            <Link href={`/insights/${post.slug}`} key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <span>Read →</span>
            </Link>
          ))}
          <Link href="/insights/faqs">
            <h3>Frequently Asked Questions</h3>
            <p>Procurement, delivery, project updates and CMS operations.</p>
            <span>Read →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

