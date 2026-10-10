export type DemoLink = {
  name: string;
  href: string;
};

export type FeaturedDemoLink = DemoLink & {
  image: string;
};

export type SimpleMenuItem = {
  label: string;
  href: string;
};

// Desktop mega-menu "Demos" — 12 curated demos, same order as corporate.
// Fixes the original HTML's "AI Tech" link bug
// (../demo-aitech/index.html/index.html duplicated in both mega-menu and
// mobile list) — corrected to /demo-aitech here.
export const desktopDemosFeatured: FeaturedDemoLink[] = [
  { name: "Home Corporate", href: "/", image: "/assets/images/demo/home-demo-1.jpg" },
  { name: "Home Agency", href: "/demo-agency", image: "/assets/images/demo/home-demo-2.jpg" },
  { name: "Home Insurance", href: "/demo-insurance", image: "/assets/images/demo/home-demo-3.jpg" },
  { name: "Home Medical", href: "/demo-medical", image: "/assets/images/demo/home-demo-4.jpg" },
  { name: "Home Restaurant", href: "/demo-restaurant", image: "/assets/images/demo/home-demo-5.jpg" },
  { name: "Home AI Tech", href: "/demo-aitech", image: "/assets/images/demo/home-demo-6.jpg" },
  { name: "Home AI Content Writer", href: "/demo-aicontentwriter", image: "/assets/images/demo/home-demo-7.jpg" },
  { name: "Home SaaS", href: "/demo-saas", image: "/assets/images/demo/home-demo-8.jpg" },
  { name: "Home Health Coach", href: "/demo-healthcoach", image: "/assets/images/demo/home-demo-9.jpg" },
  { name: "Home Spa Salon", href: "/demo-spasalon", image: "/assets/images/demo/home-demo-10.jpg" },
  { name: "Home Lawyer", href: "/demo-lawyer", image: "/assets/images/demo/home-demo-11.jpg" },
  { name: "Home Charity", href: "/demo-charity", image: "/assets/images/demo/home-demo-12.jpg" },
];

// Mobile offcanvas "Demos" — all 20 niches, same order/content as corporate.
// Fixes 2 original HTML bugs: "AI Tech" duplicated index.html in the href,
// and "AI Content Writer" had a broken attribute (`h..ref`) and a mangled
// URL (`/demo-aicontentwrindex.htmliter/`).
export const mobileDemosFull: DemoLink[] = [
  { name: "Corporate", href: "/" },
  { name: "Agency", href: "/demo-agency" },
  { name: "Insurance", href: "/demo-insurance" },
  { name: "Medical", href: "/demo-medical" },
  { name: "Restaurant", href: "/demo-restaurant" },
  { name: "AI Tech", href: "/demo-aitech" },
  { name: "AI Content Writer", href: "/demo-aicontentwriter" },
  { name: "SaaS", href: "/demo-saas" },
  { name: "Health Coach", href: "/demo-healthcoach" },
  { name: "Spa Salon", href: "/demo-spasalon" },
  { name: "Construction", href: "/demo-construction" },
  { name: "Coworking Space", href: "/demo-coworkingspace" },
  { name: "Garden Landscaping", href: "/demo-gardenlandscaping" },
  { name: "Car Service", href: "/demo-carservices" },
  { name: "Charity", href: "/demo-charity" },
  { name: "Architechture", href: "/demo-architechture" },
  { name: "Logistics", href: "/demo-logistics" },
  { name: "Solar Energy", href: "/demo-solarenergy" },
  { name: "Agriculture farming", href: "/demo-agriculturefarming" },
  { name: "Lawyer", href: "/demo-lawyer" },
];

export const pagesMenu: SimpleMenuItem[] = [
  { label: "About Us", href: "/demo-agency/about" },
  { label: "Our Team", href: "/demo-agency/our-team" },
  { label: "Team Detail", href: "/demo-agency/team-detail/linda-parker" },
  { label: "Our Pricing", href: "/demo-agency/our-pricing" },
  { label: "Testimonials", href: "/demo-agency/testimonials" },
  { label: "FAQs", href: "/demo-agency/faqs" },
];

export const servicesMenu: SimpleMenuItem[] = [
  { label: "Services", href: "/demo-agency/services" },
  { label: "Services Detail", href: "/demo-agency/service-detail/brand-strategy" },
];

export const projectMenu: SimpleMenuItem[] = [
  { label: "Portfolio", href: "/demo-agency/portfolio" },
  { label: "Portfolio Detail", href: "/demo-agency/portfolio-detail/chicago-il-web-design" },
];

export const contactHref = "/demo-agency/contact";
