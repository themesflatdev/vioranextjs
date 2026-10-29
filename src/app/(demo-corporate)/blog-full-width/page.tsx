import BlogFullWidthClient from "@/components/othersPages/demo-corporate/BlogFullWidthClient";

export default function BlogFullWidthPage() {
  return (
    <div className="main-content">
      <div className="blog-post tf-spacing-1">
        <div className="tf-container">
          <div className="heading-section style-default mb_60">
            <div className="sub text-label text-uppercase">Our Blog</div>
            <h2 className="title">Latest News</h2>
          </div>
          <BlogFullWidthClient />
        </div>
      </div>
    </div>
  );
}
