import type { ProjectStatus } from "@prisma/client";

export type ProjectView = {
  id: string;
  title: string;
  slug: string;
  clientName: string;
  clientLogo?: string | null;
  featuredImage: string;
  gallery: string[];
  location: string;
  scopeOfWork: string;
  timeline: string;
  projectValue: string;
  status: ProjectStatus;
  servicesUsed: string[];
  industry: string;
  summary: string;
  body: string;
  seoTitle?: string | null;
  seoDescription?: string | null;
  featured: boolean;
  testimonial?: {
    quote: string;
    personName: string;
    designation: string;
    company: string;
    avatar?: string | null;
  } | null;
};

export type PostView = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  category: string;
  body: string;
};

export type ClientView = {
  id: string;
  name: string;
  slug: string;
  logoUrl?: string | null;
  industry?: string | null;
  website?: string | null;
  testimonial?: string | null;
  featured: boolean;
};

export const industrialImages = {
  hero:
    "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2200&q=85",
  structure:
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=85",
  site:
    "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1600&q=85",
  crane:
    "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?auto=format&fit=crop&w=1600&q=85",
  safety:
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=85",
};

export const serviceCategories = [
  {
    title: "Residential",
    slug: "residential",
    description:
      "Premium villas, apartments and gated communities with reliable execution controls.",
  },
  {
    title: "Commercial",
    slug: "commercial",
    description:
      "Corporate offices, retail shells, mixed-use assets and business campuses.",
  },
  {
    title: "Industrial",
    slug: "industrial",
    description:
      "Factories, warehouses, logistics hubs, PEB systems and process-ready buildings.",
  },
  {
    title: "Renovation",
    slug: "renovation",
    description:
      "Phased upgrades, brownfield improvements and live-site refurbishment.",
  },
  {
    title: "Interior",
    slug: "interior",
    description:
      "Corporate interiors, fit-outs, finishes and high-performance workspace delivery.",
  },
  {
    title: "Infrastructure",
    slug: "infrastructure",
    description:
      "Roads, yards, utilities, drainage, marine interfaces and public infrastructure.",
  },
  {
    title: "Electrical & Structural",
    slug: "electrical-structural",
    description:
      "Structural systems, MEP coordination, electrical works and engineering retrofits.",
  },
];

export const services = serviceCategories.map((service) => service.title);

export const industries = [
  "Ports & logistics",
  "Manufacturing",
  "Warehousing",
  "Energy & utilities",
  "Commercial campuses",
  "Public infrastructure",
];

export const certifications = [
  "ISO 9001 Quality Management",
  "ISO 14001 Environmental Management",
  "ISO 45001 Occupational Health & Safety",
  "Zero Harm safety governance",
];

export const seedClients: ClientView[] = [
  {
    id: "client-1",
    name: "Apex Ports",
    slug: "apex-ports",
    industry: "Ports & logistics",
    website: "https://example.com",
    testimonial:
      "Disciplined planning and transparent reporting across a constrained port environment.",
    featured: true,
  },
  {
    id: "client-2",
    name: "Orbit Steel",
    slug: "orbit-steel",
    industry: "Manufacturing",
    website: "https://example.com",
    testimonial:
      "Strong engineering coordination that protected the construction schedule.",
    featured: true,
  },
  {
    id: "client-3",
    name: "Nexus Logistics",
    slug: "nexus-logistics",
    industry: "Warehousing",
    website: "https://example.com",
    featured: true,
  },
  {
    id: "client-4",
    name: "Bluegrid Energy",
    slug: "bluegrid-energy",
    industry: "Energy & utilities",
    website: "https://example.com",
    featured: true,
  },
  {
    id: "client-5",
    name: "Southline Infra",
    slug: "southline-infra",
    industry: "Public infrastructure",
    website: "https://example.com",
    featured: true,
  },
];

export const clientLogos = seedClients.map((client) => client.name.toUpperCase());

export const faqs = [
  {
    question: "Can Dockside handle design-build execution?",
    answer:
      "Yes. Dockside supports design-build planning, structural coordination, vendor alignment and milestone governance.",
  },
  {
    question: "Can admins update projects without developers?",
    answer:
      "Yes. The CMS supports project CRUD, galleries, testimonials, SEO metadata and project status updates.",
  },
  {
    question: "Do you support residential and commercial work?",
    answer:
      "Yes. The services structure includes residential, commercial, industrial, renovation, interior, infrastructure, and electrical/structural work.",
  },
];

