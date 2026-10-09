export type ServiceItem = {
  image: string;
  title: string;
  desc: string;
  delay: string;
};

export const services: ServiceItem[] = [
  {
    image: "/assets/images/demo-lawyer/service-1.jpg",
    title: "Civil Law and Family Legal Issues",
    desc: "Trusted guidance for family, civil disputes, and inheritance matters.",
    delay: "",
  },
  {
    image: "/assets/images/demo-lawyer/service-2.jpg",
    title: "Firm Law and Corporate Legal Matters",
    desc: "Reliable solutions for contracts, compliance, and corporate governance.",
    delay: ".2s",
  },
  {
    image: "/assets/images/demo-lawyer/service-3.jpg",
    title: "Property Law and Real Estate Solutions",
    desc: "Expert legal advice for safe, transparent real estate transactions.",
    delay: ".4s",
  },
  {
    image: "/assets/images/demo-lawyer/service-4.jpg",
    title: "Criminal Law and Strong Legal Defense",
    desc: "Dedicated defense to protect your rights in criminal cases.",
    delay: ".6s",
  },
];
