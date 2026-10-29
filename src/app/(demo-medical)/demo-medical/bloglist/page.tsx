import type { Metadata } from "next";
import PageHeaderBanner from "@/components/othersPages/demo-medical/PageHeaderBanner";
import BlogListSection from "@/components/othersPages/demo-medical/BlogListSection";
import BlogSidebar from "@/components/othersPages/demo-medical/BlogSidebar";
import BannerSection from "@/components/homes/demo-medical/BannerSection";

export const metadata: Metadata = {
  title: "Blog",
  description: "Latest news, articles and insights from a pediatric medical clinic providing trusted healthcare for children and families.",
};

export default function BlogListPage() {
  return (
    <>
      <PageHeaderBanner crumb="Blog List" title="Blog List" />
      <div className="main-content">
        <div className="blog-post-2 v2 tf-spacing-1">
          <div className="tf-container">
            <div className="row">
              <div className="col-lg-8">
                <BlogListSection />
              </div>
              <div className="col-lg-4">
                <BlogSidebar />
              </div>
            </div>
          </div>
        </div>
        <BannerSection variant="inner" />
      </div>
    </>
  );
}
