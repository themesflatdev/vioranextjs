import type { Metadata } from "next";
import "@/styles/demo-aicontentwriter.scss";
import HeaderSection from "@/components/layout/demo-aicontentwriter/HeaderSection";

export const metadata: Metadata = {
  title: {
    template: "%s | AI Content Writer - Viora",
    default: "AI Content Writer - Viora",
  },
  description: "An AI-powered content writing and copy generation platform.",
};

export default function DemoAicontentwriterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HeaderSection>{children}</HeaderSection>;
}
