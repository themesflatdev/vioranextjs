"use client";

import Image from "next/image";
import Link from "next/link";
import { useAnimateImgItem } from "@/hooks/useAnimateImgItem";
import { useCountUp } from "@/hooks/useCountUp";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

const counters = [
  { count: 20, duration: 700, suffix: "k", label: "Happy Patients" },
  { count: 10, duration: 700, suffix: "+", label: "Years Experience" },
  { count: 30, duration: 700, suffix: "+", label: "Certificates" },
];

function CounterItem({ count, duration, suffix, label }: (typeof counters)[number]) {
  const { value, ref } = useCountUp(count, duration);

  return (
    <div className="counter-item d-flex flex-column" ref={ref as React.RefObject<HTMLDivElement>}>
      <div className="counter h2 mb_7">
        <span className="numberCounter">{value}</span>
        <span className="sub-counter">{suffix}</span>
      </div>
      <p className="sub-title text-body-2 text_secondary">{label}</p>
    </div>
  );
}

const workingDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// Đoạn mô tả gốc có chữ vô nghĩa ("from and the a preventive care...",
// "and the a the and providing") — đã viết sạch lại, dùng chung cho cả
// biến thể "lead" (our-doctor) lẫn "detail" (doctor-detail/[slug]).
const cleanedBio =
  "Health care is a vital aspect of maintaining overall well-being, encompassing a range of services from preventive care to the treatment of illnesses. It focuses on promoting health, preventing diseases, and providing medical attention when needed.";

type DoctorDetailsSectionProps =
  | {
      variant: "lead";
    }
  | {
      variant: "detail";
      name: string;
      role: string;
    };

export default function DoctorDetailsSection(props: DoctorDetailsSectionProps) {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("left");
  const imageRef = useAnimateImgItem<HTMLDivElement>();

  const heading = (
    <div className="heading-section-5 d-grid gap_16 mb_48">
      <div className="tag text-label text-uppercase wow fadeInUp">team leader</div>
      <h2 className="title" ref={titleRef}>
        {props.variant === "lead" ? "Dr. Linda Parker" : props.name}
      </h2>
      {props.variant === "detail" && <h6>{props.role}</h6>}
      <p className="desc text-body-2 text_secondary">{cleanedBio}</p>
      {props.variant === "detail" && (
        <p className="desc text-body-2 text_secondary">
          Medical services are an essential part of our lives, offering care and treatment for various health
          conditions. These services encompass a wide range of specialties, including primary care, pediatrics,
          cardiology.
        </p>
      )}
    </div>
  );

  const counterRow = (
    <div className="wrap-counter d-flex mb_48">
      {counters.map((counter) => (
        <CounterItem key={counter.label} {...counter} />
      ))}
    </div>
  );

  const image = (
    <div className="img-style tf-animateCLP-right" ref={imageRef}>
      <Image width={600} height={600} src="/assets/images/demo-medical/doctor-detail.jpg" alt="why" />
    </div>
  );

  return (
    <div className="section-doctor-details tf-spacing-1">
      <div className="tf-container medium">
        <div className={`row${props.variant === "lead" ? " align-items-center" : ""}`}>
          <div className="col-lg-6 hover-image-2">
            {props.variant === "lead" ? (
              image
            ) : (
              <div className="box-left">
                {image}
                <div className="working-hours">
                  <h4 className="mb_28 font-main fw-6">Working Hours</h4>
                  <ul className="wrap-working-hours d-grid gap_20">
                    {workingDays.map((day) => (
                      <li className="d-flex gap_4 align-items-center justify-content-between" key={day}>
                        <div className="d-flex gap_4 align-items-center">
                          <h6 className="day">{day}:</h6>
                          <span className="hours text_secondary text-body-default">08:30 - 18:00</span>
                        </div>
                        <h6 className="text_primary-color">
                          <Link href="/demo-medical/appointment" className="hover-line-text">
                            Book Now{" "}
                          </Link>
                        </h6>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
          <div className="col-lg-6">
            <div className="box-content">
              {heading}
              {counterRow}
              {props.variant === "lead" ? (
                <Link href="/demo-medical/doctor-detail/dr-linda-parker" className="tf-btn btn-hover-animate-border style-border wow fadeInUp">
                  <span>Read More</span>
                  <span />
                </Link>
              ) : (
                <div className="experience">
                  <h5 className="mb_25">Education & Experience</h5>
                  <ul className="wrap-experience d-grid gap_20">
                    <li className="d-flex gap_4">
                      <h6 className="tag text_primary-color">Education:</h6>
                      <span className="text-body-default text_secondary">
                        Christian Medical College &amp; Hospital Ludhiana
                      </span>
                    </li>
                    <li className="d-flex gap_4">
                      <h6 className="tag text_primary-color">Specialty:</h6>
                      <span className="text-body-default text_secondary">{props.role}</span>
                    </li>
                    <li className="d-flex gap_4">
                      <h6 className="tag text_primary-color">Degrees:</h6>
                      <span className="text-body-default text_secondary">MD, Board Certified</span>
                    </li>
                    <li className="d-flex gap_4">
                      <h6 className="tag text_primary-color">Training:</h6>
                      <span className="text-body-default text_secondary">Advanced Clinical Training</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
