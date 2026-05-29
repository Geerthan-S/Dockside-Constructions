"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

export function LuxuryScroll() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0, 0);

    const ctx = gsap.context(() => {
      document.documentElement.classList.add("has-smooth-scroll");

      gsap.utils.toArray<HTMLElement>("[data-text-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          { yPercent: 18, opacity: 0, clipPath: "inset(0 0 100% 0)" },
          {
            yPercent: 0,
            opacity: 1,
            clipPath: "inset(0 0 0% 0)",
            duration: 1.25,
            ease: "power4.out",
            scrollTrigger: { trigger: element, start: "top 82%", once: true },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-stagger-reveal]").forEach((scope) => {
        gsap.fromTo(
          scope.children,
          { y: 36, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.95,
            stagger: 0.09,
            ease: "power3.out",
            scrollTrigger: { trigger: scope, start: "top 76%", once: true },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-parallax-media]").forEach((element) => {
        gsap.fromTo(
          element,
          { scale: 1.08, yPercent: -5 },
          {
            scale: 1,
            yPercent: 5,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              scrub: 1.2,
              start: "top bottom",
              end: "bottom top",
            },
          },
        );
      });

      ScrollTrigger.matchMedia({
        "(min-width: 900px)": () => {
          const rail = document.querySelector<HTMLElement>(".premium-project-rail");
          const section = document.querySelector<HTMLElement>(".premium-projects");
          if (!rail || !section) return undefined;

          const distance = () => Math.max(0, rail.scrollWidth - window.innerWidth + 96);
          const tween = gsap.to(rail, {
            x: () => -distance(),
            ease: "none",
            scrollTrigger: {
              trigger: section,
              scrub: 1.1,
              start: "top 65%",
              end: () => `+=${distance()}`,
              invalidateOnRefresh: true,
            },
          });

          return () => tween.kill();
        },
      });
    });

    return () => {
      document.documentElement.classList.remove("has-smooth-scroll");
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      ctx.revert();
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, []);

  return null;
}
