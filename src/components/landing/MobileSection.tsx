"use client";

import Image from "next/image";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

const boxIcons = [
  { icon: "icon-Gauge", title: "Super High Performance", desc: "Experience lightning-fast speed and seamless functionality every time.", delay: "" },
  { icon: "icon-DeviceMobile", title: "Friendly Mobile Users", desc: "Designed for a flawless experience on any mobile device.", delay: "0.1s" },
  { icon: "icon-Code", title: "Optimal Code", desc: "Clean, efficient code for superior performance and easy customization.", delay: "0.2s" },
  { icon: "icon-Devices", title: "Fully Responsive", desc: "Perfectly adaptable to all screen sizes for a smooth user experience.", delay: "0.3s" },
];

// 4 `.wrap-video`, 1 per phone mock-up. The 4 source videos
// (`moblie-1..4.mp4` — misspelled in the original theme, kept as-is) were
// removed from the project (too large); paths are still wired up correctly,
// so 404s on these 4 specifically are expected until the user supplies them.
const videoIndexes = [1, 2, 3, 4];

export default function MobileSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");

  return (
    <div id="mobile" className="section-device-mobile tf-spacing-1 section">
      <div className="tf-container">
        <div className="heading-section d-grid gap_12 mb_52 text-center">
          <h2 ref={titleRef} className="title text_white split-text effect-right">
            Mobile-First Experience Theme
          </h2>
          <p ref={descRef} className="desc text_white text-body-2 split-text split-lines-transform">
            No reason to worry about the growing mobile device market. Your site will look razor sharp on any device.
          </p>
        </div>
        <div className="wrap-device-mobile tf-grid-layout lg-col-4 sm-col-2">
          {videoIndexes.map((n) => (
            <div className="device-mobile_item" key={n}>
              <div className="wrap-video">
                <Image
                  className="img-phone_simlation"
                  width={320}
                  height={650}
                  loading="lazy"
                  src="/assets/images/landing/phone.png"
                  alt="phone"
                />
                <video preload="none" playsInline autoPlay loop muted controls>
                  <source src={`/assets/video/moblie-${n}.mp4`} type="video/mp4" />
                </video>
              </div>
            </div>
          ))}
        </div>
        <div className="tf-grid-layout lg-col-4 sm-col-2">
          {boxIcons.map((b) => (
            <div
              key={b.icon}
              className="tf-box-icon style-2 text-center hover-effect-icon wow fadeInUp"
              data-wow-delay={b.delay}
            >
              <div className="icon">
                <i className={b.icon} />
              </div>
              <div className="content">
                <h5 className="mb_12 title text_white">{b.title}</h5>
                <p className="text-body-default text_muted">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
