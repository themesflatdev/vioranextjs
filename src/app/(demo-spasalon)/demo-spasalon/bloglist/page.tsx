import type { Metadata } from "next";
import PageHeaderSpa from "@/components/othersPages/demo-spasalon/PageHeaderSpa";
import BlogListSection from "@/components/othersPages/demo-spasalon/BlogListSection";

export const metadata: Metadata = {
  title: "Blog",
  description: "Latest news, articles and insights from a spa and salon offering massage, skincare and wellness treatments.",
};

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
