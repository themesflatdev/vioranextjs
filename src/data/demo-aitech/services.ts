export type ServiceItem = {
  title: string;
  desc: string;
  image: string;
  delay?: string;
};

export const services: ServiceItem[] = [
  {
    title: "Custom AI Solutions",
    desc: "We design and deploy AI models tailored to your business needs.",
    image: "/assets/images/demo-aitech/project-5.png",
  },
  {
    title: "Automation Integration",
    desc: "Connect AI with your tools to streamline complex workflows.",
    image: "/assets/images/demo-aitech/project-6.png",
    delay: "0.2s",
  },
  {
    title: "Data-Driven Insights",
    desc: "Transform raw data into clear, actionable intelligence.",
    image: "/assets/images/demo-aitech/project-7.png",
    delay: "0.3s",
  },
];
