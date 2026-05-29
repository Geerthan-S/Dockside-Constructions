"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/logo";

const navItems = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Services", "/services"],
  ["Projects", "/projects"],
  ["Our Process", "/#process"],
  ["Blog", "/insights"],
  ["Contact", "/contact"],
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 981px)");
    const closeOnDesktop = () => {
      if (desktopQuery.matches) setOpen(false);
    };

    closeOnDesktop();
    desktopQuery.addEventListener("change", closeOnDesktop);
    return () => desktopQuery.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <header className={`industrial-nav ${scrolled ? "is-scrolled" : ""}`}>
      <Logo />
      <nav className="industrial-nav__links" aria-label="Main navigation">
        {navItems.map(([label, href]) => {
          const active = pathname === href || pathname.startsWith(`${href}/`);
          return (
          <Link key={href} href={href} className={active ? "is-active" : ""}>
            {label}
          </Link>
          );
        })}
        <Link href="/get-quote" className="industrial-quote">
          Get a Quote
          <ArrowRight className="size-3.5" aria-hidden="true" />
        </Link>
      </nav>
      <button
        className="industrial-menu"
        type="button"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
      >
        <Menu className="size-4" aria-hidden="true" />
      </button>
      <div className={`industrial-overlay ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <button className="industrial-overlay__close" type="button" onClick={() => setOpen(false)}>
          <X className="size-5" aria-hidden="true" />
        </button>
        <p>Navigation</p>
        <div className="industrial-overlay__links">
          {navItems.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <Link href="/get-quote" onClick={() => setOpen(false)}>
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
