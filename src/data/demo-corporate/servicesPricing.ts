export type PricingPlan = {
  key: string;
  icon: string;
  name: string;
  tag?: string;
  description: string;
  monthly: number | null; // null = plan is free regardless of tab (see PricingTabSection)
  yearly: number | null;
  ctaLabel: string;
  styleBorder: boolean;
  features: string[];
};

// Content rewritten from the original (which pasted AI Content Writer
// pricing copy — "Flexible Plans For Every Writer", per-word plans) to fit
// the corporate niche — confirmed with the user. Technical structure
// (tab Monthly/Yearly, data-monthly/data-yearly on the last 2 plans) kept
// identical to the original.
export const pricingPlans: PricingPlan[] = [
  {
    key: "starter",
    icon: "icon-stars-shape-5",
    name: "Starter",
    description:
      "Perfect for businesses exploring strategic consulting for the first time.",
    monthly: null,
    yearly: null,
    ctaLabel: "Start Free",
    styleBorder: true,
    features: [
      "Up to 1 discovery session/month",
      "Basic market overview",
      "Email support",
      "Limited report access",
    ],
  },
  {
    key: "pro",
    icon: "icon-stars-shape-6",
    name: "Pro",
    tag: "Popular",
    description:
      "For growing companies looking to scale with expert strategic guidance.",
    monthly: 79,
    yearly: 149,
    ctaLabel: "Upgrade to Pro",
    styleBorder: false,
    features: [
      "Unlimited consulting sessions",
      "Dedicated account strategist",
      "Quarterly performance reports",
      "Priority support",
    ],
  },
  {
    key: "business",
    icon: "icon-stars-shape-5",
    name: "Business",
    description:
      "For agencies and enterprises managing complex, large-scale operations.",
    monthly: 149,
    yearly: 299,
    ctaLabel: "Start Business Plan",
    styleBorder: true,
    features: [
      "Full-service strategy & execution",
      "Custom brand & marketing programs",
      "Dedicated project team",
      "API & platform integrations",
    ],
  },
];
