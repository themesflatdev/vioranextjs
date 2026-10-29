import type { Metadata } from "next";
import NotFoundSection from "@/components/othersPages/demo-insurance/NotFoundSection";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for could not be found.",
};

export default function NotFoundPage() {
  return (
    <div className="main-content">
      <NotFoundSection />
    </div>
  );
}
