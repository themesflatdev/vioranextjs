import "@/styles/demo-architechture.scss";
import HeaderSection from "@/components/layout/demo-architechture/HeaderSection";

export default function DemoArchitechtureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HeaderSection>{children}</HeaderSection>;
}
