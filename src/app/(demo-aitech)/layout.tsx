import type { Metadata } from "next";
import "@/styles/demo-aitech.scss";
import HeaderSection from "@/components/layout/demo-aitech/HeaderSection";

export const metadata: Metadata = {
  title: {
    template: "%s | AI Tech - Viora",
    default: "AI Tech - Viora",
  },
  description: "An AI technology and software solutions company.",
};

export default function DemoAitechLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HeaderSection>{children}</HeaderSection>;
}
