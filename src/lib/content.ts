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
  highRise:
    "https://images.pexels.com/photos/18162494/pexels-photo-18162494.jpeg?auto=compress&cs=tinysrgb&w=1800",
  roadwork:
    "https://images.pexels.com/photos/4390530/pexels-photo-4390530.jpeg?auto=compress&cs=tinysrgb&w=1800",
  planning:
    "https://images.pexels.com/photos/3862384/pexels-photo-3862384.jpeg?auto=compress&cs=tinysrgb&w=1600",
  foundation:
    "https://images.pexels.com/photos/11580364/pexels-photo-11580364.jpeg?auto=compress&cs=tinysrgb&w=1800",
  concreteDetail:
    "https://images.pexels.com/photos/19216761/pexels-photo-19216761.jpeg?auto=compress&cs=tinysrgb&w=1600",
  warehouse:
    "https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=2000",
  logistics:
    "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1800",
  machinery:
    "https://images.pexels.com/photos/162568/oil-pump-jack-sunset-clouds-silhouette-162568.jpeg?auto=compress&cs=tinysrgb&w=1800",
  heroCinematic:
    "/dockside-hero-construction.png",
  aboutHero:
    "/hero-image/about.png",
  servicesHero:
    "/hero-image/services.png",
  projectsHero:
    "/hero-image/projects.png",
  testimonialsHero:
    "/hero-image/testimonials.png",
  careersHero:
    "/hero-image/careers.png",
  warehouseDusk:
    "https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=1800",
  logisticsAerial:
    "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1800",
  industrialCampus:
    "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1800",
  steelExecution:
    "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1800",
  interiors:
    "https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=1800",
  residential:
    "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1800",
};

export type ServiceCategory = {
  title: string;
  slug: string;
  image: string;
  description: string;
  overview: string;
  deliverables: string[];
  process: string[];
  benefits: string[];
  gallery: string[];
  proof: string;
  faqs: Array<{ question: string; answer: string }>;
};

