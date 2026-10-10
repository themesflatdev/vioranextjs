"use client";

import Image from "next/image";
import Link from "next/link";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useInfiniteSlide } from "@/hooks/useInfiniteSlide";
import { useAnimateImgItem } from "@/hooks/useAnimateImgItem";

const partners = [
  { src: "/assets/images/logo/partner-1.svg", width: 110, height: 38 },
  { src: "/assets/images/logo/partner-2.svg", width: 120, height: 33 },
  { src: "/assets/images/logo/partner-3.svg", width: 147, height: 38 },
  { src: "/assets/images/logo/partner-4.svg", width: 120, height: 29 },
  { src: "/assets/images/logo/partner-5.svg", width: 110, height: 25 },
  { src: "/assets/images/logo/partner-6.svg", width: 130, height: 25 },
];

export default function HeroSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");
  const marqueeRef = useInfiniteSlide<HTMLDivElement>({ clone: 2, direction: "left", speed: 50 });
  const box3Ref = useAnimateImgItem<HTMLDivElement>();

  return (
    <div className="hero-banner-15">
      <div className="box-left">
        <div className="content">
          <div className="wrap-content">
            <div className="trust d-flex align-items-center gap_12 wow fadeInUp">
              <div className="group">
                <Image
                  className="wow fadeInLeft"
                  data-wow-delay="0.1s"
                  width={48}
                  height={48}
                  src="/assets/images/avatar/group-avatar-5-1.jpg"
                  alt="avatar"
                />
                <Image
                  className="wow fadeInLeft"
                  data-wow-delay="0.2s"
                  width={48}
                  height={48}
                  src="/assets/images/avatar/group-avatar-5-2.jpg"
                  alt="avatar"
                />
                <Image
                  className="wow fadeInLeft"
                  data-wow-delay="0.3s"
                  width={48}
                  height={48}
                  src="/assets/images/avatar/group-avatar-5-3.jpg"
                  alt="avatar"
                />
              </div>
              <p className="text-body-default text_primary">Over 1,000 Active Donors</p>
            </div>
            <div className="heading">
              <h1 className="mb_16 split-text effect-right" ref={titleRef}>
                Together, We Can Make A Difference
              </h1>
              <p className="text-body-2 split-text split-lines-transform" ref={descRef}>
                Every small act of kindness creates ripples of hope. Join us in building a brighter future for those
                in need.
              </p>
            </div>
            <Link href="#" className="tf-btn btn-switch-text btn-bg-primary-2 wow fadeInUp" data-wow-delay=".2s">
              <span>
                <span className="btn-double-text" data-text="Donate Now">
                  Donate Now
                </span>
              </span>
            </Link>
          </div>
          <div className="wrap-infiniteslide">
            <div className="text-caption-1 text_primary mb_24">Our Cherished Partners</div>
            <div className="infiniteslide" ref={marqueeRef}>
              {partners.map((partner) => (
                <div className="marquee-item" key={partner.src}>
                  <Image src={partner.src} alt="partner" width={partner.width} height={partner.height} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="box-right">
        <div className="thumb">
          <Image
            loading="lazy"
            width={920}
            height={932}
            src="/assets/images/demo-charity/hero-banner-1.jpg"
            alt="hero-banner"
          />
        </div>
        <div className="box-1 position-absolute slide-ltr-animated">
          <div className="avatar">
            <Image height={48} width={48} src="/assets/images/avatar/avatar-29.jpg" alt="avatar" />
          </div>
          <p className="text-body-default">&quot;Thanks to this charity, I found hope and a reason to keep going.&quot;</p>
        </div>
        <div className="box-2 position-absolute xl-hide">
          <p className="text-body-default text_primary">Lives transformed by your</p>
          <p className="text-body-default text_primary">generosity</p>
        </div>
        <div className="box-3 position-absolute slide-btt-animated tf-animateCLP-right" ref={box3Ref}>
          <h6 className="mb_8">Passionate Team</h6>
          <p className="text-body-default mb_16">
            Bringing essential help and compassion to those who need it most.
          </p>
          <div className="trust d-flex align-items-center gap_12">
            <div className="group">
              <Image width={48} height={48} src="/assets/images/avatar/group-avatar-5-1.jpg" alt="avatar" />
              <Image width={48} height={48} src="/assets/images/avatar/group-avatar-5-2.jpg" alt="avatar" />
              <Image width={48} height={48} src="/assets/images/avatar/group-avatar-5-3.jpg" alt="avatar" />
            </div>
            <h2>50k</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
