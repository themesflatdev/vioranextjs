export type Feature = {
  icon: string;
  title: string;
  desc: string;
  delay: string;
};

export const features: Feature[] = [
  {
    icon: "icon-Clock",
    title: "Save Time",
    desc: "Automate repetitive tasks and focus on what really matters.",
    delay: "",
  },
  {
    icon: "icon-ChartBar",
    title: "Better Insights",
    desc: "Track performance and make smarter decisions.",
    delay: "0.1s",
  },
  {
    icon: "icon-Group",
    title: "Work Together",
    desc: "Collaborate easily across teams and projects.",
    delay: "0.2s",
  },
  {
    icon: "icon-HandPointing",
    title: "Easy To Use",
    // Original: "Clean interface, zero learning curve get started in minutes."
    // (missing the em dash before "get started") — same typo pattern already
    // fixed in other niches, corrected here per CLAUDE.md content rules.
    desc: "Clean interface, zero learning curve — get started in minutes.",
    delay: "0.3s",
  },
];
