"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Building2, ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navGroups = [
  {
    label: "About",
    href: "/about",
    items: [
      ["Company Overview", "/about#company-overview"],
      ["Vision & Mission", "/about#vision-mission"],
      ["Leadership", "/about#leadership"],
      ["Certifications", "/about#certifications"],
    ],
  },
  {
    label: "Services",
    href: "/services",
    items: [
      ["Residential", "/services/residential"],
      ["Commercial", "/services/commercial"],
      ["Industrial", "/services/industrial"],
      ["Renovation", "/services/renovation"],
      ["Interior", "/services/interior"],
      ["Infrastructure", "/services/infrastructure"],
      ["Electrical & Structural", "/services/electrical-structural"],
    ],
  },
  {
    label: "Projects",
    href: "/projects",
    items: [
      ["Portfolio Showcase", "/projects"],
      ["Categories", "/projects/categories"],
      ["Gallery", "/projects/gallery"],
      ["Dynamic Project Pages", "/projects/deepwater-logistics-yard-berth-interface"],
    ],
  },
  {
    label: "Insights",
    href: "/insights",
    items: [
      ["Testimonials", "/insights/testimonials"],
      ["Case Studies", "/insights/case-studies"],
      ["FAQs", "/insights/faqs"],
    ],
  },
  {
    label: "Contact",
    href: "/contact",
    items: [
      ["Mail", "/contact#mail"],
      ["Socials", "/contact#socials"],
      ["WhatsApp", "/contact#whatsapp"],
      ["Inquiry Form", "/contact#inquiry-form"],
    ],
  },
];

const simpleNav = [["Careers", "/careers"]];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/70 shadow-2xl shadow-black/20 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="glass-panel flex size-11 items-center justify-center rounded-md">
            <Building2 className="size-5 text-primary" />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold uppercase tracking-[0.22em]">
              Dockside
            </span>
            <span className="block text-xs text-muted-foreground">Constructions Pvt. Ltd.</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-2 lg:flex">
          {navGroups.map((group) => (
            <DropdownMenu key={group.label}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={cn(
                    "gap-1 text-muted-foreground hover:text-foreground",
                    pathname.startsWith(group.href) && "text-foreground",
                  )}
                >
                  {group.label}
                  <ChevronDown className="size-3.5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="glass-panel w-64">
                <DropdownMenuItem asChild>
                  <Link href={group.href} className="font-medium">Overview</Link>
                </DropdownMenuItem>
                {group.items.map(([label, href]) => (
                  <DropdownMenuItem key={href} asChild>
                    <Link href={href}>{label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ))}
          {simpleNav.map(([label, href]) => (
            <Button key={href} asChild variant="ghost" className={cn(pathname === href && "text-foreground")}>
              <Link href={href}>{label}</Link>
            </Button>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="outline">
            <Link href="/login">Admin</Link>
          </Button>
          <Button asChild>
            <Link href="/get-quote">Get Quote</Link>
          </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button size="icon" variant="outline" aria-label="Open navigation">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="glass-panel">
            <SheetHeader>
              <SheetTitle>Dockside</SheetTitle>
            </SheetHeader>
            <div className="mt-8 grid gap-6">
              {navGroups.map((group) => (
                <div key={group.label}>
                  <Link href={group.href} className="font-medium">{group.label}</Link>
                  <div className="mt-3 grid gap-2 ps-3 text-sm text-muted-foreground">
                    {group.items.map(([label, href]) => (
                      <Link key={href} href={href}>{label}</Link>
                    ))}
                  </div>
                </div>
              ))}
              <Link href="/careers" className="font-medium">Careers</Link>
            </div>
            <Button asChild className="mt-8 w-full">
              <Link href="/get-quote">Get Quote</Link>
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
