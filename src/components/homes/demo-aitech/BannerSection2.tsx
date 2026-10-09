"use client";

import Image from "next/image";
import { useRevealElements } from "@/hooks/useRevealElements";

export default function BannerSection2() {
  const banner1Ref = useRevealElements<HTMLDivElement>();
  const banner2Ref = useRevealElements<HTMLDivElement>();

  return (
    <div className="section-banner-2">
      <div className="d-flex gap_20">
        <div className="banner-item" data-ns-animate data-direction="left" data-duration="1" data-delay="0.2s" ref={banner1Ref}>
          <div className="img-style">
            <Image width={890} height={890} loading="lazy" src="/assets/images/demo-aitech/banner-1.png" alt="AI-banner" />
          </div>
          <div className="content">
            <a href="#" className="h2 link fw-5 wow fadeInUp">
              Experience The Power Of Real AI
            </a>
            <div>
              <p className="text-body-2 mb_28 wow fadeInUp">
                Try our interactive demo and see how AI can simplify your workflow in seconds.
              </p>
              <a href="#" className="tf-btn btn-hover-animate-2 btn-bg-white wow fadeInUp">
                <span>Demo Now</span>
                <span />
              </a>
            </div>
          </div>
        </div>
        <div className="banner-item" data-ns-animate data-direction="right" data-duration="1" data-delay="0.2s" ref={banner2Ref}>
          <div className="img-style">
            <Image width={890} height={890} loading="lazy" src="/assets/images/demo-aitech/banner-2.png" alt="AI-banner" />
          </div>
          <div className="content">
            <a href="#" className="tf-btn btn-hover-animate-2 btn-bg-white wow fadeInUp">
              <span>Sketches 3D</span>
              <span />
            </a>
            <div>
              <a href="#" className="h2 link fw-5 mb_40 wow fadeInUp">
                Start your journey with intelligent automation tailored to your business goals.
              </a>
              <a href="#" className="link text_primary-color hover-underline-link text-button wow fadeInUp">
                Demo Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
