import { Prisma, ProjectStatus } from "@prisma/client";
import { cache } from "react";
import { canUseDatabase, getPrisma } from "@/lib/prisma";
import {
  industrialImages,
  seedClients,
  seedPosts,
  seedProjects,
  type ClientView,
  type PostView,
  type ProjectView,
} from "@/lib/content";
import {
  defaultSitePages,
  getDefaultSitePage,
  type EditableSitePage,
  type SitePageSection,
} from "@/lib/site-content";

function normalizeProject(project: ProjectView): ProjectView {
  return {
    ...project,
    status: project.status as ProjectStatus,
    gallery: project.gallery ?? [],
    servicesUsed: project.servicesUsed ?? [],
  };
}

function normalizeSections(value: Prisma.JsonValue, fallback: SitePageSection[]) {
  return Array.isArray(value) ? (value as SitePageSection[]) : fallback;
}

const staleDefaultHeroImages: Record<string, string[]> = {
  about: [industrialImages.structure],
  services: [industrialImages.highRise],
  projects: [industrialImages.hero, "/projects-hero-logistics.jpg"],
  testimonials: [industrialImages.structure],
  careers: [industrialImages.crane],
};

function normalizeHeroImage(slug: string, heroImage: string, fallback?: EditableSitePage | null) {
  if (fallback && staleDefaultHeroImages[slug]?.includes(heroImage)) {
    return fallback.heroImage;
  }

  return heroImage || fallback?.heroImage || "";
}

function normalizeSitePage(
  page: {
    slug: string;
    title: string;
    description: string;
    heroTitle: string;
    heroDescription: string;
    heroImage: string;
    sections: Prisma.JsonValue;
    published: boolean;
  },
  fallback?: EditableSitePage | null,
): EditableSitePage {
  return {
    slug: page.slug,
    title: page.title || fallback?.title || page.slug,
    description: page.description || fallback?.description || "",
    heroTitle: page.heroTitle || fallback?.heroTitle || page.title,
    heroDescription: page.heroDescription || fallback?.heroDescription || page.description,
    heroImage: normalizeHeroImage(page.slug, page.heroImage, fallback),
    sections: normalizeSections(page.sections, fallback?.sections ?? []),
    published: page.published,
  };
}

export const getProjects = cache(async (): Promise<ProjectView[]> => {
  if (!canUseDatabase()) return seedProjects;

  try {
    const projects = await getPrisma().project.findMany({
      where: { published: true },
      include: { testimonial: true },
      orderBy: [{ featured: "desc" }, { updatedAt: "desc" }],
    });
    return projects.map(normalizeProject);
  } catch {
    return seedProjects;
  }
});

export const getFeaturedProjects = cache(async () => {
  const projects = await getProjects();
  return projects.filter((project) => project.featured).slice(0, 6);
});

export const getProjectBySlug = cache(async (slug: string) => {
  const projects = await getProjects();
  return projects.find((project) => project.slug === slug) ?? null;
});

export const getPosts = cache(async (): Promise<PostView[]> => {
  if (!canUseDatabase()) return seedPosts;

  try {
    return await getPrisma().post.findMany({
      where: { published: true },
      orderBy: { updatedAt: "desc" },
    });
  } catch {
    return seedPosts;
  }
});

export const getClients = cache(async (): Promise<ClientView[]> => {
  if (!canUseDatabase()) return seedClients;

  try {
    return await getPrisma().client.findMany({
      where: { featured: true },
      orderBy: { updatedAt: "desc" },
    });
  } catch {
    return seedClients;
  }
});

export type TestimonialView = {
  id: string;
  quote: string;
  personName: string;
  designation: string;
  company: string;
  avatar?: string | null;
  projectTitle?: string | null;
  projectSlug?: string | null;
};

const seedTestimonials: TestimonialView[] = seedProjects.flatMap((project) =>
  project.testimonial
    ? [
        {
          id: `testimonial-${project.slug}`,
          quote: project.testimonial.quote,
          personName: project.testimonial.personName,
          designation: project.testimonial.designation,
          company: project.testimonial.company,
          avatar: project.testimonial.avatar,
          projectTitle: project.title,
          projectSlug: project.slug,
        },
      ]
    : [],
);

export const getTestimonials = cache(async (): Promise<TestimonialView[]> => {
  if (!canUseDatabase()) return seedTestimonials;

  try {
    const rows = await getPrisma().testimonial.findMany({
      where: { published: true },
      include: { project: { select: { title: true, slug: true } } },
      orderBy: { updatedAt: "desc" },
    });

    return rows.map((row) => ({
      id: row.id,
      quote: row.quote,
      personName: row.personName,
      designation: row.designation,
      company: row.company,
      avatar: row.avatar,
      projectTitle: row.project?.title,
      projectSlug: row.project?.slug,
    }));
  } catch {
    return seedTestimonials;
  }
});

export const getPostBySlug = cache(async (slug: string) => {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug) ?? null;
});

export const getSitePages = cache(async (): Promise<EditableSitePage[]> => {
  if (!canUseDatabase()) return defaultSitePages;

  try {
    const rows = await getPrisma().sitePage.findMany({
      where: { slug: { not: "insights" } },
      orderBy: [{ slug: "asc" }],
    });
    const rowBySlug = new Map(rows.map((row) => [row.slug, row]));
    const merged = defaultSitePages.map((fallback) => {
      const row = rowBySlug.get(fallback.slug);
      rowBySlug.delete(fallback.slug);
      return row ? normalizeSitePage(row, fallback) : fallback;
    });
    const customPages = [...rowBySlug.values()].map((row) => normalizeSitePage(row));
    return [...merged, ...customPages];
  } catch {
    return defaultSitePages;
  }
});

export const getSitePage = cache(async (slug: string): Promise<EditableSitePage | null> => {
  const fallback = getDefaultSitePage(slug);
  if (!canUseDatabase()) return fallback;

  try {
    const row = await getPrisma().sitePage.findUnique({ where: { slug } });
    return row ? normalizeSitePage(row, fallback) : fallback;
  } catch {
    return fallback;
  }
});

export async function getAdminMetrics() {
  if (!canUseDatabase()) {
    return {
      projects: seedProjects.length,
      posts: seedPosts.length,
      testimonials: seedProjects.filter((project) => project.testimonial).length,
      clients: seedClients.length,
      sitePages: defaultSitePages.length,
      quoteRequests: 0,
    };
  }

  const db = getPrisma();
  const [projects, posts, testimonials, clients, sitePages, quoteRequests] = await Promise.all([
    db.project.count(),
    db.post.count(),
    db.testimonial.count(),
    db.client.count(),
    db.sitePage.count({ where: { slug: { not: "insights" } } }),
    db.quoteRequest.count(),
  ]);

  return {
    projects,
    posts,
    testimonials,
    clients,
    sitePages: Math.max(sitePages, defaultSitePages.length),
    quoteRequests,
  };
}
