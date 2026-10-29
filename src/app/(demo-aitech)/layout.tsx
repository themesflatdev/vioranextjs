import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "@/styles/demo-aitech.scss";
import HeaderSection from "@/components/layout/demo-aitech/HeaderSection";

// demo-aitech.scss's --font-main3 — only a handful of niches need
// Instrument Sans, loaded here instead of the root layout.
const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin", "latin-ext"],
});

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
  return (
    <div className={instrumentSans.variable}>
      <HeaderSection>{children}</HeaderSection>
    </div>
  );
}
