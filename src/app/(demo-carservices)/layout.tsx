import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "@/styles/demo-carservices.scss";
import HeaderSection from "@/components/layout/demo-carservices/HeaderSection";

// demo-carservices.scss's --font-main2 — only a handful of niches need
// Instrument Sans, loaded here instead of the root layout.
const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Car Services - Viora",
    default: "Car Services - Viora",
  },
  description: "A car repair and auto maintenance service center.",
};

export default function DemoCarservicesLayout({
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
