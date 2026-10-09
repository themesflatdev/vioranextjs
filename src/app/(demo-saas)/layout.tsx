import "@/styles/demo-saas.scss";
import HeaderSection from "@/components/layout/demo-saas/HeaderSection";

export default function DemoSaasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HeaderSection>{children}</HeaderSection>;
}
