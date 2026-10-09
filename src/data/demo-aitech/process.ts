export type ProcessStep = {
  tab: string;
  number: string;
  title: string;
  desc: string;
  image: string;
};

export const processSteps: ProcessStep[] = [
  {
    tab: "tab1",
    number: "01",
    title: "Discover Needs",
    desc: "We analyze your goals and identify the best AI opportunities.",
    image: "/assets/images/demo-aitech/process-1.png",
  },
  {
    tab: "tab2",
    number: "02",
    title: "Build & Integrate",
    desc: "Our team develops and connects custom AI into your systems.",
    image: "/assets/images/demo-aitech/process-2.png",
  },
  {
    tab: "tab3",
    number: "03",
    title: "Deploy & Optimize",
    desc: "We launch, monitor, and refine your AI for real-world results.",
    image: "/assets/images/demo-aitech/process-3.png",
  },
];
