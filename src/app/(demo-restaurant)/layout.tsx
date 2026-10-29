import type { Metadata } from "next";
import "@/styles/demo-restaurant.scss";
import HeaderSection from "@/components/layout/demo-restaurant/HeaderSection";

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
  return <HeaderSection>{children}</HeaderSection>;
}
