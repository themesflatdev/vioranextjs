"use client";

import Image from "next/image";
import Link from "next/link";
import { useCountUp } from "@/hooks/useCountUp";

// section-overview — all 3 columns are static demo content, no per-slug
// or reused data needed (only about-us.html uses this section).
export default function OverviewSection() {
  const { value, ref } = useCountUp(99, 700);

  return (
    <div className="section-overview">
      <div className="wrap-box">
        <div className="col-content about wow fadeInLeft">
          <div className="tf-grid-layout tf-col-2 gap-0">
            <div className="counter-item" ref={ref as React.RefObject<HTMLDivElement>}>
              <div className="counter h1 text_secondary-color mb_6">
                <span className="numberCounter">{value}</span>
                <span className="sub-counter">%</span>
              </div>
              <p className="sub-title text-body-2">Customer Satisfaction</p>
              <div className="shape">
                <Image src="/assets/images/shape/shape-overview-1.png" alt="shape" width={190} height={211} />
              </div>
            </div>
            <div className="thumbs">
              <Image
                width={478}
                height={210}
                loading="lazy"
                src="/assets/images/demo-corporate/overview-1.jpg"
                alt="overview"
              />
            </div>
          </div>
          <div className="testimonial">
            <p className="text_white h4 fw-4">
              &ldquo;Their solution helped us reduce our documentation workload by over 40% while
              improving internal consistency across global teams. It was one of the best
              investments of the year&rdquo;
            </p>
            <div>
              <a href="#" className="text_white h5 link font-main mb_10">
                Cheyenne Mango
              </a>
              <div className="text-label letter-spacing-1 text-uppercase fw-6 text_white">CEO Avitex</div>
            </div>
          </div>
        </div>
        <div className="col-content mission wow fadeInUp">
          <div className="heading">
            <h3 className="title mb_7">Our Mission</h3>
            <p className="text-body-2 ps-0">
              To help businesses scale smarter by building intelligent, future-ready solutions that
              reduce complexity and unlock potential.
            </p>
          </div>
          <Link href="/contact" className="tf-btn btn-hover-animate-2 btn-bg-white">
            <span>Get A Free Quote</span>
            <span />
          </Link>
          <div className="shape">
            <Image src="/assets/images/shape/shape-overview-2.png" alt="shape" width={262} height={398} />
          </div>
        </div>
        <div className="col-content vision wow fadeInRight">
          <div className="thumbs">
            <Image
              loading="lazy"
              width={428}
              height={630}
              src="/assets/images/demo-corporate/overview-2.jpg"
              alt="overview"
            />
          </div>
          <div className="content">
            <h3 className="text_white mb_8">Our Vision</h3>
            <p className="text-body-2 text_white">
              To become a global leader in enterprise innovation, empowering organizations through
              ethical, intelligent, and scalable technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
