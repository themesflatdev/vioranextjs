import PageHeaderBanner from "@/components/othersPages/demo-medical/PageHeaderBanner";
import BlogGridList from "@/components/othersPages/demo-medical/BlogGridList";
import BannerSection from "@/components/homes/demo-medical/BannerSection";

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