export const serviceCategories = [
  {
    title: "Residential Construction",
    slug: "residential-construction",
    image: industrialImages.residential,
    description:
      "Custom homes, villas, residential developments, structural construction, renovations and site development.",
    overview:
      "Residential delivery is managed with the same engineering discipline Dockside applies to larger civil programs: verified drawings, dependable site supervision, material controls and clean handover documentation.",
    deliverables: [
      "Custom homes and villas",
      "Residential developments",
      "Structural construction",
      "Renovation and site development",
    ],
    process: [
      "Site review, scope definition and budget alignment",
      "Design coordination, approvals and construction planning",
      "Foundation, structural and civil execution with QA checks",
      "Finishes, services coordination and owner-ready handover",
    ],
    benefits: [
      "Experienced engineering supervision",
      "Clear cost and schedule visibility",
      "Quality-led structural and finishing standards",
      "Reliable closeout documentation",
    ],
    gallery: [industrialImages.residential, industrialImages.foundation, industrialImages.planning],
    proof:
      "Suited for residential clients who want professional controls, documented execution and a construction process that stays organized from site start to handover.",
    faqs: [
      {
        question: "Can Dockside handle villas and custom homes?",
        answer:
          "Yes. Dockside supports villas, custom homes, residential developments, structural construction, renovations and site development scopes.",
      },
      {
        question: "Can the team coordinate design and site execution?",
        answer:
          "Yes. The team can work with drawings, consultants, approvals and site milestones so construction stays aligned with the approved scope.",
      },
    ],
  },
  {
    title: "Commercial Construction",
    slug: "commercial-construction",
    image: industrialImages.industrialCampus,
    description:
      "Office buildings, retail developments, commercial complexes, mixed-use developments and business infrastructure.",
    overview:
      "Commercial projects need controlled sequencing, practical coordination and a clear path from shell works to operating-ready spaces. Dockside supports business infrastructure with disciplined planning and milestone governance.",
    deliverables: [
      "Office and retail buildings",
      "Commercial complexes",
      "Mixed-use developments",
      "Campus infrastructure support",
    ],
    process: [
      "Commercial brief, usage study and constructability review",
      "Quantity, procurement and milestone planning",
      "Civil, structural and utility coordination",
      "Inspection, snag closure and operational handover",
    ],
    benefits: [
      "Reduced coordination friction across vendors",
      "Execution aligned to business opening timelines",
      "Professional reporting for owners and consultants",
      "Durable civil and utility outcomes",
    ],
    gallery: [industrialImages.industrialCampus, industrialImages.highRise, industrialImages.planning],
    proof:
      "Relevant to commercial campuses such as Chennai One IT SEZ, where survey-led site development and large-format preparation require precision.",
    faqs: [
      {
        question: "Can Dockside support commercial campus works?",
        answer:
          "Yes. Dockside executes commercial campus development, site preparation, civil works and infrastructure support for business environments.",
      },
      {
        question: "Do you work with consultants and owner-side project teams?",
        answer:
          "Yes. Dockside is structured to coordinate with consultants, client-side project teams, vendors and approval stakeholders.",
      },
    ],
  },
  {
    title: "Industrial Construction",
    slug: "industrial-construction",
    image: industrialImages.warehouse,
    description:
      "Factories, warehouses, PEB structures, logistics infrastructure, industrial campuses, utility buildings and process-support facilities.",
    overview:
      "Industrial construction is Dockside's strongest positioning: repeat execution across active facilities, logistics assets and production-support buildings where safety, quality and uptime matter.",
    deliverables: [
      "Factories, warehouses and utility buildings",
      "PEB and structural coordination",
      "RCC structures and industrial utilities",
      "Logistics and process-support infrastructure",
    ],
    process: [
      "Engineering review, site constraints and utility mapping",
      "Method statements, safety controls and procurement planning",
      "Civil, structural, RCC, utility and MEP interface execution",
      "QA records, testing support and phased handover",
    ],
    benefits: [
      "Experience inside active industrial environments",
      "Strong civil, structural and utility coordination",
      "Safety-focused execution culture",
      "Handover discipline for long-term facility reliability",
    ],
    gallery: [industrialImages.warehouse, industrialImages.steelExecution, industrialImages.logistics],
    proof:
      "Seen across Whirlpool repeat works, Lodha Industrial Park, Adani Logistics and industrial utility scopes that require disciplined field coordination.",
    faqs: [
      {
        question: "Can Dockside work inside active industrial facilities?",
        answer:
          "Yes. The company has experience with active production-support environments, renovations, utilities and civil-electrical interfaces.",
      },
      {
        question: "Do you handle large-format site development?",
        answer:
          "Yes. Dockside supports land grading, earthwork, site development, drainage, RCC and structural scopes for industrial campuses.",
      },
    ],
  },
  {
    title: "Renovation Services",
    slug: "renovation-services",
    image: industrialImages.concreteDetail,
    description:
      "Building modernization, structural upgrades, industrial renovations, facility improvements and refurbishment projects.",
    overview:
      "Renovation work demands controlled intervention, practical sequencing and safe execution around existing operations. Dockside upgrades facilities without treating refurbishment as secondary work.",
    deliverables: [
      "Building modernization",
      "Structural upgrades",
      "Industrial renovations",
      "Facility improvements and refurbishment",
    ],
    process: [
      "Existing-condition assessment and risk review",
      "Phased execution plan for active or constrained sites",
      "Civil, structural, services and finishing upgrades",
      "Closeout inspection and operational handback",
    ],
    benefits: [
      "Useful for active facilities and production-support spaces",
      "Practical site controls around ongoing operations",
      "Improved durability, safety and space performance",
      "Clear documentation for completed upgrades",
    ],
    gallery: [industrialImages.concreteDetail, industrialImages.site, industrialImages.safety],
    proof:
      "Aligned with repeat industrial works involving reliability labs, packaging labs, fire hydrant interfaces, mezzanine floors and facility improvements.",
    faqs: [
      {
        question: "Can renovations be phased around operations?",
        answer:
          "Yes. Dockside can sequence renovation scopes around existing facility constraints, access requirements and safety controls.",
      },
      {
        question: "Do you handle structural upgrade work?",
        answer:
          "Yes. Structural upgrades, RCC works, civil improvements and utility interfaces can be planned as part of renovation programs.",
      },
    ],
  },
  {
    title: "Interior Solutions",
    slug: "interior-solutions",
    image: industrialImages.interiors,
    description:
      "Commercial interiors, industrial workspace interiors, office fit-outs and functional design implementation.",
    overview:
      "Interior delivery at Dockside is treated as functional infrastructure: planned around workflow, safety, maintainability and long-term usability rather than surface styling alone.",
    deliverables: [
      "Commercial interiors",
      "Industrial workspace interiors",
      "Office fit-outs",
      "Functional design implementation",
    ],
    process: [
      "Space brief, user requirements and layout coordination",
      "Material, services and execution planning",
      "Fit-out, finishing and utility interface delivery",
      "Snag closure, documentation and operational handover",
    ],
    benefits: [
      "Function-first workplace outcomes",
      "Civil and services coordination under one delivery lens",
      "Professional fit-out execution for business environments",
      "Clean closeout for immediate occupation",
    ],
    gallery: [industrialImages.interiors, industrialImages.planning, industrialImages.highRise],
    proof:
      "Supports office fit-outs, industrial workspace improvements and functional interiors for clients who need reliable occupancy outcomes.",
    faqs: [
      {
        question: "Can Dockside manage office fit-outs?",
        answer:
          "Yes. Dockside supports commercial interiors, office fit-outs and functional workspace implementation.",
      },
      {
        question: "Are interiors coordinated with civil and utility works?",
        answer:
          "Yes. Interior scopes can be coordinated with civil, services and facility requirements so the space is ready for use.",
      },
    ],
  },
] satisfies ServiceCategory[];

