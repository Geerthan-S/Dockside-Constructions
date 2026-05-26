import { redirect } from "next/navigation";
import { Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { z } from "zod";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { industrialImages } from "@/lib/content";
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

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Speak with Dockside about your next project."
        description="Connect with our corporate office for partnerships, tenders, vendor onboarding and project inquiries."
        image={industrialImages.hero}
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="glass-panel rounded-lg p-8">
          <h2 className="text-3xl font-semibold">Corporate office</h2>
          <div className="mt-8 grid gap-5 text-muted-foreground">
            <p className="flex gap-3"><MapPin className="size-5 text-primary" /> Mumbai, Maharashtra, India</p>
            <p className="flex gap-3"><Phone className="size-5 text-primary" /> +91 22 4000 1188</p>
            <p id="mail" className="flex gap-3"><Mail className="size-5 text-primary" /> projects@docksideconstructions.com</p>
            <p id="whatsapp" className="flex gap-3"><MessageCircle className="size-5 text-primary" /> WhatsApp: +91 98765 43210</p>
          </div>
          <div id="socials" className="mt-8 flex gap-3">
            <a className="glass-panel-soft rounded-md p-3" href="#" aria-label="LinkedIn"><Linkedin className="size-5" /></a>
            <a className="glass-panel-soft rounded-md p-3" href="#" aria-label="Instagram"><Instagram className="size-5" /></a>
          </div>
        </div>
        <form id="inquiry-form" action={submitContact} className="glass-panel grid gap-5 rounded-lg p-8">
          <div className="grid gap-2"><Label htmlFor="name">Name</Label><Input id="name" name="name" placeholder="Your name" required /></div>
          <div className="grid gap-2"><Label htmlFor="email">Email</Label><Input id="email" name="email" type="email" placeholder="you@company.com" required /></div>
          <div className="grid gap-2"><Label htmlFor="message">Message</Label><Textarea id="message" name="message" placeholder="Tell us how we can help" rows={6} required /></div>
          <Button type="submit">Send Enquiry</Button>
        </form>
      </section>
    </>
  );
}
