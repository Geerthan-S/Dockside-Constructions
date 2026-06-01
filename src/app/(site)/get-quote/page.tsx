import { redirect } from "next/navigation";
import { z } from "zod";
import { PageHero } from "@/components/page-hero";
import { QuoteBuilder } from "@/components/quote-builder";
import { SiteContentSections } from "@/components/site-content-sections";
import { getSitePage } from "@/lib/repositories";
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
  documentLinks: z.string().optional(),
  message: z.string().min(10),
});

const splitDocumentLinks = (value?: string) =>
  String(value ?? "")
    .split(/[\n,]+/)
    .map((item) => item.trim())
    .filter(Boolean);

async function submitQuote(formData: FormData) {
  "use server";

  const parsed = quoteSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) redirect("/get-quote?error=validation");

  if (!canUseDatabase()) redirect("/get-quote?error=database");

  const {
    projectLocation,
    projectType,
    targetStart,
    quantity,
    tenderType,
    documentLinks,
    message,
    ...quote
  } = parsed.data;
  const documentLinkList = splitDocumentLinks(documentLinks);
  const enrichedMessage = [
    message,
    "",
    "Project intake:",
    projectLocation ? `Location: ${projectLocation}` : null,
    projectType ? `Project type: ${projectType}` : null,
    targetStart ? `Target start: ${targetStart}` : null,
    quantity ? `Approx. quantity / area: ${quantity}` : null,
    tenderType ? `Tender / private: ${tenderType}` : null,
    documentLinkList.length ? `Supporting document links: ${documentLinkList.join(", ")}` : null,
  ].filter(Boolean).join("\n");

  await getPrisma().quoteRequest.create({
    data: { ...quote, documentLinks: documentLinkList, message: enrichedMessage },
  });
  redirect("/get-quote/thank-you");
}

export default async function GetQuotePage() {
  const page = await getSitePage("get-quote");

  return (
    <>
      <PageHero
        eyebrow="Get Quote"
        title={page?.heroTitle ?? "Convert your scope into an execution-ready project discussion."}
        description={page?.heroDescription ?? "Share the essentials and Dockside will respond with the right technical and commercial team."}
        image={page?.heroImage ?? industrialImages.structure}
      />
      <SiteContentSections sections={page?.sections ?? []} />
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
