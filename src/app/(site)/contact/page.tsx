import { redirect } from "next/navigation";
import { z } from "zod";
import { PageHero } from "@/components/page-hero";
import { SiteContentSections } from "@/components/site-content-sections";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { industrialImages } from "@/lib/content";
import { getSitePage } from "@/lib/repositories";
import { canUseDatabase, getPrisma } from "@/lib/prisma";

export const metadata = { title: "Contact" };

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

async function submitContact(formData: FormData) {
  "use server";

  const parsed = contactSchema.safeParse(Object.fromEntries(formData));
  if (parsed.success && canUseDatabase()) {
    await getPrisma().contactMessage.create({ data: parsed.data });
  }
  redirect("/contact/thank-you");
}

export default async function ContactPage() {
  const page = await getSitePage("contact");

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={page?.heroTitle ?? "Speak with Dockside about your next project."}
        description={page?.heroDescription ?? "Connect with DCPL for construction, infrastructure and project management inquiries."}
        image={page?.heroImage ?? industrialImages.hero}
      />
      <SiteContentSections sections={page?.sections ?? []} />
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <form id="inquiry-form" action={submitContact} className="glass-panel grid gap-5 rounded-lg p-8">
          <h2 className="text-3xl font-semibold">Contact form</h2>
          <div className="grid gap-2"><Label htmlFor="name">Name</Label><Input id="name" name="name" placeholder="Your name" required /></div>
          <div className="grid gap-2"><Label htmlFor="email">Email</Label><Input id="email" name="email" type="email" placeholder="you@company.com" required /></div>
          <div className="grid gap-2"><Label htmlFor="message">Message</Label><Textarea id="message" name="message" placeholder="Tell us how we can help" rows={6} required /></div>
          <Button type="submit">Send Enquiry</Button>
        </form>
      </section>
    </>
  );
}
