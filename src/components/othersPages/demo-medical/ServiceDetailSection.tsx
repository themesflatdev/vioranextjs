"use client";

import Image from "next/image";
import Link from "next/link";
import { useAccordion } from "@/hooks/useAccordion";
import { faqsLeft } from "@/data/demo-medical/faqs";

const socialIcons = [
  "icon-messenger-logo",
  "icon-x-logo",
  "icon-instagram-logo",
  "icon-skype-logo",
  "icon-telegram-logo",
];

const categories = [
  { label: "Vitality Health Solutions", count: 112 },
  { label: "WellSpring Wellness Center", count: 32 },
  { label: "Harmony Family Health Medical", count: 42 },
  { label: "Evergreen Medical Center", count: 65 },
  { label: "PureLife Health Services", count: 13 },
];

const careList = [
  "Comprehensive evaluation and accurate diagnosis",
  "Personalized treatment plans for every patient",
  "Experienced doctors and specialist consultations",
  "Modern equipment and advanced diagnostics",
  "Clear guidance and follow-up care",
  "Convenient scheduling and minimal wait times",
];

// service-detail.html only has one demo write-up shared by every slug (per
// CLAUDE.md rule 4) — only the 2 h4 headings below ("...Of {name}" /
// "Advantage {name}") are dynamic per service. The body copy itself was
// Lorem Ipsum placeholder text (plus an unclosed <li> in the original list
// — React renders the correct 6 items) — rewritten with real medical copy
// per the agreed placeholder policy. FAQ reuses the exact same first 4
// questions already written for /faqs (faqsLeft), not duplicated here.
export default function ServiceDetailSection({ serviceName }: { serviceName: string }) {
  const faqs = faqsLeft;
  const { openKey, toggle } = useAccordion<string>(faqs[0].key);

  return (
    <div className="service-detail-2 tf-spacing-1">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-4">
            <div className="tf-sidebar">
              <div className="sidebar-item sidebar-author">
                <div className="author d-flex align-items-center gap_20 mb_20">
                  <div className="avatar">
                    <Image width={80} height={80} src="/assets/images/avatar/avatar-1.jpg" alt="avatar" />
                  </div>
                  <div className="content">
                    <a href="#" className="mb_4 h5 link font-main fw-6">
                      Linda Parker
                    </a>
                    <p className="text-caption-1 text_on-suface-1">Content writer at Viora</p>
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
                <h5 className="sidebar-title fw-6 mb_16">Categories</h5>
                <ul className="list-categories d-grid gap_8">
                  {categories.map((category) => (
                    <li
                      className="d-flex align-items-center justify-content-between text-body-default text_primary"
                      key={category.label}
                    >
                      <a href="#">{category.label}</a>
                      <div className="number">({category.count})</div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="sidebar-item banner">
                <div className="bg">
                  <Image
                    width={410}
                    height={548}
                    loading="lazy"
                    src="/assets/images/demo-medical/banner-sidebar.jpg"
                    alt="banner"
                  />
                </div>
                <div className="content">
                  <div className="heading">
                    <span className="sub text-white d-block mb_7">Need Help? Call Us:</span>
                    <span className="number font-2">(1)-555-678-8888</span>
                  </div>
                  <Link href="/demo-medical/appointment" className="tf-btn btn-hover-animate btn-bg-white">
                    <span className="text_primary-color">Book Appointment</span>
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
                  src="/assets/images/demo-medical/thumb-main-service.jpg"
                  alt="thumb"
                />
              </div>
              <div className="passive mb_40">
                <h4 className="text_primary-color mb_16">Professional Medical Service Of {serviceName}</h4>
                <p className="text-body-2 text_secondary mb_20">
                  At our medical center, our specialists combine clinical expertise with modern
                  technology to deliver accurate diagnoses and personalized treatment plans for
                  every patient.
                </p>
                <ul className="list d-grid gap_12">
                  {careList.map((item) => (
                    <li className="text-body-2 text_secondary" key={item}>
                      <i className="icon-Check" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="passive v2">
                <h4 className="text_primary-color mb_16">Advantage {serviceName}</h4>
                <p className="text-body-2 text_secondary mb_16">
                  Choosing our team means care built around you: clear explanations, evidence-based
                  treatment, and a coordinated approach across every specialty, so you always know
                  the next step in your health journey.
                </p>
                <div className="wrap-thumb flex-wrap flex-md-nowrap d-flex gap_30 mb_40">
                  <div className="thumb">
                    <Image
                      loading="lazy"
                      width={630}
                      height={512}
                      src="/assets/images/demo-medical/thumb-service-1.jpg"
                      alt="thumb"
                    />
                  </div>
                  <div className="thumb">
                    <Image
                      loading="lazy"
                      width={630}
                      height={512}
                      src="/assets/images/demo-medical/thumb-service-2.jpg"
                      alt="thumb"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text_primary-color mb_40">Health Tips &amp; Info</h4>
                <ul className="accordion-wrap d-grid gap_16" id="accordion-faq">
                  {faqs.map((faq) => {
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
