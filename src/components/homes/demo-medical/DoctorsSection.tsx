"use client";

import Image from "next/image";
import Link from "next/link";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { doctors, doctorsAll } from "@/data/demo-medical/doctors";

const delays4 = ["", ".1s", ".2s", ".3s"];
const delays8 = [...delays4, ...delays4];

type DoctorsSectionProps = {
  // "home" (default, 4 bác sĩ): "section-team-2 tf-spacing-1", tag thường,
  // có nút "View All". "all" (our-doctor, đủ 8 bác sĩ):
  // "section-team-2 tf-spacing-1 bg-secondary-color", tag "v2", card
  // "card-team style-2 v2 hover-image-2", KHÔNG có nút "View All" (xác
  // nhận từng dòng với our-doctor.html, không suy từ trang chủ).
  variant?: "home" | "all";
};

export default function DoctorsSection({ variant = "home" }: DoctorsSectionProps) {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("left");
  const list = variant === "home" ? doctors : doctorsAll;
  const delays = variant === "home" ? delays4 : delays8;

  return (
    <div className={`section-team-2 tf-spacing-1${variant === "all" ? " bg-secondary-color" : ""}`}>
      <div className="tf-container medium">
        <div className="heading-section-5 mb_48">
          <div className="row align-items-end">
            <div className={variant === "home" ? "col-lg-9" : "col-lg-7"}>
              <div className={`tag${variant === "all" ? " v2" : ""} text-label text-uppercase wow fadeInUp mb_16`}>
                Meet Our Team
              </div>
              <h2 className="title" ref={titleRef}>
                Our Dedicated Professionals
              </h2>
            </div>
            {variant === "home" && (
              <div className="col-lg-3">
                {/* href="#" giữ nguyên như HTML gốc */}
                <a href="#" className="tf-btn btn-hover-animate-border style-border ms-lg-auto">
                  <span>View All</span>
                  <span />
                </a>
              </div>
            )}
          </div>
        </div>
        <div className="tf-grid-layout lg-col-4 md-col-2 gap_30">
          {list.map((doctor, index) => (
            <div
              className={`card-team style-2${variant === "all" ? " v2" : ""} hover-image-2 wow fadeInLeft`}
              data-wow-delay={delays[index]}
              key={doctor.slug}
            >
              <div className="wrap">
                <Link href={`/demo-medical/doctor-detail/${doctor.slug}`} className="img-style">
                  <Image loading="lazy" width={300} height={400} src={doctor.image} alt="team" />
                </Link>
                <div className="content">
                  <Link href={`/demo-medical/doctor-detail/${doctor.slug}`} className="h6 link title">
                    {doctor.name}
                  </Link>
                  <p className="text_secondary text-caption-1 mt_4">{doctor.role}</p>
                </div>
                <ul className="tf-social style-2 d-grid gap_12">
                  <li>
                    <a href="#" className="icon-FacebookLogo" />
                  </li>
                  <li>
                    <a href="#" className="icon-x-logo" />
                  </li>
                  <li>
                    <a href="#" className="icon-LinkedinLogo" />
                  </li>
                </ul>
              </div>
              <a href="#" className="btn-arrow">
                <i className="icon-ArrowUpRight" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
