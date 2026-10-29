import type { Metadata } from "next";
import "@/styles/demo-gardenlandscaping.scss";
import HeaderSection from "@/components/layout/demo-gardenlandscaping/HeaderSection";

export const metadata: Metadata = {
  title: {
    template: "%s | Garden & Landscaping - Viora",
    default: "Garden & Landscaping - Viora",
  },
  description: "A garden design and landscaping service.",
};

export default function DemoGardenlandscapingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HeaderSection>{children}</HeaderSection>;
}
