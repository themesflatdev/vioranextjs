import type { Metadata } from "next";
import "@/styles/demo-logistics.scss";
import HeaderSection from "@/components/layout/demo-logistics/HeaderSection";

export const metadata: Metadata = {
  title: {
    template: "%s | Logistics - Viora",
    default: "Logistics - Viora",
  },
  description: "A logistics and freight transportation company.",
};

export default function DemoLogisticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HeaderSection>{children}</HeaderSection>;
}
