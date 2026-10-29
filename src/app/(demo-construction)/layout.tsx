import type { Metadata } from "next";
import "@/styles/demo-construction.scss";
import HeaderSection from "@/components/layout/demo-construction/HeaderSection";

export const metadata: Metadata = {
  title: {
    template: "%s | Construction - Viora",
    default: "Construction - Viora",
  },
  description: "A construction and building contractor company.",
};

export default function DemoConstructionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HeaderSection>{children}</HeaderSection>;
}
