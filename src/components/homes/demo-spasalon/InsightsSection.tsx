"use client";

import Image from "next/image";
import Link from "next/link";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { spaBlogPosts } from "@/data/demo-spasalon/blogPosts";

export default function InsightsSection() {
  const subRef = useSplitTextReveal<HTMLDivElement>("up");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");

  return (
    <div className="section-insights-4 sw-layout tf-spacing-1 pt-0">
      <div className="tf-container medium">
        <div className="heading-section d-grid gap_8 text-center mb_48">
          <div className="sub text-label text-uppercase split-text effect-up" ref={subRef}>
            Latest New
          </div>
          {/* "Pet Care Tips & Tricks" in the source HTML — wrong-niche filler
              copy, corrected to spa content per CLAUDE.md rule 4. */}
          <h2 className="title split-text effect-blur-fade" ref={titleRef}>
            Spa & Wellness Tips
          </h2>
        </div>
        <div className="tf-grid-layout md-col-3 gap_30">
          {spaBlogPosts.map((post) => (
            <div className="blog-item style-4 hover-image" key={post.key}>
              <Link href={`/demo-spasalon/blogdetail/${post.key}`} className="img-style mb_26">
                <Image loading="lazy" width={410} height={308} src={post.image} alt="blog" />
              </Link>
              <div className="content">
                <div className="tag text-label">{post.tag}</div>
                <h5 className="title">
                  <Link href={`/demo-spasalon/blogdetail/${post.key}`} className="link hover-line-text">
                    {post.title}
                  </Link>
                </h5>
                <ul className="meta-post">
                  <li className="text-caption-1">
                    <div>
                      <a href="#" className="link">
                        {post.author}
                      </a>
                    </div>
                  </li>
                  <li className="text-caption-1">{post.date}</li>
                </ul>
              </div>
            </div>
          ))}
          <div className="banner hover-image">
            <Link href="/demo-spasalon/booking" className="img-style">
              <Image loading="lazy" width={410} height={458} src="/assets/images/demo-spasalon/insights-banner.jpg" alt="blog" />
            </Link>
            <div className="content">
              <h4 className="mb_24">
                <Link href="/demo-spasalon/booking" className="link text_white">
                  Summer Glow Special
                </Link>
              </h4>
              <Link href="/demo-spasalon/booking" className="tf-btn btn-switch-text">
                <span>
                  <span className="btn-double-text" data-text="Book now">
                    Book now
                  </span>
                </span>
              </Link>
            </div>
            <div className="sale">
              <h6 className="text_white">FROM</h6>
              <h2 className="price text_white">
                <span className="h4 text-white">$</span>15
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
