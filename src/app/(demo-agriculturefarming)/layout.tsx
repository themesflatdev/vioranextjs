import type { Metadata } from "next";
import "@/styles/demo-agriculturefarming.scss";
import HeaderSection from "@/components/layout/demo-agriculturefarming/HeaderSection";

export const metadata: Metadata = {
  title: {
    template: "%s | Agriculture & Farming - Viora",
    default: "Agriculture & Farming - Viora",
  },
  description: "A sustainable farming and agriculture company.",
};

export default function DemoAgriculturefarmingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HeaderSection>{children}</HeaderSection>;
}
