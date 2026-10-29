import type { Metadata } from "next";
import "@/styles/demo-healthcoach.scss";
import HeaderSection from "@/components/layout/demo-healthcoach/HeaderSection";

export const metadata: Metadata = {
  title: {
    template: "%s | Health Coach - Viora",
    default: "Health Coach - Viora",
  },
  description: "A personal health and wellness coaching service.",
};

export default function DemoHealthcoachLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HeaderSection>{children}</HeaderSection>;
}
