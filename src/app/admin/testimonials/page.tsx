import { createTestimonial } from "@/app/admin/actions";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { requireAdmin } from "@/lib/admin";
import { canUseDatabase, getPrisma } from "@/lib/prisma";
import { seedProjects } from "@/lib/content";

export const metadata = { title: "Testimonials" };

export default async function TestimonialsPage() {
  await requireAdmin();
  const [testimonials, projects] = canUseDatabase()
    ? await Promise.all([
        getPrisma().testimonial.findMany({ orderBy: { updatedAt: "desc" } }),
        getPrisma().project.findMany({ select: { id: true, title: true } }),
      ])
    : [seedProjects.flatMap((project) => project.testimonial ? [{ id: project.id, ...project.testimonial }] : []), seedProjects];

  return (
    <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
      <div>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold">Testimonials CMS</h1>
            <p className="mt-2 text-muted-foreground">
              Manage the client feedback shown on the public testimonials page.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/testimonials">View public page</Link>
          </Button>
        </div>
        <div className="mt-8 grid gap-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="rounded-md border border-white/10 bg-card/45 p-4">
              <p className="font-medium">{testimonial.personName}</p>
              <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
                {testimonial.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
      <form action={createTestimonial} className="grid gap-4 rounded-lg border border-white/10 bg-card/45 p-6">
        <h2 className="text-2xl font-semibold">Add testimonial</h2>
        <div className="grid gap-2"><Label>Quote</Label><Textarea name="quote" required /></div>
        <div className="grid gap-2"><Label>Person name</Label><Input name="personName" required /></div>
        <div className="grid gap-2"><Label>Designation</Label><Input name="designation" required /></div>
        <div className="grid gap-2"><Label>Company</Label><Input name="company" required /></div>
        <div className="grid gap-2"><Label>Avatar URL</Label><Input name="avatar" /></div>
        <div className="grid gap-2">
          <Label>Project ID</Label>
          <Input name="projectId" placeholder={projects[0]?.id ?? "Optional"} />
          <p className="text-xs text-muted-foreground">
            Optional. Link this quote to a project ID so the public page can point back to the case study.
          </p>
        </div>
        <Button type="submit">Add Testimonial</Button>
      </form>
    </div>
  );
}
