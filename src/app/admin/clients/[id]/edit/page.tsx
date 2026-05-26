import { notFound } from "next/navigation";
import { updateClient } from "@/app/admin/actions";
import { ClientForm } from "@/components/admin/client-form";
import { requireAdmin } from "@/lib/admin";
import { seedClients } from "@/lib/content";
import { canUseDatabase, getPrisma } from "@/lib/prisma";

export const metadata = { title: "Edit Client" };

export default async function EditClientPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await requireAdmin();
  const { id } = await params;
  const client = canUseDatabase()
    ? await getPrisma().client.findUnique({ where: { id } })
    : seedClients.find((item) => item.id === id);

  if (!client) notFound();

  return (
    <div>
      <h1 className="text-3xl font-semibold">Edit Client</h1>
      <p className="mt-2 text-muted-foreground">Update client details used across the public site.</p>
      <div className="mt-8">
        <ClientForm action={updateClient.bind(null, id)} client={client} />
      </div>
    </div>
  );
}

