export type PricingPlan = {
  key: string;
  icon: string;
  title: string;
  desc: string;
  monthly: number;
  yearly: number;
  features: string[];
  borderDark?: boolean;
  tag?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    key: "starter",
    icon: "icon-stars-shape-5",
    title: "Starter",
    desc: "Perfect for freelancers needing a flexible desk to work a few days weekly.",
    monthly: 49,
    yearly: 89,
    features: [
      "Hot desk access (10 days/month)",
      "High-speed WiFi",
      "Free coffee & tea",
      "Access to community events",
    ],
    borderDark: true,
  },
  {
    key: "pro",
    icon: "icon-stars-shape-6",
    title: "Pro",
    desc: "Ideal for small teams or individuals needing full-time coworking access.",
    monthly: 149,
    yearly: 249,
    features: [
      "Unlimited hot desk access",
      "Meeting room (5 hrs/month)",
      "High-speed WiFi & power outlets",
      "24/7 workspace access",
    ],
    tag: true,
  },
  {
    key: "business",
    icon: "icon-stars-shape-7",
    title: "Business",
    desc: "Best for startups seeking private office space and premium features.",
    monthly: 299,
    yearly: 399,
    features: [
      "Private office space",
      "Unlimited meeting room access",
      "24/7 secured entry",
      "Premium networking events",
    ],
    borderDark: true,
  },
];
