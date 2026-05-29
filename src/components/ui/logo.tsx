import Image from "next/image";
import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`industrial-wordmark flex items-center gap-3 ${className}`} aria-label="Dockside home">
      {/* We use an overflow-hidden container to effectively "crop" the favicon if it has white edges */}
      <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-[rgba(213,161,94,0.42)] bg-gradient-to-br from-[#c9633466] to-[#d5a15e14]">
        <Image
          src="/favicon.svg"
          alt="Dockside Logo"
          width={64}
          height={64}
          className="absolute max-w-none scale-[1.35] object-cover" // Scale up to crop out white borders if any
        />
      </div>
      <div className="flex flex-col">
        <span className="font-display text-xl uppercase tracking-wider text-white">Dockside</span>
        <span className="text-[9px] uppercase tracking-widest text-[#f6f1e894]">Constructions</span>
      </div>
    </Link>
  );
}
