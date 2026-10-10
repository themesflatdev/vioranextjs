"use client";

import Image from "next/image";
import Link from "next/link";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

export default function BannerSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("scale");

  return (
    <div className="section-banner-11">
      <div className="tf-container">
        <div className="position-relative">
          <div className="banner">
            <div
              className="bg-banner"
              data-speed="0.8"
              data-background="/assets/images/demo-agriculturefarming/banner-1.jpg"
              style={{ backgroundImage: "url(/assets/images/demo-agriculturefarming/banner-1.jpg)" }}
            />
          </div>
          <div className="wrap">
            <div className="box-content">
              <div className="heading-section mb_40">
                <h3 ref={titleRef} className="text_white mb_8 split-text effect-scale">
                  Connect Directly With Our Team Today
                </h3>
                <p className="text-body-2 text_white wow fadeInUp" data-wow-delay="0.2s">
                  Subscribe now to get the latest news, exclusive offers, and fresh updates delivered straight to
                  your inbox.
                </p>
              </div>
              <div className="bot d-flex gap_20 flex-wrap wow fadeInUp" data-wow-delay="0.4s">
                <Link href="#" className="tf-btn btn-hover-animate-2 btn-bg-secondary">
                  <span>Contact Us</span>
                  <span className="bg-effect" />
                </Link>
                <div className="box-icon d-flex align-items-center gap_10">
                  <div className="icon">
                    <i className="icon-PhoneCall" />
                  </div>
                  <div>
                    <span className="text-label letter-spacing-1 text_white text-uppercase d-block mb_4">
                      Hotline:
                    </span>
                    <span className="text-button text_white">1-555-678-8888</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="person position-absolute lg-hide wow fadeInRight" data-wow-delay="0s" data-wow-duration="2s">
            <Image
              width={699}
              height={496}
              src="/assets/images/demo-agriculturefarming/person-1.png"
              alt="person"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
