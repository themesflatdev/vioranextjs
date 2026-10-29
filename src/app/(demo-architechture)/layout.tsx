import type { Metadata } from "next";
import "@/styles/demo-architechture.scss";
import HeaderSection from "@/components/layout/demo-architechture/HeaderSection";

export const metadata: Metadata = {
  title: {
    template: "%s | Architecture - Viora",
    default: "Architecture - Viora",
  },
  description: "An architecture and interior design studio.",
};

export default function DemoArchitechtureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HeaderSection>{children}</HeaderSection>;
}
