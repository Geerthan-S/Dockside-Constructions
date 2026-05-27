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
    title: "Civil Construction",
    slug: "civil-construction",
    description:
      "Residential, commercial and industrial civil works executed with QA/QC controls, site supervision and disciplined handover documentation.",
  },
  {
    title: "Roads & Highways",
    slug: "roads-highways",
    description:
      "BT and CC roads, strengthening, renewal, grading, drainage integration and infrastructure development works.",
  },
  {
    title: "Railway Works",
    slug: "railway-works",
    description:
      "Railway siding and related infrastructure support for industrial campuses and logistics-linked developments.",
  },
  {
    title: "Electrical Works",
    slug: "electrical-works",
    description:
      "HT/LT installations, electrical utilities, fire hydrant pipeline interfaces and coordinated MEP execution.",
  },
  {
    title: "Industrial Projects",
    slug: "industrial-projects",
    description:
      "Warehouses, factories, PEB structures, mezzanine floors, hazardous storage sheds, renovations and process-ready buildings.",
  },
  {
    title: "Water Infrastructure & Drainage",
    slug: "water-infrastructure-drainage",
    description:
      "Storm water drains, culverts, drainage systems, water management works and allied civil infrastructure.",
  },
  {
    title: "Road Safety & Traffic Systems",
    slug: "road-safety-traffic-systems",
    description:
      "Supply and installation of road safety equipment, signage, barriers, road markings and traffic control solutions.",
  },
];

export const services = serviceCategories.map((service) => service.title);

export const industries = [
  "Industrial manufacturing",
  "Public works",
  "Road infrastructure",
  "Manufacturing",
  "Warehousing",
  "Logistics parks",
  "Commercial campuses",
  "Government infrastructure",
];

export const certifications = [
  "ISO 9001:2015 Quality Management System - Certificate QT-56856/1025",
  "ISO 14001:2015 Environmental Management System - Certificate ET-56857/1025",
  "ISO 45001:2018 Occupational Health & Safety Management System - Certificate HT-56858/1025",
  "Scope includes roads, buildings, interior designing, project management consultancy, plumbing, piping, electrification, GIS mapping, survey, fabrication, earth moving, structural and piling engineering works.",
];

export const seedClients: ClientView[] = [
  {
    id: "client-1",
    name: "Whirlpool of India Ltd",
    slug: "whirlpool-of-india",
    industry: "Industrial manufacturing",
    testimonial:
      "20+ executed works covering warehouse, packaging lab, reliability lab, fire hydrant pipeline, mezzanine, civil, electrical and interior scopes.",
    featured: true,
  },
  {
    id: "client-2",
    name: "Public Works Department, Puducherry",
    slug: "pwd-puducherry",
    industry: "Public infrastructure",
    testimonial:
      "15+ works across road strengthening, renewal, BT and CC road formation, drainage and infrastructure works.",
    featured: true,
  },
  {
    id: "client-3",
    name: "Lodha Industrial Park",
    slug: "lodha-industrial-park",
    industry: "Logistics parks",
    featured: true,
  },
  {
    id: "client-4",
    name: "Adani Logistics Limited",
    slug: "adani-logistics-limited",
    industry: "Logistics",
    featured: true,
  },
  {
    id: "client-5",
    name: "Chennai One IT SEZ",
    slug: "chennai-one-it-sez",
    industry: "Commercial campus",
    featured: true,
  },
  {
    id: "client-6",
    name: "Anabond Limited",
    slug: "anabond-limited",
    industry: "Industrial manufacturing",
    featured: true,
  },
  {
    id: "client-7",
    name: "Akshaya Patra Foundation",
    slug: "akshaya-patra-foundation",
    industry: "Institutional infrastructure",
    featured: true,
  },
  {
    id: "client-8",
    name: "Godrej Consumer Products Ltd",
    slug: "godrej-consumer-products",
    industry: "FMCG manufacturing",
    featured: true,
  },
];

export const clientLogos = seedClients.map((client) => client.name.toUpperCase());

