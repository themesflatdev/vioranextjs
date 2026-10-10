"use client";

import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useAnimateImgItem } from "@/hooks/useAnimateImgItem";

const boxIcons = [
  { icon: "icon-Lightning", title: "Smarter Energy", desc: "Optimize power with smart, efficient technology." },
  { icon: "icon-Leaf", title: "Eco Power", desc: "Go green with clean, planet-friendly energy." },
  {
    icon: "icon-BatteryCharging",
    title: "Energy Freedom",
    desc: "Gain independence with reliable self-produced electricity.",
  },
  {
    icon: "icon-Earth",
    title: "Sustainable Future",
    desc: "Build lasting solutions for generations to come.",
  },
];

export default function EnergySolutionSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");
  const imgRef = useAnimateImgItem<HTMLDivElement>();

  return (
    <div className="seciton-energy-solution pt-0 tf-spacing-1">
      <div className="tf-container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="box-left">
              <div className="heading-section mb_48">
                <span className="sub text-label text_primary letter-spacing-1 text-uppercase mb_16 d-block wow fadeInUp">
                  Our Energy Solutions
                </span>
                <h2 ref={titleRef} className="text-capitalize split-text effect-blur-fade">
                  Bringing clean energy to every corner
                </h2>
              </div>
              <p className="text-body-2 mb_48 desc wow fadeInUp" data-wow-delay=".2s">
                Empower your home or business with renewable solutions. Our solar technology helps you lower energy
                costs, reduce dependence on the grid, and live more sustainably.
              </p>
              <div className="wrap-box-icon tf-grid-layout tf-col-2 wow fadeInUp" data-wow-delay=".4s">
                {boxIcons.map((item) => (
                  <div className="box-icon" key={item.title}>
                    <div className="icon mb_20">
                      <i className={item.icon} />
                    </div>
                    <h6 className="mb_8">{item.title}</h6>
                    <p className="text-body-default">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div ref={imgRef} className="img-style tf-animateCLP-right">
              <div
                data-speed="0.7"
                className="img"
                style={{ backgroundImage: "url(/assets/images/demo-solarenergy/energy-solution.jpg)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
