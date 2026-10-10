"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useScaleUpImage } from "@/hooks/useScaleUpImage";
import { useScrollTransform } from "@/hooks/useScrollTransform";
import VideoModal from "@/components/common/VideoModal";
import { quickAmounts } from "@/data/demo-charity/home";

const YOUTUBE_ID = "MLpWrANjFbI";

export default function CampaignSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");
  const thumbRef = useScaleUpImage<HTMLDivElement>();
  const itemRef = useScrollTransform<HTMLDivElement>({ direction: "up", distance: "20%" });
  const progressRef = useRef<HTMLDivElement>(null);

  const [amount, setAmount] = useState("250");
  const [selected, setSelected] = useState<number | null>(250);
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    const el = progressRef.current;
    if (!el) return;

    let animated = false;
    const animate = () => {
      if (animated) return;
      animated = true;
      setTimeout(() => {
        el.style.transition = "width 1s ease";
        el.style.width = "72%";
      }, 300);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) animate();
      },
      { threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleQuickAmount = (value: number) => {
    setSelected(value);
    setAmount(String(value));
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const handleCustomClick = () => {
    setSelected(null);
    inputRef.current?.focus();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(null);
    setAmount(e.target.value);
  };

  const handleSponsor = () => {
    alert(`Thank you for your donation of $${amount}!`);
  };

  return (
    <div className="section-campaign">
      <div className="tf-container w-1840">
        <div className="tf-grid-layout lg-col-2">
          <div className="box-left form-campaign">
            <div className="heading d-grid gap_8 text-center mb_32">
              <div className="trust d-flex flex-column align-items-center gap_8 wow fadeInUp">
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
                <p className="text-body-default text_white">Over 1,000 Active Donors</p>
              </div>
              <h2 className="text_white split-text effect-blur-fade" ref={titleRef}>
                Water is Life
              </h2>
              <p className="text-body-default text_white wow fadeInUp" data-wow-delay=".2s">
                Help our organization by donating today! Donations go to <br className="xl-hide" />
                making a difference for our cause.
              </p>
            </div>
            <div className="d-grid gap_20 mb_32">
              <div className="wrap-progress">
                <div className="tf-progress-bar progress-effect">
                  <div className="value" style={{ width: "0%" }} data-progress={72} ref={progressRef}>
                    <span className="number text-caption-1 fw-7">75%</span>
                  </div>
                </div>
                <div className="progress-info d-flex justify-content-between">
                  <span className="text-body-default text_white d-flex align-items-center gap_4">
                    Raised: <span className="amount h6">$6,820</span>
                  </span>
                  <span className="amount-goal text_white d-flex align-items-center gap_4">
                    Goal:<span className="amount h6">$10,000</span>
                  </span>
                </div>
              </div>
              <div className="amount-input-wrapper">
                <span className="currency-symbol">$</span>
                <input
                  type="number"
                  className="amount-input"
                  min={1}
                  value={amount}
                  onChange={handleInputChange}
                  ref={inputRef}
                />
              </div>
              <div className="tf-grid-layout md-col-3 tf-col-2">
                {quickAmounts.map((value) => (
                  <button
                    type="button"
                    key={value}
                    className={`quick-amount-btn${selected === value ? " highlighted" : ""}`}
                    onClick={() => handleQuickAmount(value)}
                  >
                    ${value}
                  </button>
                ))}
                <button type="button" className="custom-btn" onClick={handleCustomClick}>
                  Custom
                </button>
              </div>
            </div>
            <div className="bot">
              <button type="button" className="sponsor-btn tf-btn btn-bg-primary-2 w-full mb_20 btn-switch-text" onClick={handleSponsor}>
                <span>
                  <span className="btn-double-text" data-text="Sponsor Now">
                    Sponsor Now
                  </span>
                </span>
              </button>
              <div className="text-center">
                <p className="text-caption-2 d-flex align-items-center gap_8 text_white justify-content-center mb_5">
                  <i className="icon-LockKey" />
                  Secure Payment · This site is protected by CAPTCHA and the Google
                </p>
                <p className="text-caption-2 text_white">Privacy Policy and Terms of Service apply.</p>
              </div>
            </div>
          </div>

          <div className="thumb scale-up-img" ref={thumbRef}>
            <Image
              className="scale-up"
              loading="lazy"
              width={915}
              height={915}
              src="/assets/images/demo-charity/campaign.jpg"
              alt="campaign"
            />
            <div className="item scroll-transform" data-distance="20%" ref={itemRef}>
              <div className="img-style widget-video">
                <Image width={229} height={129} src="/assets/images/demo-charity/campaign-item.jpg" alt="campaign" />
                <button
                  type="button"
                  className="popup-youtube"
                  onClick={(e) => {
                    e.preventDefault();
                    setVideoOpen(true);
                  }}
                  aria-label="Play video"
                >
                  <i className="icon-Play2" />
                </button>
              </div>
              <div className="content d-flex align-items-center justify-content-between">
                <div>
                  <div className="text-button text_primary">Ariana</div>
                  <div className="text-caption-2">Project Manager</div>
                </div>
                <Link
                  href="#"
                  className="hover-underline-link text_primary-color text-label text-uppercase letter-spacing-1"
                >
                  view plan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <VideoModal youtubeId={YOUTUBE_ID} open={videoOpen} onClose={() => setVideoOpen(false)} />
    </div>
  );
}
