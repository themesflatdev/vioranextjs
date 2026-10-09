"use client";

import Image from "next/image";
import Link from "next/link";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { blogPosts } from "@/data/demo-medical/blogPosts";

const delays = [".1s", ".2s"];

export default function InsightsSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("left");

  return (
    <div className="section-insights">
      <div className="tf-container medium">
        <div className="heading-section-5 text-center mb_48">
          <div className="tag text-label text-uppercase wow fadeInUp mb_16">INSIGHTS</div>
          <h2 className="title" ref={titleRef}>
            Our Latest Insights
          </h2>
        </div>
        <div className="tf-grid-layout lg-col-2">
          {blogPosts.map((post, index) => (
            <div className="blog-item style-2 hover-image wow fadeInLeft" data-wow-delay={delays[index]} key={post.slug}>
              <Link href={`/demo-medical/blogdetail/${post.slug}`} className="img-style">
                <Image loading="lazy" width={280} height={280} src={post.image} alt="blog" />
              </Link>
              <div className="content">
                <div className="text-button text_secondary mb_12">{post.tag}</div>
                <Link href={`/demo-medical/blogdetail/${post.slug}`} className="title h5 mb_11 link hover-line-text">
                  {post.title}
                </Link>
                <div className="bg">
                  <Image loading="lazy" width={345} height={280} src="/assets/images/shape/shape-card-5.png" alt="shape-card" />
                </div>
                <Link href={`/demo-medical/blogdetail/${post.slug}`} className="btn-arrow">
                  <i className="icon-ArrowUpRight" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
