import "@/styles/demo-agriculturefarming.scss";
import HeaderSection from "@/components/layout/demo-agriculturefarming/HeaderSection";

export default function DemoAgriculturefarmingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HeaderSection>{children}</HeaderSection>;
}
