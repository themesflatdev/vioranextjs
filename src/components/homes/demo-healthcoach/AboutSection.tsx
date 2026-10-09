"use client";

import { useAnimateImgItem } from "@/hooks/useAnimateImgItem";
import { useCountUp } from "@/hooks/useCountUp";
import { useScrollTransform } from "@/hooks/useScrollTransform";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

function Counter({ target, duration }: { target: number; duration: number }) {
  const { value, ref } = useCountUp(target, duration);
  return (
    <span className="numberCounter" data-count={target} data-duration={duration} ref={ref as React.RefObject<HTMLSpanElement>}>
      {value}
    </span>
  );
}

export default function AboutSection() {
  const thumbRef = useAnimateImgItem<HTMLDivElement>();
  const scrollTransformRef = useScrollTransform<HTMLDivElement>({ distance: "40%" });
  const subRef = useSplitTextReveal<HTMLDivElement>("up");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("scale");

  return (
    <div className="section-about-5 tf-spacing-1">
      <div className="tf-container medium">
        <div className="row">
          <div className="col-lg-5">
            <div className="wrap-thumb position-relative">
              <div className="thumbs img-style tf-animateCLP-left" ref={thumbRef}>
                <div
                  className="image"
                  data-speed="0.7"
                  data-background="/assets/images/demo-healthcoach/about-1.jpg"
                  style={{ backgroundImage: "url(/assets/images/demo-healthcoach/about-1.jpg)" }}
                />
              </div>
              <div className="item scroll-transform" data-distance="40%" ref={scrollTransformRef}>
                <div className="text-circle">
                  <svg className="textcircle" viewBox="0 0 500 500">
                    <defs>
                      <path id="textcircle-healthcoach" d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z" />
                    </defs>
                    <text>
                      <textPath xlinkHref="#textcircle-healthcoach" textLength={900} className="text">
                        REAL TALK - REAL GROWTH -
                      </textPath>
                    </text>
                  </svg>
                </div>
                <i className="icon-ArrowUpRight" />
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="content">
              <div className="heading-section mb_28">
                <div className="sub text-label text-uppercase text_primary-color split-text effect-up mb_12" ref={subRef}>
                  About Us
                </div>
                <h3 className="title text_primary-color mb_16 split-text effect-scale" ref={titleRef}>
                  Empowering You Through Mind-Body Wellness
                </h3>
                <p className="desc text-body-default wow fadeInUp">
                  At Viora, we are dedicated professionals committed to supporting your journey toward mental
                  clarity, emotional balance, and lasting well-being. With deep experience in therapy personal
                  coaching, our team offers a safe, judgment-free space where you can explore your thoughts,
                  feelings, and goals.
                </p>
              </div>
              <a href="#" className="tf-btn btn-hover-animate-2 btn-bg-secondary-2 btn-px-28 wow fadeInUp" data-wow-delay="0.4s">
                <span>About Us</span>
                <span />
              </a>
              <div className="wrap-counter d-flex justify-content-between">
                <div className="counter-item">
                  <div className="counter h3 text_primary-color mb_8">
                    <Counter target={10} duration={700} /> <span className="sub-counter">Years</span>
                  </div>
                  <p className="sub-title text-caption-1 text_primary">Professional Experience</p>
                </div>
                <div className="counter-item">
                  <div className="counter h3 text_primary-color mb_8">
                    <span className="sub-counter">+</span>
                    <Counter target={350} duration={700} />
                  </div>
                  <p className="sub-title text-caption-1 text_primary">Trusted Happy Clients</p>
                </div>
                <div className="counter-item">
                  <div className="counter h3 text_primary-color mb_8">
                    <Counter target={92} duration={700} />
                    <span className="sub-counter">%</span>
                  </div>
                  <p className="sub-title text-caption-1 text_primary">Client Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
