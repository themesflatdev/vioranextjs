"use client";

import Image from "next/image";
import { useScrollTransform } from "@/hooks/useScrollTransform";
import { useInfiniteSlide } from "@/hooks/useInfiniteSlide";

const easyInstallList = [
  "One-Click Setup",
  "No Coding Required",
  "Clear Documentation",
  "Quick Theme Import",
  "One-Click Setup",
  "No Coding Required",
  "Clear Documentation",
  "Quick Theme Import",
];

export default function OverviewSection() {
  const overview1Ref = useScrollTransform<HTMLDivElement>({ direction: "right" });
  const easyInstallListRef = useInfiniteSlide<HTMLUListElement>({ clone: 2, direction: "up" });

  return (
    <div className="section-overview-landing tf-spacing-1">
      <div className="tf-container position-relative">
        <div className="wrap-overview gap_20">
          <div className="d-grid gap_20 col-overview-1 wow fadeInLeft">
            <div className="overview-card card-1">
              <h4 className="title text_primary text-capitalize text-center mb_14">
                Built-In SEO
                <br />
                Optimization
              </h4>
              <div ref={overview1Ref} className="img-style scroll-transform" data-direction="right">
                <Image src="/assets/images/landing/overview-1.png" alt="overview" width={242} height={222} />
              </div>
              <div className="shape position-absolute">
                <Image src="/assets/images/landing/shape-1.png" alt="shape" width={400} height={380} />
              </div>
            </div>
            <div className="overview-card card-2">
              <div className="img-style mb_30">
                <Image src="/assets/images/landing/overview-2.jpg" alt="overview" width={400} height={236} />
                <ul ref={easyInstallListRef} className="infiniteslide" data-clone="2" data-style="up">
                  {easyInstallList.map((text, i) => (
                    <li key={i} className="d-flex align-items-center gap_8 text-button text_primary">
                      <i className="icon-CheckCircleFill" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
              <h4 className="title text_primary text-capitalize text-center">
                Easy Installation
                <br /> & Use
              </h4>
            </div>
          </div>
          <div className="overview-card large wow fadeInUp">
            <div className="content text-center">
              <h3 className="title text_primary text-capitalize text-center mb_16">
                fully responsive <br />
                layout for any device
              </h3>
              <p className="text-body-2 text_primary">
                Deliver a perfect website experience with high-resolution images and graphics.
              </p>
            </div>
            <div className="img-style">
              <Image
                className="img-shape"
                width={462}
                height={495}
                src="/assets/images/landing/shape-overview.png"
                alt="overview"
              />
              <Image
                className="img-demo"
                width={630}
                height={724}
                src="/assets/images/landing/demo-overview.png"
                alt=""
              />
            </div>
          </div>
          <div className="d-grid gap_20 col-overview-2 wow fadeInRight">
            <div className="overview-card card-3">
              <h4 className="title text_primary text-capitalize text-center mb_14">
                Stylized Font
                <br />
                Construction
              </h4>
              <div className="img-style">
                <Image src="/assets/images/landing/overview-4.png" alt="overview" width={352} height={234} />
              </div>
            </div>
            <div className="overview-card card-4">
              <div className="img-style">
                <Image src="/assets/images/landing/overview-5.png" alt="overview" width={359} height={239} />
              </div>
              <h4 className="title text_primary text-capitalize text-center">
                Fast & Friendly <br />
                Support
              </h4>
              <div className="shape position-absolute">
                <Image src="/assets/images/landing/shape-2.png" alt="shape" width={400} height={380} />
              </div>
            </div>
          </div>
        </div>
        <div className="shape position-absolute">
          <Image src="/assets/images/landing/shape-3.png" alt="shape" width={1632} height={905} />
        </div>
      </div>
    </div>
  );
}
