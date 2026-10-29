import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "@/styles/demo-healthcoach.scss";
import HeaderSection from "@/components/layout/demo-healthcoach/HeaderSection";

// demo-healthcoach.scss's --font-main2 (used by every h1-h6, not just an
// opt-in class) — only a handful of niches need Instrument Sans, loaded
// here instead of the root layout.
const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin", "latin-ext"],
});

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
  return (
    <div className={instrumentSans.variable}>
      <HeaderSection>{children}</HeaderSection>
    </div>
  );
}
