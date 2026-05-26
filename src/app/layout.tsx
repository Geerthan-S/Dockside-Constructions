import type { Metadata } from "next";
import { Bebas_Neue, DM_Mono, Lora } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  subsets: ["latin"],
});

const lora = Lora({
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://docksideconstructions.com"),
  title: {
    default: "Dockside Constructions Private Limited",
    template: "%s | Dockside Constructions",
  },
  description:
    "Premium EPC, industrial, marine and corporate construction company delivering engineering-led infrastructure projects.",
  keywords: [
    "Dockside Constructions",
    "EPC construction",
    "industrial construction",
    "marine civil works",
    "infrastructure company India",
  ],
  openGraph: {
    title: "Dockside Constructions Private Limited",
    description:
      "Engineering-led construction for ports, industrial campuses, logistics hubs and critical infrastructure.",
    type: "website",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${dmMono.variable} ${lora.variable} dark h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
