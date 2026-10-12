"use client";

import Image from "next/image";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useEffectBounce } from "@/hooks/useEffectBounce";

// Images are retina (2x) assets — intrinsic file size is exactly double
// these w/h, which is what the original HTML's width/height attributes
// declare as the actual display size (no CSS overrides this).
const techItems = [
  { logo: "logo-nextjs.svg", w: 68, h: 68, title: "Next.js App Router", desc: "Modern Routing & Server Components", delay: 0 },
  { logo: "logo-2.png", w: 54, h: 68, title: "Modern Bootstrap 5", desc: "Fully Responsive Grid System", delay: 0.2 },
  { logo: "logo-3.png", w: 68, h: 51, title: "Sass Integration", desc: "Customizable Styling Options", delay: 0.3 },
  { logo: "logo-4.png", w: 68, h: 68, title: "AI-Powered", desc: "Smart Content & Automation", delay: 0.4 },
  { logo: "logo-5.png", w: 94, h: 94, title: "GSAP Animation", desc: "Markup Layouts & Modern Styles", delay: 0 },
  { logo: "logo-6.png", w: 68, h: 68, title: "Swiper Slider", desc: "Highly Touch-Friendly Carousel", delay: 0.2 },
  { logo: "logo-7.png", w: 84, h: 45, title: "SEO Optimized", desc: "Achieve Better Google Ranking", delay: 0.3 },
  { logo: "logo-8.png", w: 68, h: 53, title: "Google Fonts", desc: "Modern Typography System", delay: 0.4 },
];

function TechItem({ item }: { item: (typeof techItems)[number] }) {
  const ref = useEffectBounce<HTMLDivElement>(item.delay);
  return (
    <div ref={ref} className="tech-use-item text-center effectBounce">
      <div className="icon mb_28">
        <Image height={item.h} width={item.w} src={`/assets/images/landing/${item.logo}`} alt="logo" />
      </div>
      <div className="content">
        <h5 className="text_primary mb_8">{item.title}</h5>
        <p className="text-body-default">{item.desc}</p>
      </div>
    </div>
  );
}

export default function TechSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");

  return (
    <div className="section-tech-use tf-spacing-1">
      <div className="tf-container">
        <div className="heading-section text-center mb_52">
          <h2 ref={titleRef} className="title text_primary split-text effect-right">
            Premium And Exclusive <br />
            Features For Free.
          </h2>
        </div>
        <div className="tf-grid-layout lg-col-4 md-col-2 gap_30">
          {techItems.map((item, i) => (
            <TechItem key={i} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
