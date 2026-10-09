import "@/styles/demo-construction.scss";
import HeaderSection from "@/components/layout/demo-construction/HeaderSection";

export default function DemoConstructionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HeaderSection>{children}</HeaderSection>;
}
