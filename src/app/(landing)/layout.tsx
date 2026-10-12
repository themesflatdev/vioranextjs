import "@/styles/demo-corporate.scss";
import HeaderSection from "@/components/layout/landing/HeaderSection";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HeaderSection>{children}</HeaderSection>;
}
