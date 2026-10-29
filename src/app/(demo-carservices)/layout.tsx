import type { Metadata } from "next";
import "@/styles/demo-carservices.scss";
import HeaderSection from "@/components/layout/demo-carservices/HeaderSection";

export const metadata: Metadata = {
  title: {
    template: "%s | Car Services - Viora",
    default: "Car Services - Viora",
  },
  description: "A car repair and auto maintenance service center.",
};

export default function DemoCarservicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HeaderSection>{children}</HeaderSection>;
}
