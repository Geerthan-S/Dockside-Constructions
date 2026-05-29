"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

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
      <div className="absolute inset-0 bg-gradient-to-t from-[#06070a] via-[#06070a]/40 to-transparent" />

      <div className="hero-dust-layer" aria-hidden="true" />
      <div className="hero-light-sweep" aria-hidden="true" />
      <div className="premium-hero__copy">
        <p className="hero-kicker studio-label">We build more than structures</p>
        <h1>
          <span className="hero-line">We Build</span>
          <span className="hero-line">Your</span>
          <span className="hero-line hero-line--accent">Future</span>
        </h1>
        <p className="hero-copy premium-hero__text">
          Premium construction solutions for industrial, commercial and public infrastructure
          projects, delivered with precision, safety and disciplined project control.
        </p>
        <div className="hero-actions premium-hero__actions">
          <Link href="/projects" className="studio-button studio-button--fill">
            Explore Projects
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
