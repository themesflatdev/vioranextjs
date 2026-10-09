export type SpaPricingPlan = {
  key: string;
  icon: string;
  title: string;
  desc: string;
  price: string;
  period: string;
  btnText: string;
  btnBordered: boolean;
  center: boolean;
  features: string[];
  image: string;
};

export const spaPricingPlans: SpaPricingPlan[] = [
  {
    key: "serenity-monthly",
    icon: "icon-aromatherapy",
    title: "Serenity Monthly",
    desc: "Ideal for monthly relaxation and renewal.",
    price: "$180",
    period: "/ month",
    btnText: "Join For A Month",
    btnBordered: true,
    center: false,
    features: [
      "4 wellness sessions per month (1 per week)",
      "Choice of full-body massage or facial treatment",
      "Complimentary herbal tea ritual",
    ],
    image: "/assets/images/demo-spasalon/spa-pricing-1.jpg",
  },
  {
    key: "radiance-half-year",
    icon: "icon-facial-treatments",
    title: "Radiance Half-Year",
    desc: "Ideal for monthly relaxation and renewal.",
    price: "$990",
    period: "/ 6 months",
    btnText: "Join For A Month",
    btnBordered: false,
    center: true,
    features: [
      "24 wellness sessions over 6 months (approx. 4 per month)",
      "Plus 2 complimentary premium facials",
      "Priority weekend booking",
    ],
    image: "/assets/images/demo-spasalon/spa-pricing-2.jpg",
  },
  {
    key: "luxe-annual-retreat",
    icon: "icon-stars-shape-7",
    title: "Luxe Annual Retreat",
    desc: "Your spa day, redefined",
    price: "$1,850",
    period: "/ year",
    btnText: "Join For A Year",
    btnBordered: true,
    center: false,
    features: [
      "52 wellness sessions over 12 months (1 per week)",
      "Plus 4 bonus hot stone massages or body scrubs",
      "VIP perks & birthday gift",
    ],
    image: "/assets/images/demo-spasalon/spa-pricing-3.jpg",
  },
];
