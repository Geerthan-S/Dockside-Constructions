import Link from "next/link";
import { redirect } from "next/navigation";
import { BarChart3, FileCog, FileText, ImageIcon, LayoutDashboard, LogOut, MessageSquare, Search, Shield, Users, Wrench, type LucideIcon } from "lucide-react";
import { auth, signOut } from "@/auth";

const adminNav: Array<[string, string, LucideIcon]> = [
  ["Overview", "/admin", LayoutDashboard],
  ["Projects", "/admin/projects", Wrench],
  ["Site Content", "/admin/site-content", FileCog],
  ["Clients", "/admin/clients", Users],
  ["Testimonials", "/admin/testimonials", MessageSquare],
  ["Articles", "/admin/blog", FileText],
  ["Media", "/admin/media", ImageIcon],
  ["SEO", "/admin/seo", Search],
  ["Analytics", "/admin/analytics", BarChart3],
];

async function logout() {
  "use server";
  await signOut({ redirectTo: "/" });
}

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session?.user) redirect("/login");

  return (
    <main className="admin-shell">
      <div className="admin-shell__grid">
        <aside className="admin-sidebar">
          <Link href="/admin" className="admin-brand">
            <Shield className="size-6 text-primary" aria-hidden="true" />
            <div>
              <p className="font-semibold uppercase tracking-[0.12em]">Dockside Ops</p>
              <p className="text-xs text-muted-foreground">{session.user.role} control surface</p>
            </div>
          </Link>
          <nav className="admin-nav" aria-label="Admin navigation">
            {adminNav.map(([label, href, Icon]) => (
              <Link key={href as string} href={href as string} className="admin-nav-link">
                  <Icon className="size-4" aria-hidden="true" />
                  {label}
              </Link>
            ))}
          </nav>
          <form action={logout} className="mt-8">
            <button className="admin-nav-link w-full" type="submit">
              <LogOut className="size-4" aria-hidden="true" />
              Sign out
            </button>
          </form>
        </aside>
        <section className="admin-content">{children}</section>
      </div>
    </main>
  );
}
