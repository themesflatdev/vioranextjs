import "@/styles/demo-charity.scss";
import HeaderSection from "@/components/layout/demo-charity/HeaderSection";

export default function DemoCharityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HeaderSection>{children}</HeaderSection>;
}
