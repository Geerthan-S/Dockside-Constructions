import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/page-hero";
import { industrialImages } from "@/lib/content";
import { getPosts } from "@/lib/repositories";

export const metadata = { title: "Insights & Success Stories" };

export default async function InsightsPage() {
  const posts = await getPosts();

  return (
    <>
      <PageHero
        eyebrow="Insights & Success Stories"
        title="Field-tested thinking for owners and project leaders."
        description="Success stories, execution notes and construction leadership perspectives from Dockside."
        image={industrialImages.crane}
      />
      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-20 sm:px-6 md:grid-cols-2 lg:px-8">
        {posts.map((post) => (
          <Link key={post.id} href={`/insights/${post.slug}`} className="group overflow-hidden rounded-lg border border-white/10 bg-card/45">
            <div className="relative aspect-[16/8]">
              <Image src={post.coverImage} alt={post.title} fill className="object-cover transition duration-700 group-hover:scale-105" />
            </div>
            <div className="p-6">
              <Badge>{post.category}</Badge>
              <h2 className="mt-5 text-2xl font-semibold group-hover:text-primary">{post.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}

