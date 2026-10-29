import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "@/styles/demo-gardenlandscaping.scss";
import HeaderSection from "@/components/layout/demo-gardenlandscaping/HeaderSection";

// demo-gardenlandscaping.scss's --font-main2 — only a handful of niches
// need Sora, loaded here instead of the root layout.
const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Garden & Landscaping - Viora",
    default: "Garden & Landscaping - Viora",
  },
  description: "A garden design and landscaping service.",
};

export default function DemoGardenlandscapingLayout({
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
