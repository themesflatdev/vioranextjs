import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "@/styles/demo-saas.scss";
import HeaderSection from "@/components/layout/demo-saas/HeaderSection";

// demo-saas.scss's --font-main2 — only a handful of niches need Sora,
// loaded here instead of the root layout.
const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | SaaS - Viora",
    default: "SaaS - Viora",
  },
  description: "A SaaS software platform for business productivity.",
};

export default function DemoSaasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={sora.variable}>
      <HeaderSection>{children}</HeaderSection>
    </div>
  );
}
