"use client";

import Link from "next/link";
import { useAnimateImgItem } from "@/hooks/useAnimateImgItem";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useTextChangeColor } from "@/hooks/useTextChangeColor";

const boxIcons = [
  {
    icon: "icon-Blueprint",
    title: "Functionality",
    desc: "Designs spaces that serve their purpose effectively and improve daily life.",
    delay: ".1s",
  },
  {
    icon: "icon-HardHat",
    title: "Aesthetics",
    desc: "Creates visually appealing environments that inspire and uplift users.",
    delay: ".3s",
  },
  {
    icon: "icon-PencilRuler",
    title: "Sustainability",
    desc: "Uses eco-friendly materials and smart design to save energy and protect nature.",
    delay: ".5s",
  },
  {
    icon: "icon-HouseLine",
    title: "Cultural Expression",
    desc: "Represents local traditions, values, and identity through design.",
    delay: ".7s",
  },
];

export default function AboutSection() {
  const titleRef = useSplitTextReveal<HTMLDivElement>("blur-fade");
  const textChangeRef = useTextChangeColor<HTMLHeadingElement>();
  const imgRef = useAnimateImgItem<HTMLDivElement>();

  return (
    <div className="section-about-16 tf-spacing-1">
      <div className="tf-container large">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="box-content">
              <div className="heading-section-6 mb_48">
                <span className="tag-line lh-16 text-label text_primary letter-spacing-1 color-dark text-uppercase mb_20 wow fadeInUp">
                  About
                </span>
                <div
                  ref={titleRef}
                  className="text-display-2 text_primary text-uppercase font-2 split-text effect-blur-fade"
                >
                  Building with Integrity
                </div>
                <div className="line" />
              </div>
              <div className="scroll-effect style-2 mb_48">
                <h3 ref={textChangeRef} className="text-change-color reveal-type font-3">
                  We are a team of experienced builders dedicated to delivering high-quality
                  construction services. From residential homes to large commercial projects, our
                  focus is on safety, durability, and precision. Every project is guided by a
                  commitment to excellence, ensuring that what we build today will stand strong
                  for years to come.
                </h3>
              </div>
              <Link href="#" className="tf-btn-2 btn-switch-text border-dark wow fadeInUp" data-wow-delay="0.4s">
                <span>
                  <span className="btn-double-text" data-text="About Us">
                    About Us
                  </span>
                </span>
              </Link>
            </div>
          </div>
          <div className="col-lg-4">
            <div ref={imgRef} className="img-style tf-animateCLP-right">
              <div
                data-speed=".7"
                className="img"
                style={{ backgroundImage: "url(/assets/images/demo-architechture/about-1.jpg)" }}
              />
            </div>
          </div>
        </div>
        <div className="tf-grid-layout lg-col-4 sm-col-2">
          {boxIcons.map((item) => (
            <div key={item.title} className="tf-box-icon style-2 v2 wow fadeIn hover-effect-icon" data-wow-delay={item.delay}>
              <div className="icon">
                <i className={item.icon} />
              </div>
              <div className="content">
                <h5 className="mb_9 title">
                  <Link href="/services" className="mb_12 hover-line-text link text-uppercase fw-4">
                    {item.title}
                  </Link>
                </h5>
                <p className="text-body-default">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
