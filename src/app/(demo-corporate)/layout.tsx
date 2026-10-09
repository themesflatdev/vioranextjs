import "@/styles/demo-corporate.scss";
import HeaderSection from "@/components/layout/demo-corporate/HeaderSection";

export default function DemoCorporateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HeaderSection>{children}</HeaderSection>;
}
