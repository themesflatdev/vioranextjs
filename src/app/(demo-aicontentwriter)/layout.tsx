import "@/styles/demo-aicontentwriter.scss";
import HeaderSection from "@/components/layout/demo-aicontentwriter/HeaderSection";

export default function DemoAicontentwriterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HeaderSection>{children}</HeaderSection>;
}
