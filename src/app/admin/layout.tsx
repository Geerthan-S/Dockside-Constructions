import Link from "next/link";
import { redirect } from "next/navigation";
import { BarChart3, FileText, ImageIcon, LayoutDashboard, MessageSquare, Search, Shield, Users, Wrench, type LucideIcon } from "lucide-react";
import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

const adminNav: Array<[string, string, LucideIcon]> = [
  ["Overview", "/admin", LayoutDashboard],
  ["Projects", "/admin/projects", Wrench],
  ["Clients", "/admin/clients", Users],
  ["Blog", "/admin/blog", FileText],
  ["Testimonials", "/admin/testimonials", MessageSquare],
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
    <main className="min-h-screen bg-background">
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
        <aside className="border-r border-white/10 bg-card/45 p-5">
          <Link href="/admin" className="flex items-center gap-3">
            <Shield className="size-6 text-primary" />
            <div>
              <p className="font-semibold">Dockside CMS</p>
              <p className="text-xs text-muted-foreground">{session.user.role}</p>
            </div>
          </Link>
          <nav className="mt-8 grid gap-2">
            {adminNav.map(([label, href, Icon]) => (
              <Button key={href as string} asChild variant="ghost" className="justify-start">
                <Link href={href as string}>
                  <Icon className="size-4" />
                  {label}
                </Link>
              </Button>
            ))}
          </nav>
          <form action={logout} className="mt-8">
            <Button variant="outline" className="w-full">Sign out</Button>
          </form>
        </aside>
        <section className="p-4 sm:p-8">{children}</section>
      </div>
    </main>
  );
}
