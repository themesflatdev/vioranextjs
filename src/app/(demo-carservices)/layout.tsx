import "@/styles/demo-carservices.scss";
import HeaderSection from "@/components/layout/demo-carservices/HeaderSection";

export default function DemoCarservicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HeaderSection>{children}</HeaderSection>;
}
