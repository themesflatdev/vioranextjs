import type { Metadata } from "next";
import "@/styles/demo-insurance.scss";
import HeaderSection from "@/components/layout/demo-insurance/HeaderSection";

export const metadata: Metadata = {
  title: {
    template: "%s | Insurance - Viora",
    default: "Insurance - Viora",
  },
  description: "A trusted insurance provider offering life, health and business coverage.",
};

export default function DemoInsuranceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HeaderSection>{children}</HeaderSection>;
}
