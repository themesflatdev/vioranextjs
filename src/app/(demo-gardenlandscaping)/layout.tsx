import "@/styles/demo-gardenlandscaping.scss";
import HeaderSection from "@/components/layout/demo-gardenlandscaping/HeaderSection";

export default function DemoGardenlandscapingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HeaderSection>{children}</HeaderSection>;
}
