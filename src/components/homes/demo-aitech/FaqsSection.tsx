"use client";

import { useAccordion } from "@/hooks/useAccordion";
import { useRevealElements } from "@/hooks/useRevealElements";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { faqAnswer, faqs } from "@/data/demo-aitech/faqs";

export default function FaqsSection() {
  const { openKey, toggle } = useAccordion<string>("q1", 500);
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");
  const listRef = useRevealElements<HTMLUListElement>();

  return (
    <div className="section-faqs-2 tf-spacing-10">
      <div className="tf-container">
        <div className="heading-section d-grid gap_12 text-center mb_60">
          <div className="sub text-label lh-20 text_primary-color text-uppercase mb_8">FAQs</div>
          <h2 className="title" ref={titleRef}>
            Frequently Asked Questions
          </h2>
          <p className="text-body-2" ref={descRef}>
            Everything you need to know before getting started with our AI solutions.
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <ul
              className="accordion-wrap d-grid gap_16"
              id="accordion-faq"
              data-ns-animate
              data-direction="left"
              data-duration="1"
              ref={listRef}
            >
              {faqs.map((faq) => {
                const isOpen = openKey === faq.key;
                return (
                  <li className={`accordion-item action_click style-3${isOpen ? " active" : ""}`} key={faq.key}>
                    <a
                      href={`#${faq.key}`}
                      className={`accordion-title action${isOpen ? "" : " collapsed"}`}
                      aria-expanded={isOpen}
                      onClick={(e) => {
                        e.preventDefault();
                        toggle(faq.key);
                      }}
                    >
                      <div className="heading">
                        <h5 className="title text-capitalize">{faq.question}</h5>
                        <span className="icon" />
                      </div>
                    </a>
                    <div className={`collapse-content${isOpen ? " is-open" : ""}`}>
                      <div className="accordion-faqs-content">
                        <p className="text-body-default text_white">{faqAnswer}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
