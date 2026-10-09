import "@/styles/demo-medical.scss";
import HeaderSection from "@/components/layout/demo-medical/HeaderSection";

export default function DemoMedicalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HeaderSection>{children}</HeaderSection>;
}
