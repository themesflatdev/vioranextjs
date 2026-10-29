import type { Metadata } from "next";
import "@/styles/demo-spasalon.scss";
import HeaderSection from "@/components/layout/demo-spasalon/HeaderSection";

export const metadata: Metadata = {
  title: {
    template: "%s | Spa & Salon - Viora",
    default: "Spa & Salon - Viora",
  },
  description: "A spa and salon offering massage, skincare and wellness treatments.",
};

export default function DemoSpasalonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HeaderSection>{children}</HeaderSection>;
}
