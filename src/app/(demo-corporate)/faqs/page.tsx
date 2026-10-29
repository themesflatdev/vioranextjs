import type { Metadata } from "next";
import FaqsSection from "@/components/othersPages/demo-corporate/FaqsSection";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Answers to frequently asked questions about a corporate consulting firm delivering business strategy and professional services.",
};

export default function FaqsPage() {
  return (
    <div className="main-content">
      <FaqsSection />
    </div>
  );
}
