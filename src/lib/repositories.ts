import { ProjectStatus } from "@prisma/client";
import { cache } from "react";
import { canUseDatabase, getPrisma } from "@/lib/prisma";
import {
  seedClients,
  seedPosts,
  seedProjects,
  type ClientView,
  type PostView,
  type ProjectView,
} from "@/lib/content";

function normalizeProject(project: ProjectView): ProjectView {
  return {
    ...project,
    status: project.status as ProjectStatus,
    gallery: project.gallery ?? [],
    servicesUsed: project.servicesUsed ?? [],
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

export const getPostBySlug = cache(async (slug: string) => {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug) ?? null;
});

export async function getAdminMetrics() {
  if (!canUseDatabase()) {
    return {
      projects: seedProjects.length,
      posts: seedPosts.length,
      testimonials: seedProjects.filter((project) => project.testimonial).length,
      clients: seedClients.length,
      quoteRequests: 0,
    };
  }

  const db = getPrisma();
  const [projects, posts, testimonials, clients, quoteRequests] = await Promise.all([
    db.project.count(),
    db.post.count(),
    db.testimonial.count(),
    db.client.count(),
    db.quoteRequest.count(),
  ]);

  return { projects, posts, testimonials, clients, quoteRequests };
}
