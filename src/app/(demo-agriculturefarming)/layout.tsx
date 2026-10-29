import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "@/styles/demo-agriculturefarming.scss";
import HeaderSection from "@/components/layout/demo-agriculturefarming/HeaderSection";

// demo-agriculturefarming.scss's --font-main2 — only a handful of niches
// need Sora, loaded here instead of the root layout.
const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Agriculture & Farming - Viora",
    default: "Agriculture & Farming - Viora",
  },
  description: "A sustainable farming and agriculture company.",
};

export default function DemoAgriculturefarmingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={sora.variable}>
      <HeaderSection>{children}</HeaderSection>
    </div>
  );
}