export const faqs = [
  {
    question: "Can Dockside handle design-build execution?",
    answer:
      "Yes. Dockside supports architectural design, project management consultancy, structural coordination, vendor alignment and milestone governance.",
  },
  {
    question: "Can admins update projects without developers?",
    answer:
      "Yes. The CMS supports project CRUD, galleries, testimonials, SEO metadata and project status updates.",
  },
  {
    question: "Do you support residential and commercial work?",
    answer:
      "Yes. DCPL executes civil construction, industrial projects, road works, electrical utilities, drainage and public infrastructure scopes.",
  },
];

export const seedProjects: ProjectView[] = [
  {
    id: "seed-1",
    title: "Whirlpool Industrial Works Program",
    slug: "whirlpool-industrial-works-program",
    clientName: "Whirlpool of India Ltd",
    clientLogo: null,
    featuredImage: industrialImages.hero,
    gallery: [industrialImages.hero, industrialImages.structure, industrialImages.site],
    location: "Puducherry",
    scopeOfWork:
      "Warehouse and packaging lab construction, reliability lab renovation, fire hydrant pipeline work, mezzanine floor construction, civil, electrical and interior works.",
    timeline: "20+ works completed in the last 5 years",
    projectValue: "INR 400+ Lakhs",
    status: "COMPLETED",
    servicesUsed: ["Industrial projects", "Civil construction", "Electrical works", "Interior works"],
    industry: "Industrial manufacturing",
    summary:
      "A multi-scope industrial execution program covering production support buildings, renovation, utilities and civil-electrical works.",
    body:
      "Dockside executed more than 20 works for Whirlpool of India Ltd in Puducherry, including warehouse and packaging lab construction, reliability lab renovation, fire hydrant pipeline work, mezzanine floor construction and coordinated civil, electrical and interior scopes. The program reflects DCPL's ability to work inside active industrial environments with quality controls and timely execution.",
    seoTitle: "Whirlpool Puducherry Industrial Works",
    seoDescription:
      "Dockside Constructions industrial works program for Whirlpool of India Ltd in Puducherry.",
    featured: true,
    testimonial: {
      quote:
        "DCPL's repeat industrial works show reliable site discipline, coordinated execution and practical engineering management.",
      personName: "Client Project Team",
      designation: "Industrial Works",
      company: "Whirlpool of India Ltd",
    },
  },
  {
    id: "seed-2",
    title: "Lodha Industrial Park - Chennai",
    slug: "lodha-industrial-park-chennai",
    clientName: "Lodha Industrial Park",
    clientLogo: null,
    featuredImage: industrialImages.structure,
    gallery: [industrialImages.structure, industrialImages.crane, industrialImages.safety],
    location: "Eichoor, Chennai",
    scopeOfWork:
      "Earthwork, land grading, material supply, site development and common area development works.",
    timeline: "Program delivery",
    projectValue: "INR 50+ Crores",
    status: "COMPLETED",
    servicesUsed: ["Earthwork", "Land grading", "Site development", "Infrastructure works"],
    industry: "Logistics parks",
    summary:
      "Large-format industrial park development with land grading, site development and common infrastructure scope.",
    body:
      "For Lodha Industrial Park at Eichoor, Chennai, DCPL handled earthwork, land grading, material supply, site development and common area development works. The project showcases large-scale site execution capability for logistics and industrial park environments.",
    seoTitle: "Lodha Industrial Park Chennai Case Study",
    seoDescription:
      "Earthwork, land grading and site development works by Dockside Constructions at Lodha Industrial Park Chennai.",
    featured: true,
    testimonial: {
      quote:
        "The works required reliable equipment deployment, grading discipline and common infrastructure coordination at scale.",
      personName: "Project Controls Team",
      designation: "Industrial Park Development",
      company: "Lodha Industrial Park",
    },
  },
  {
    id: "seed-3",
    title: "Adani Logistics Civil & Structural Works",
    slug: "adani-logistics-civil-structural-works",
    clientName: "Adani Logistics Limited",
    clientLogo: null,
    featuredImage: industrialImages.site,
    gallery: [industrialImages.site, industrialImages.hero, industrialImages.crane],
    location: "Malur, Karnataka",
    scopeOfWork:
      "Miscellaneous civil works, RCC works, drainage and structural works.",
    timeline: "Ongoing",
    projectValue: "INR 10 Crores",
    status: "IN_PROGRESS",
    servicesUsed: ["Civil construction", "RCC works", "Drainage", "Structural works"],
    industry: "Logistics",
    summary:
      "Ongoing civil, RCC, drainage and structural works for logistics infrastructure in Karnataka.",
    body:
      "DCPL's Adani Logistics scope at Malur, Karnataka includes miscellaneous civil works, RCC works, drainage and structural works. The ongoing project demonstrates Dockside's ability to coordinate high-utility industrial logistics infrastructure with active project controls.",
    seoTitle: "Adani Logistics Malur Civil Works",
    seoDescription:
      "Ongoing civil, RCC, drainage and structural works by Dockside Constructions for Adani Logistics Limited in Malur, Karnataka.",
    featured: true,
    testimonial: null,
  },
  {
    id: "seed-4",
    title: "Chennai One IT SEZ Land Development",
    slug: "chennai-one-it-sez-land-development",
    clientName: "Chennai One IT SEZ",
    clientLogo: null,
    featuredImage: industrialImages.crane,
    gallery: [industrialImages.crane, industrialImages.site, industrialImages.structure],
    location: "Mandra City Project, Chennai",
    scopeOfWork:
      "Large-scale land development, soil filling, site preparation, DGPS and survey works.",
    timeline: "Ongoing",
    projectValue: "INR 300+ Crores overall project value",
    status: "IN_PROGRESS",
    servicesUsed: ["Land development", "Soil filling", "Survey works", "Site preparation"],
    industry: "Commercial campus",
    summary:
      "Large-scale campus land development and site preparation scope for a major Chennai commercial development.",
    body:
      "At Chennai One IT SEZ's Mandra City Project, DCPL supports large-scale land development, soil filling, site preparation, DGPS and survey works. The project highlights Dockside's capacity to bring survey-led precision and execution discipline to early-stage campus infrastructure.",
    seoTitle: "Chennai One IT SEZ Land Development",
    seoDescription:
      "Land development, soil filling, DGPS and survey works by Dockside Constructions for Chennai One IT SEZ.",
    featured: true,
    testimonial: null,
  },
];

