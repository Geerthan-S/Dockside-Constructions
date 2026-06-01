import { Activity, Database, FileCog, FileText, MessageSquare, Users, Wrench, type LucideIcon } from "lucide-react";
import { getAdminMetrics } from "@/lib/repositories";
import { requireAdmin } from "@/lib/admin";

export const metadata = { title: "Admin Dashboard" };

export default async function AdminPage() {
  await requireAdmin();
  const metrics = await getAdminMetrics();

  const cards: Array<[string, number, LucideIcon]> = [
    ["Projects", metrics.projects, Wrench],
    ["Site Pages", metrics.sitePages, FileCog],
    ["Clients", metrics.clients, Users],
    ["Testimonials", metrics.testimonials, MessageSquare],
    ["Articles", metrics.posts, FileText],
    ["Quote Requests", metrics.quoteRequests, Database],
  ];

  return (
    <div>
      <div className="admin-page-title flex items-center justify-between gap-4">
        <div>
          <h1>Operations dashboard</h1>
          <p className="mt-3">Manage projects, testimonials, articles, media and SEO from a premium control surface built for execution visibility.</p>
        </div>
        <Activity className="size-8 text-primary" />
      </div>
      <div className="admin-metrics">
        {cards.map(([label, value, Icon]) => (
          <article key={label as string} className="admin-card">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>{label}</span>
              <Icon className="size-5 text-primary" aria-hidden="true" />
            </div>
            <strong>{String(value)}</strong>
          </article>
        ))}
      </div>
      <section className="admin-table-shell">
        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[18px] border border-white/10 bg-black/20 p-5">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-primary">Portfolio health</p>
            <div className="mt-6 h-56 rounded-2xl border border-primary/15 bg-[linear-gradient(135deg,rgba(201,99,52,0.2),transparent_42%),repeating-linear-gradient(90deg,rgba(255,255,255,0.04)_0_1px,transparent_1px_48px)]" />
          </div>
          <div className="rounded-[18px] border border-white/10 bg-black/20 p-5">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-primary">Execution queue</p>
            <div className="mt-6 grid gap-3">
              {["Project media uploads", "Testimonial publishing", "SEO route updates", "Quote request review"].map((item) => (
                <span key={item} className="rounded-full border border-white/10 px-4 py-3 text-sm text-muted-foreground">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
