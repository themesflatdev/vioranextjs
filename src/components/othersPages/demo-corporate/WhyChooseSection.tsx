"use client";

import Image from "next/image";
import Link from "next/link";
import { useAnimateImgItem } from "@/hooks/useAnimateImgItem";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

// Box 2 and 3 corrected per corporate-pages-remaining.md (original text
// leaked insurance-niche copy: "Fast & Fair Claims" / "24/7 support" /
// "Licensed advisors"). Box 1 kept as-is.
const boxes = [
  {
    icon: "icon-UserFocus",
    title: "Personalized Plans",
    desc: "Flexible options tailored to your unique needs and budget.",
  },
  {
    icon: "icon-ClockClockwise",
    title: "Rapid Response",
    desc: "Streamlined workflows with dedicated support whenever you need it.",
  },
  {
    icon: "icon-Lifebuoy",
    title: "Expert Support",
    desc: "Seasoned consultants ready to guide you every step of the way.",
  },
];

// section-why — image parallax is the ScrollSmoother built-in `data-speed`
// effect (same as service-detail's expected-outcomes image), no extra hook.
export default function WhyChooseSection() {
  const imgRef = useAnimateImgItem<HTMLDivElement>();
  const subRef = useSplitTextReveal<HTMLDivElement>("up");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");

  return (
    <div className="section-why v2 tf-spacing-1">
      <div className="tf-container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="thumbs tf-animateCLP-left ms-0" ref={imgRef}>
              <Image
                data-speed=".8"
                loading="lazy"
                width={655}
                height={873}
                src="/assets/images/demo-corporate/why-1.jpg"
                alt="why"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="box-right">
              <div className="heading-section style-default mb_44">
                <div className="sub text-label text-uppercase" ref={subRef}>
                  Why Choose Us
                </div>
                <h2 className="title" ref={titleRef}>
                  Why Leading Businesses Trust Us
                </h2>
                <p className="desc text-body-2 text_on-suface-1 mt_4 font-4" ref={descRef}>
                  We&apos;re more than a service provider — we&apos;re your strategic partner for
                  long-term growth, operational efficiency, and digital innovation.
                </p>
              </div>
              <div className="wrap-box-icon">
                {boxes.map((box, index) => (
                  <div
                    className="tf-box-icon style-1 wow fadeInRight"
                    data-wow-delay={`${(index + 1) * 0.2}s`}
                    key={box.title}
                  >
                    <div className="box">
                      <div className="icon">
                        <i className={box.icon} />
                      </div>
                      <h5>{box.title}</h5>
                    </div>
                    <p className="text-body-default text_secondary">{box.desc}</p>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="tf-btn btn-hover-animate-2 wow fadeInUp" data-wow-delay="0.8s">
                <span>Talk To An Expert</span>
                <span />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
