export type PricingPlan = {
  key: string;
  name: string;
  tag?: string;
  description: string;
  monthly: number;
  yearly: number;
  styleBorder: boolean;
  popular: boolean;
  features: string[];
};

// Content rewritten from the original (which pasted demo-medical's pricing
// copy verbatim — "Blood & cholesterol screening", "Doctor consultations",
// "Appointment Now" — despite the heading correctly saying "Insurance
// Services") to fit this niche. Confirmed with user: names/prices/tag kept
// identical (Regular $25/$55, Standard $35/$85 "Popular", Premium $69/$99),
// only description/features/CTA rewritten; CTA changed to "Get a Quote".
export const pricingPlans: PricingPlan[] = [
  {
    key: "regular",
    name: "Regular Plan",
    description:
      "Ideal for individuals seeking essential coverage, this plan protects against life's most common risks with straightforward, no-fuss protection.",
    monthly: 25,
    yearly: 55,
    styleBorder: true,
    popular: false,
    features: [
      "Basic liability coverage",
      "24/7 claims support",
      "Standard property protection",
      "Online policy management",
      "Email support",
    ],
  },
  {
    key: "standard",
    name: "Standard Plan",
    tag: "Popular",
    description:
      "This package includes broader coverage, faster claims processing, and added protection for a more complete peace of mind.",
    monthly: 35,
    yearly: 85,
    styleBorder: false,
    popular: true,
    features: [
      "Everything in the Regular Plan",
      "Extended liability coverage",
      "Accident & injury protection",
      "Priority claims processing",
      "Family coverage add-on",
    ],
  },
  {
    key: "premium",
    name: "Premium Plan",
    description:
      "The most comprehensive insurance plan, offering full coverage, priority support, and tailored protection for your family and assets.",
    monthly: 69,
    yearly: 99,
    styleBorder: true,
    popular: false,
    features: [
      "All in the Standard Plan",
      "Full asset protection",
      "Priority 24/7 claims support",
      "Personalized risk assessment",
      "Dedicated insurance advisor",
    ],
  },
];
