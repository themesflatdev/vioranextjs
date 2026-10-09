import "@/styles/demo-logistics.scss";
import HeaderSection from "@/components/layout/demo-logistics/HeaderSection";

export default function DemoLogisticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HeaderSection>{children}</HeaderSection>;
}
