import { redirect } from "next/navigation";
import { z } from "zod";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { canUseDatabase, getPrisma } from "@/lib/prisma";
import { industrialImages } from "@/lib/content";

export const metadata = { title: "Get Quote" };

const quoteSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8),
  company: z.string().optional(),
  service: z.string().min(2),
  budget: z.string().optional(),
  message: z.string().min(10),
});

async function submitQuote(formData: FormData) {
  "use server";

  const parsed = quoteSchema.safeParse(Object.fromEntries(formData));
  if (parsed.success && canUseDatabase()) {
    await getPrisma().quoteRequest.create({ data: parsed.data });
  }
  redirect("/get-quote/thank-you");
}

export default function GetQuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Get Quote"
        title="Convert your scope into an execution-ready project discussion."
        description="Share the essentials and Dockside will respond with the right technical and commercial team."
        image={industrialImages.structure}
      />
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <form action={submitQuote} className="grid gap-5 rounded-lg border border-white/10 bg-card/45 p-8 md:grid-cols-2">
          <div className="grid gap-2"><Label htmlFor="name">Name</Label><Input id="name" name="name" required /></div>
          <div className="grid gap-2"><Label htmlFor="email">Email</Label><Input id="email" name="email" type="email" required /></div>
          <div className="grid gap-2"><Label htmlFor="phone">Phone</Label><Input id="phone" name="phone" required /></div>
          <div className="grid gap-2"><Label htmlFor="company">Company</Label><Input id="company" name="company" /></div>
          <div className="grid gap-2"><Label htmlFor="service">Service</Label><Input id="service" name="service" required /></div>
          <div className="grid gap-2"><Label htmlFor="budget">Budget</Label><Input id="budget" name="budget" /></div>
          <div className="grid gap-2 md:col-span-2"><Label htmlFor="message">Project brief</Label><Textarea id="message" name="message" rows={7} required /></div>
          <Button type="submit" className="md:col-span-2">Submit Quote Request</Button>
        </form>
      </section>
    </>
  );
}

