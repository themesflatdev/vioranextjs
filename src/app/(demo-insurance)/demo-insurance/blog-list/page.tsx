import type { Metadata } from "next";
import PageTitleBreadcrumb from "@/components/othersPages/demo-insurance/PageTitleBreadcrumb";
import BlogListSection from "@/components/othersPages/demo-insurance/BlogListSection";

export const metadata: Metadata = {
  title: "Blog",
  description: "Latest news, articles and insights from a trusted insurance provider offering life, health and business coverage.",
};

export default function BlogListPage() {
  return (
    <>
      <PageTitleBreadcrumb breadcrumbLabel="Blog List" title="Blog List" />
      <div className="main-content">
        <BlogListSection />
      </div>
    </>
  );
}
