import { createProject } from "@/app/admin/actions";
import { ProjectForm } from "@/components/admin/project-form";
import { requireAdmin } from "@/lib/admin";

export const metadata = { title: "Add Project" };

export default async function NewProjectPage() {
  await requireAdmin();

  return (
    <div>
      <h1 className="text-3xl font-semibold">Add Project</h1>
      <p className="mt-2 text-muted-foreground">Publish a new CMS-powered case study.</p>
      <div className="mt-8">
        <ProjectForm action={createProject} />
      </div>
    </div>
  );
}

