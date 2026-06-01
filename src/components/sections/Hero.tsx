"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type HeroProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
};

export function Hero({
  eyebrow = "Engineering-led infrastructure partner",
  title = "Infrastructure Delivered|With Discipline",
  description = "Premium construction solutions for industrial, commercial and public infrastructure projects, delivered with precision, safety and disciplined project control.",
  primaryLabel = "Explore Projects",
  primaryHref = "/projects",
}: HeroProps) {
  const root = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const titleLines = title.split("|").map((line) => line.trim()).filter(Boolean);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultPlaybackRate = 0.5;
      videoRef.current.playbackRate = 0.5;
    }

    if (!root.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-kicker, .hero-line, .hero-copy, .hero-actions, .hero-side-index__item",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.08,
          ease: "power3.out",
        },
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="premium-hero">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-60 mix-blend-screen"
      >
        <source src="/bg_video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-[#06070a]/25 via-[#06070a]/10 to-transparent" />

      <div className="hero-dust-layer" aria-hidden="true" />
      <div className="hero-light-sweep" aria-hidden="true" />
      <div className="premium-hero__copy">
        <p className="hero-kicker studio-label">{eyebrow}</p>
        <h1>
          {titleLines.map((line, index) => (
            <span
              className={`hero-line ${index === titleLines.length - 1 ? "hero-line--accent" : ""}`}
              key={line}
            >
              {line}
            </span>
          ))}
        </h1>
        <p className="hero-copy premium-hero__text">
          {description}
        </p>
        <div className="hero-actions premium-hero__actions">
          <Link href={primaryHref} className="studio-button studio-button--fill">
            {primaryLabel}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
      <div className="hero-side-index" aria-label="Homepage sections">
        {[
          ["01", "Home"],
          ["02", "About"],
          ["03", "Projects"],
          ["04", "Services"],
          ["05", "Contact"],
        ].map(([number, label]) => (
          <span className="hero-side-index__item" key={number}>
            <strong>{number}</strong>
            {label}
          </span>
        ))}
      </div>
    </section>
  );
}
