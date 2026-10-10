"use client";

import Image from "next/image";
import Link from "next/link";
import { useAnimateImgItem } from "@/hooks/useAnimateImgItem";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

export default function AboutSection() {
  const imgRef = useAnimateImgItem<HTMLDivElement>();
  const headingRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");

  return (
    <div className="tf-container">
      <div className="section-about-17">
        <div className="tf-grid-layout md-col-2 gap-0">
          <div className="img-style tf-animateCLP-left" ref={imgRef}>
            <Image width={705} height={617} src="/assets/images/demo-carservices/about-1.jpg" alt="about" />
          </div>
          <div className="content">
            <div className="heading">
              {/* SỬA: "car servicing & maid service Details" (chữ của niche dọn dẹp lọt vào) */}
              <h2 ref={headingRef} className="text-capitalize mb_16 split-text effect-blur-fade">
                Car Servicing &amp; Maintenance Details
              </h2>
              <p className="text-body-2 wow fadeInUp" data-wow-delay=".2s">
                We recognize that your vehicle is more than just a conveyance. It&apos;s your
                everyday ally, your journey accomplice.
              </p>
            </div>
            <ul className="list wow fadeInUp" data-wow-delay=".2s">
              {/* SỬA: 2 dòng gốc nói về dịch vụ dọn dẹp/maid, đổi thành đúng chủ đề car servicing */}
              <li className="text-body-2 text_white d-flex align-items-center gap_8">
                <i className="icon-CheckCircleFill"></i>We always keep you up to date on your
                car&apos;s service progress
              </li>
              <li className="text-body-2 text_white d-flex align-items-center gap_8">
                <i className="icon-CheckCircleFill"></i>Our technicians treat your car like their
                own
              </li>
            </ul>
            <Link
              href="/portfolio"
              className="tf-btn btn-bg-stroke-dark btn-hover-animate-2 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <span>About Us</span>
              <span></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
