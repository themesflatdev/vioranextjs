export type PortfolioItem = {
  slug: string;
  title: string;
  desc: string;
  bullets: string[];
  image: string;
};

// porfolio.html — only 4 real projects, repeated identically across all 4
// filter tabs (View All/Business/Insurance/Cardiology) in the source —
// a demo-content bug, not real per-category filtering. Preserved as-is
// per user confirmation: all 4 tabs show the same 4 projects.
//
// Descriptions/bullets rewritten from the original (web development /
// business consulting copy, confirmed not insurance-appropriate) to real
// insurance case-study content.
export const portfolioItems: PortfolioItem[] = [
  {
    slug: "property-insurance",
    title: "Property Insurance",
    desc: "We help protect your home and belongings from unexpected damage, theft, or natural disasters, so you can feel secure no matter what happens.",
    bullets: [
      "Comprehensive property damage coverage",
      "Fast, hassle-free claims process",
      "Coverage options for natural disasters",
    ],
    image: "/assets/images/demo-insurance/portfolio-item-1.jpg",
  },
  {
    slug: "business-insurance",
    title: "Business Insurance",
    desc: "From property damage to liability claims, our business insurance plans are built to protect what you've worked so hard to build.",
    bullets: [
      "Liability and property coverage for businesses",
      "Tailored plans for small to large enterprises",
      "24/7 claims support for business owners",
    ],
    image: "/assets/images/demo-insurance/portfolio-item-2.jpg",
  },
  {
    slug: "renters-insurance",
    title: "Renters Insurance",
    desc: "Affordable coverage designed to protect your personal belongings and give you peace of mind, wherever you call home.",
    bullets: [
      "Protection for personal belongings",
      "Liability coverage for renters",
      "Flexible plans that fit any budget",
    ],
    image: "/assets/images/demo-insurance/portfolio-item-3.jpg",
  },
  {
    slug: "personal-accident",
    title: "Personal Accident",
    desc: "Life is unpredictable — our personal accident plans provide financial support and peace of mind when you need it most.",
    bullets: [
      "Coverage for accidental injury and disability",
      "Fast claims processing after an incident",
      "Add-on options for extended family coverage",
    ],
    image: "/assets/images/demo-insurance/portfolio-item-4.jpg",
  },
];
