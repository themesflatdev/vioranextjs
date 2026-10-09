"use client";

import Image from "next/image";
import { useImageParallax } from "@/hooks/useImageParallax";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

const offerItems = [
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

const outcomeItems = [
  "Clear, actionable business strategy aligned with long-term goals",
  "Improved decision-making through market intelligence",
  "Stronger competitive positioning and internal alignment",
];

// service-detail.html ships only one static demo body shared by all 4
// services (confirmed — no per-service copy in the source); only the
// breadcrumb/title above this component varies by slug, per CLAUDE.md
// rule 4 ("giữ nguyên nội dung demo dùng chung").
export default function ServiceDetailBody() {
  const parallaxRef = useImageParallax<HTMLDivElement>();
  const offerTitleRef = useSplitTextReveal<HTMLHeadingElement>("right");
  const outcomeTitleRef = useSplitTextReveal<HTMLHeadingElement>("right");
  const outcomeDescRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");

  return (
    <>
      <div className="section-strategy v2 tf-spacing-1">
        <div className="tf-container">
          <div className="thumbs mb_72 position-relative overflow-hidden" ref={parallaxRef}>
            <Image
              className="image-inner"
              loading="lazy"
              width={1410}
              height={680}
              src="/assets/images/demo-agency/thumb-service.jpg"
              alt="service-detail"
            />
          </div>
          <div className="tf-grid-layout md-col-3 gap_24">
            <p className="text-body-2 text_muted">
              In today&rsquo;s fast-moving markets, strategy isn&rsquo;t just about planning — it&rsquo;s
              about adapting, positioning, and creating value continuously.
            </p>
            <p className="text-body-2 text_muted">
              We help organizations define their goals, assess opportunities, and develop actionable
              strategies that lead to measurable business outcomes.
            </p>
            <p className="text-body-2 text_muted">
              Whether you&rsquo;re launching a product, entering new markets, or rethinking your model, we
              bring clarity, structure, and expertise to every phase.
            </p>
          </div>
          <div className="we-offer bg-dark-color">
            <div className="heading-section d-flex justify-content-between align-items-center flex-wrap gap_16 mb_44">
              <h2 className="text_primary-color" ref={offerTitleRef}>
                What We Offer
              </h2>
              <a href="#" className="tf-btn rounded-icon btn-hover-rounded-icon hover-1 btn-bg-primary mx-0">
                <div className="btn_inner">
                  <div className="btn_text">
                    <span>Talk To An Expert</span>
                  </div>
                  <div className="btn_icon">
                    <span>
                      <i className="icon-ArrowUpRight" />
                      <i className="icon-ArrowUpRight" />
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="wrap-box-icon">
              {offerItems.map((item, index) => (
                <div
                  className="tf-box-icon style-1 v2 wow fadeInUp"
                  data-wow-delay={`${(index + 1) * 0.1}s`}
                  key={item.title}
                >
                  <div className="box">
                    <div className="icon">
                      <i className={item.icon} />
                    </div>
                    <h5 className="title text_white">{item.title}</h5>
                  </div>
                  <p className="text-body-default text_muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="section-expected-outcomes v2 tf-spacing-1 pt-0">
        <div className="tf-container">
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="img-thumbs overflow-hidden">
                <Image
                  loading="lazy"
                  width={555}
                  height={555}
                  src="/assets/images/demo-agency/expected-outcomes.jpg"
                  alt="expected-outcomes"
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="content">
                <div className="heading-section d-grid gap_12 mb_32">
                  <h2 className="title text_white" ref={outcomeTitleRef}>
                    Expected Outcomes
                  </h2>
                  <p className="text-body-2 text_muted" ref={outcomeDescRef}>
                    Our strategic consulting delivers more than plans — it drives real, measurable
                    results. By working with us, you can expect
                  </p>
                </div>
                <ul className="list d-grid gap_16">
                  {outcomeItems.map((text, index) => (
                    <li
                      className="text-body-default text_muted wow fadeInUp"
                      data-wow-delay={`${(index + 1) * 0.1}s`}
                      key={text}
                    >
                      <i className="icon-Check" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
