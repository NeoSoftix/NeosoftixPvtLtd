export const PROJECT_TABS = ["All", "SEO", "Website Development", "Mobile App Development"];

export type ProjectCategory = "SEO" | "Website Development" | "Mobile App Development";

type Client = {
  name: string;
  logo: string;
  bannerBg: string;
  industry: string;
  darkLogo?: boolean;
  /** Live website, opened in a new tab wherever the client is shown */
  url?: string;
};

// Single source for every client logo used across the site.
export const clients = {
  namasteCrailsheim: { name: "Namaste Crailsheim", logo: "/namaste.png", bannerBg: "bg-[#2a0a0c]", industry: "Indian Restaurant", url: "https://namastecrailsheim.de/" },
  namasteNuremberg: { name: "Namaste Nuremberg", logo: "/namaste.png", bannerBg: "bg-[#2a0a0c]", industry: "Indian Restaurant", url: "https://www.namaste-nuremberg.de/" },
  bellaPizza: { name: "Bella Pizza", logo: "/bellapizza.png", bannerBg: "bg-[#fff4ef]", industry: "Pizzeria", url: "https://bellapizzaneumarkt.de/" },
  supersure: { name: "SuperSure", logo: "/supersure.webp", bannerBg: "bg-[#7c1d1d]", industry: "Consumer Brands", url: "https://supersure.in/" },
  pizzeria: { name: "Pizzeria Da Luigi", logo: "/pizzeria.webp", bannerBg: "bg-[#1f0b0d]", industry: "Italian Restaurant", darkLogo: true, url: "https://www.pizzeriadaluigiregensburg.de/" },
  brothers: { name: "Brothers Carwash", logo: "/brothers.webp", bannerBg: "bg-[#0b172a]", industry: "Automotive", darkLogo: true, url: "https://brotherscarwash.info/" },
  angithi: { name: "Angithi Indian Cuisine", logo: "/anghiti.webp", bannerBg: "bg-[#24130a]", industry: "Restaurant & Catering", darkLogo: true },
  parkease: { name: "ParkEase", logo: "/parkease.webp", bannerBg: "bg-[#081e1b]", industry: "Parking Solutions" },
  cleantime: { name: "CleanTime Services", logo: "/cleantime.webp", bannerBg: "bg-[#0f1b2d]", industry: "Cleaning Services", url: "https://cleantimefrankfurt.de/" },
  liefro: { name: "Liefro", logo: "/liefro.webp", bannerBg: "bg-[#0c1f28]", industry: "Mobile Platform", url: "https://liefro.com/" },
  efsane: { name: "Efsane", logo: "/efsane.webp", bannerBg: "bg-[#140f26]", industry: "E-Commerce", darkLogo: true, url: "https://efsane-events.de/" },
  maloTech: { name: "malo-tech.de", logo: "/malo-tech.webp", bannerBg: "bg-[#091326]", industry: "Tech Solutions", url: "https://malo-tech.de/" },
  anaya: { name: "Anaya Indian Kitchen", logo: "/anayaindiankitchen.webp", bannerBg: "bg-[#1f0b0d]", industry: "Fine Dining", darkLogo: true, url: "https://anaya-kitchen.de/" },
  chaska: { name: "Chaska Indian Restaurant", logo: "/chaska.png", bannerBg: "bg-[#1a1208]", industry: "Indian Restaurant", darkLogo: true, url: "https://chaskaregenstauf.com/" },
} satisfies Record<string, Client>;

// Order used by the "Trusted By" logo ring (starts at the top, clockwise).
export const partnerClients: Client[] = [
  clients.namasteCrailsheim,
  clients.namasteNuremberg,
  clients.bellaPizza,
  clients.supersure,
  clients.pizzeria,
  clients.maloTech,
  clients.cleantime,
  clients.parkease,
  clients.efsane,
  clients.brothers,
  clients.liefro,
  clients.anaya,
  clients.chaska,
  clients.angithi,
];

export type FeaturedProject = {
  id: string;
  client: Client;
  title: string;
  bgGradient: string;
  categories: ProjectCategory[];
  description: string;
  iconPath: string;
  /** Overrides client.url when a client has more than one site */
  url?: string;
};

