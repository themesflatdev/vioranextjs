import type { Metadata } from "next";
import "@/styles/demo-coworkingspace.scss";
import HeaderSection from "@/components/layout/demo-coworkingspace/HeaderSection";

export const metadata: Metadata = {
  title: {
    template: "%s | Coworking Space - Viora",
    default: "Coworking Space - Viora",
  },
  description: "A coworking space and flexible office rental provider.",
};

export default function DemoCoworkingspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HeaderSection>{children}</HeaderSection>;
}
