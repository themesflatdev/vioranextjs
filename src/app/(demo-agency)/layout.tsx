import type { Metadata } from "next";
import "@/styles/demo-agency.scss";
import HeaderSection from "@/components/layout/demo-agency/HeaderSection";

export const metadata: Metadata = {
  title: {
    template: "%s | Agency - Viora",
    default: "Agency - Viora",
  },
  description: "A creative digital agency specializing in branding, web design and marketing.",
};

export default function DemoAgencyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HeaderSection>{children}</HeaderSection>;
}
