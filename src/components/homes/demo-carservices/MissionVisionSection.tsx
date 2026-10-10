"use client";

import Link from "next/link";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

export default function MissionVisionSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");

  return (
    <div className="section-mission-vision tf-spacing-1">
      <div className="tf-container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-5 col-lg-4 col-md-8">
            <div className="thumb-large overflow-hidden">
              <div
                data-speed="0.7"
                className="img"
                data-background="/assets/images/demo-carservices/mission-vision-1.jpg"
                style={{ backgroundImage: "url(/assets/images/demo-carservices/mission-vision-1.jpg)" }}
              />
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
            <div className="content">
              <div className="heading mb_48">
                <h2 ref={titleRef} className="mb_16 split-text effect-blur-fade">
                  Committed to Excellence in Car Service
                </h2>
                <p className="text-body-2 wow fadeInUp" data-wow-delay="0.2s">
                  We understand your car is more than just transportation. It&rsquo;s your daily partner, your
                  trusted companion on every journey, and a reflection of your lifestyle. That&rsquo;s why we deliver
                  service with care, expertise.
                </p>
              </div>
              <Link
                href="/portfolio"
                className="tf-btn btn-bg-stroke-dark btn-hover-animate-2 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <span>View More</span>
                <span className="bg-effect" />
              </Link>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4">
            <div className="wrap-box-icon">
              <div className="box-icon">
                <div className="icon">
                  <i className="icon-CrownSimple" />
                </div>
                <div>
                  <h5 className="mb_8">Our Mission</h5>
                  <p className="text-caption-1">Providing reliable and transparent car care services.</p>
                </div>
              </div>
              <div className="box-icon">
                <div className="icon">
                  <i className="icon-Target" />
                </div>
                <div>
                  <h5 className="mb_8">Our Vision</h5>
                  <p className="text-caption-1">To be the most trusted partner in car care and service.</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="thumb overflow-hidden">
                <div
                  data-speed="0.9"
                  className="img"
                  data-background="/assets/images/demo-carservices/mission-vision-2.jpg"
                  style={{ backgroundImage: "url(/assets/images/demo-carservices/mission-vision-2.jpg)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
