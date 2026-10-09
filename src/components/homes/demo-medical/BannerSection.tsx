"use client";

import Image from "next/image";
import Link from "next/link";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

type BannerSectionProps = {
  // "home" (default) = trang chủ: nút 1 kiểu btn-switch-text/btn-double-text.
  // "inner" = các trang con: nút 1 kiểu btn-hover-animate btn-bg-white, span
  // text_primary-color (xác nhận từng dòng với about.html, không suy từ trang chủ).
  variant?: "home" | "inner";
};

export default function BannerSection({ variant = "home" }: BannerSectionProps) {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("left");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");

  return (
    <div className="section-banner tf-spacing-1">
      <div className="banner">
        <Image
          loading="eager"
          width={1920}
          height={336}
          src="/assets/images/demo-medical/banner-1.jpg"
          alt="banner"
        />
      </div>
      <div className="content d-flex align-items-center">
        <div className="tf-container medium">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="text_white" ref={titleRef}>
                Ready To Take Charge Of Your Health?
              </h2>
            </div>
            <div className="col-lg-6">
              <div className="box-right">
                <p className="text-body-2 text_white mb_32" ref={descRef}>
                  Let&apos;s talk about how we can support your health journey.
                </p>
                <div className="wrap-btn d-flex gap_20 wow fadeInUp">
                  {variant === "home" ? (
                    <Link href="/demo-medical/appointment" className="tf-btn btn-switch-text btn-bg-white-2">
                      <span>
                        <span className="btn-double-text" data-text="Schedule A Free Consultation">
                          Schedule A Free Consultation
                        </span>
                      </span>
                    </Link>
                  ) : (
                    <Link href="/demo-medical/appointment" className="tf-btn btn-hover-animate btn-bg-white">
                      <span className="text_primary-color">Schedule A Free Consultation</span>
                      <span />
                    </Link>
                  )}
                  {/* Số điện thoại khác hero (315-666-6688 vs 1-555-678-8888) — lỗi demo, giữ nguyên */}
                  <a href="#" className="tf-btn btn-hover-animate-border style-border-white">
                    <span>Call Us: 315-666-6688</span>
                    <span />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
