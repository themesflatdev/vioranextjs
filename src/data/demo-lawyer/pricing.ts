export type PricingPlan = {
  key: string;
  icon: string;
  name: string;
  // "coworking" copy leaked into the lawyer demo in the original HTML
  // (describes a shared desk, not legal services) — preserved verbatim
  // per CLAUDE.md rule 4.
  desc: string;
  monthly: number;
  yearly: number;
  tag?: string;
  features: string[];
  styleBorder: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    key: "starter",
    icon: "icon-stars-shape-5",
    name: "Starter",
    desc: "Perfect for freelancers needing a flexible desk to work a few days weekly.",
    monthly: 199,
    yearly: 499,
    features: [
      "Email support",
      "Access to legal resources",
      "Initial consultation (1 hr/month)",
      "Document review ( 3 documents)",
    ],
    styleBorder: true,
  },
  {
    key: "pro",
    icon: "icon-stars-shape-6",
    name: "Pro",
    desc: "Ideal for small businesses or individuals requiring legal support.",
    monthly: 499,
    yearly: 899,
    tag: "Popular",
    features: [
      "Unlimited consultations",
      "Contract drafting & review",
      "Legal advice on compliance",
      "Priority response legal team",
    ],
    styleBorder: false,
  },
  {
    key: "business",
    icon: "icon-stars-shape-7",
    name: "Business",
    desc: "Comprehensive legal solutions crafted for companies.",
    monthly: 999,
    yearly: 1999,
    features: [
      "24/7 priority support",
      "Full legal representation",
      "Compliance audits",
      "Unlimited contract drafting",
    ],
    styleBorder: true,
  },
];
