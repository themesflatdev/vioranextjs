export type FeatureItem = {
  title: string;
  desc: string;
  image: string;
  width: number;
  height: number;
  delay?: string;
};

export const features: FeatureItem[] = [
  {
    title: "Smart Automation",
    desc: "Automate tasks with speed and precision.",
    image: "/assets/images/demo-aitech/project-1.png",
    width: 675,
    height: 443,
  },
  {
    title: "Intelligent Suggestions",
    desc: "Personalized recommendations powered by AI.",
    image: "/assets/images/demo-aitech/project-2.png",
    width: 675,
    height: 443,
    delay: "0.2s",
  },
  {
    title: "Real-Time Insights",
    desc: "Instant insights to drive decisions.",
    image: "/assets/images/demo-aitech/project-3.png",
    width: 443,
    height: 443,
  },
  {
    title: "Scalable System",
    desc: "Grows with your business, from startup to enterprise.",
    image: "/assets/images/demo-aitech/project-4.png",
    width: 907,
    height: 443,
    delay: "0.2s",
  },
];
