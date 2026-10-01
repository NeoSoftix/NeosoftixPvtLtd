// Single source for the service list shown in the header menu, services grid, footer and contact form.
export type ServiceItem = {
  number: string;
  title: string;
  href: string;
  description: string;
  menuDescription: string;
  icon: string;
};

export const services: ServiceItem[] = [
  {
    number: "01",
    title: "Mobile App Development",
    href: "/services/mobile-app-development",
    description:
      "Build a tailored iOS, Android, or cross-platform app — crafted for performance, accuracy, and cost-efficiency.",
    menuDescription: "Build tailored iOS, Android & cross-platform apps",
    icon: "📱",
  },
  {
    number: "02",
    title: "Web Development",
    href: "/services/web-development",
    description:
      "Our custom web design and development services are crafted to suit your specific business requirements.",
    menuDescription: "Custom web applications & Next.js platforms",
    icon: "💻",
  },
  {
    number: "03",
    title: "Digital Marketing",
    href: "/services/digital-marketing",
    description:
      "Elevate your business with advanced digital strategies that boost performance, creativity, and growth potential.",
    menuDescription: "SEO, PPC ads & performance growth marketing",
    icon: "📈",
  },
  {
    number: "04",
    title: "Software Development",
    href: "/services/software-development",
    description:
      "Create tailored software solutions to solve unique business needs and enhance overall efficiency.",
    menuDescription: "Tailored enterprise software & custom workflows",
    icon: "⚙️",
  },
  {
    number: "05",
    title: "AWS",
    href: "/services/aws",
    description:
      "Enable your organization to innovate faster, adapt quickly to change, and scale efficiently with fully tailored AWS cloud solutions.",
    menuDescription: "Tailored AWS cloud solutions & DevOps scale",
    icon: "☁️",
  },
];
