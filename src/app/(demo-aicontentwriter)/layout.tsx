import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "@/styles/demo-aicontentwriter.scss";
import HeaderSection from "@/components/layout/demo-aicontentwriter/HeaderSection";

// demo-aicontentwriter.scss's --font-main3 — only a handful of niches need
// Instrument Sans, loaded here instead of the root layout.
const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin", "latin-ext"],
});

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
  return (
    <div className={instrumentSans.variable}>
      <HeaderSection>{children}</HeaderSection>
    </div>
  );
}
