import type { Metadata } from "next";
import "@/styles/demo-charity.scss";
import HeaderSection from "@/components/layout/demo-charity/HeaderSection";

export const metadata: Metadata = {
  title: {
    template: "%s | Charity - Viora",
    default: "Charity - Viora",
  },
  description: "A non-profit charity and community fundraising organization.",
};

export default function DemoCharityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HeaderSection>{children}</HeaderSection>;
}