// Home page portfolio carousel.
export const featuredProjects: FeaturedProject[] = [
  {
    id: "namaste-crailsheim",
    client: clients.namasteCrailsheim,
    title: "Namaste Crailsheim",
    bgGradient: "bg-gradient-to-br from-red-950 via-rose-950 to-neutral-900",
    categories: ["Website Development", "SEO"],
    description:
      "Built an elegant website for a traditional Indian restaurant in Crailsheim, paired with local SEO to boost visibility, table reservations and online orders.",
    iconPath: "M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6",
  },
  {
    id: "namaste-nuremberg",
    client: clients.namasteNuremberg,
    title: "Namaste Nuremberg",
    bgGradient: "bg-gradient-to-br from-rose-950 via-red-950 to-neutral-900",
    categories: ["Website Development", "SEO"],
    description:
      "Launched the Nuremberg location online with a fast, mobile-first restaurant website, digital menu and local SEO targeting nearby diners.",
    iconPath: "M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11zM12 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",
  },
  {
    id: "bella-pizza",
    client: clients.bellaPizza,
    title: "Bella Pizza",
    bgGradient: "bg-gradient-to-br from-red-100 via-white to-orange-100",
    categories: ["Website Development", "SEO"],
    description:
      "Created a bold, appetising pizzeria website for Bella Pizza in Neumarkt with an easy-to-browse menu and local SEO that drives orders.",
    iconPath: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  },
  {
    id: "supersure",
    client: clients.supersure,
    title: "SuperSure",
    bgGradient: "bg-gradient-to-br from-red-700 via-rose-800 to-slate-900",
    categories: ["Website Development", "SEO"],
    description:
      "We created targeted PPC campaigns and high-converting web architecture that maximized ROI, reduced cost per click, and increased conversions.",
    iconPath:
      "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    id: "pizzeria",
    client: clients.pizzeria,
    title: "Pizzeria Da Luigi",
    bgGradient: "bg-gradient-to-br from-red-950 via-rose-950 to-neutral-900",
    categories: ["Website Development", "SEO"],
    description:
      "Engineered an authentic Italian restaurant site featuring instant table booking, digital menu, and multi-region local SEO optimization.",
    iconPath: "M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6",
  },
  {
    id: "brothers",
    client: clients.brothers,
    title: "Brothers Carwash",
    bgGradient: "bg-gradient-to-br from-slate-900 via-sky-950 to-blue-950",
    categories: ["Website Development"],
    description:
      "We created targeted PPC campaigns and responsive booking platform that maximized ROI, reduced cost per customer, and increased conversions.",
    iconPath:
      "M8 17a2 2 0 100 4 2 2 0 000-4zm8 0a2 2 0 100 4 2 2 0 000-4zM3 9l2-4h10l2 4M3 9v7a1 1 0 001 1h16a1 1 0 001-1V9M3 9h18",
  },
  {
    id: "anghiti",
    client: clients.angithi,
    title: "Angithi Indian Cuisine",
    bgGradient: "bg-gradient-to-br from-amber-900 via-orange-950 to-amber-950",
    categories: ["Website Development"],
    description:
      "We executed a high-performance digital marketing campaign and custom website that boosted brand visibility and generated quality leads.",
    iconPath: "M12 21a9 9 0 100-18 9 9 0 000 18zM12 8v4l3 3",
  },
  {
    id: "parkease",
    client: clients.parkease,
    title: "ParkEase",
    bgGradient: "bg-gradient-to-br from-emerald-900 via-teal-950 to-slate-950",
    categories: ["Website Development", "Mobile App Development"],
    description:
      "Designed a cross-platform mobile app & web management hub enabling real-time parking spot reservation, navigation, and seamless digital payments.",
    iconPath: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    id: "cleantime",
    client: clients.cleantime,
    title: "CleanTime Services",
    bgGradient: "bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-950",
    categories: ["Website Development"],
    description:
      "Built a modern commercial cleaning platform with instant cost estimator, automated booking calendar, and client portal integration.",
    iconPath: "M21 12a9 9 0 11-18 0 9 9 0 0118 0zM12 7v5l3 2",
  },
  {
    id: "liefro",
    client: clients.liefro,
    title: "Liefro",
    bgGradient: "bg-gradient-to-br from-cyan-900 via-slate-900 to-blue-950",
    categories: ["Website Development", "Mobile App Development", "SEO"],
    description:
      "Engineered an intuitive mobile application & optimized web platform coupled with nationwide technical SEO for rapid user acquisition.",
    iconPath: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    id: "efsane",
    client: clients.efsane,
    title: "Efsane",
    bgGradient: "bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950",
    categories: ["Website Development"],
    description:
      "Developed a luxury e-commerce web platform engineered for ultra-fast load speed, seamless checkout, and high conversion rates.",
    iconPath: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    id: "chaska",
    client: clients.chaska,
    title: "Chaska Indian Restaurant",
    bgGradient: "bg-gradient-to-br from-amber-950 via-stone-900 to-black",
    categories: ["Website Development", "SEO"],
    description:
      "Designed a flavourful restaurant website with a digital menu and local SEO that helps hungry customers find and order from Chaska faster.",
    iconPath: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  },
];

