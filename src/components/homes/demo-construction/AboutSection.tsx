"use client";

import Image from "next/image";
import { useCountUp } from "@/hooks/useCountUp";
import { useTextChangeColor } from "@/hooks/useTextChangeColor";

const counters = [
  { count: 15, duration: 700, suffix: "", label: "Projects Completed" },
  { count: 15, duration: 700, suffix: "+", label: "Years of Experience" },
  { count: 120, duration: 700, suffix: "+", label: "Skilled Professionals" },
  { count: 500, duration: 700, suffix: "+", label: "Satisfied Clients" },
];

function CounterItem({ count, duration, suffix, label }: (typeof counters)[number]) {
  const { value, ref } = useCountUp(count, duration);

  return (
    <div className="counter-item d-flex flex-column" ref={ref as React.RefObject<HTMLDivElement>}>
      <div className="counter text-display-2 text_primary fw-6 font-2">
        <span className="numberCounter" data-count={count} data-duration={duration}>
          {value}
        </span>
        {suffix && <span className="sub-counter">{suffix}</span>}
      </div>
      <div className="line" />
      <h5 className="sub-title text_secondary">{label}</h5>
    </div>
  );
}

export default function AboutSection() {
  const headingRef = useTextChangeColor<HTMLHeadingElement>();

  return (
    <div className="section-about-9 tf-spacing-1 pt-0">
      <div className="tf-container">
        <div className="scroll-effect style-2 mb_48">
          <h3 className="text-change-color reveal-type" ref={headingRef}>
            Construction Management | Engineering Expertise | Modern Renovation | Residential | Commercial — From
            blueprint to reality, we deliver safe, efficient, and inspiring projects for every client&rsquo;s unique
            vision.
          </h3>
        </div>
        <div className="row">
          <div className="col-lg-5">
            <div className="img-style overflow-hidden">
              <Image
                data-speed="0.9"
                width={570}
                height={570}
                loading="lazy"
                src="/assets/images/demo-construction/thumbs-about-1.jpg"
                alt="about"
              />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="wrap-counter tf-grid-layout tf-col-2 gap_10">
              {counters.map((counter) => (
                <CounterItem key={counter.label} {...counter} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
