"use client";

import Image from "next/image";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

const listItems = [
  { text: "Simple Solutions for Complex Needs", delay: undefined },
  { text: "Solving Complexity with Simplicity", delay: "0.2s" },
  { text: "Simplifying the Complex", delay: "0.4s" },
  { text: "Turning Complexity into Clarity", delay: "0.6s" },
  { text: "Smart Tools for Tough Problems", delay: "0.8s" },
];

export default function AboutSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");

  return (
    <div className="section-about-4 tf-spacing-1">
      <div className="tf-container medium">
        <div className="row align-items-xxl-start align-items-center">
          <div className="col-lg-6 position-relative">
            <div className="thumbs">
              <div className="img-style wow fadeInLeft">
                <Image loading="lazy" width={476} height={476} src="/assets/images/demo-saas/about-2.jpg" alt="about" />
              </div>
              <div className="item position-absolute">
                <Image src="/assets/images/demo-saas/item-4.png" alt="item" width={811} height={704} />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="heading-section-4 mb_24 d-grid gap_16">
              <div className="tag text-label text-uppercase wow fadeInUp text_white mb_8">About Us</div>
              <h3 className="title split-text effect-blur-fade" ref={titleRef}>
                Simple Solutions For Complex Needs
              </h3>
              <p className="desc text-body-default text_muted split-text split-lines-transform" ref={descRef}>
                We create smart SaaS products that simplify work and support your growth.
              </p>
            </div>
            <div className="wrap-list">
              <ul className="list d-grid gap_12">
                {listItems.map((item) => (
                  <li className="text-body-default text_white wow fadeInUp" data-wow-delay={item.delay} key={item.text}>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
