import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = { title: "Quote Request Received" };

export default function ThankYouPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-28 text-center sm:px-6 lg:px-8">
      <h1 className="text-4xl font-semibold">Quote request received.</h1>
      <p className="mt-5 text-muted-foreground">
        The Dockside team will review your scope and respond with the right next step.
      </p>
      <Button asChild className="mt-8">
        <Link href="/projects">View Projects</Link>
      </Button>
    </section>
  );
}

