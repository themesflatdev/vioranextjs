"use client";

import Image from "next/image";
import { useSectionTrigger } from "@/hooks/useSectionTrigger";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

const introParagraphs = [
  "In today’s fast-moving markets, strategy isn’t just about planning — it’s about adapting, positioning, and creating value continuously.",
  "We help organizations define their goals, assess opportunities, and develop actionable strategies that lead to measurable business outcomes.",
  "Whether you're launching a product, entering new markets, or rethinking your model, we bring clarity, structure, and expertise to every phase.",
];

const offerBoxes = [
  {
    icon: "icon-UserFocus",
    title: "Market Research & Competitive Analysis",
    desc: "Deep analysis of industry trends, market demands, and competitor behavior to identify your edge.",
  },
  {
    icon: "icon-ClockClockwise",
    title: "Business Model Innovation",
    desc: "Rethink how you create, deliver, and capture value in a changing business landscape.",
  },
  {
    icon: "icon-Lifebuoy",
    title: "Strategic Planning & Growth Roadmaps",
    desc: "Define a clear path forward with milestones, KPIs, and actionable priorities aligned with your business vision.",
  },
];

// service-detail.html only ever demos "Business Strategy" content — only
// the small "sub" label above the H1 is dynamic (services.ts item.title
// looked up by slug); the H1 headline, intro copy, hero image and "What We
// Offer" block are one shared static block for every slug (per CLAUDE.md
// rule 4 / master-workflow note on single shared demo body).
export default function ServiceDetailHero({ sub }: { sub: string }) {
  const sectionRef = useSectionTrigger<HTMLDivElement>();
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");
  const offerTitleRef = useSplitTextReveal<HTMLHeadingElement>("right");

  return (
    <div className="section-strategy tf-spacing-1">
      <div className="tf-container">
        <div className="heading-section style-2 mb_60">
          <div className="heading d-flex align-items-center justify-content-between gap_16">
            <div className="d-grid gap_16 left">
              <div className="sub text-label text-uppercase lh-16 wow fadeInUp">{sub}</div>
              <h1 className="title" ref={titleRef}>
                Aligning Vision With Execution To Unlock Sustainable Growth.
              </h1>
            </div>
            <div className="right">
              <div className="btn_wrapper ms-lg-auto">
                <a href="#" className="tf-btn btn-hover-animate-2 wow fadeInRight btn-item btn-hover">
                  <span className="h4">
                    Get <br />
                    Started
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="bot d-flex align-items-center gap_12 wow fadeInUp" data-wow-delay="0.2s">
            <Image
              width={240}
              height={100}
              src="/assets/images/demo-corporate/img-heading.jpg"
              alt="images"
            />
            <p className="text-body-2 text_secondary">
              We help you define clear goals, assess market opportunities, and
              create actionable plans that drive sustainable growth.
            </p>
          </div>
        </div>
        <div
          className="thumbs mb_60 section-triger position-relative overflow-hidden"
          ref={sectionRef}
        >
          <Image
            className="image-inner"
            loading="lazy"
            width={1410}
            height={680}
            src="/assets/images/demo-corporate/service-detail-1.jpg"
            alt="service-detail"
          />
          <div className="uncover">
            <div className="uncover_slice" />
            <div className="uncover_slice" />
            <div className="uncover_slice" />
          </div>
        </div>
        <div className="tf-grid-layout md-col-3 gap_24">
          {introParagraphs.map((text) => (
            <p className="text-body-2 text_secondary" key={text}>
              {text}
            </p>
          ))}
        </div>
        <div className="we-offer v2 bg-light-color">
          <div className="heading-section mb_44">
            <h2 ref={offerTitleRef}>What We Offer</h2>
          </div>
          <div className="wrap-box-icon mb_44">
            {offerBoxes.map((box, index) => (
              <div
                className="tf-box-icon style-1 v2 wow fadeInUp"
                data-wow-delay={`${(index + 1) * 0.1}s`}
                key={box.title}
              >
                <div className="box">
                  <div className="icon">
                    <i className={box.icon} />
                  </div>
                  <h5 className="title">{box.title}</h5>
                </div>
                <p className="text-body-default text_secondary">{box.desc}</p>
              </div>
            ))}
          </div>
          <a href="#" className="tf-btn btn-hover-animate-2 wow fadeInUp" data-wow-delay="0.4s">
            <span>Talk To An Expert</span>
            <span />
          </a>
        </div>
      </div>
    </div>
  );
}