export const seedPosts: PostView[] = [
  {
    id: "post-1",
    title: "How Execution Excellence Defines DCPL Projects",
    slug: "execution-excellence-defines-dcpl-projects",
    excerpt:
      "Precision, planning and performance-driven processes are the operating principles behind every Dockside project.",
    coverImage: industrialImages.crane,
    category: "Company Values",
    body:
      "Execution defines reputation. Dockside Constructions Private Limited combines technical expertise, practical site planning, quality gates and transparent coordination to deliver construction outcomes with reliability and accountability.",
  },
  {
    id: "post-2",
    title: "What Industrial Owners Should Expect From Civil Works",
    slug: "industrial-owners-civil-works-expectations",
    excerpt:
      "Industrial civil work is not only structure. It includes utilities, drainage, safety, maintenance access and long-term durability.",
    coverImage: industrialImages.site,
    category: "Engineering",
    body:
      "Industrial facilities require coordinated civil works, electrical interfaces, fire hydrant lines, mezzanine floors, structural works, drainage and handover documentation. DCPL's profile reflects repeat industrial execution across Whirlpool, Anabond, Godrej and logistics-led clients.",
  },
  {
    id: "post-3",
    title: "Building With Quality, Safety and Sustainability",
    slug: "quality-safety-sustainability-construction",
    excerpt:
      "DCPL's ISO systems align quality management, environmental responsibility and occupational health and safety.",
    coverImage: industrialImages.safety,
    category: "Safety",
    body:
      "Dockside Constructions operates with ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018 management systems. The company's mission emphasizes uncompromising quality, safety, efficiency, advanced construction practices and responsible infrastructure growth.",
  },
];
