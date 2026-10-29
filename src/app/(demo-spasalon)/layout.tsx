import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "@/styles/demo-spasalon.scss";
import HeaderSection from "@/components/layout/demo-spasalon/HeaderSection";

// demo-spasalon.scss's --font-main2 — only this niche needs it, loaded here
// instead of the root layout.
const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Spa & Salon - Viora",
    default: "Spa & Salon - Viora",
  },
  description: "A spa and salon offering massage, skincare and wellness treatments.",
};

export default function DemoSpasalonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={bricolageGrotesque.variable}>
      <HeaderSection>{children}</HeaderSection>
    </div>
  );
}
