"use client";

import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

const features = [
  { icon: "icon-Devices2", title: "Fully Responsive Layouts", delay: "" },
  { icon: "icon-Browsers", title: "Header & Footer Builder", delay: "0.2s" },
  { icon: "icon-ListDashes", title: "Prebuilt Offcanvas Menu", delay: "0.4s" },
  { icon: "icon-Slideshow", title: "Creative Slider Options", delay: "0.6s" },
  { icon: "icon-PuzzlePiece", title: "GSAP Animation Engine", delay: "0.8s" },
  { icon: "icon-TextIndent", title: "Advanced Mega Menu", delay: "0.8s" },
  { icon: "icon-MouseScroll", title: "Smooth Page Scrolling", delay: "0.6s" },
  { icon: "icon-PictureInPicture", title: "Marketing Popup Tools", delay: "0.4s" },
  { icon: "icon-TextAa", title: "Custom Font Uploader", delay: "0.2s" },
  { icon: "icon-Layout", title: "Unique Blog Designs", delay: "" },
];

export default function FeaturesSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");

  return (
    <div id="features" className="section-features-landing tf-spacing-1 section">
      <div className="tf-container">
        <div className="heading-section text-center mb_52 d-grid gap_12">
          <h2 ref={titleRef} className="title text_primary split-text effect-right">
            Save Addition App Cost With Viora
          </h2>
          <p ref={descRef} className="text_secondary text-body-default split-text split-lines-transform">
            You don&apos;t need to pay for any additional app. All features are inbuilt with Viora. Also this will
            make your website load faster.
          </p>
        </div>
        <div className="tf-grid-layout xl-col-5 xl-col-4 md-col-3 tf-col-2 gap_30">
          {features.map((f) => (
            <div key={f.icon} className="box-icon hover-effect-icon wow fadeIn" data-wow-delay={f.delay}>
              <div className="icon mb_14">
                <i className={f.icon} />
              </div>
              <h6 className="text_primary">{f.title}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
