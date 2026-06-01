"use server";

import { ProjectStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { requireAdmin, requireManager } from "@/lib/admin";
import { canUseDatabase, getPrisma } from "@/lib/prisma";
import { defaultSitePages, getDefaultSitePage, getSitePageRoute } from "@/lib/site-content";
import { slugify } from "@/lib/slug";

const listFromField = (value: FormDataEntryValue | null) =>
  String(value ?? "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

const projectSchema = z.object({
  title: z.string().min(3),
  slug: z.string().min(3),
  clientName: z.string().min(2),
  clientLogo: z.string().optional(),
  featuredImage: z.string().url(),
  gallery: z.array(z.string().url()),
  location: z.string().min(2),
  scopeOfWork: z.string().min(10),
  timeline: z.string().min(2),
  projectValue: z.string().min(2),
  status: z.nativeEnum(ProjectStatus),
  servicesUsed: z.array(z.string()),
  industry: z.string().min(2),
  summary: z.string().min(10),
  body: z.string().min(20),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
  published: z.boolean(),
  featured: z.boolean(),
});

function projectDataFromForm(formData: FormData) {
  const title = String(formData.get("title") ?? "");
  return projectSchema.parse({
    title,
    slug: String(formData.get("slug") || slugify(title)),
    clientName: String(formData.get("clientName") ?? ""),
    clientLogo: String(formData.get("clientLogo") ?? "") || undefined,
    featuredImage: String(formData.get("featuredImage") ?? ""),
    gallery: listFromField(formData.get("gallery")),
    location: String(formData.get("location") ?? ""),
    scopeOfWork: String(formData.get("scopeOfWork") ?? ""),
    timeline: String(formData.get("timeline") ?? ""),
    projectValue: String(formData.get("projectValue") ?? ""),
    status: String(formData.get("status") ?? "IN_PROGRESS"),
    servicesUsed: listFromField(formData.get("servicesUsed")),
    industry: String(formData.get("industry") ?? ""),
    summary: String(formData.get("summary") ?? ""),
    body: String(formData.get("body") ?? ""),
    seoTitle: String(formData.get("seoTitle") ?? "") || undefined,
    seoDescription: String(formData.get("seoDescription") ?? "") || undefined,
    published: formData.get("published") === "on",
    featured: formData.get("featured") === "on",
  });
}

export async function createProject(formData: FormData) {
  const session = await requireAdmin();
  if (!canUseDatabase()) redirect("/admin/projects?database=missing");

  const data = projectDataFromForm(formData);
  await getPrisma().project.create({
    data: { ...data, authorId: session.user.id },
  });
  revalidatePath("/");
  revalidatePath("/projects");
  redirect("/admin/projects");
}

export async function updateProject(id: string, formData: FormData) {
  await requireAdmin();
  if (!canUseDatabase()) redirect("/admin/projects?database=missing");

  const data = projectDataFromForm(formData);
  await getPrisma().project.update({ where: { id }, data });
  revalidatePath("/");
  revalidatePath("/projects");
  redirect("/admin/projects");
}

export async function deleteProject(id: string) {
  await requireManager();
  if (!canUseDatabase()) redirect("/admin/projects?database=missing");

  await getPrisma().project.delete({ where: { id } });
  revalidatePath("/");
  revalidatePath("/projects");
}

export async function createPost(formData: FormData) {
  const session = await requireAdmin();
  if (!canUseDatabase()) redirect("/admin/blog?database=missing");
  const title = String(formData.get("title") ?? "");

  await getPrisma().post.create({
    data: {
      title,
      slug: String(formData.get("slug") || slugify(title)),
      excerpt: String(formData.get("excerpt") ?? ""),
      coverImage: String(formData.get("coverImage") ?? ""),
      category: String(formData.get("category") ?? "Insight"),
      body: String(formData.get("body") ?? ""),
      seoTitle: String(formData.get("seoTitle") ?? "") || undefined,
      seoDescription: String(formData.get("seoDescription") ?? "") || undefined,
      authorId: session.user.id,
    },
  });
  revalidatePath("/admin/blog");
}

export async function createTestimonial(formData: FormData) {
  await requireAdmin();
  if (!canUseDatabase()) redirect("/admin/testimonials?database=missing");

  await getPrisma().testimonial.create({
    data: {
      quote: String(formData.get("quote") ?? ""),
      personName: String(formData.get("personName") ?? ""),
      designation: String(formData.get("designation") ?? ""),
      company: String(formData.get("company") ?? ""),
      avatar: String(formData.get("avatar") ?? "") || undefined,
      projectId: String(formData.get("projectId") ?? "") || undefined,
    },
  });
  revalidatePath("/");
  revalidatePath("/testimonials");
}

const clientSchema = z.object({
  name: z.string().min(2),
  slug: z.string().min(2),
  logoUrl: z.string().url().optional().or(z.literal("")),
  industry: z.string().optional(),
  website: z.string().url().optional().or(z.literal("")),
  testimonial: z.string().optional(),
  featured: z.boolean(),
});

const sitePageSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(10),
  heroTitle: z.string().min(2),
  heroDescription: z.string().min(10),
  heroImage: z.string().min(1),
  published: z.boolean(),
});

