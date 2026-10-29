import type { Metadata } from "next";
import BlogWithSidebarClient from "@/components/othersPages/demo-corporate/BlogWithSidebarClient";

export const metadata: Metadata = {
  title: "Blog",
  description: "Latest news, articles and insights from a corporate consulting firm delivering business strategy and professional services.",
};

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
