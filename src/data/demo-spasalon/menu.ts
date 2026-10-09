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

// Desktop mega-menu "Demos" — 12 curated demos, same order as
// corporate/agency/insurance.
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

// Mobile offcanvas "Demos" — all 20 niches, same order as corporate/agency/insurance.
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

// spasalon HAS its own 16 real subpages (about/booking/staffs/member-detail/
// testimonials/calender/packages/faqs/service/service-detail/portfolio/
// portfolio-detail/bloglist/bloggrid/blogdetail/contact) — these pages are
// built LATER (this prompt only covers the home page), so hrefs below point
// to this niche's own future routes, not corporate's. Verified directly off
// the source HTML's own <a href> targets (about.html, booking.html, etc. —
// NOT ../demo-corporate/*.html).
// "Member Details" points to the first team member's slug — bare
// "/demo-spasalon/member-detail" has no generateStaticParams page and would
// 404, same convention as other niches' "Doctor Detail"/"Portfolio Detail"
// sample-slug links.
export const pagesMenu: SimpleMenuItem[] = [
  { label: "About Us", href: "/demo-spasalon/about" },
  { label: "Booking", href: "/demo-spasalon/booking" },
  { label: "Our Staffs", href: "/demo-spasalon/staffs" },
  { label: "Member Details", href: "/demo-spasalon/member-detail/maria-torres" },
  { label: "Our Testimonials", href: "/demo-spasalon/testimonials" },
  { label: "Calender", href: "/demo-spasalon/calender" },
  { label: "Packages", href: "/demo-spasalon/packages" },
  { label: "FAQs", href: "/demo-spasalon/faqs" },
];

// "Services Detail" points to "body-massage" — the exact service the
// original service-detail.html's own page-title/h2 was written for
// ("Body Massage"), same sample-slug convention as other niches.
export const servicesMenu: SimpleMenuItem[] = [
  { label: "Our Services", href: "/demo-spasalon/service" },
  { label: "Services Detail", href: "/demo-spasalon/service-detail/body-massage" },
];

// Keeps the original HTML's misspelled label ("Porfolio") — the underlying
// slug is spelled correctly, "portfolio". "Portfolio Detail" points to
// "aromatherapy-session-1" — the exact card portfolio-detail.html's own
// page-title/h2 was written for ("Aromatherapy Session").
export const projectMenu: SimpleMenuItem[] = [
  { label: "Our Portfolio", href: "/demo-spasalon/portfolio" },
  { label: "Portfolio Detail", href: "/demo-spasalon/portfolio-detail/aromatherapy-session-1" },
];

// "Blog Detail" points to "full-body-scrubs" — the exact post
// blogdetail.html's own page-title/h3 was written for ("Full Body Scrubs
// Reveal Smooth, Glowing Skin").
export const blogMenu: SimpleMenuItem[] = [
  { label: "Blog List", href: "/demo-spasalon/bloglist" },
  { label: "Blog Grid", href: "/demo-spasalon/bloggrid" },
  { label: "Blog Detail", href: "/demo-spasalon/blogdetail/full-body-scrubs" },
];

export const contactHref = "/demo-spasalon/contact";
export const viewAllDemosHref = "/landing#demos";
