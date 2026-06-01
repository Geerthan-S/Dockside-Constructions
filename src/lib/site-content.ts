import {
  certifications,
  faqs,
  industrialImages,
  industries,
  serviceCategories,
  technicalCapabilities,
} from "@/lib/content";

export type SitePageItem = {
  title: string;
  text?: string;
  meta?: string;
  href?: string;
  image?: string;
  items?: string[];
};

export type SitePageSection = {
  id: string;
  label: string;
  heading: string;
  body?: string;
  layout?: "grid" | "split" | "timeline" | "gallery" | "faq" | "cta" | "list";
  media?: string;
  items?: SitePageItem[];
  faqs?: Array<{ question: string; answer: string }>;
  cta?: {
    label: string;
    href: string;
  };
};

export type EditableSitePage = {
  slug: string;
  title: string;
  description: string;
  heroTitle: string;
  heroDescription: string;
  heroImage: string;
  sections: SitePageSection[];
  published: boolean;
};

export function serviceDetailPageSlug(serviceSlug: string) {
  return `service-${serviceSlug}`;
}

const serviceSectionItems = serviceCategories.map((service) => ({
  title: service.title,
  text: service.description,
  href: `/services/${service.slug}`,
  image: service.image,
  items: service.deliverables.slice(0, 3),
}));

