import "@/styles/demo-insurance.scss";
import HeaderSection from "@/components/layout/demo-insurance/HeaderSection";

export default function DemoInsuranceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HeaderSection>{children}</HeaderSection>;
}
