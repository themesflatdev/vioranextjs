export type DemoLink = {
  name: string;
  href: string;
  image: string;
};

// Popup "View all demos (20)" — shared by all 20 niches + landing. Order and
// labels match the original HTML's `#modalDemo` list exactly, except #17
// ("Home Architecture" instead of the original's misspelled "Home
// Architechture" — display text only, the route still uses the real folder
// name `/demo-architechture`).
export const allDemos: DemoLink[] = [
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
  { name: "Home Landscaping", href: "/demo-gardenlandscaping", image: "/assets/images/demo/home-demo-13.jpg" },
  { name: "Home Coworking Space", href: "/demo-coworkingspace", image: "/assets/images/demo/home-demo-14.jpg" },
  { name: "Home Construction", href: "/demo-construction", image: "/assets/images/demo/home-demo-15.jpg" },
  { name: "Home Car Services", href: "/demo-carservices", image: "/assets/images/demo/home-demo-16.jpg" },
  { name: "Home Architecture", href: "/demo-architechture", image: "/assets/images/demo/home-demo-17.jpg" },
  { name: "Home Agriculture Farming", href: "/demo-agriculturefarming", image: "/assets/images/demo/home-demo-18.jpg" },
  { name: "Home Logistics", href: "/demo-logistics", image: "/assets/images/demo/home-demo-19.jpg" },
  { name: "Home Solar Energy", href: "/demo-solarenergy", image: "/assets/images/demo/home-demo-20.jpg" },
];
