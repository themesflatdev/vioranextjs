export type PricingPlan = {
  key: string;
  name: string;
  icon: string;
  desc: string;
  // undefined = gói Starter: HTML gốc KHÔNG có data-monthly/data-yearly nên
  // jQuery .text(undefined) không đổi gì, chữ "free" luôn giữ nguyên dù đổi
  // tab Monthly/Yearly.
  monthly?: number;
  yearly?: number;
  tag?: string;
  ctaLabel: string;
  ctaStyleBorder?: boolean;
  features: string[];
};

export const pricingPlans: PricingPlan[] = [
  {
    key: "starter",
    name: "Starter",
    icon: "icon-stars-shape-5",
    desc: "Perfect for individuals trying AI writing for the first time.",
    ctaLabel: "Start Free",
    ctaStyleBorder: true,
    features: ["Up to 5,000 words/month", "10+ content templates", "Basic tone options", "Limited export formats"],
  },
  {
    key: "pro",
    name: "Pro",
    icon: "icon-stars-shape-6",
    desc: "For content creators, marketers, and small teams needing more power.",
    monthly: 29,
    yearly: 69,
    tag: "Popular",
    ctaLabel: "Upgrade to Pro",
    features: [
      "Up to 100,000 words/month",
      "25+ content templates",
      "Advanced tone & style settings",
      "SEO suggestions included",
    ],
  },
  {
    key: "business",
    name: "Business",
    icon: "icon-stars-shape-5",
    desc: "For agencies and businesses creating content at scale.",
    monthly: 69,
    yearly: 99,
    ctaLabel: "Start Business Plan",
    ctaStyleBorder: true,
    features: ["Unlimited word generation", "Team collaboration features", "Brand voice custom training", "API access"],
  },
];
