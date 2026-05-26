import { createClient } from "@/app/admin/actions";
import { ClientForm } from "@/components/admin/client-form";
import { requireAdmin } from "@/lib/admin";

export const metadata = { title: "Add Client" };

export default async function NewClientPage() {
  await requireAdmin();

  return (
    <div>
      <h1 className="text-3xl font-semibold">Add Client</h1>
      <p className="mt-2 text-muted-foreground">Create a client profile for logos, industries and homepage trust signals.</p>
      <div className="mt-8">
        <ClientForm action={createClient} />
      </div>
    </div>
  );
}

