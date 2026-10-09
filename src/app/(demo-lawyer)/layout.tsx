import "@/styles/demo-lawyer.scss";
import HeaderSection from "@/components/layout/demo-lawyer/HeaderSection";

export default function DemoLawyerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HeaderSection>{children}</HeaderSection>;
}
