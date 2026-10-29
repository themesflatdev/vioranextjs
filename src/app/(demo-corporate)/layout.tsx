import type { Metadata } from "next";
import { Red_Hat_Display, Rethink_Sans, Manrope } from "next/font/google";
import "@/styles/demo-corporate.scss";
import HeaderSection from "@/components/layout/demo-corporate/HeaderSection";

// demo-corporate.scss's --font-main2/--font-main3/--font-main4 (.font-2/
// .font-3/.font-4 classes) — only this niche (and landing, which shares the
// same niche-corporate styling) needs these, so they're loaded here instead
// of the root layout.
const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin", "latin-ext"],
});

const rethinkSans = Rethink_Sans({
  variable: "--font-rethink-sans",
  subsets: ["latin", "latin-ext"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Corporate - Viora",
    default: "Corporate - Viora",
  },
  description: "A corporate consulting firm delivering business strategy and professional services.",
};

export default function DemoCorporateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${redHatDisplay.variable} ${rethinkSans.variable} ${manrope.variable}`}>
      <HeaderSection>{children}</HeaderSection>
    </div>
  );
}
