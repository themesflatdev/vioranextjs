import "@/styles/demo-solarenergy.scss";
import HeaderSection from "@/components/layout/demo-solarenergy/HeaderSection";

export default function DemoSolarenergyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HeaderSection>{children}</HeaderSection>;
}
