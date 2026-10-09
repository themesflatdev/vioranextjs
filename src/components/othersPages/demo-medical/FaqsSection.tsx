"use client";

import { useAccordion } from "@/hooks/useAccordion";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { faqsLeft, faqsRight, type Faq } from "@/data/demo-medical/faqs";

function AccordionColumn({ items, openKey, toggle }: { items: Faq[]; openKey: string | null; toggle: (key: string) => void }) {
  return (
    <ul className="accordion-wrap d-grid gap_16">
      {items.map((faq) => {
        const isOpen = openKey === faq.key;
        return (
          <li className="accordion-item style-border" key={faq.key}>
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
                <h6 className="title text-capitalize">{faq.question}</h6>
                <span className="icon" />
              </div>
            </a>
            <div className={`collapse-content${isOpen ? " is-open" : ""}`}>
              <div className="accordion-faqs-content">
                <p className="text-body-default text_primary">{faq.answer}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

// 2 cột = 2 accordion ĐỘC LẬP (data-bs-parent riêng ở HTML gốc: #accordion-faq
// và #accordion-faq2) — mỗi cột chỉ 1 mục mở tại 1 thời điểm, không liên
// quan tới cột kia. Chỉ câu 1 (cột trái) mở sẵn.
export default function FaqsSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("left");
  const left = useAccordion<string>("faq-1");
  const right = useAccordion<string>(null);

  return (
    <div className="section-faqs-2 tf-spacing-1">
      <div className="tf-container medium">
        <div className="heading-section-5 mb_60">
          <div className="tag text-label text-uppercase wow fadeInUp mb_20">FAQs</div>
          <h2 className="title" ref={titleRef}>
            Frequently Asked Questions
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <AccordionColumn items={faqsLeft} openKey={left.openKey} toggle={left.toggle} />
          </div>
          <div className="col-lg-6">
            <AccordionColumn items={faqsRight} openKey={right.openKey} toggle={right.toggle} />
          </div>
        </div>
      </div>
    </div>
  );
}
