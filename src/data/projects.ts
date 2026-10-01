export const PROJECT_TABS = ["All", "SEO", "Website Development", "Mobile App Development"];

export type ProjectCategory = "SEO" | "Website Development" | "Mobile App Development";

type Client = {
  name: string;
  logo: string;
  bannerBg: string;
  industry: string;
  darkLogo?: boolean;
};

// Single source for every client logo used across the site.
export const clients = {
  ggPizza: { name: "GG Pizza", logo: "/gg-pizza.webp", bannerBg: "bg-[#18100c]", industry: "Pizzeria & Dining", darkLogo: true },
  pizzeria: { name: "Pizzeria Da Luigi", logo: "/pizzeria.webp", bannerBg: "bg-[#1f0b0d]", industry: "Italian Restaurant", darkLogo: true },
  supersure: { name: "SuperSure", logo: "/supersure.webp", bannerBg: "bg-[#7c1d1d]", industry: "Consumer Brands" },
  brothers: { name: "Brothers Carwash", logo: "/brothers.webp", bannerBg: "bg-[#0b172a]", industry: "Automotive", darkLogo: true },
  angithi: { name: "Angithi Indian Cuisine", logo: "/anghiti.webp", bannerBg: "bg-[#24130a]", industry: "Restaurant & Catering", darkLogo: true },
  parkease: { name: "ParkEase", logo: "/parkease.webp", bannerBg: "bg-[#081e1b]", industry: "Parking Solutions" },
  cleantime: { name: "CleanTime Services", logo: "/cleantime.webp", bannerBg: "bg-[#0f1b2d]", industry: "Cleaning Services" },
  liefro: { name: "Liefro", logo: "/liefro.webp", bannerBg: "bg-[#0c1f28]", industry: "Mobile Platform" },
  efsane: { name: "Efsane", logo: "/efsane.webp", bannerBg: "bg-[#140f26]", industry: "E-Commerce", darkLogo: true },
  maloTech: { name: "malo-tech.de", logo: "/malo-tech.webp", bannerBg: "bg-[#091326]", industry: "Tech Solutions" },
  anaya: { name: "Anaya Indian Kitchen", logo: "/anayaindiankitchen.webp", bannerBg: "bg-[#1f0b0d]", industry: "Fine Dining", darkLogo: true },
} satisfies Record<string, Client>;

// Order used by the "Trusted By" logo orbit.
export const partnerClients: Client[] = [
  clients.angithi,
  clients.maloTech,
  clients.supersure,
  clients.ggPizza,
  clients.cleantime,
  clients.parkease,
  clients.pizzeria,
  clients.efsane,
  clients.brothers,
  clients.liefro,
  clients.anaya,
];

export type FeaturedProject = {
  id: string;
  client: Client;
  title: string;
  bgGradient: string;
  categories: ProjectCategory[];
  description: string;
  iconPath: string;
};

// Home page portfolio carousel.
export const featuredProjects: FeaturedProject[] = [
  {
    id: "gg-pizza",
    client: clients.ggPizza,
    title: "GG Pizza",
    bgGradient: "bg-gradient-to-br from-amber-950 via-neutral-900 to-black",
    categories: ["Website Development", "SEO"],
    description:
      "We built a high-performance web ordering portal and executed a targeted SEO campaign that boosted organic traffic and delivery orders.",
    iconPath: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
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
];

export type WorkProject = {
  id: string;
  client: Client;
  title: string;
  badge: string;
  tags: string;
  categories: ProjectCategory[];
  bannerBg?: string;
};

// Full list on the /work page.
export const workProjects: WorkProject[] = [
  { id: "gg-pizza", client: clients.ggPizza, title: "GG Pizza", badge: "Website Development", tags: "Online Ordering Platform • SEO • High Performance", categories: ["Website Development", "SEO"] },
  { id: "pizzeria", client: clients.pizzeria, title: "Pizzeria Da Luigi", badge: "Website Development", tags: "Website • Ordering • Table Booking • SEO", categories: ["Website Development", "SEO"] },
  { id: "supersure", client: clients.supersure, title: "SuperSure", badge: "SEO & Growth", tags: "Consumer Brand • PPC Architecture • SEO", categories: ["Website Development", "SEO"] },
  { id: "liefro-pos", client: clients.liefro, title: "Liefro POS & Operations", badge: "Mobile App Development", tags: "Full Restaurant POS & Kitchen Operation System", categories: ["Mobile App Development", "Website Development"] },
  { id: "liefro-platform", client: clients.liefro, title: "Liefro Restaurant Management", badge: "Website Development", tags: "Multi-Restaurant Aggregator & Management Portal", categories: ["Website Development", "SEO"], bannerBg: "bg-[#081e1b]" },
  { id: "brothers", client: clients.brothers, title: "Brothers Carwash", badge: "Website Development", tags: "Automotive Service & Booking Platform", categories: ["Website Development"] },
  { id: "angithi", client: clients.angithi, title: "Angithi Indian Cuisine", badge: "Website Development", tags: "Fine Dining & Catering Digital Portal", categories: ["Website Development"] },
  { id: "parkease", client: clients.parkease, title: "ParkEase", badge: "Mobile App Development", tags: "Smart Parking Mobile App & Cloud Hub", categories: ["Website Development", "Mobile App Development"] },
  { id: "cleantime", client: clients.cleantime, title: "CleanTime Services", badge: "Website Development", tags: "Instant Cleaning Estimator & Booking", categories: ["Website Development"] },
  { id: "efsane", client: clients.efsane, title: "Efsane Store", badge: "Website Development", tags: "Luxury E-Commerce Web Platform", categories: ["Website Development"] },
  { id: "malo-tech", client: clients.maloTech, title: "malo-tech.de", badge: "Website Development", tags: "Engineering & Tech Web Portal", categories: ["Website Development"] },
  { id: "anaya-kitchen", client: clients.anaya, title: "Anaya Indian Kitchen", badge: "SEO & Growth", tags: "Fine Dining & SEO Optimization", categories: ["Website Development", "SEO"] },
];

export function filterByCategory<T extends { categories: ProjectCategory[] }>(items: T[], tab: string) {
  return tab === "All" ? items : items.filter((item) => item.categories.includes(tab as ProjectCategory));
}
