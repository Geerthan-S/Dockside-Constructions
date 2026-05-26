import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0">
        <Image src={image} alt="" fill priority className="object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/88 to-background/35" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <Badge variant="outline" className="border-primary/30 bg-white/5 text-primary backdrop-blur">{eyebrow}</Badge>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{description}</p>
        </div>
      </div>
    </section>
  );
}
