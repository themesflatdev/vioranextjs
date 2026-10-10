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

// Desktop mega-menu "Demos" — 12 curated demos, same order as other niches.
// coworkingspace itself is NOT one of the 12 (verified: no self card in the
// original mega-menu, unlike other niches).
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

// Mobile offcanvas "Demos" — all 20 niches, same order as other niches.
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

// Left-half main-menu: Demos (above) / Pages / Services.
// coworkingspace has no subpages of its own — reuses corporate's real
// pages, root-relative (see memory: index-only-niches-reuse-corporate-pages).
// "About Us" fixes a real bug in the original HTML: the desktop submenu
// pointed to a local "about-us.html" that doesn't exist in this niche
// (only index.html does) — every other item, and this same item on
// mobile, correctly points to corporate's page.
export const pagesMenu: SimpleMenuItem[] = [
  { label: "About Us", href: "/about-us" },
  { label: "Our Team", href: "/our-team" },
  { label: "Team Detail", href: "/team-detail" },
  { label: "Carrer", href: "/carrer" },
  { label: "Carrer Detail", href: "/carrer-detail" },
  { label: "FAQs", href: "/faqs" },
];

export const servicesMenu: SimpleMenuItem[] = [
  { label: "Services", href: "/services" },
  { label: "Services Detail", href: "/service-detail" },
];

// Right-half main-menu: Project / Blog / Contact.
export const projectMenu: SimpleMenuItem[] = [
  { label: "Porfolio", href: "/portfolio" },
  { label: "Portfolio Detail", href: "/portfolio-detail" },
];

export const blogMenu: SimpleMenuItem[] = [
  { label: "Blog Full Width", href: "/blog-full-width" },
  { label: "Blog With Sidebar", href: "/blog-with-sidebar" },
  { label: "Blog Detail", href: "/blog-detail/inside-the-enterprise" },
];

export const contactHref = "/contact";
