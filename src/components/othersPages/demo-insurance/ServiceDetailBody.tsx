"use client";

import Image from "next/image";
import Link from "next/link";
import { useAccordion } from "@/hooks/useAccordion";
import { faqsFull, answer } from "@/data/demo-insurance/faqsFull";

const socialIcons = [
  "icon-messenger-logo",
  "icon-x-logo",
  "icon-instagram-logo",
  "icon-skype-logo",
  "icon-telegram-logo",
];

const categories = [
  { label: "Risk Assessment", count: 112 },
  { label: "Personal Accident", count: 32 },
  { label: "Critical Illness", count: 42 },
  { label: "Home Insurance", count: 65 },
  { label: "Business Insurance", count: 13 },
];

const coverageList = [
  "Flexible coverage options tailored to your needs",
  "Fast, transparent claims processing",
  "24/7 access to support when you need it most",
  "No hidden fees or confusing fine print",
  "Add-on coverage available as your needs grow",
  "Dedicated advisor to guide you every step of the way",
];

const faqs = faqsFull.slice(0, 5);

// service-detail.html only has one demo write-up (shared by every slug,
// per CLAUDE.md rule 4) — only the page title/breadcrumb are dynamic per
// service. The body content itself was Lorem Ipsum / wrong-niche
// (cardiology) placeholder text, not just "wrong niche" copy-paste like
// previously seen elsewhere — confirmed with user this needed real
// insurance copy, not just preservation:
// - Sidebar author title "Cardiologist at Viora" → "Senior Insurance
//   Advisor at Viora" (name kept).
// - Banner link "appointment.html" (dead, page doesn't exist) → /contact.
// - Main heading/description/list, "Specialized Investigations" →
//   "How It Works", "Health Tips & Info" → "Common Questions" — all
//   rewritten with real insurance copy.
export default function ServiceDetailBody() {
  const { openKey, toggle } = useAccordion<string>("q1");

  return (
    <div className="service-detail-3 tf-spacing-1">
      <div className="tf-container medium">
        <div className="row">
          <div className="col-lg-4">
            <div className="tf-sidebar">
              <div className="sidebar-item sidebar-author">
                <div className="author d-flex align-items-center gap_20 mb_20">
                  <div className="avatar">
                    <Image width={80} height={80} src="/assets/images/avatar/avatar-1.jpg" alt="avatar" />
                  </div>
                  <div className="content">
                    <a href="#" className="mb_4 h6 link text_primary fw-6">
                      Linda Parker
                    </a>
                    <p className="text-caption-1 text_on-suface-1">Senior Insurance Advisor at Viora</p>
                  </div>
                </div>
                <ul className="tf-social style-2">
                  {socialIcons.map((icon) => (
                    <li key={icon}>
                      <a href="#" className={icon} />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="sidebar-item sidebar-categories">
                <h6 className="sidebar-title fw-6 mb_16 text_primary">Categories</h6>
                <ul className="list-categories d-grid gap_8">
                  {categories.map((category) => (
                    <li
                      className="d-flex align-items-center justify-content-between text-body-default text_primary"
                      key={category.label}
                    >
                      <a href="#" className="link-2">
                        {category.label}
                      </a>
                      <div className="number">({category.count})</div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="sidebar-item banner">
                <div className="shape">
                  <Image
                    width={228}
                    height={345}
                    loading="lazy"
                    src="/assets/images/demo-insurance/shape-service.png"
                    alt="banner"
                  />
                </div>
                <div className="content">
                  <div className="heading">
                    <h4 className="text_secondary-color d-block mb_7">3M+ Coverage Value</h4>
                    <span className="text-body-default text_secondary-color">
                      Total insured value we&apos;ve protected
                    </span>
                  </div>
                  <Link href="/demo-insurance/contact" className="tf-btn btn-bg-white-2 btn-hover-animate-2 btn-bg-white">
                    <span className="text_secondary-color">Get A Free Quote</span>
                    <span />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="content-inner">
              <div className="thumb mb_40">
                <Image
                  loading="lazy"
                  width={940}
                  height={512}
                  src="/assets/images/demo-insurance/thumb-main-service.jpg"
                  alt="thumb"
                />
              </div>
              <div className="passive mb_40">
                <h4 className="text_secondary-color mb_16">Comprehensive Coverage Tailored To Your Needs</h4>
                <p className="text-body-2 text_secondary mb_20">
                  We work closely with you to understand your unique situation and design a protection
                  plan that truly fits your life, your assets, and your long-term goals.
                </p>
                <ul className="list d-grid gap_12">
                  {coverageList.map((item) => (
                    <li className="text-body-2 text_secondary" key={item}>
                      <i className="icon-Check" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="passive v2">
                <h4 className="text_secondary-color mb_16">How It Works</h4>
                <p className="text-body-2 text_secondary mb_16">
                  Getting covered is simple. Our team guides you from the first consultation through
                  policy activation, making sure you understand exactly what&apos;s protected and why.
                </p>
                <div className="wrap-thumb flex-wrap flex-md-nowrap d-flex gap_30 mb_40">
                  <div className="thumb">
                    <Image
                      loading="lazy"
                      width={630}
                      height={512}
                      src="/assets/images/demo-insurance/thumb-service-1.jpg"
                      alt="thumb"
                    />
                  </div>
                  <div className="thumb">
                    <Image
                      loading="lazy"
                      width={630}
                      height={512}
                      src="/assets/images/demo-insurance/thumb-service-2.jpg"
                      alt="thumb"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text_secondary-color mb_16">Common Questions</h4>
                <ul className="accordion-wrap d-grid gap_16" id="accordion-faq">
                  {faqs.map((faq) => {
                    const isOpen = openKey === faq.key;
                    return (
                      <li
                        className={`accordion-item style-2 action_click${isOpen ? " active" : ""}`}
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
      </div>
    </div>
  );
}
