import BlogWithSidebarClient from "@/components/othersPages/demo-corporate/BlogWithSidebarClient";

export default function BlogWithSidebarPage() {
  return (
    <div className="main-content">
      <div className="blog-post-2 tf-spacing-2">
        <div className="tf-container">
          <div className="heading-section style-default mb_60">
            <div className="sub text-label text-uppercase">Our Blog</div>
            <h2 className="title">Latest News</h2>
          </div>
          <BlogWithSidebarClient />
        </div>
      </div>
    </div>
  );
}