export const seedProjects: ProjectView[] = [
  {
    id: "seed-1",
    title: "Deepwater Logistics Yard & Berth Interface",
    slug: "deepwater-logistics-yard-berth-interface",
    clientName: "Apex Ports",
    clientLogo: null,
    featuredImage: industrialImages.hero,
    gallery: [industrialImages.hero, industrialImages.structure, industrialImages.site],
    location: "Kandla, Gujarat",
    scopeOfWork:
      "Civil works, berth-side pavement, drainage, utility trenches, crane rail foundations and commissioning support.",
    timeline: "18 months",
    projectValue: "INR 186 Cr",
    status: "COMPLETED",
    servicesUsed: ["Marine civil works", "Heavy-duty pavements", "MEP coordination"],
    industry: "Ports & logistics",
    summary:
      "A high-load logistics platform engineered for port-side container movement, all-weather drainage and phased commissioning.",
    body:
      "Dockside delivered a berth-adjacent logistics yard with a tightly sequenced execution plan that kept adjacent port operations live. The scope integrated reinforced pavements, utility corridors, fire water networks, equipment foundations and final commissioning documentation. The team used milestone-based quality gates, weekly interface reviews and digital progress controls to compress handover risk.",
    seoTitle: "Deepwater Logistics Yard Case Study",
    seoDescription:
      "Dockside Constructions port logistics yard and berth interface project in Gujarat.",
    featured: true,
    testimonial: {
      quote:
        "Dockside brought disciplined planning, transparent reporting and a strong safety culture to a very constrained port environment.",
      personName: "Rohan Mehta",
      designation: "Project Director",
      company: "Apex Ports",
    },
  },
  {
    id: "seed-2",
    title: "Precision Manufacturing Campus",
    slug: "precision-manufacturing-campus",
    clientName: "Orbit Steel",
    clientLogo: null,
    featuredImage: industrialImages.structure,
    gallery: [industrialImages.structure, industrialImages.crane, industrialImages.safety],
    location: "Pune, Maharashtra",
    scopeOfWork:
      "Design-build industrial shell, structural steel, process foundations, utilities and administrative block.",
    timeline: "14 months",
    projectValue: "INR 94 Cr",
    status: "IN_PROGRESS",
    servicesUsed: ["Industrial buildings", "Structural steel", "Design-build"],
    industry: "Manufacturing",
    summary:
      "A precision manufacturing campus with high-bay production halls, process-ready floors and expansion-ready utilities.",
    body:
      "The campus is planned around high-bay production, flexible utility spines and future line expansion. Dockside manages structural detailing, procurement, vendor coordination and safety-led execution under a single program office.",
    seoTitle: "Precision Manufacturing Campus",
    seoDescription:
      "Industrial construction case study for a manufacturing campus by Dockside Constructions.",
    featured: true,
    testimonial: {
      quote:
        "Their engineering coordination helped us freeze design decisions faster and protect the construction schedule.",
      personName: "Ananya Rao",
      designation: "Head of Projects",
      company: "Orbit Steel",
    },
  },
  {
    id: "seed-3",
    title: "Regional Cold Chain Distribution Hub",
    slug: "regional-cold-chain-distribution-hub",
    clientName: "Nexus Logistics",
    clientLogo: null,
    featuredImage: industrialImages.site,
    gallery: [industrialImages.site, industrialImages.hero, industrialImages.crane],
    location: "Chennai, Tamil Nadu",
    scopeOfWork:
      "Warehouse shell, insulated envelope coordination, MEP yards, loading bays, roads and stormwater systems.",
    timeline: "11 months",
    projectValue: "INR 72 Cr",
    status: "COMPLETED",
    servicesUsed: ["Warehousing", "MEP coordination", "Roads and yards"],
    industry: "Warehousing",
    summary:
      "A temperature-controlled distribution hub built for fast truck turnaround, resilient utilities and audit-ready safety systems.",
    body:
      "Dockside coordinated the civil, envelope and MEP interfaces for a cold-chain hub with aggressive operational-readiness dates. The final asset includes loading infrastructure, external circulation, equipment yards and operational support spaces.",
    seoTitle: "Cold Chain Distribution Hub Case Study",
    seoDescription:
      "Warehouse and logistics infrastructure project by Dockside Constructions.",
    featured: true,
    testimonial: null,
  },
];

export const seedPosts: PostView[] = [
  {
    id: "post-1",
    title: "How EPC Discipline Reduces Construction Risk",
    slug: "epc-discipline-reduces-construction-risk",
    excerpt:
      "A practical look at schedule governance, procurement controls and quality gates for industrial projects.",
    coverImage: industrialImages.crane,
    category: "Execution",
    body:
      "Risk drops when design decisions, procurement commitments and site execution are governed as one integrated system. Dockside uses stage gates, RFI discipline and live schedule reporting to keep projects moving with fewer surprises.",
  },
  {
    id: "post-2",
    title: "Designing Heavy-Duty Industrial Pavements",
    slug: "designing-heavy-duty-industrial-pavements",
    excerpt:
      "What owners should understand about load paths, drainage, joints and long-term maintenance.",
    coverImage: industrialImages.site,
    category: "Engineering",
    body:
      "Industrial pavements are production assets. Load assumptions, joint detailing and drainage strategy must be resolved before construction, not corrected after operations begin.",
  },
];
