"use client";

import Image from "next/image";
import Link from "next/link";
import { useAccordion } from "@/hooks/useAccordion";
import { faqsLeft } from "@/data/demo-spasalon/faqs";

const socialIcons = [
  "icon-messenger-logo",
  "icon-x-logo",
  "icon-instagram-logo",
  "icon-skype-logo",
  "icon-telegram-logo",
];

// Verbatim from the source HTML — these category labels already fit the spa
// niche (unlike the sidebar author's role below), no rewrite needed.
const categories = [
  { label: "Beauty", count: 112 },
  { label: "Aromatherapy", count: 32 },
  { label: "Harmony Family", count: 42 },
  { label: "Manual Therapy", count: 65 },
  { label: "Modern Practice", count: 13 },
];

const careList = [
  "Personalized consultation to match the right treatment to your skin and body",
  "Certified therapists trained in modern and traditional spa techniques",
  "Premium natural oils and products used in every session",
  "Calm, private treatment rooms designed for full relaxation",
  "Flexible scheduling with minimal wait times",
  "Aftercare guidance to help results last longer",
];

// service-detail.html's whole body copy (author role, "Professional Medical
// Service Of Cardiology" h4, "Health Tips & Info" FAQ, Lorem Ipsum
// paragraphs, an unclosed <li> in the list) is leftover medical-demo
// boilerplate pasted in without adapting it to the spa niche — a real
// content bug, not a deliberate quirk. Same precedent as demo-medical's own
// ServiceDetailSection (which replaced its unrelated "Content writer"/
// Lorem copy): only the sidebar categories here already fit the niche and
// are kept verbatim; the rest is rewritten for spa content, dynamic bits
// ("...Of {serviceName}") following the same convention. FAQ reuses the
// exact same first 4 questions already written for /faqs (faqsLeft).
export default function ServiceDetailSection({ serviceName }: { serviceName: string }) {
  const faqs = faqsLeft;
  const { openKey, toggle } = useAccordion<string>(faqs[0].key);

  return (
    <div className="service-detail-2 tf-spacing-1">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-4 order-lg-0 order-1">
            <div className="tf-sidebar">
              <div className="sidebar-item sidebar-author">
                <div className="author d-flex align-items-center gap_20 mb_20">
                  <div className="avatar">
                    <Image width={80} height={80} src="/assets/images/avatar/avatar-1.jpg" alt="avatar" />
                  </div>
                  <div className="content">
                    <a href="#" className="mb_4 h5 link font-main text_primary fw-6">
                      Linda Parker
                    </a>
                    <p className="text-caption-1 text_on-suface-1">Spa Therapist at Viora</p>
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
                <h5 className="sidebar-title text_primary fw-6 mb_16">Categories</h5>
                <ul className="list-categories d-grid gap_8">
                  {categories.map((category) => (
                    <li
                      className="d-flex align-items-center justify-content-between text-body-default text_primary"
                      key={category.label}
                    >
                      <a href="#" className="link">
                        {category.label}
                      </a>
                      <div className="number">({category.count})</div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="sidebar-item banner-v02">
                <div className="bg">
                  <Image
                    width={410}
                    height={548}
                    loading="lazy"
                    src="/assets/images/demo-spasalon/banner-sidebar.jpg"
                    alt="banner"
                  />
                </div>
                <div className="content">
                  <h4 className="mb_24">
                    <Link href="/demo-spasalon/booking" className="link text_white">
                      Summer Glow Special
                    </Link>
                  </h4>
                  <Link href="/demo-spasalon/booking" className="tf-btn btn-switch-text">
                    <span>
                      <span className="btn-double-text" data-text="Book now">
                        Book now
                      </span>
                    </span>
                  </Link>
                </div>
                <div className="sale">
                  <h6 className="text_white">FROM</h6>
                  <h2 className="price text_white">
                    <span className="h4 text-white">$</span>15
                  </h2>
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
                  src="/assets/images/demo-spasalon/thumb-main-service.jpg"
                  alt="thumb"
                />
              </div>
              <div className="passive mb_40">
                <h4 className="text_primary-color mb_16">Professional Spa Service Of {serviceName}</h4>
                <p className="text-body-2 text_secondary mb_20">
                  Our {serviceName.toLowerCase()} session is designed around you — a calm space, skilled
                  hands, and premium natural products working together to ease tension and restore
                  your natural glow.
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
                  Choosing us means every visit is tailored to how you feel that day, guided by
                  experienced therapists and finished with aftercare tips so the results carry on
                  long after you leave.
                </p>
                <div className="wrap-thumb flex-wrap flex-md-nowrap d-flex gap_30 mb_40">
                  <div className="thumb">
                    <Image
                      loading="lazy"
                      width={630}
                      height={512}
                      src="/assets/images/demo-spasalon/thumb-service-1.jpg"
                      alt="thumb"
                    />
                  </div>
                  <div className="thumb">
                    <Image
                      loading="lazy"
                      width={630}
                      height={512}
                      src="/assets/images/demo-spasalon/thumb-service-2.jpg"
                      alt="thumb"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text_primary-color mb_40">Spa Tips &amp; Info</h4>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
