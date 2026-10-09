import "@/styles/demo-restaurant.scss";
import HeaderSection from "@/components/layout/demo-restaurant/HeaderSection";

export default function DemoRestaurantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HeaderSection>{children}</HeaderSection>;
}
