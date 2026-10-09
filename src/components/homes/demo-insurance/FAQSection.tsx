"use client";

import { useAccordion } from "@/hooks/useAccordion";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

// All 5 answers are identical in the source HTML — confirmed with user to
// keep as-is, not a mistake to fix.
const answer =
  "Simply fill out our online form or contact us directly — we'll send you a personalized quote within 24 hours.";

const faqs = [
  { key: "q1", question: "Q1: What types of insurance do you offer?" },
  { key: "q2", question: "Q2: How do I get a quote?" },
  { key: "q3", question: "Q3: Is there a free consultation before I buy a plan?" },
  { key: "q4", question: "Q4: Can I customize my insurance plan?" },
  { key: "q5", question: "Q5: What if I want to cancel my policy?" },
];

export default function FAQSection() {
  const { openKey, toggle } = useAccordion<string>("q1");
  const subRef = useSplitTextReveal<HTMLDivElement>("up");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");

  return (
    <div className="section-faqs-1 tf-spacing-1">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-6">
            <div className="heading-section style-default">
              <div className="sub text-label text-uppercase lh-20" ref={subRef}>
                FAQs
              </div>
              <h2 className="title" ref={titleRef}>
                Frequently Asked Questions
              </h2>
              <p className="desc text-body-default text_secondary" ref={descRef}>
                Subscribe to get the latest company news, expert insights, and industry trends
                delivered straight to your inbox — no spam, just value.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <ul className="accordion-wrap d-grid gap_16">
              {faqs.map((faq, index) => {
                const isOpen = openKey === faq.key;
                return (
                  <li
                    className={`accordion-item style-2 action_click wow fadeInRight${isOpen ? " active" : ""}`}
                    data-wow-delay={`${(index + 1) * 0.1}s`}
                    key={faq.key}
                  >
                    <a
                      href={`#accordion-${faq.key}`}
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
                        <p className="text-body-default text_secondary">{answer}</p>
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