const defaultTopLevelPages: EditableSitePage[] = [
  {
    slug: "home",
    title: "Home",
    description:
      "Premium enterprise homepage for Dockside Constructions Private Limited.",
    heroTitle: "Engineering-Led Infrastructure|Delivered With Discipline",
    heroDescription:
      "Dockside Constructions Private Limited delivers industrial, commercial, residential and public-sector projects with disciplined planning, safety-led execution and long-term reliability.",
    heroImage: industrialImages.heroCinematic,
    published: true,
    sections: [
      {
        id: "company-introduction",
        label: "Company Introduction",
        heading: "An infrastructure company built around control, clarity and execution discipline.",
        body:
          "Dockside Constructions Private Limited is based in Tamil Nadu, India, and serves corporate clients, industrial organizations, logistics operators, infrastructure developers and government bodies. The company combines engineering leadership, trained site teams and ISO-certified systems to deliver dependable construction outcomes.",
        layout: "split",
        media: industrialImages.site,
        items: [
          {
            title: "Engineering leadership",
            text: "Project planning, quantities, drawings and field coordination are handled through experienced technical supervision.",
          },
          {
            title: "Execution reliability",
            text: "Civil, structural, utility and fit-out scopes are sequenced around safety, QA and milestone visibility.",
          },
          {
            title: "Documented delivery",
            text: "Handover is supported by inspections, records, closeout discipline and client-ready communication.",
          },
        ],
      },
      {
        id: "core-services-overview",
        label: "Core Services Overview",
        heading: "Five core service lines supported by broader technical infrastructure capabilities.",
        body:
          "The public website surfaces the five core services clearly, while technical capabilities such as roads, drainage, utilities, RCC and structural works remain visible for enterprise buyers.",
        layout: "grid",
        items: serviceSectionItems,
      },
      {
        id: "why-choose-us",
        label: "Why Choose Us",
        heading: "Why Dockside is suited to serious construction and infrastructure work.",
        body:
          "The brand should feel organized, technically competent and capable of handling scale. These proof points help visitors understand the operating standards behind the work.",
        layout: "grid",
        items: [
          {
            title: "Industrial construction expertise",
            text: "Repeat execution in production-support, logistics and industrial environments.",
          },
          {
            title: "ISO-certified systems",
            text: "Quality, environmental and occupational safety systems are embedded into the company profile.",
          },
          {
            title: "Public infrastructure experience",
            text: "Road, drainage, site development and government-facing works demonstrate execution range.",
          },
          {
            title: "Safety-focused culture",
            text: "Work is planned around site discipline, risk controls and responsible handover.",
          },
        ],
      },
      {
        id: "faqs",
        label: "FAQs",
        heading: "Common questions before engaging Dockside.",
        layout: "faq",
        faqs,
      },
      {
        id: "get-a-quote-cta",
        label: "Get a Quote CTA",
        heading: "Share your scope and get routed to the right technical team.",
        body:
          "Use the quote form to submit project type, service need, budget range, site location and supporting documents or links.",
        layout: "cta",
        media: industrialImages.crane,
        cta: { label: "Request a quote", href: "/get-quote" },
      },
    ],
  },
  {
    slug: "about",
    title: "About",
    description:
      "Company overview, story, leadership, values, certifications and industries served.",
    heroTitle: "A Professionally Driven Infrastructure Company",
    heroDescription:
      "Dockside delivers engineering, industrial, commercial, residential and public infrastructure projects with quality, safety, reliability and precision.",
    heroImage: industrialImages.aboutHero,
    published: true,
    sections: [
      {
        id: "company-overview",
        label: "Company Overview",
        heading: "Dockside Constructions Private Limited operates as an engineering-led infrastructure partner.",
        body:
          "The company is based in Tamil Nadu and serves corporate clients, industrial organizations, logistics operators, infrastructure developers and government bodies. Its work spans civil, structural, site development, utilities, interiors and public infrastructure scopes.",
        layout: "split",
        media: industrialImages.planning,
        items: [
          { title: "Quality", text: "QA-led construction controls and inspection discipline." },
          { title: "Safety", text: "Occupational health and safety practices aligned with ISO systems." },
          { title: "Reliability", text: "Timely execution, accountable coordination and owner-ready handover." },
        ],
      },
      {
        id: "our-story",
        label: "Our Story",
        heading: "Built through repeat execution across industrial, logistics and public-sector environments.",
        body:
          "Dockside's reputation is shaped by practical execution: repeat industrial works, large-format land development, civil and structural programs and infrastructure support for high-accountability clients.",
        layout: "split",
        media: industrialImages.foundation,
      },
      {
        id: "vision-mission",
        label: "Vision & Mission",
        heading: "A clear direction for responsible infrastructure delivery.",
        layout: "grid",
        items: [
          {
            title: "Vision",
            text:
              "To be a benchmark-driven infrastructure company delivering world-class construction solutions and contributing to national growth through innovation, precision and sustainable development.",
          },
          {
            title: "Mission",
            text:
              "To deliver projects with uncompromising quality, safety and efficiency while creating long-term client value and empowering the workforce.",
          },
        ],
      },
      {
        id: "core-values",
        label: "Core Values",
        heading: "The operating principles behind Dockside's delivery culture.",
        layout: "grid",
        items: [
          { title: "Discipline", text: "Plan clearly, coordinate responsibly and document what matters." },
          { title: "Precision", text: "Respect drawings, quantities, sequencing and technical standards." },
          { title: "Accountability", text: "Keep clients informed and own delivery commitments." },
          { title: "Sustainability", text: "Build with environmental responsibility and long-term asset value in mind." },
        ],
      },
      {
        id: "leadership-team",
        label: "Leadership Team",
        heading: "Leadership across company direction, engineering, projects and strategy.",
        layout: "grid",
        items: [
          {
            title: "Ms. Kalaimakalle Alice",
            meta: "Managing Director",
            text:
              "Drives quality, growth and operational excellence with a focus on client satisfaction and long-term value creation.",
          },
          {
            title: "Ms. Viviya Reddy",
            meta: "Director - Technical",
            text:
              "Civil engineering professional focused on project execution, design coordination and engineering management.",
          },
          {
            title: "Mr. Sravan Reddy",
            meta: "Director - Projects",
            text:
              "Construction professional focused on execution, project management, cost optimization and timely delivery.",
          },
          {
            title: "Mr. R. Senthamizhselvan",
            meta: "Director - Engineering & Strategy",
            text:
              "Structural engineering and infrastructure development professional guiding technical decisions and growth.",
          },
        ],
      },
      {
        id: "certifications",
        label: "Certifications",
        heading: "ISO-certified systems for quality, environment and occupational safety.",
        layout: "list",
        items: certifications.map((item) => ({ title: item })),
      },
      {
        id: "industries-we-serve",
        label: "Industries We Serve",
        heading: "Sectors that require organized construction delivery.",
        layout: "grid",
        items: industries.map((industry) => ({ title: industry })),
      },
      {
        id: "why-dockside",
        label: "Why Dockside",
        heading: "A serious construction company for buyers who value preparation and accountable field execution.",
        body:
          "Dockside communicates scale, credibility and technical competence without leaning on generic construction promises. The emphasis is practical: quality gates, safe work, reliable handover and professional coordination.",
        layout: "cta",
        media: industrialImages.site,
        cta: { label: "Discuss a project", href: "/contact" },
      },
    ],
  },
  {
    slug: "services",
    title: "Services",
    description:
      "Core services and technical capabilities for residential, commercial, industrial, renovation and interior work.",
    heroTitle: "Core Construction Services From Planning To Handover",
    heroDescription:
      "Residential, commercial, industrial, renovation and interior solutions backed by technical capabilities in roads, utilities, RCC, structural works, drainage and site development.",
    heroImage: industrialImages.servicesHero,
    published: true,
    sections: [
      {
        id: "service-selection",
        label: "Service Selection",
        heading: "Choose the service line that matches your project context.",
        body:
          "Each service page includes an overview, process, benefits, gallery and FAQs so visitors can understand the scope before contacting Dockside.",
        layout: "grid",
        items: serviceSectionItems,
      },
      {
        id: "technical-capabilities",
        label: "Additional Technical Capabilities",
        heading: "Technical capabilities that support complex construction programs.",
        layout: "grid",
        items: technicalCapabilities.map((item) => ({ title: item })),
      },
    ],
  },
  {
    slug: "projects",
    title: "Projects",
    description:
      "Portfolio overview, project categories, gallery, case studies and client success stories.",
    heroTitle: "Project Proof Across Industrial, Commercial And Infrastructure Work",
    heroDescription:
      "Selected programs for Whirlpool, Lodha Industrial Park, Adani Logistics, Chennai One IT SEZ and public infrastructure clients.",
    heroImage: industrialImages.projectsHero,
    published: true,
    sections: [
      {
        id: "portfolio-overview",
        label: "Portfolio Overview",
        heading: "A portfolio shaped by repeat industrial works and large-format site development.",
        body:
          "The project library highlights execution across active facilities, logistics assets, commercial campus development, public works and civil infrastructure.",
        layout: "split",
        media: industrialImages.logisticsAerial,
      },
      {
        id: "project-categories",
        label: "Project Categories",
        heading: "Projects organized for buyers who scan by sector and scope.",
        layout: "grid",
        items: [
          { title: "Residential Projects", text: "Homes, villas, developments and renovation-led residential scopes." },
          { title: "Commercial Projects", text: "Campuses, offices, business infrastructure and mixed-use environments." },
          { title: "Industrial Projects", text: "Warehouses, factories, utilities, RCC, logistics and facility works." },
          { title: "Project Gallery", text: "Visual proof from land development, structure, utility and site work." },
          { title: "Project Case Studies", text: "Deeper context on scope, value, timeline and execution outcomes." },
          { title: "Client Success Stories", text: "Repeat work and client-side delivery confidence across sectors." },
        ],
      },
    ],
  },
  {
    slug: "testimonials",
    title: "Testimonials",
    description:
      "Client testimonials, delivery confidence notes and project-linked feedback.",
    heroTitle: "Client Confidence Connected To Real Project Delivery",
    heroDescription:
      "Client feedback, repeat-work proof and project-linked confidence notes from Dockside delivery programs.",
    heroImage: industrialImages.testimonialsHero,
    published: true,
    sections: [
      {
        id: "testimonial-context",
        label: "Client Testimonials",
        heading: "Feedback should prove confidence, not just praise.",
        body:
          "The testimonial page is structured around delivery confidence: project association, client role, sector context and the operating discipline Dockside brought to site.",
        layout: "grid",
        items: [
          {
            title: "Project-linked feedback",
            text: "Client notes connect back to real scopes such as Whirlpool, Lodha Industrial Park and logistics infrastructure works.",
          },
          {
            title: "Delivery credibility",
            text: "The page emphasizes execution quality, coordination, site discipline and practical reliability.",
          },
          {
            title: "CMS managed",
            text: "Admin users can create and publish testimonials through the Testimonials panel.",
          },
          {
            title: "Useful for conversion",
            text: "Testimonials sit before inquiry decisions and support confidence for quote and contact flows.",
          },
        ],
      },
      {
        id: "testimonial-guidelines",
        label: "Content Guidance",
        heading: "What a strong Dockside testimonial should include.",
        layout: "list",
        items: [
          { title: "Client or project-side designation" },
          { title: "Relevant company or sector context" },
          { title: "Specific delivery quality, coordination or safety proof" },
          { title: "Optional project association for case-study linking" },
        ],
      },
    ],
  },
  {
    slug: "careers",
    title: "Careers",
    description:
      "Why join Dockside, work culture, current openings, internships and apply now.",
    heroTitle: "Careers For People Who Respect The Craft Of Construction",
    heroDescription:
      "Dockside hires site engineers, planners, safety professionals, project managers and commercial specialists for serious construction delivery.",
    heroImage: industrialImages.careersHero,
    published: true,
    sections: [
      {
        id: "why-join-us",
        label: "Why Join Us",
        heading: "Join a company where site discipline and technical ownership matter.",
        body:
          "Dockside is suited to professionals who want exposure to industrial, commercial and public infrastructure projects with clear accountability and practical field learning.",
        layout: "grid",
        items: [
          { title: "Meaningful project exposure", text: "Work across civil, structural, utility, renovation and infrastructure environments." },
          { title: "Learning from experienced teams", text: "Develop under engineering, project and safety leadership." },
          { title: "Quality and safety culture", text: "Operate inside systems that value preparation and responsible delivery." },
        ],
      },
      {
        id: "work-culture",
        label: "Work Culture",
        heading: "A practical, accountable and field-aware work environment.",
        layout: "grid",
        items: [
          { title: "Site discipline", text: "Clear responsibilities, reporting and milestone awareness." },
          { title: "Team coordination", text: "Collaboration between engineering, procurement, safety and execution teams." },
          { title: "Growth orientation", text: "Opportunities to learn through real site conditions and client requirements." },
        ],
      },
      {
        id: "current-openings",
        label: "Current Openings",
        heading: "Roles currently useful to Dockside's project delivery engine.",
        layout: "list",
        items: [
          { title: "Project Manager - Industrial Civil" },
          { title: "Planning Engineer" },
          { title: "Safety Officer" },
          { title: "QA/QC Engineer" },
        ],
      },
      {
        id: "internship-opportunities",
        label: "Internship Opportunities",
        heading: "Internships for engineering and construction management learners.",
        body:
          "Students and early-career professionals can apply for site exposure, planning support, documentation and project coordination opportunities.",
        layout: "cta",
        media: industrialImages.planning,
        cta: { label: "Apply now", href: "/contact" },
      },
    ],
  },
  {
    slug: "contact",
    title: "Contact",
    description:
      "Contact form, phone number, email, office location, maps, social links and WhatsApp.",
    heroTitle: "Speak With Dockside About Your Next Project",
    heroDescription:
      "Connect with DCPL for residential, commercial, industrial, renovation, interior, infrastructure and project management inquiries.",
    heroImage: industrialImages.hero,
    published: true,
    sections: [
      {
        id: "office-information",
        label: "Office Location",
        heading: "Registered office and direct contact channels.",
        body: "No.56, V.G.P. Nagar East, Salamedu, Villupuram - 605401",
        layout: "grid",
        items: [
          { title: "Phone Number", text: "+91 89259 22737", href: "tel:+918925922737" },
          { title: "Email Address", text: "admin@docksideconstructions.com", href: "mailto:admin@docksideconstructions.com" },
          { title: "WhatsApp Chat", text: "+91 89259 22737", href: "https://wa.me/918925922737" },
          { title: "Google Maps", text: "Open Dockside's registered office location.", href: "https://www.google.com/maps/search/?api=1&query=No.56%20V.G.P.%20Nagar%20East%20Salamedu%20Villupuram%20605401" },
          { title: "Social Media Links", text: "LinkedIn and Instagram profiles can be added here from the admin panel." },
        ],
      },
    ],
  },
  {
    slug: "get-quote",
    title: "Get a Quote",
    description:
      "Project information form, service selection, budget range, site location, document links and request submission.",
    heroTitle: "Convert Your Scope Into An Execution-Ready Project Discussion",
    heroDescription:
      "Share service needs, budget range, site location, project details and supporting document links so Dockside can respond with the right technical and commercial next step.",
    heroImage: industrialImages.structure,
    published: true,
    sections: [
      {
        id: "quote-form-sections",
        label: "Get a Quote",
        heading: "The inquiry form captures the details needed for a serious first response.",
        layout: "grid",
        items: [
          { title: "Project Information Form", text: "Name, company, contact details and project brief." },
          { title: "Service Selection", text: "Residential, commercial, industrial, renovation or interior scope." },
          { title: "Budget Range", text: "Indicative commercial range for routing and feasibility review." },
          { title: "Site Location", text: "City, state and site context for planning conversation." },
          { title: "Upload Documents", text: "Supporting document links, drawings or tender references." },
          { title: "Request Submission", text: "A stored request in the backend for admin follow-up." },
        ],
      },
    ],
  },
];

