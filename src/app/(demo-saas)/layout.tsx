import type { Metadata } from "next";
import "@/styles/demo-saas.scss";
import HeaderSection from "@/components/layout/demo-saas/HeaderSection";

export const metadata: Metadata = {
  title: {
    template: "%s | SaaS - Viora",
    default: "SaaS - Viora",
  },
  description: "A SaaS software platform for business productivity.",
};

export default function DemoSaasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HeaderSection>{children}</HeaderSection>;
}
