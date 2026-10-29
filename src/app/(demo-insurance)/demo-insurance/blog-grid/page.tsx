import type { Metadata } from "next";
import PageTitleBreadcrumb from "@/components/othersPages/demo-insurance/PageTitleBreadcrumb";
import BlogGridSection from "@/components/othersPages/demo-insurance/BlogGridSection";

export const metadata: Metadata = {
  title: "Blog",
  description: "Latest news, articles and insights from a trusted insurance provider offering life, health and business coverage.",
};

export default function BlogGridPage() {
  return (
    <>
      <PageTitleBreadcrumb breadcrumbLabel="Blog Grid" title="Blog" />
      <div className="main-content">
        <BlogGridSection />
      </div>
    </>
  );
}