const defaultServicePages: EditableSitePage[] = serviceCategories.map((service) => ({
  slug: serviceDetailPageSlug(service.slug),
  title: service.title,
  description: service.description,
  heroTitle: service.title,
  heroDescription: service.description,
  heroImage: service.image,
  published: true,
  sections: [
    {
      id: "overview",
      label: "Overview",
      heading: service.title,
      body: service.overview,
      layout: "split",
      media: service.image,
      items: service.deliverables.map((item) => ({ title: item })),
    },
    {
      id: "process",
      label: "Process",
      heading: `How Dockside manages ${service.title.toLowerCase()}.`,
      layout: "timeline",
      items: service.process.map((step, index) => ({
        title: `Step ${index + 1}`,
        text: step,
      })),
    },
    {
      id: "benefits",
      label: "Benefits",
      heading: "Benefits for owners and project teams.",
      body: service.proof,
      layout: "grid",
      items: service.benefits.map((benefit) => ({ title: benefit })),
    },
    {
      id: "gallery",
      label: "Gallery",
      heading: `${service.title} gallery`,
      layout: "gallery",
      items: service.gallery.map((image, index) => ({
        title: `${service.title} visual ${index + 1}`,
        image,
      })),
    },
    {
      id: "faqs",
      label: "FAQs",
      heading: `Questions about ${service.title.toLowerCase()}.`,
      layout: "faq",
      faqs: service.faqs,
    },
  ],
}));

export const defaultSitePages = [...defaultTopLevelPages, ...defaultServicePages];

export const sitePageRouteBySlug = new Map<string, string>([
  ["home", "/"],
  ["about", "/about"],
  ["services", "/services"],
  ["projects", "/projects"],
  ["testimonials", "/testimonials"],
  ["insights", "/testimonials"],
  ["careers", "/careers"],
  ["contact", "/contact"],
  ["get-quote", "/get-quote"],
  ...serviceCategories.map((service) => [
    serviceDetailPageSlug(service.slug),
    `/services/${service.slug}`,
  ] as const),
]);

export function getDefaultSitePage(slug: string) {
  return defaultSitePages.find((page) => page.slug === slug) ?? null;
}

export function getSitePageRoute(slug: string) {
  return sitePageRouteBySlug.get(slug) ?? `/${slug}`;
}
