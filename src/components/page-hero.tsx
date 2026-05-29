import Image from "next/image";

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
    <section className="premium-page-hero">
      <div className="premium-page-hero__media">
        <Image src={image} alt="" fill priority className="object-cover" />
      </div>
      <div className="premium-page-hero__content">
        <span>{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
