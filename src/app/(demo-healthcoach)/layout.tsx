import "@/styles/demo-healthcoach.scss";
import HeaderSection from "@/components/layout/demo-healthcoach/HeaderSection";

export default function DemoHealthcoachLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HeaderSection>{children}</HeaderSection>;
}
