import Link from "next/link";
import { Building2, Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-md border border-primary/25 bg-primary/10">
              <Building2 className="size-5 text-primary" />
            </span>
            <div>
              <p className="font-semibold">Dockside Constructions Private Limited</p>
              <p className="text-sm text-muted-foreground">Engineering-led construction delivery</p>
            </div>
          </div>
          <p className="mt-5 max-w-xl text-sm leading-6 text-muted-foreground">
            Premium corporate construction partner for industrial campuses, port-side
            infrastructure, logistics assets and mission-critical civil works.
          </p>
        </div>
        <div>
          <p className="font-medium">Company</p>
          <div className="mt-4 grid gap-3 text-sm text-muted-foreground">
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <p className="font-medium">Corporate Office</p>
          <div className="mt-4 grid gap-3 text-sm text-muted-foreground">
            <span className="flex gap-2"><MapPin className="mt-0.5 size-4" /> Mumbai, Maharashtra</span>
            <span className="flex gap-2"><Phone className="mt-0.5 size-4" /> +91 22 4000 1188</span>
            <span className="flex gap-2"><Mail className="mt-0.5 size-4" /> projects@docksideconstructions.com</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-muted-foreground">
        © 2026 Dockside Constructions Private Limited. All rights reserved.
      </div>
    </footer>
  );
}

