"use client";

import Image from "next/image";
import Link from "next/link";
import { useScaleUpImage } from "@/hooks/useScaleUpImage";

export default function AboutSection() {
  const imgRef = useScaleUpImage<HTMLDivElement>();

  return (
    <div className="section-about-7 tf-spacing-1">
      <div className="tf-container large">
        <div className="row">
          <div className="col-lg-6">
            <div className="box-left" style={{ paddingTop: 8 }}>
              <div className="heading-section d-grid gap_16 mb_48">
                <div className="sub text-label text-uppercase split-text effect-up text_secondary lh-16">
                  WHO WE ARE
                </div>
                <h2 className="title split-text effect-right">
                  Creating Inspiring Workspaces For Everyone
                </h2>
                <p className="desc text-body-2 wow fadeInUp" data-wow-delay="0.4s">
                  Discover our mission to provide flexible coworking solutions for freelancers,
                  startups, and growing businesses. Your success begins with the right space to
                  connect and create.
                </p>
              </div>
              <div className="quote mb_48 wow fadeInUp" data-wow-delay="0.6s">
                <p className="h5 text_primary mb_28 desc fw-5 text-capitalize">
                  As a freelance designer, I needed more than just a desk — I needed a space that
                  fosters focus, creativity, and true collaboration. This coworking hub truly gave
                  me both.
                </p>
                <div className="author">
                  <h5 className="text_primary mb_4">Aisha Malik</h5>
                  <div className="text-body-2 text_secondary">CEO at FlowEdge</div>
                </div>
              </div>
              <Link href="#" className="tf-btn btn-switch-text wow fadeInUp" data-wow-delay="0.8s">
                <span>
                  <span className="btn-double-text" data-text="Learn More">
                    Learn More
                  </span>
                </span>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img-style scale-up-img" ref={imgRef}>
              <Image
                className="scale-up"
                width={835}
                height={626}
                src="/assets/images/demo-coworkingspace/about-1.jpg"
                alt="about"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
