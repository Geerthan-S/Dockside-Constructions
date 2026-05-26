"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  ["ABOUT", "/about"],
  ["SERVICES", "/services"],
  ["PROJECTS", "/projects"],
  ["INSIGHTS", "/insights"],
  ["CAREERS", "/careers"],
  ["CONTACT", "/contact"],
];

export function SiteHeader() {
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
      <Link href="/" className="industrial-wordmark" aria-label="Dockside home">
        <span>DOCKSIDE</span>
        <i />
        <em>CONSTRUCTIONS PVT. LTD.</em>
      </Link>
      <nav className="industrial-nav__links" aria-label="Main navigation">
        {navItems.map(([label, href]) => (
          <Link key={href} href={href}>
            {label}
          </Link>
        ))}
        <Link href="/get-quote" className="industrial-quote">
          GET QUOTE
        </Link>
      </nav>
      <button
        className="industrial-menu"
        type="button"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
      >
        MENU
      </button>
      <div className={`industrial-overlay ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <button className="industrial-overlay__close" type="button" onClick={() => setOpen(false)}>
          CLOSE
        </button>
        <div className="industrial-overlay__links">
          {navItems.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <Link href="/get-quote" onClick={() => setOpen(false)}>
            GET QUOTE
          </Link>
        </div>
      </div>
    </header>
  );
}
