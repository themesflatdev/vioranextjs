import type { Metadata } from "next";
import "@/styles/demo-lawyer.scss";
import HeaderSection from "@/components/layout/demo-lawyer/HeaderSection";

export const metadata: Metadata = {
  title: {
    template: "%s | Lawyer - Viora",
    default: "Lawyer - Viora",
  },
  description: "A law firm offering legal consultation and representation.",
};

export default function DemoLawyerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HeaderSection>{children}</HeaderSection>;
}
