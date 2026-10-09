"use client";

import Image from "next/image";
import { useCountUp } from "@/hooks/useCountUp";

export default function OverviewSection() {
  const { value, ref } = useCountUp(99, 700);

  return (
    <div className="section-overview">
      <div className="wrap-box">
        <div className="col-content about">
          <div className="tf-grid-layout tf-col-2 gap-0">
            <div className="counter-item" ref={ref as React.RefObject<HTMLDivElement>}>
              <div className="counter h1 text_secondary-color mb_6">
                <span className="numberCounter">{value}</span>
                <span className="sub-counter">%</span>
              </div>
              <p className="sub-title text-body-2">Customer Satisfaction</p>
              <div className="shape">
                <Image width={190} height={211} src="/assets/images/shape/shape-overview-1.png" alt="shape" />
              </div>
            </div>
            <div className="thumbs">
              <Image
                width={478}
                height={210}
                loading="lazy"
                src="/assets/images/demo-insurance/overview-1.jpg"
                alt="overview"
              />
            </div>
          </div>
          <div className="testimonial">
            <p className="text_white h4">
              &ldquo;My experience with property management services has exceeded expectations. They
              efficiently manage properties with a professional and attentive approach in every
              situation.&rdquo;
            </p>
            <div>
              <a href="#" className="text_white h5 link font-main mb_10">
                Cheyenne Mango
              </a>
              <div className="text-label letter-spacing-1 text-uppercase fw-6 text_white">CEO Themeflat</div>
            </div>
          </div>
        </div>
        <div className="col-content mission">
          <div className="heading">
            <h3 className="title mb_7">3M+ Coverage Value</h3>
            <p className="text-body-2">Total insured value we&apos;ve protected</p>
          </div>
          <a href="#" className="tf-btn btn-hover-animate-2 btn-bg-white">
            <span>Get A Free Quote</span>
            <span />
          </a>
          <div className="shape">
            <Image width={262} height={398} src="/assets/images/shape/shape-overview-2.png" alt="shape" />
          </div>
        </div>
        <div className="col-content vision">
          <div className="thumbs">
            <Image
              loading="lazy"
              width={428}
              height={630}
              src="/assets/images/demo-insurance/overview-2.jpg"
              alt="overview"
            />
          </div>
          <div className="content">
            <h3 className="text_white mb_8">95% Claims Approved</h3>
            <p className="text-body-2 text_white">High claim success rate — fast and reliable</p>
          </div>
        </div>
      </div>
    </div>
  );
}
