export const BLOG_CATEGORIES = ["All", "Web Development", "SEO", "Mobile Apps", "Cloud", "Marketing"] as const;

export type BlogCategory = Exclude<(typeof BLOG_CATEGORIES)[number], "All">;

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  date: string; // ISO date
  readTime: string;
  /** Tailwind gradient used for the 3D cover */
  cover: string;
  /** Stroke icon path (24x24) floating on the cover */
  iconPath: string;
  featured?: boolean;
  sections: { heading: string; paragraphs: string[] }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "restaurant-website-that-brings-orders",
    title: "How a Restaurant Website Turns Visitors Into Orders",
    excerpt:
      "A beautiful menu is not enough. Here is what separates restaurant websites that look nice from the ones that actually fill tables and deliver orders.",
    category: "Web Development",
    date: "2026-10-02",
    readTime: "6 min read",
    cover: "from-amber-500 via-orange-600 to-rose-700",
    iconPath: "M3 11h18M5 11a7 7 0 0114 0M12 4V2M4 15h16l-1.5 5h-13L4 15z",
    featured: true,
    sections: [
      {
        heading: "Speed is the first impression",
        paragraphs: [
          "Most restaurant searches happen on a phone, often while someone is already hungry. If your menu takes more than three seconds to load, a large share of those visitors simply leave and order from the next result.",
          "We build restaurant sites with optimised images, server-rendered pages and lightweight menus so the first screen appears almost instantly, even on a weak mobile connection.",
        ],
      },
      {
        heading: "Make ordering one tap away",
        paragraphs: [
          "Your ‘Order Online’ and ‘Book a Table’ buttons should be visible on every screen without scrolling. Every extra click between hunger and checkout costs you orders.",
          "Direct online ordering also saves the commission you would otherwise pay to delivery platforms, which quickly adds up for busy kitchens.",
        ],
      },
      {
        heading: "Show what makes you different",
        paragraphs: [
          "Real photos of your dishes, your story and genuine reviews build trust far better than stock images. Guests want to know what it feels like to eat with you.",
          "Combine this with local SEO and your website becomes a 24/7 host that welcomes new guests every day.",
        ],
      },
    ],
  },
  {
    slug: "local-seo-checklist-2026",
    title: "The Local SEO Checklist Every Small Business Needs",
    excerpt:
      "Show up when nearby customers search. A practical, step-by-step local SEO checklist you can start working through today.",
    category: "SEO",
    date: "2026-09-18",
    readTime: "8 min read",
    cover: "from-sky-500 via-blue-600 to-indigo-700",
    iconPath: "M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11zM12 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",
    sections: [
      {
        heading: "Claim and complete your Google Business Profile",
        paragraphs: [
          "Your Google Business Profile is often the first thing people see. Fill in every field: categories, opening hours, services, photos and a clear description with the words customers actually search for.",
          "Post updates regularly and answer questions. Active profiles tend to rank better in the local map pack.",
        ],
      },
      {
        heading: "Keep your NAP consistent",
        paragraphs: [
          "Your Name, Address and Phone number should be identical on your website, social profiles and directories. Inconsistent details confuse search engines and customers alike.",
        ],
      },
      {
        heading: "Earn reviews and reply to them",
        paragraphs: [
          "Reviews are a strong local ranking signal and a major trust factor. Ask happy customers for a review and reply to every one, positive or negative, in a friendly and professional tone.",
        ],
      },
      {
        heading: "Create location-focused pages",
        paragraphs: [
          "If you serve several areas, give each one its own useful page with local details, directions and relevant services, rather than repeating the same text with a different city name.",
        ],
      },
    ],
  },
  {
    slug: "pwa-or-native-app",
    title: "PWA or Native App? Choosing the Right Mobile Path",
    excerpt:
      "Progressive web apps and native apps both have their place. We break down cost, performance and reach so you can choose with confidence.",
    category: "Mobile Apps",
    date: "2026-08-27",
    readTime: "7 min read",
    cover: "from-fuchsia-500 via-purple-600 to-indigo-800",
    iconPath: "M8 3h8a2 2 0 012 2v14a2 2 0 01-2 2H8a2 2 0 01-2-2V5a2 2 0 012-2zM11 18h2",
    sections: [
      {
        heading: "When a PWA is enough",
        paragraphs: [
          "A progressive web app runs in the browser, can be installed on the home screen and works offline. It is ideal when you want broad reach and a lower budget, for example ordering, booking or loyalty apps.",
        ],
      },
      {
        heading: "When to go native",
        paragraphs: [
          "Native apps shine when you need deep device features such as Bluetooth printers, background location, complex animations or tight integration with POS hardware.",
          "For our restaurant POS and kitchen systems we chose native for exactly these reasons: reliability during rush hours and direct hardware access.",
        ],
      },
      {
        heading: "Our recommendation",
        paragraphs: [
          "Start with the problem, not the technology. Many businesses launch a PWA to validate demand, then invest in a native app once the numbers justify it.",
        ],
      },
    ],
  },
  {
    slug: "aws-cost-optimisation-tips",
    title: "7 Ways to Cut Your AWS Bill Without Slowing Down",
    excerpt:
      "Cloud costs creep up quietly. These practical AWS optimisations keep your applications fast while your monthly bill gets smaller.",
    category: "Cloud",
    date: "2026-08-08",
    readTime: "9 min read",
    cover: "from-emerald-500 via-teal-600 to-cyan-800",
    iconPath: "M7 18a4 4 0 01-.6-7.96A6 6 0 0118 9a4.5 4.5 0 01-.5 9H7z",
    sections: [
      {
        heading: "Right-size your instances",
        paragraphs: [
          "Many servers run at 10–20% CPU all month. Review usage metrics and move to smaller or burstable instance types where it makes sense.",
        ],
      },
      {
        heading: "Use savings plans for steady workloads",
        paragraphs: [
          "If a workload runs around the clock, a one-year savings plan or reserved instance can reduce compute costs significantly compared to on-demand pricing.",
        ],
      },
      {
        heading: "Cache and serve from the edge",
        paragraphs: [
          "Putting CloudFront in front of your site reduces load on your servers and data transfer costs, while making pages faster for visitors around the world.",
        ],
      },
      {
        heading: "Clean up what you no longer use",
        paragraphs: [
          "Old snapshots, unattached volumes and forgotten test environments are silent budget leaks. Set up a monthly review and tag every resource with an owner.",
        ],
      },
    ],
  },
  {
    slug: "social-media-ads-that-convert",
    title: "Social Media Ads That Actually Convert",
    excerpt:
      "Likes don’t pay the bills. Learn how to structure Meta and Instagram campaigns around real business results.",
    category: "Marketing",
    date: "2026-07-21",
    readTime: "6 min read",
    cover: "from-pink-500 via-rose-600 to-red-700",
    iconPath: "M3 11v2a1 1 0 001 1h2l5 4V6L6 10H4a1 1 0 00-1 1zM16 8a5 5 0 010 8M19 5a9 9 0 010 14",
    sections: [
      {
        heading: "Start with one clear goal",
        paragraphs: [
          "Every campaign should have a single measurable objective: orders, bookings, leads or app installs. Mixing goals makes optimisation impossible.",
        ],
      },
      {
        heading: "Creative is your targeting",
        paragraphs: [
          "Modern ad platforms find audiences for you. What they need from you is strong creative: short videos, real people and an offer that is easy to understand in two seconds.",
        ],
      },
      {
        heading: "Measure what happens after the click",
        paragraphs: [
          "Install proper conversion tracking on your website so the platform learns which people actually buy. Without it, you are optimising for clicks, not customers.",
        ],
      },
    ],
  },
  {
    slug: "core-web-vitals-explained",
    title: "Core Web Vitals Explained in Plain English",
    excerpt:
      "LCP, INP and CLS sound technical, but they simply measure how fast and stable your site feels. Here is what they mean and how to improve them.",
    category: "Web Development",
    date: "2026-07-03",
    readTime: "5 min read",
    cover: "from-blue-500 via-indigo-600 to-slate-900",
    iconPath: "M4 19h16M6 16l4-5 3 3 5-7",
    sections: [
      {
        heading: "LCP: how fast the main content appears",
        paragraphs: [
          "Largest Contentful Paint measures when the biggest element, usually a hero image or headline, becomes visible. Aim for under 2.5 seconds by compressing images and avoiding heavy scripts above the fold.",
        ],
      },
      {
        heading: "INP: how quickly the page responds",
        paragraphs: [
          "Interaction to Next Paint measures the delay between a tap or click and the visual response. Breaking up long JavaScript tasks keeps your site feeling snappy.",
        ],
      },
      {
        heading: "CLS: does the layout jump around?",
        paragraphs: [
          "Cumulative Layout Shift tracks unexpected movement. Always reserve space for images, ads and embeds so content doesn’t jump while the page loads.",
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function formatPostDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" });
}
