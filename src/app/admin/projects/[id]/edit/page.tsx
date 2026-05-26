import { notFound } from "next/navigation";
import { updateProject } from "@/app/admin/actions";
import { ProjectForm } from "@/components/admin/project-form";
import { canUseDatabase, getPrisma } from "@/lib/prisma";
import { seedProjects } from "@/lib/content";
import { requireAdmin } from "@/lib/admin";

export const metadata = { title: "Edit Project" };

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await requireAdmin();
  const { id } = await params;
  const project = canUseDatabase()
    ? await getPrisma().project.findUnique({ where: { id }, include: { testimonial: true } })
    : seedProjects.find((item) => item.id === id);

  if (!project) notFound();

  return (
    <div>
      <h1 className="text-3xl font-semibold">Edit Project</h1>
      <p className="mt-2 text-muted-foreground">Update scope, status, gallery, SEO and publishing controls.</p>
      <div className="mt-8">
        <ProjectForm action={updateProject.bind(null, id)} project={project} />
      </div>
    </div>
  );
}

