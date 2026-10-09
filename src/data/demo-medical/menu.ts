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

// Desktop mega-menu "Demos" — 12 curated demos, same order as previous niches.
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

// Mobile offcanvas "Demos" — all 20 niches, same order as previous niches.
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
  { label: "About Us", href: "/demo-medical/about" },
  { label: "Our Doctor", href: "/demo-medical/our-doctor" },
  { label: "Doctor Detail", href: "/demo-medical/doctor-detail/dr-linda-parker" },
  { label: "Testimonials", href: "/demo-medical/testimonials" },
  { label: "Pricing", href: "/demo-medical/pricing" },
  { label: "Working Hours", href: "/demo-medical/workinghours" },
  { label: "Make An Appointment", href: "/demo-medical/appointment" },
  { label: "Cost Calculator", href: "/demo-medical/costcalculator" },
  { label: "FAQs", href: "/demo-medical/faqs" },
];

// Slug is singular "service" in the original HTML (service.html), not
// "services". "Services Detail" points to the cardiology slug because the
// original service-detail.html demo content was written for Cardiology —
// same convention as pagesMenu's "Doctor Detail" sample slug above.
export const servicesMenu: SimpleMenuItem[] = [
  { label: "Services", href: "/demo-medical/service" },
  { label: "Services Detail", href: "/demo-medical/service-detail/cardiology" },
];

// Original label was typo'd "Porfolio" — fixed to "Portfolio" (the file
// itself was always spelled correctly: portfolio.html). "Portfolio Detail"
// points to the first item's slug, same convention as servicesMenu's
// "Services Detail" sample slug above.
export const projectMenu: SimpleMenuItem[] = [
  { label: "Portfolio", href: "/demo-medical/portfolio" },
  { label: "Portfolio Detail", href: "/demo-medical/portfolio-detail/caring-for-kids" },
];

// The original HTML uses corporate-style labels ("Blog Full Width", "Blog
// With Sidebar") but insurance-style slugs (bloggrid/bloglist/blogdetail) —
// confirmed identical on both desktop and mobile, kept verbatim per
// CLAUDE.md rule 4 (preserve original content quirks, not a broken link).
// "Blog Detail" points to the first canonical post's slug, same convention
// as servicesMenu/projectMenu's sample-slug links above.
export const blogMenu: SimpleMenuItem[] = [
  { label: "Blog Full Width", href: "/demo-medical/bloggrid" },
  { label: "Blog With Sidebar", href: "/demo-medical/bloglist" },
  { label: "Blog Detail", href: "/demo-medical/blogdetail/key-medicare-deadlines-you-shouldnt-miss-this-year" },
];

export const contactHref = "/demo-medical/contact";
export const viewAllDemosHref = "/landing#demos";
