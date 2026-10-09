export type PricingPlan = {
  key: string;
  icon: string;
  name: string;
  description: string;
  price: number;
  popular: boolean;
};

// Feature list rewritten per agency-pages-menu-only.md — the original
// repeats 4 software-product features (24/7 Technical Support, Software
// Installation, Software Update, Detailed Performance Reporting) identically
// across all 3 plans, which doesn't fit an agency. Replaced with 4 agency-
// appropriate features, kept in the same "all 3 plans share the same list"
// shape as the source. Price/name/short description are unchanged.
export const pricingFeatures = [
  "Dedicated Project Manager",
  "Unlimited Design Revisions",
  "Source File Delivery",
  "Priority Email Support",
];

export const pricingPlans: PricingPlan[] = [
  {
    key: "basic",
    icon: "icon-stars-shape-5",
    name: "Basic Plan",
    description: "Start at $49 included 3 clients",
    price: 49,
    popular: false,
  },
  {
    key: "standard",
    icon: "icon-stars-shape-6",
    name: "Standard Plan",
    description: "Start at $99 included 10 clients",
    price: 99,
    popular: true,
  },
  {
    key: "premium",
    icon: "icon-stars-shape-5",
    // Literal lowercase "premium" — a real typo in the source (the other 2
    // plans are Title Case), not confirmed for fixing, kept verbatim.
    name: "premium Plan",
    description: "Start at $199 included 30 clients",
    price: 199,
    popular: false,
  },
];
