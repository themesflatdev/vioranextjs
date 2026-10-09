export type CaseStudy = {
  image: string;
  width: number;
  height: number;
  title: string;
  category: string;
  slug: string;
};

// These 4 home-page case studies are distinct demo content from the
// /portfolio catalog (different titles/images — portfolio-item-6..9 vs
// portfolio.ts's portfolio-item-1..5) and the source HTML links all of
// them to the same static "portfolio-detail.html". Each one's `category`
// matches a real entry in data/demo-corporate/portfolio.ts exactly, so the
// slug here points to that same-category project rather than a dead link.
export const caseStudiesRow1: CaseStudy[] = [
  {
    image: "/assets/images/demo-corporate/portfolio-item-6.jpg",
    width: 435,
    height: 580,
    title: "200% Brand Growth",
    category: "Branding",
    slug: "enterprise-identity-revamp-nexora-group",
  },
  {
    image: "/assets/images/demo-corporate/portfolio-item-7.jpg",
    width: 965,
    height: 580,
    title: "ERP Boosts Efficiency",
    category: "DigitalShift",
    slug: "smart-workflow-integration-delta-logistics",
  },
];

export const caseStudiesRow2: CaseStudy[] = [
  {
    image: "/assets/images/demo-corporate/portfolio-item-8.jpg",
    width: 965,
    height: 580,
    title: "Cutting Costs By 30%",
    category: "Manufacturing",
    slug: "digital-presence-overhaul-orion-capital",
  },
  {
    image: "/assets/images/demo-corporate/portfolio-item-9.jpg",
    width: 435,
    height: 580,
    title: "Retail Goes Digital",
    category: "Logistics",
    slug: "corporate-communications-kit-atria-pharma",
  },
];
