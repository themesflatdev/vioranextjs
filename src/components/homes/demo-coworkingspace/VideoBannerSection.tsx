"use client";

import Link from "next/link";
import useLazyVideo from "@/hooks/useLazyVideo";

// NOTE: video-coworking.mp4 chưa có trong public/assets/video/ (người dùng
// đã xoá thư mục video khỏi bản HTML gốc vì quá nặng). Đường dẫn vẫn giữ
// đúng theo gốc; 404 của file này là dự kiến, không phải bug.
export default function VideoBannerSection() {
  const { containerRef, shouldLoad } = useLazyVideo<HTMLDivElement>();

  return (
    <div className="section-banner-6" ref={containerRef}>
      <video className="thumb thumbs-video" muted autoPlay loop playsInline preload="none">
        {shouldLoad && <source src="/assets/video/video-coworking.mp4" type="video/mp4" />}
      </video>
      <div className="content">
        <h2 className="text_white split-text effect-right">
          Flexible Workspaces That <br className="lg-hide" />
          Empower Success
        </h2>
        <Link href="#" className="tf-btn btn-switch-text wow fadeInUp" data-wow-delay="0.4s">
          <span>
            <span className="btn-double-text" data-text="Discover More">
              Discover More
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
}
