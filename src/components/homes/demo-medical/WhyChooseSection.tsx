"use client";

import Image from "next/image";
import Link from "next/link";
import { useAnimateImgItem } from "@/hooks/useAnimateImgItem";
import { useCountUp } from "@/hooks/useCountUp";
import { useScaleUpImage } from "@/hooks/useScaleUpImage";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

type WhyChooseSectionProps = {
  // "home" (default): ảnh bên PHẢI, scale-up-img (scrub), nút "About Us" ->
  // /demo-medical/about. "about": "section-why-2 v2 bg-light-color", ảnh
  // bên TRÁI (.col-md-6.hover-image-2 > .img-style.tf-animateCLP-right,
  // KHÔNG scale-up), nội dung bọc thêm .box-content, nút href="#" (xác
  // nhận từng dòng với about.html, không suy từ trang chủ).
  variant?: "home" | "about";
};

const counters = [
  { count: 25, duration: 700, suffix: "+", staticSuffix: ",000", label: "Happy Patients Treated" },
  { count: 98, duration: 700, suffix: "%", label: "Patient Satisfaction Rate" },
];

function CounterItem({ count, duration, suffix, staticSuffix, label }: (typeof counters)[number]) {
  const { value, ref } = useCountUp(count, duration);

  return (
    <div className="counter-item d-flex flex-column" ref={ref as React.RefObject<HTMLDivElement>}>
      <div className="counter h2 mb_7">
        <span className="numberCounter">{value}</span>
        {staticSuffix && <span>{staticSuffix}</span>}
        <span className="sub-counter">{suffix}</span>
      </div>
      <p className="sub-title text-body-2 text_secondary">{label}</p>
    </div>
  );
}

export default function WhyChooseSection({ variant = "home" }: WhyChooseSectionProps) {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("left");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");
  const animateRef = useAnimateImgItem<HTMLDivElement>();
  const scaleRef = useScaleUpImage<HTMLDivElement>();

  const content = (
    <>
      <div className="heading-section-5 d-grid gap_16 mb_48">
        <div className="tag text-label text-uppercase wow fadeInUp">Why Choose Us</div>
        <h2 className="title" ref={titleRef}>
          Excellence In Modern Healthcare
        </h2>
        <p className="desc text-body-2 text_secondary" ref={descRef}>
          Blending medical expertise & cutting-edge technology to provide a new standard in
          personalized, patient-centered healthcare.
        </p>
      </div>
      <div className="wrap-counter d-flex mb_48">
        {counters.map((counter) => (
          <CounterItem key={counter.label} {...counter} />
        ))}
      </div>
      {variant === "home" ? (
        <Link href="/demo-medical/about" className="tf-btn btn-hover-animate-border style-border wow fadeInUp">
          <span>About Us</span>
          <span />
        </Link>
      ) : (
        <a href="#" className="tf-btn btn-hover-animate-border style-border wow fadeInUp">
          <span>About Us</span>
          <span />
        </a>
      )}
    </>
  );

  const image =
    variant === "home" ? (
      <div
        className="img-style scale-up-img tf-animateCLP-right"
        ref={(el) => {
          animateRef.current = el;
          scaleRef.current = el;
        }}
      >
        <Image className="scale-up" width={600} height={600} src="/assets/images/demo-medical/why-2.jpg" alt="why" />
      </div>
    ) : (
      <div className="img-style tf-animateCLP-right" ref={animateRef}>
        <Image width={600} height={600} src="/assets/images/demo-medical/why-2.jpg" alt="why" />
      </div>
    );

  return (
    <div className={variant === "home" ? "section-why-2 tf-spacing-1" : "section-why-2 v2 bg-light-color tf-spacing-1"}>
      <div className="tf-container medium">
        <div className="row align-items-center">
          {variant === "home" ? (
            <>
              <div className="col-md-6">{content}</div>
              <div className="col-md-6">{image}</div>
            </>
          ) : (
            <>
              <div className="col-md-6 hover-image-2">{image}</div>
              <div className="col-md-6">
                <div className="box-content">{content}</div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
