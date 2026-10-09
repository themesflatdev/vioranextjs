"use client";

import Image from "next/image";
import { useAccordion } from "@/hooks/useAccordion";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useScrollTransform } from "@/hooks/useScrollTransform";
import { faqsLeft, faqsRight, type Faq } from "@/data/demo-spasalon/faqs";

function AccordionColumn({
  items,
  openKey,
  toggle,
}: {
  items: Faq[];
  openKey: string | null;
  toggle: (key: string) => void;
}) {
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
                <h6 className="title text-capitalize text_primary">{faq.question}</h6>
                <span className="icon" />
              </div>
            </a>
            <div className={`collapse${isOpen ? " show" : ""}`}>
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

// 2 cột = 2 accordion ĐỘC LẬP (HTML gốc dùng 2 <ul> riêng, data-bs-parent
// khác nhau: #accordion-faq và #accordion-faq2) — mỗi cột chỉ 1 mục mở tại
// 1 thời điểm. Chỉ câu 1 (cột trái) mở sẵn.
export default function FaqsSection() {
  const subRef = useSplitTextReveal<HTMLDivElement>("up");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");
  const itemRef = useScrollTransform<HTMLDivElement>({ direction: "left" });
  const left = useAccordion<string>("faq-1");
  const right = useAccordion<string>(null);

  return (
    <div className="section-faqs-7 tf-spacing-1">
      <div className="tf-container medium">
        <div className="heading-section mb_40 text-center">
          <div className="sub text-label text-uppercase split-text effect-up text_primary-color mb_12" ref={subRef}>
            FAQS
          </div>
          <h2 className="title split-text effect-blur-fade" ref={titleRef}>
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
      <div className="item position-absolute scroll-transform" ref={itemRef}>
        <Image src="/assets/images/demo-spasalon/spa-item-3.png" alt="spa-item" width={483} height={267} />
      </div>
    </div>
  );
}
