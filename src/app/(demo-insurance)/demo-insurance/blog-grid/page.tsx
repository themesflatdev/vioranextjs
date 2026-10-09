import PageTitleBreadcrumb from "@/components/othersPages/demo-insurance/PageTitleBreadcrumb";
import BlogGridSection from "@/components/othersPages/demo-insurance/BlogGridSection";

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
