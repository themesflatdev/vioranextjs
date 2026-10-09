"use client";

import Image from "next/image";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

const items = [1, 2, 3, 4, 5, 6, 7];

export default function IntegrationsSection() {
  const subRef = useSplitTextReveal<HTMLDivElement>("up");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");

  return (
    <div className="section-integrations tf-spacing-10">
      <div className="tf-container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="wrap-group-logo">
              <div className="group-logo">
                <div className="logo-main">
                  <Image width={93} height={82} src="/assets/images/demo-aicontentwriter/item-8.svg" alt="item" />
                </div>
                {items.map((n) => (
                  <div className={`item item-${n}`} key={n}>
                    <Image width={48} height={48} src={`/assets/images/demo-aicontentwriter/item-${n}.svg`} alt="item" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="content">
              <div className="heading-section style-default mb_32">
                <div className="sub text-label text-uppercase text_primary-color" ref={subRef}>
                  Integrations
                </div>
                <h2 className="title" ref={titleRef}>
                  Seamlessly Connect With Your Favorite Tools
                </h2>
                <p className="text-body-2 wow fadeInUp" data-wow-delay="0.4s">
                  Integrate our AI writer with the platforms you already use — from CMS and email to design and
                  automation tools. No disruption, just smarter content where you need it.
                </p>
              </div>
              <a href="#" className="tf-btn btn-hover-animate wow fadeInUp" data-wow-delay="0.6s">
                <span>Explore Integrations</span>
                <span />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
