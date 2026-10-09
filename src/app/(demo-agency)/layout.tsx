import "@/styles/demo-agency.scss";
import HeaderSection from "@/components/layout/demo-agency/HeaderSection";

export default function DemoAgencyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HeaderSection>{children}</HeaderSection>;
}
