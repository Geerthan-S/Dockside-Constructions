import { CircleHelp } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { faqs, industrialImages } from "@/lib/content";

export const metadata = { title: "FAQs" };

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Answers for project owners and corporate procurement teams."
        description="Common questions about Dockside's construction services, CMS capabilities and delivery model."
        image={industrialImages.safety}
      />
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="glass-panel rounded-lg p-6">
              <h2 className="flex gap-3 text-xl font-semibold">
                <CircleHelp className="mt-1 size-5 shrink-0 text-primary" />
                {faq.question}
              </h2>
              <p className="mt-4 leading-7 text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
