export type PricingPlan = {
  key: string;
  name: string;
  tag?: string;
  monthly: number;
  yearly: number;
  features: string[];
  delay?: string;
};

// HTML gốc dùng nhầm heading + tiêu đề tab của khối blog cho phần giá (xem
// báo cáo nhóm) — "Standard Plan"/"Premium Plan" thực chất là 2 GÓI cố định
// luôn hiện cạnh nhau, không phải tab-pane; chỉ công tắc data-pricing đổi
// monthly/yearly mới thật sự là tab.
export const pricingPlans: PricingPlan[] = [
  {
    key: "standard",
    name: "Standard Plan",
    tag: "Best Value",
    monthly: 29,
    yearly: 69,
    features: [
      "Includes initial consultation",
      "up to 15 hours of consulting",
      "Weekly check-ins",
      "Email & Phone support",
    ],
  },
  {
    key: "premium",
    name: "Premium Plan",
    monthly: 59,
    yearly: 99,
    features: [
      "Includes initial consultation",
      "up to 15 hours of consulting",
      "Weekly check-ins",
      "24/7 support",
    ],
    delay: "0.2s",
  },
];
