import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "@/styles/demo-restaurant.scss";
import HeaderSection from "@/components/layout/demo-restaurant/HeaderSection";

// demo-restaurant.scss's --font-main2 — only a handful of niches need Sora,
// loaded here instead of the root layout.
const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Restaurant - Viora",
    default: "Restaurant - Viora",
  },
  description: "A restaurant and fine dining establishment.",
};

export default function DemoRestaurantLayout({
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
