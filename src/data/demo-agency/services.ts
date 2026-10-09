export type Service = {
  slug: string;
  number: string;
  title: string;
  desc: string;
  image: string;
};

// From services.html's section-service-3 — service-detail.html only ships one
// static demo body (shared by all 4), so only title/breadcrumb vary by slug.
export const services: Service[] = [
  {
    slug: "brand-strategy",
    number: "01",
    title: "Brand Strategy",
    desc: "Crafting unique brand identities that resonate and inspire.",
    image: "/assets/images/demo-agency/img-hover-2.jpg",
  },
  {
    slug: "web-design-development",
    number: "02",
    title: "Web Design & Development",
    desc: "Building responsive, user-friendly websites optimized for performance.",
    image: "/assets/images/demo-agency/img-hover-1.jpg",
  },
  {
    slug: "digital-marketing",
    number: "03",
    title: "Digital Marketing",
    desc: "Driving traffic and engagement through targeted campaigns.",
    image: "/assets/images/demo-agency/img-hover-3.jpg",
  },
  {
    slug: "ui-ux-design",
    number: "04",
    title: "UI/UX Design",
    desc: "Creating intuitive experiences that delight your users.",
    image: "/assets/images/demo-agency/img-hover-4.jpg",
  },
];
