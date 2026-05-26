import { Activity, Database, FileText, MessageSquare, Users, Wrench, type LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAdminMetrics } from "@/lib/repositories";
import { requireAdmin } from "@/lib/admin";

export const metadata = { title: "Admin Dashboard" };

export default async function AdminPage() {
  await requireAdmin();
  const metrics = await getAdminMetrics();

  const cards: Array<[string, number, LucideIcon]> = [
    ["Projects", metrics.projects, Wrench],
    ["Clients", metrics.clients, Users],
    ["Blog Posts", metrics.posts, FileText],
    ["Testimonials", metrics.testimonials, MessageSquare],
    ["Quote Requests", metrics.quoteRequests, Database],
  ];

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold">CMS Dashboard</h1>
          <p className="mt-2 text-muted-foreground">Manage projects, insights, testimonials, media and SEO without developer support.</p>
        </div>
        <Activity className="size-8 text-primary" />
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-4">
        {cards.map(([label, value, Icon]) => (
          <Card key={label as string} className="border-white/10 bg-card/55">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-base">
                {label}
                <Icon className="size-5 text-primary" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold">{String(value)}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
