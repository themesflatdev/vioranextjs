import type { Metadata } from "next";
import { Red_Hat_Display, Rethink_Sans, Manrope } from "next/font/google";
import "@/styles/demo-insurance.scss";
import HeaderSection from "@/components/layout/demo-insurance/HeaderSection";

// demo-insurance.scss's --font-main2/--font-main3/--font-main4 — only this
// niche needs these, loaded here instead of the root layout.
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
    template: "%s | Insurance - Viora",
    default: "Insurance - Viora",
  },
  description: "A trusted insurance provider offering life, health and business coverage.",
};

export default function DemoInsuranceLayout({
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
