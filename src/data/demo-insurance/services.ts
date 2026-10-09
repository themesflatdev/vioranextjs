export type Service = {
  slug: string;
  title: string;
  image: string;
};

// services.html's full 8-item static grid. All 8 share the exact same
// AI-driven description in the source — confirmed with user to keep as-is,
// same decision already applied on the home page's 4-item swiper.
//
// Image mapping is taken as-is from services.html itself, which assigns
// service-N.jpg to a DIFFERENT title than the home page's swiper does for
// the same 4 shared services (home: service-1→Health, 2→Life, 3→Property,
// 4→Business; here: service-2→Health, 3→Life, 4→Property, 1→Business) —
// a genuine mismatch between the two pages in the source theme, preserved
// per-page rather than "corrected" to match the home page.
export const services: Service[] = [
  { slug: "health-insurance", title: "Health Insurance", image: "/assets/images/demo-insurance/service-2.jpg" },
  { slug: "life-insurance", title: "Life Insurance", image: "/assets/images/demo-insurance/service-3.jpg" },
  { slug: "property-insurance", title: "Property Insurance", image: "/assets/images/demo-insurance/service-4.jpg" },
  { slug: "business-insurance", title: "Business Insurance", image: "/assets/images/demo-insurance/service-1.jpg" },
  { slug: "personal-accident", title: "Personal Accident", image: "/assets/images/demo-insurance/service-5.jpg" },
  { slug: "travel-insurance", title: "Travel Insurance", image: "/assets/images/demo-insurance/service-6.jpg" },
  { slug: "home-insurance", title: "Home Insurance", image: "/assets/images/demo-insurance/service-7.jpg" },
  { slug: "agriculture-insurance", title: "Agriculture Insurance", image: "/assets/images/demo-insurance/service-8.jpg" },
];

export const serviceDesc =
  "Implement AI-driven tools and automation to boost efficiency, reduce manual workloads";
