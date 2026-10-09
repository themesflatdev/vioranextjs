"use client";

import Image from "next/image";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

const outcomes = [
  "Clear, actionable business strategy aligned with long-term goals",
  "Improved decision-making through market intelligence",
  "Stronger competitive positioning and internal alignment",
];

// Static, shared across every slug (see CLAUDE.md rule 4). The hero image
// parallax is handled by ScrollSmoother's built-in `effects: true` (see
// useScrollSmoother), which auto-applies to any `data-speed` element inside
// #smooth-content — no extra hook needed.
export default function ExpectedOutcomesSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");

  return (
    <div className="section-expected-outcomes">
      <div className="tf-container">
        <div className="row align-items-center">
          <div className="col-md-5">
            <div className="img-thumbs overflow-hidden">
              <Image
                data-speed="0.7"
                loading="lazy"
                width={555}
                height={555}
                src="/assets/images/demo-corporate/expected-outcomes.jpg"
                alt="expected-outcomes"
              />
            </div>
          </div>
          <div className="col-md-7">
            <div className="content">
              <div className="heading-section d-grid gap_12 mb_32">
                <h2 className="title" ref={titleRef}>
                  Expected Outcomes
                </h2>
                <p className="text-body-2 text_secondary">
                  Our strategic consulting delivers more than plans — it drives
                  real, measurable results. By working with us, you can expect
                </p>
              </div>
              <ul className="list d-grid gap_16">
                {outcomes.map((text, index) => (
                  <li
                    className="text-body-default text_secondary wow fadeInUp"
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
  );
}
