import type { Metadata } from "next";
import PageHeaderBanner from "@/components/othersPages/demo-medical/PageHeaderBanner";
import BlogGridList from "@/components/othersPages/demo-medical/BlogGridList";
import BannerSection from "@/components/homes/demo-medical/BannerSection";

export const metadata: Metadata = {
  title: "Blog",
  description: "Latest news, articles and insights from a pediatric medical clinic providing trusted healthcare for children and families.",
};

export default function BlogGridPage() {
  return (
    <>
      <PageHeaderBanner crumb="Blog Grid" title="Blog Grid" />
      <div className="main-content">
        <div className="blog-post v2 tf-spacing-1">
          <div className="tf-container">
            <BlogGridList />
          </div>
        </div>
        <BannerSection variant="inner" />
      </div>
    </>
  );
}
