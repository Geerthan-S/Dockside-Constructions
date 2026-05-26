"use server";

import { ProjectStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { requireAdmin, requireManager } from "@/lib/admin";
import { canUseDatabase, getPrisma } from "@/lib/prisma";
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
  revalidatePath("/insights");
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
