export type PricingPlan = {
  key: string;
  name: string;
  description: string;
  monthly: number;
  yearly: number;
  popular?: boolean;
  styleBorder?: boolean;
  wowEffect: string;
  // Tên gói trong feature list lệch với tên gói thật ("Basic Plan",
  // "Comprehensive Plan") — lỗi demo gốc, giữ nguyên (CLAUDE.md rule 4).
  features: string[];
};

export const pricingPlans: PricingPlan[] = [
  {
    key: "regular",
    name: "Regular Plan",
    description:
      "Ideal for routine check-ups and preventive care, this plan covers essential consultations, general screenings.",
    monthly: 25,
    yearly: 55,
    styleBorder: true,
    wowEffect: "fadeInRight",
    features: [
      "General health check-ups",
      "Blood & cholesterol screening",
      "Basic laboratory tests",
      "Doctor consultations",
      "Prescription guidance",
    ],
  },
  {
    key: "standard",
    name: "Standard Plan",
    description:
      "This package includes diagnostic tests, specialist consultations, and care services for a proactive approach to health.",
    monthly: 35,
    yearly: 85,
    popular: true,
    wowEffect: "fadeInDown",
    features: [
      "Everything in the Basic Plan",
      "Specialist consultations",
      "Advanced diagnostics",
      "Vaccinations & immunizations",
      "Chronic disease management",
    ],
  },
  {
    key: "premium",
    name: "Premium Plan",
    description:
      "The most extensive health plan, offering full-body check-ups, priority medical access, and tailored wellness programs.",
    monthly: 69,
    yearly: 99,
    styleBorder: true,
    wowEffect: "fadeInLeft",
    features: [
      "All in the Comprehensive Plan",
      "Full-body health assessment",
      "Priority appointments 24/7",
      "Personalized nutrition",
      "Mental health counseling",
    ],
  },
];
