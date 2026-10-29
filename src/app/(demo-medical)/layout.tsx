import type { Metadata } from "next";
import "@/styles/demo-medical.scss";
import HeaderSection from "@/components/layout/demo-medical/HeaderSection";

export const metadata: Metadata = {
  title: {
    template: "%s | Medical - Viora",
    default: "Medical - Viora",
  },
  description: "A pediatric medical clinic providing trusted healthcare for children and families.",
};

export default function DemoMedicalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HeaderSection>{children}</HeaderSection>;
}