function parseSectionsJson(value: FormDataEntryValue | null) {
  try {
    const raw = String(value ?? "[]");
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

function clientDataFromForm(formData: FormData) {
  const name = String(formData.get("name") ?? "");
  return clientSchema.parse({
    name,
    slug: String(formData.get("slug") || slugify(name)),
    logoUrl: String(formData.get("logoUrl") ?? ""),
    industry: String(formData.get("industry") ?? ""),
    website: String(formData.get("website") ?? ""),
    testimonial: String(formData.get("testimonial") ?? ""),
    featured: formData.get("featured") === "on",
  });
}

export async function createClient(formData: FormData) {
  await requireAdmin();
  if (!canUseDatabase()) redirect("/admin/clients?database=missing");

  await getPrisma().client.create({ data: clientDataFromForm(formData) });
  revalidatePath("/");
  redirect("/admin/clients");
}

export async function updateClient(id: string, formData: FormData) {
  await requireAdmin();
  if (!canUseDatabase()) redirect("/admin/clients?database=missing");

  await getPrisma().client.update({ where: { id }, data: clientDataFromForm(formData) });
  revalidatePath("/");
  redirect("/admin/clients");
}

export async function deleteClient(id: string) {
  await requireManager();
  if (!canUseDatabase()) redirect("/admin/clients?database=missing");

  await getPrisma().client.delete({ where: { id } });
  revalidatePath("/");
}

export async function updateSitePage(slug: string, formData: FormData) {
  await requireAdmin();
  if (!canUseDatabase()) redirect(`/admin/site-content/${slug}?database=missing`);

  const fallback = getDefaultSitePage(slug);
  const data = sitePageSchema.parse({
    title: String(formData.get("title") ?? fallback?.title ?? ""),
    description: String(formData.get("description") ?? fallback?.description ?? ""),
    heroTitle: String(formData.get("heroTitle") ?? fallback?.heroTitle ?? ""),
    heroDescription: String(formData.get("heroDescription") ?? fallback?.heroDescription ?? ""),
    heroImage: String(formData.get("heroImage") ?? fallback?.heroImage ?? ""),
    published: formData.get("published") === "on",
  });
  const sections = parseSectionsJson(formData.get("sections"));
  if (!sections) redirect(`/admin/site-content/${slug}?error=sections`);

  await getPrisma().sitePage.upsert({
    where: { slug },
    update: { ...data, sections },
    create: { slug, ...data, sections },
  });

  const route = getSitePageRoute(slug);
  revalidatePath(route);
  if (route !== "/") revalidatePath("/");
  revalidatePath("/admin/site-content");
  redirect(`/admin/site-content/${slug}?saved=1`);
}

export async function syncDefaultSitePages() {
  await requireAdmin();
  if (!canUseDatabase()) redirect("/admin/site-content?database=missing");

  const db = getPrisma();
  await db.sitePage.deleteMany({ where: { slug: "insights" } });
  await Promise.all(
    defaultSitePages.map((page) =>
      db.sitePage.upsert({
        where: { slug: page.slug },
        update: {
          title: page.title,
          description: page.description,
          heroTitle: page.heroTitle,
          heroDescription: page.heroDescription,
          heroImage: page.heroImage,
          sections: page.sections,
          published: page.published,
        },
        create: {
          slug: page.slug,
          title: page.title,
          description: page.description,
          heroTitle: page.heroTitle,
          heroDescription: page.heroDescription,
          heroImage: page.heroImage,
          sections: page.sections,
          published: page.published,
        },
      }),
    ),
  );

  defaultSitePages.forEach((page) => revalidatePath(getSitePageRoute(page.slug)));
  revalidatePath("/admin");
  revalidatePath("/admin/site-content");
  redirect("/admin/site-content?synced=1");
}
