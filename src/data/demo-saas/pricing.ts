export type PricingFeature = {
  text: string;
  disabled?: boolean;
};

export type PricingPlan = {
  key: string;
  title: string;
  tag?: string;
  desc: string;
  monthly?: number;
  yearly?: number;
  free?: boolean;
  btnBgWhite?: boolean;
  delay: string;
  features: PricingFeature[];
};

export const pricingPlans: PricingPlan[] = [
  {
    key: "premium",
    title: "Premium",
    tag: "Save 25%",
    // Original: "Ideal for individuals who who need advanced features and
    // tools for client work." (duplicated "who") — typo fixed per CLAUDE.md.
    desc: "Ideal for individuals who need advanced features and tools for client work.",
    monthly: 9.99,
    yearly: 49.9,
    delay: "0.2s",
    features: [{ text: "Unlimited Projects" }, { text: "Up to 15 team members" }, { text: "Advanced Analytics" }],
  },
  {
    key: "basic",
    title: "Basic",
    desc: "Perfect for individuals and small teams just getting started.",
    free: true,
    btnBgWhite: true,
    delay: "",
    features: [
      { text: "1 Project Workspace" },
      { text: "Up to 3 team members", disabled: true },
      { text: "Basic Analytics", disabled: true },
    ],
  },
];
