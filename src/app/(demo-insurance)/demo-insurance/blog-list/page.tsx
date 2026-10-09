import PageTitleBreadcrumb from "@/components/othersPages/demo-insurance/PageTitleBreadcrumb";
import BlogListSection from "@/components/othersPages/demo-insurance/BlogListSection";

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
