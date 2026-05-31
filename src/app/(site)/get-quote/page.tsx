import { redirect } from "next/navigation";
import { z } from "zod";
import { PageHero } from "@/components/page-hero";
import { QuoteBuilder } from "@/components/quote-builder";
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
  projectLocation: z.string().optional(),
  projectType: z.string().optional(),
  targetStart: z.string().optional(),
  quantity: z.string().optional(),
  tenderType: z.string().optional(),
  message: z.string().min(10),
});

async function submitQuote(formData: FormData) {
  "use server";

  const parsed = quoteSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) redirect("/get-quote?error=validation");

  if (!canUseDatabase()) redirect("/get-quote?error=database");

  const { projectLocation, projectType, targetStart, quantity, tenderType, message, ...quote } = parsed.data;
  const enrichedMessage = [
    message,
    "",
    "Project intake:",
    projectLocation ? `Location: ${projectLocation}` : null,
    projectType ? `Project type: ${projectType}` : null,
    targetStart ? `Target start: ${targetStart}` : null,
    quantity ? `Approx. quantity / area: ${quantity}` : null,
    tenderType ? `Tender / private: ${tenderType}` : null,
  ].filter(Boolean).join("\n");

  await getPrisma().quoteRequest.create({ data: { ...quote, message: enrichedMessage } });
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
      <section className="quote-intake mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div>
          <span>[ INTAKE ]</span>
          <h2>Give the team enough context to respond like engineers, not sales reps.</h2>
          <p>Location, scope quantity, start window and project type help Dockside route your inquiry to the right technical and commercial next step.</p>
        </div>
        <QuoteBuilder action={submitQuote} />
      </section>
    </>
  );
}
