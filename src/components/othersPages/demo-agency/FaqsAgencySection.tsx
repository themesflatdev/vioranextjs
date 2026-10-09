"use client";

import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useAccordion } from "@/hooks/useAccordion";
import { faqGroups, type FaqGroup } from "@/data/demo-agency/faqs";

function FaqGroupBlock({ group }: { group: FaqGroup }) {
  const { openKey, toggle } = useAccordion<string>(group.items[0].key);

  return (
    <div className="col-lg-7">
      <ul className="accordion-wrap">
        {group.items.map((item) => {
          const isOpen = openKey === item.key;
          return (
            <li className="accordion-item style-8" key={item.key}>
              <a
                href={`#accordion-${item.key}`}
                className={`accordion-title${isOpen ? "" : " collapsed"}`}
                aria-expanded={isOpen}
                onClick={(e) => {
                  e.preventDefault();
                  toggle(item.key);
                }}
              >
                <div className="heading">
                  <h6 className="title text_white text-capitalize">{item.question}</h6>
                  <span className="icon-2 icon-CaretDown" />
                </div>
              </a>
              <div className={`collapse-content${isOpen ? " is-open" : ""}`}>
                <div className="accordion-faqs-content">
                  <p className="text-body-default text_muted">{item.answer}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// section-faqs-8 — 3 independent single-open accordion groups (each group
// is its own accordion, item 1 open by default in every group), all 3
// groups' questions/answers rewritten per agency-pages-menu-only.md (the
// original was 100% "chat software" SaaS content with every answer in every
// group repeating the same placeholder sentence, none of which fits an
// agency).
export default function FaqsAgencySection() {
  const titleRefs = [
    useSplitTextReveal<HTMLHeadingElement>("blur-fade"),
    useSplitTextReveal<HTMLHeadingElement>("blur-fade"),
    useSplitTextReveal<HTMLHeadingElement>("blur-fade"),
  ];

  return (
    <div className="section-faqs-8 tf-spacing-1">
      <div className="tf-container">
        <div className="wrap-faqs-item">
          {faqGroups.map((group, index) => (
            <div className="row" key={group.key}>
              <div className="col-lg-5">
                <div className="heading-section">
                  <h3 className="text_white mb_16" ref={titleRefs[index]}>
                    {group.title}
                  </h3>
                  <p className="text_muted text-body-default">{group.desc}</p>
                </div>
              </div>
              <FaqGroupBlock group={group} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
