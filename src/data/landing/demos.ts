export type LandingDemo = {
  name: string;
  filter: string;
  tagClass: "trend" | "hot" | "new";
  tagLabel: "Trending" | "Hot" | "New";
  href: string;
  image: string;
};

// `#demos` grid on /landing — all 20 niches, in original HTML order. Filter
// class / tag / image match ../viora/viora/index.html exactly (verified by
// reading the source, not guessed). Display name fixes (content, not route):
// "Architechture" -> "Architecture" and "AI Content writer" -> "AI Content
// Writer" (see "SỬA so với HTML gốc" in the landing prompt) — the route still
// uses the real (misspelled) folder name `/demo-architechture`.
//
// The original markup also has a 21st fake ".soon" card ("Coming soon",
// reusing demo-8.jpg, no real link — here linked to "#" so it isn't dead)
// rendered directly in DemosSection after this list (not part of this array,
// since it carries no niche `filter` and should only show under "All Demos").
export const landingDemos: LandingDemo[] = [
  { name: "Corporate", filter: "business", tagClass: "trend", tagLabel: "Trending", href: "/", image: "/assets/images/landing/demo-1.jpg" },
  { name: "Agency", filter: "business", tagClass: "hot", tagLabel: "Hot", href: "/demo-agency", image: "/assets/images/landing/demo-2.jpg" },
  { name: "Insurance", filter: "insurance", tagClass: "new", tagLabel: "New", href: "/demo-insurance", image: "/assets/images/landing/demo-3.jpg" },
  { name: "Medical", filter: "wellness", tagClass: "hot", tagLabel: "Hot", href: "/demo-medical", image: "/assets/images/landing/demo-4.jpg" },
  { name: "Restaurant", filter: "food", tagClass: "new", tagLabel: "New", href: "/demo-restaurant", image: "/assets/images/landing/demo-5.jpg" },
  { name: "AI Tech", filter: "technology", tagClass: "trend", tagLabel: "Trending", href: "/demo-aitech", image: "/assets/images/landing/demo-6.jpg" },
  { name: "AI Content Writer", filter: "ai-content", tagClass: "new", tagLabel: "New", href: "/demo-aicontentwriter", image: "/assets/images/landing/demo-7.jpg" },
  { name: "SaaS", filter: "technology", tagClass: "trend", tagLabel: "Trending", href: "/demo-saas", image: "/assets/images/landing/demo-8.jpg" },
  { name: "Health Coach", filter: "health", tagClass: "hot", tagLabel: "Hot", href: "/demo-healthcoach", image: "/assets/images/landing/demo-9.jpg" },
  { name: "Spa Salon", filter: "health", tagClass: "hot", tagLabel: "Hot", href: "/demo-spasalon", image: "/assets/images/landing/demo-10.jpg" },
  { name: "Lawyer", filter: "business", tagClass: "trend", tagLabel: "Trending", href: "/demo-lawyer", image: "/assets/images/landing/demo-11.jpg" },
  { name: "Charity", filter: "business", tagClass: "new", tagLabel: "New", href: "/demo-charity", image: "/assets/images/landing/demo-12.jpg" },
  { name: "Landscaping", filter: "business", tagClass: "hot", tagLabel: "Hot", href: "/demo-gardenlandscaping", image: "/assets/images/landing/demo-13.jpg" },
  { name: "Coworking Space", filter: "business", tagClass: "new", tagLabel: "New", href: "/demo-coworkingspace", image: "/assets/images/landing/demo-14.jpg" },
  { name: "Construction", filter: "business", tagClass: "trend", tagLabel: "Trending", href: "/demo-construction", image: "/assets/images/landing/demo-15.jpg" },
  { name: "Car Services", filter: "business", tagClass: "hot", tagLabel: "Hot", href: "/demo-carservices", image: "/assets/images/landing/demo-16.jpg" },
  { name: "Architecture", filter: "business", tagClass: "trend", tagLabel: "Trending", href: "/demo-architechture", image: "/assets/images/landing/demo-17.jpg" },
  { name: "Agriculture Farming", filter: "technology", tagClass: "new", tagLabel: "New", href: "/demo-agriculturefarming", image: "/assets/images/landing/demo-18.jpg" },
  { name: "Logistics", filter: "business", tagClass: "new", tagLabel: "New", href: "/demo-logistics", image: "/assets/images/landing/demo-19.jpg" },
  { name: "Solar Energy", filter: "technology", tagClass: "hot", tagLabel: "Hot", href: "/demo-solarenergy", image: "/assets/images/landing/demo-20.jpg" },
];

export const demoFilters: { label: string; filter: string }[] = [
  { label: "All Demos", filter: "*" },
  { label: "Business", filter: "business" },
  { label: "Health", filter: "health" },
  { label: "Food", filter: "food" },
  { label: "Technology", filter: "technology" },
  { label: "AI Content", filter: "ai-content" },
  { label: "Wellness", filter: "wellness" },
  { label: "Insurance", filter: "insurance" },
];

// data-wow-delay cycles '' -> '.2s' -> '.3s' across the 20 cards, in order.
const WOW_DELAY_CYCLE = ["", "0.2s", "0.3s"];
export function demoWowDelay(index: number): string {
  return WOW_DELAY_CYCLE[index % WOW_DELAY_CYCLE.length];
}