export const technicalCapabilities = [
  "Roads & Highways",
  "Railway Infrastructure",
  "Water Infrastructure",
  "Storm Water Drainage",
  "Utility Development",
  "HT/LT Electrical Works",
  "Fire Hydrant Systems",
  "Site Development",
  "Land Grading",
  "RCC Structures",
  "Structural Works",
  "Industrial Utilities",
  "Traffic Safety Systems",
];

export const services = serviceCategories.map((service) => service.title);

export const industries = [
  "Industrial manufacturing",
  "Commercial campuses",
  "Residential developments",
  "Logistics parks",
  "Warehousing",
  "Public infrastructure",
  "Government infrastructure",
  "Institutional infrastructure",
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
    question: "Can Dockside support large industrial and infrastructure scopes?",
    answer:
      "Yes. Dockside is positioned for industrial, commercial and public-sector construction, including civil works, utilities, site development, RCC, structural works, drainage and facility upgrades.",
  },
  {
    question: "Can admins update website content without developers?",
    answer:
      "Yes. The admin panel supports project CRUD, clients, testimonials, insights, SEO and editable page content for the public site.",
  },
  {
    question: "Which ISO systems does Dockside operate under?",
    answer:
      "Dockside operates under ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018 management systems for quality, environmental responsibility and occupational health and safety.",
  },
  {
    question: "Which core services are offered?",
    answer:
      "The core service lines are Residential Construction, Commercial Construction, Industrial Construction, Renovation Services and Interior Solutions.",
  },
];

export const seedProjects: ProjectView[] = [
  {
    id: "seed-1",
    title: "Whirlpool Industrial Works Program",
    slug: "whirlpool-industrial-works-program",
    clientName: "Whirlpool of India Ltd",
    clientLogo: null,
    featuredImage: industrialImages.warehouseDusk,
    gallery: [industrialImages.warehouseDusk, industrialImages.structure, industrialImages.site],
    location: "Puducherry",
    scopeOfWork:
      "Warehouse and packaging lab construction, reliability lab renovation, fire hydrant pipeline work, mezzanine floor construction, civil, electrical and interior works.",
    timeline: "20+ works completed in the last 5 years",
    projectValue: "INR 400+ Lakhs",
    status: "COMPLETED",
    servicesUsed: ["Industrial Construction", "Renovation Services", "Interior Solutions", "Fire Hydrant Systems"],
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
    featuredImage: industrialImages.logisticsAerial,
    gallery: [industrialImages.logisticsAerial, industrialImages.crane, industrialImages.foundation],
    location: "Eichoor, Chennai",
    scopeOfWork:
      "Earthwork, land grading, material supply, site development and common area development works.",
    timeline: "Program delivery",
    projectValue: "INR 50+ Crores",
    status: "COMPLETED",
    servicesUsed: ["Industrial Construction", "Land Grading", "Site Development", "Utility Development"],
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
    featuredImage: industrialImages.steelExecution,
    gallery: [industrialImages.steelExecution, industrialImages.site, industrialImages.crane],
    location: "Malur, Karnataka",
    scopeOfWork:
      "Miscellaneous civil works, RCC works, drainage and structural works.",
    timeline: "Ongoing",
    projectValue: "INR 10 Crores",
    status: "IN_PROGRESS",
    servicesUsed: ["Industrial Construction", "RCC Structures", "Storm Water Drainage", "Structural Works"],
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
    featuredImage: industrialImages.industrialCampus,
    gallery: [industrialImages.industrialCampus, industrialImages.site, industrialImages.structure],
    location: "Mandra City Project, Chennai",
    scopeOfWork:
      "Large-scale land development, soil filling, site preparation, DGPS and survey works.",
    timeline: "Ongoing",
    projectValue: "INR 300+ Crores overall project value",
    status: "IN_PROGRESS",
    servicesUsed: ["Commercial Construction", "Site Development", "Land Grading", "Survey works"],
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
