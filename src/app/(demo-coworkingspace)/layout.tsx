import "@/styles/demo-coworkingspace.scss";
import HeaderSection from "@/components/layout/demo-coworkingspace/HeaderSection";

export default function DemoCoworkingspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HeaderSection>{children}</HeaderSection>;
}
