import type { Metadata } from "next";
import "@/styles/demo-corporate.scss";
import HeaderSection from "@/components/layout/demo-corporate/HeaderSection";

export const metadata: Metadata = {
  title: {
    template: "%s | Corporate - Viora",
    default: "Corporate - Viora",
  },
  description: "A corporate consulting firm delivering business strategy and professional services.",
};

export default function DemoCorporateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HeaderSection>{children}</HeaderSection>;
}
