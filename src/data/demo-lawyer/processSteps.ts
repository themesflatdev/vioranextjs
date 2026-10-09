export type ProcessStep = {
  // All 4 steps share the same icon in the original HTML (demo content bug,
  // preserved verbatim per CLAUDE.md rule 4).
  icon: "icon-CalendarCheck";
  number: number;
  title: string;
  desc: string;
};

export const processSteps: ProcessStep[] = [
  {
    icon: "icon-CalendarCheck",
    number: 1,
    title: "Case Consultation",
    desc: "We discuss your case and understand your legal needs.",
  },
  {
    icon: "icon-CalendarCheck",
    number: 2,
    title: "Legal Strategy",
    desc: "We craft a personalized legal plan to achieve the best results.",
  },
  {
    icon: "icon-CalendarCheck",
    number: 3,
    title: "Court Handling",
    desc: "We efficiently manage your case while keeping you updated.",
  },
  {
    icon: "icon-CalendarCheck",
    number: 4,
    title: "Final Resolution",
    desc: "Achieve the best outcome and receive ongoing support.",
  },
];
