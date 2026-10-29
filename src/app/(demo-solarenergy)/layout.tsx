import type { Metadata } from "next";
import "@/styles/demo-solarenergy.scss";
import HeaderSection from "@/components/layout/demo-solarenergy/HeaderSection";

export const metadata: Metadata = {
  title: {
    template: "%s | Solar Energy - Viora",
    default: "Solar Energy - Viora",
  },
  description: "A solar energy installation and renewable power company.",
};

export default function DemoSolarenergyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HeaderSection>{children}</HeaderSection>;
}
