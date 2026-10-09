"use client";

import Image from "next/image";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

const avatars = [
  "/assets/images/avatar/group-avatar-4-1.jpg",
  "/assets/images/avatar/group-avatar-2-2.jpg",
  "/assets/images/avatar/group-avatar-2-3.jpg",
  "/assets/images/avatar/group-avatar-2-4.jpg",
];

export default function NewsletterSection() {
  const subRef = useSplitTextReveal<HTMLDivElement>("up");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");

  return (
    <div className="section-newsletter-1">
      <div className="tf-grid-layout md-col-2 align-items-center">
        <div className="img-thumbs tf-animateCLP-left scale-up-img">
          <Image
            className="scale-up"
            width={960}
            height={679}
            src="/assets/images/demo-corporate/newsletter-1.jpg"
            alt="newsletter"
          />
        </div>
        <div className="content">
          <div className="heading-section style-default mb_40">
            <div className="sub text-label text-uppercase mb_8" ref={subRef}>Newsletter</div>
            <h3 className="title" ref={titleRef}>Stay In The Loop</h3>
            <p className="desc text-body-default text_on-suface-1" ref={descRef}>
              Subscribe to get the latest company news, expert insights, and industry trends
              delivered straight to your inbox — no spam, just value.
            </p>
          </div>
          <form className="form-newsletter style-1 mb_40 wow fadeInUp" onSubmit={(e) => e.preventDefault()}>
            <div className="wrap gap_12">
              <fieldset className="position-relative">
                <input
                  type="email"
                  className="tb-my-input style-border"
                  name="email"
                  placeholder="Enter Your Email"
                  required
                />
              </fieldset>
              <button name="submit" type="submit" className="tf-btn btn-hover-animate-2">
                <span className="text-body-1 fw-6">Subscribe</span>
              </button>
            </div>
          </form>
          <div className="trust d-flex align-items-center gap_12">
            <div className="group">
              {avatars.map((avatar, index) => (
                <Image
                  className="wow fadeInLeft"
                  data-wow-delay={`${(index + 1) * 0.1}s`}
                  key={avatar}
                  width={48}
                  height={48}
                  src={avatar}
                  alt="avatar"
                />
              ))}
            </div>
            <p className="text-caption-1 text_primary">
              18K people are already getting value from our newsletter
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
