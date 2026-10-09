"use client";

import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

type BenefitSectionProps = {
  // "home" (default): bg-light-color, 1 row chứa cả title lẫn 4 box.
  // "about": KHÔNG bg-light-color, title nằm ở 1 row riêng (col-xxl-5),
  // 4 box ở row riêng "align-items-end" (xác nhận từng dòng với
  // about.html, không suy từ trang chủ).
  variant?: "home" | "about";
  // Chỉ áp dụng khi variant="home": đổi class align-items của row chứa
  // title+box. Mặc định "center" (trang chủ); trang /service dùng "end"
  // (xác nhận từng dòng với service.html, cùng cấu trúc row/col với trang
  // chủ, chỉ khác align-items).
  alignItems?: "center" | "end";
};

const leftBenefits = [
  {
    icon: "icon-Asclepius",
    title: "Personalized Patient Care",
    desc: "Each valued patient receives tailored treatment plans for their specific health needs.",
  },
  {
    icon: "icon-ClockUser",
    title: "Fast & Flexible Scheduling",
    desc: "We proudly offer quick appointments with minimal wait time and simple booking.",
  },
];

const rightBenefits = [
  {
    icon: "icon-SketchLogo",
    title: "Trusted & Certified Experts",
    desc: "Our licensed doctors bring years of hands-on experience, delivering expert care across various medical.",
  },
  {
    icon: "icon-Stethoscope",
    title: "Cutting-Edge Medical Tools",
    desc: "We actively utilize the latest technology to ensure accurate diagnoses and better outcomes.",
  },
];

function BoxList({ items }: { items: typeof leftBenefits }) {
  return (
    <>
      {items.map((item, index) => (
        <div className={`tf-box-icon style-3 wow fadeInUp${index === 0 ? " mb_48" : ""}`} key={item.title}>
          <div className="icon">
            <i className={item.icon} />
          </div>
          <div className="content">
            <h4 className="mb_12">{item.title}</h4>
            <p className="text-body-default text_secondary">{item.desc}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default function BenefitSection({ variant = "home", alignItems }: BenefitSectionProps) {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("left");

  const heading = (
    <div className="heading-section-5 mb_48">
      <div className="tag text-label text-uppercase wow fadeInUp mb_16">Our Benefit</div>
      <h2 className="title" ref={titleRef}>
        Discover The Finest Medical Benefits
      </h2>
    </div>
  );

  return (
    <div className={`section-benefit tf-spacing-1${variant === "home" ? " bg-light-color" : ""}`}>
      <div className="tf-container medium">
        {variant === "about" && (
          <div className="row">
            <div className="col-xxl-5">{heading}</div>
          </div>
        )}
        <div
          className={`row ${variant === "home" ? `align-items-${alignItems ?? "center"}` : "align-items-end"}`}
        >
          <div className="col-lg-5 col-md-6">
            {variant === "home" && heading}
            <BoxList items={leftBenefits} />
          </div>
          <div className="offset-lg-1 col-md-6">
            <div className="right">
              <BoxList items={rightBenefits} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
