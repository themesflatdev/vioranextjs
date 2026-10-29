import type { Metadata } from "next";
import PageHeaderSpa from "@/components/othersPages/demo-spasalon/PageHeaderSpa";
import BlogGridList from "@/components/othersPages/demo-spasalon/BlogGridList";

export const metadata: Metadata = {
  title: "Blog",
  description: "Latest news, articles and insights from a spa and salon offering massage, skincare and wellness treatments.",
};

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
