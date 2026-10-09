import "@/styles/demo-aitech.scss";
import HeaderSection from "@/components/layout/demo-aitech/HeaderSection";

export default function DemoAitechLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HeaderSection>{children}</HeaderSection>;
}