export type WorkProject = {
  id: string;
  client: Client;
  title: string;
  badge: string;
  tags: string;
  categories: ProjectCategory[];
  bannerBg?: string;
  /** Overrides client.url when a client has more than one site */
  url?: string;
};

// Full list on the /work page.
export const workProjects: WorkProject[] = [
  { id: "namaste-crailsheim", client: clients.namasteCrailsheim, title: "Namaste Crailsheim", badge: "Website Development", tags: "Restaurant Website • Online Menu • Local SEO", categories: ["Website Development", "SEO"] },
  { id: "namaste-nuremberg", client: clients.namasteNuremberg, title: "Namaste Nuremberg", badge: "Website Development", tags: "Restaurant Website • Online Menu • Local SEO", categories: ["Website Development", "SEO"] },
  { id: "bella-pizza", client: clients.bellaPizza, title: "Bella Pizza", badge: "Website Development", tags: "Pizzeria Website • Online Menu • Local SEO", categories: ["Website Development", "SEO"] },
  { id: "supersure", client: clients.supersure, title: "SuperSure", badge: "SEO & Growth", tags: "Consumer Brand • PPC Architecture • SEO", categories: ["Website Development", "SEO"] },
  { id: "pizzeria", client: clients.pizzeria, title: "Pizzeria Da Luigi", badge: "Website Development", tags: "Website • Ordering • Table Booking • SEO", categories: ["Website Development", "SEO"] },
  { id: "liefro-pos", client: clients.liefro, title: "Liefro POS & Operations", badge: "Mobile App Development", tags: "Full Restaurant POS & Kitchen Operation System", categories: ["Mobile App Development", "Website Development"], url: "https://liefro.de/" },
  { id: "liefro-platform", client: clients.liefro, title: "Liefro Restaurant Management", badge: "Website Development", tags: "Multi-Restaurant Aggregator & Management Portal", categories: ["Website Development", "SEO"], bannerBg: "bg-[#081e1b]" },
  { id: "brothers", client: clients.brothers, title: "Brothers Carwash", badge: "Website Development", tags: "Automotive Service & Booking Platform", categories: ["Website Development"] },
  { id: "angithi", client: clients.angithi, title: "Angithi Indian Cuisine", badge: "Website Development", tags: "Fine Dining & Catering Digital Portal", categories: ["Website Development"] },
  { id: "parkease", client: clients.parkease, title: "ParkEase", badge: "Mobile App Development", tags: "Smart Parking Mobile App & Cloud Hub", categories: ["Website Development", "Mobile App Development"] },
  { id: "cleantime", client: clients.cleantime, title: "CleanTime Services", badge: "Website Development", tags: "Instant Cleaning Estimator & Booking", categories: ["Website Development"] },
  { id: "efsane", client: clients.efsane, title: "Efsane Store", badge: "Website Development", tags: "Luxury E-Commerce Web Platform", categories: ["Website Development"] },
  { id: "malo-tech", client: clients.maloTech, title: "malo-tech.de", badge: "Website Development", tags: "Engineering & Tech Web Portal", categories: ["Website Development"] },
  { id: "anaya-kitchen", client: clients.anaya, title: "Anaya Indian Kitchen", badge: "SEO & Growth", tags: "Fine Dining & SEO Optimization", categories: ["Website Development", "SEO"] },
  { id: "chaska", client: clients.chaska, title: "Chaska Indian Restaurant", badge: "Website Development", tags: "Restaurant Website • Online Menu • Local SEO", categories: ["Website Development", "SEO"] },
];

/** Website a project card should open, if any. */
export function projectUrl(project: { client: Client; url?: string }) {
  return project.url ?? project.client.url;
}

export function filterByCategory<T extends { categories: ProjectCategory[] }>(items: T[], tab: string) {
  return tab === "All" ? items : items.filter((item) => item.categories.includes(tab as ProjectCategory));
}
