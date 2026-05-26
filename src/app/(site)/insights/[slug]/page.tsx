import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { getPostBySlug, getPosts } from "@/lib/repositories";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return post ? { title: post.title, description: post.excerpt } : {};
}

export default async function InsightDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article>
      <section className="relative overflow-hidden border-b border-white/10">
        <Image src={post.coverImage} alt={post.title} fill priority className="object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/30" />
        <div className="relative mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
          <Badge>{post.category}</Badge>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-6xl">{post.title}</h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">{post.excerpt}</p>
        </div>
      </section>
      <div className="mx-auto max-w-3xl px-4 py-16 text-lg leading-8 text-muted-foreground sm:px-6 lg:px-8">
        {post.body}
      </div>
    </article>
  );
}

