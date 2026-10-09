"use client";

import { useAccordion } from "@/hooks/useAccordion";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { faqAnswer, faqs } from "@/data/demo-healthcoach/faqs";

export default function FaqsSection() {
  const { openKey, toggle } = useAccordion<string>("accordion-faq-1");
  const subRef = useSplitTextReveal<HTMLDivElement>("up");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("scale");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");

  return (
    <div className="section-faqs-4 tf-spacing-1">
      <div className="tf-container medium">
        <div className="row">
          <div className="col-lg-5">
            <div className="heading-section style-default">
              <div className="sub text-label text-uppercase text_primary-color split-text effect-up" ref={subRef}>
                FAQs
              </div>
              <h2 className="title text_primary-color split-text effect-scale" ref={titleRef}>
                What Makes Us Different
              </h2>
              <p className="desc text-body-2 text_secondary mt_4 split-text split-lines-transform" ref={descRef}>
                Everything you need to know before getting started.
              </p>
            </div>
          </div>
          <div className="col-lg-7">
            <ul className="accordion-wrap" id="accordion-faq">
              {faqs.map((faq) => {
                const isOpen = openKey === faq.key;
                return (
                  <li className="accordion-item style-1 v2 wow fadeInRight" data-wow-delay={faq.delay || undefined} key={faq.key}>
                    <a
                      href={`#${faq.key}`}
                      className={`accordion-title${isOpen ? "" : " collapsed"}`}
                      aria-expanded={isOpen}
                      onClick={(e) => {
                        e.preventDefault();
                        toggle(faq.key);
                      }}
                    >
                      <div className="heading">
                        <h5 className="title text-capitalize text_primary-color">{faq.question}</h5>
                        <span className="icon" />
                      </div>
                    </a>
                    <div className={`collapse-content${isOpen ? " is-open" : ""}`}>
                      <div className="accordion-faqs-content">
                        <p className="text-body-default text_primary">{faqAnswer}</p>
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
