"use client";

import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

const supportItems = [
  {
    icon: "icon-Files",
    title: "Detailed Documentation",
    desc: "Read the documentation and learn how to build your website.",
    linkLabel: "Online Documentation",
    delay: "",
  },
  {
    icon: "icon-Question",
    title: "Support & Update",
    desc: "We offer a dedicated & friendly support and regular updates.",
    linkLabel: "Get Support",
    delay: "0.2s",
  },
  {
    icon: "icon-CodeBlock",
    title: "Customization Services",
    desc: "You need installation, customization or add specific functionality services?",
    linkLabel: "Send Requirement",
    delay: "0.4s",
  },
];

export default function SupportSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");

  return (
    <div className="section-support-landing tf-spacing-1">
      <div className="tf-container">
        <div className="heading-section text-center mb_52 d-grid gap_12">
          <h2 ref={titleRef} className="title text_primary split-text effect-right">
            How Can We Help You?
          </h2>
          <p ref={descRef} className="text_secondary text-body-default split-text split-lines-transform">
            Find answers to all of your question here.
          </p>
        </div>
        <div className="tf-grid-layout xl-col-3 gap_20">
          {supportItems.map((item) => (
            <div key={item.icon} className="box-icon hover-effect-icon wow fadeInUp" data-wow-delay={item.delay}>
              <div className="icon">
                <i className={item.icon} />
              </div>
              <div className="content">
                <h5 className="title mb_8">{item.title}</h5>
                <p className="text-body-default text_secondary mb_8">{item.desc}</p>
                <a href="#" className="hover-underline-link text-button">
                  {item.linkLabel}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
