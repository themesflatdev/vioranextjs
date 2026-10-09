import "@/styles/demo-spasalon.scss";
import HeaderSection from "@/components/layout/demo-spasalon/HeaderSection";

export default function DemoSpasalonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HeaderSection>{children}</HeaderSection>;
}
