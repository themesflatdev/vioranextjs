import PageHeaderSpa from "@/components/othersPages/demo-spasalon/PageHeaderSpa";
import BlogListSection from "@/components/othersPages/demo-spasalon/BlogListSection";

export default function SpasalonBlogListPage() {
  return (
    <>
      <PageHeaderSpa crumb="Blog List" title="Blog List" />
      <div className="main-content">
        <BlogListSection />
      </div>
    </>
  );
}
