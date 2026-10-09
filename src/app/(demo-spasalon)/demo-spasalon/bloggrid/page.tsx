import PageHeaderSpa from "@/components/othersPages/demo-spasalon/PageHeaderSpa";
import BlogGridList from "@/components/othersPages/demo-spasalon/BlogGridList";

export default function SpasalonBlogGridPage() {
  return (
    <>
      <PageHeaderSpa crumb="Blog Grid" title="Blog Grid" />
      <div className="main-content">
        <BlogGridList />
      </div>
    </>
  );
}
