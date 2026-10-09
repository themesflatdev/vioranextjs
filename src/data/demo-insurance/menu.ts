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

// Desktop mega-menu "Demos" — 12 curated demos, same order as corporate/agency.
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

// Mobile offcanvas "Demos" — all 20 niches, same order as corporate/agency.
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
  { label: "About Us", href: "/demo-insurance/about-us" },
  { label: "Our Team", href: "/demo-insurance/our-team" },
  { label: "Team Detail", href: "/demo-insurance/team-detail/maria-torres" },
  { label: "Testimonials", href: "/demo-insurance/testimonials" },
  { label: "Pricing", href: "/demo-insurance/pricing" },
  { label: "FAQs", href: "/demo-insurance/faqs" },
  { label: "404 Error", href: "/demo-insurance/404" },
];

export const servicesMenu: SimpleMenuItem[] = [
  { label: "Services", href: "/demo-insurance/services" },
  { label: "Services Detail", href: "/demo-insurance/service-detail/health-insurance" },
];

// Keeps the original HTML's misspelling "porfolio" (per master-workflow's
// surveyed page list for this niche).
export const projectMenu: SimpleMenuItem[] = [
  { label: "Porfolio", href: "/demo-insurance/porfolio" },
  { label: "Portfolio Detail", href: "/demo-insurance/porfolio-detail/property-insurance" },
];

export const blogMenu: SimpleMenuItem[] = [
  { label: "Blog Grid", href: "/demo-insurance/blog-grid" },
  { label: "Blog List", href: "/demo-insurance/blog-list" },
  { label: "Blog Detail", href: "/demo-insurance/blog-detail/generate-better-protect-options-now" },
];

export const contactHref = "/demo-insurance/contact";
export const viewAllDemosHref = "/landing#demos";
