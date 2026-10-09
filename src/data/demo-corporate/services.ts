export type ServiceItem = {
  slug: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  ctl: boolean; // true = image on the right (content-then-image), matches ".ctl" in services.html
};

// item 4's description is a literal copy-paste of item 3's ("Branding &
// Identity") in the original HTML — a real content duplication bug, kept
// verbatim per CLAUDE.md rule 4.
export const services: ServiceItem[] = [
  {
    slug: "business-strategy",
    title: "Business Strategy",
    description:
      "We help you define clear goals, assess market opportunities, and create actionable plans that drive sustainable growth.",
    bullets: [
      "Market research & competitive analysis",
      "Business model innovation",
      "Strategic planning & growth roadmaps",
    ],
    image: "/assets/images/demo-corporate/service-1.jpg",
    ctl: false,
  },
  {
    slug: "web-development",
    title: "Web Development",
    description:
      "Robust, responsive, and scalable websites built to elevate your brand and enhance user experience across all devices.",
    bullets: [
      "Custom corporate websites & platforms",
      "UX/UI design for performance & engagement",
      "API integration & backend system development",
    ],
    image: "/assets/images/demo-corporate/service-2.jpg",
    ctl: true,
  },
  {
    slug: "branding-identity",
    title: "Branding & Identity",
    description:
      "Crafting visual identities that communicate trust, professionalism, and align perfectly with your business values.",
    bullets: [
      "Brand strategy & positioning",
      "Visual identity design (logo, color, typography)",
      "Corporate communication guidelines",
    ],
    image: "/assets/images/demo-corporate/service-3.jpg",
    ctl: false,
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Crafting visual identities that communicate trust, professionalism, and align perfectly with your business values.",
    bullets: [
      "Performance campaigns (SEO, PPC, social)",
      "Content strategy & distribution",
      "Marketing analytics & reporting",
    ],
    image: "/assets/images/demo-corporate/service-4.jpg",
    ctl: true,
  },
];
