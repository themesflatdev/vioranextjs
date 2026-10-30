"use client";

import Image from "next/image";
import Link from "next/link";
import { useMultiOpen } from "@/hooks/useMultiOpen";

import { socialIconLabel } from "@/lib/socialIconLabel";

const socialLinks = [
  { href: "#", icon: "icon-messenger-logo" },
  { href: "#", icon: "icon-x-logo" },
  { href: "#", icon: "icon-instagram-logo" },
  { href: "#", icon: "icon-skype-logo" },
  { href: "#", icon: "icon-telegram-logo" },
];

// carservices has no pages of its own (index.html only) — Company links
// borrow corporate's real pages per CLAUDE.md rule 6. "Contact Us" is
// duplicated in the original HTML (kept verbatim per rule 4) but both
// copies pointed at the wrong "blog-grid.html" — fixed to corporate's
// actual Contact page.
const companyLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Our Team", href: "/our-team" },
  { label: "Join Us", href: "#" },
  { label: "Contact Us", href: "/contact" },
  { label: "Contact Us", href: "/contact" },
];

// "Get Quote" is duplicated in the original HTML — kept verbatim (rule 4).
const platformLinks = ["Our Projects", "Latest News", "Help Center", "Get Quote", "Get Quote"];

const bottomLinks = ["Terms Of Services", "Privacy Policy", "Cookie Policy"];

type ColumnKey = "quick-link" | "service";

export default function Footer() {
  const { isOpen, toggle } = useMultiOpen<ColumnKey>();

  return (
    <footer className="footer-style-13">
      <div className="tf-container">
        <div className="footer-top">
          <div className="row align-items-center">
            <div className="col-md-5">
              <h4 className="text-capitalize text_white">
                Get every single updates <br className="xl-hide" />
                weekly from us.
              </h4>
            </div>
            <div className="col-md-7">
              <form className="form-newsletter style-1" onSubmit={(e) => e.preventDefault()}>
                <div className="wrap gap_12">
                  <fieldset className="position-relative">
                    <input
                      type="email"
                      className="tb-my-input style-border"
                      name="email"
                      placeholder="Enter your e-mail"
                      required
                    />
                  </fieldset>
                  <button name="submit" type="submit" className="tf-btn btn-bg-primary-2 btn-hover-animate-2">
                    <span className="text-body-1 fw-6">Subscribe</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="footer-body">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <div className="footer-about">
                <Link href="/demo-carservices" className="footer-logo site-logo mb_16">
                  <Image
                    className="main-logo"
                    src="/assets/images/logo/logo-car-service.svg"
                    alt="logo"
                    width={167}
                    height={52}
                  />
                </Link>
                <p className="text-body-default">
                  We believe selfcare should feel natural, calm, and beautiful just like you. We
                  believe selfcare should feel natural, calm.
                </p>
                <ul className="tf-social style-4">
                  {socialLinks.map((social) => (
                    <li key={social.icon}>
                      <a href={social.href} className={social.icon} aria-label={socialIconLabel(social.icon)} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-content footer-item d-flex justify-content-between">
                <div className={`footer-col-block quick-link${isOpen("quick-link") ? " open" : ""}`}>
                  <div
                    className="footer-heading footer-heading-mobile h6 text-white mb_16"
                    onClick={() => toggle("quick-link")}
                    role="button"
                    tabIndex={0}
                  >
                    Company
                  </div>
                  <div className="tf-collapse-content">
                    <ul className="footer-menu-list d-grid gap_12">
                      {companyLinks.map((item, index) => (
                        <li className="text-body-default text_muted" key={`${item.label}-${index}`}>
                          <Link href={item.href} className="link">{item.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={`footer-col-block service${isOpen("service") ? " open" : ""}`}>
                  <div
                    className="footer-heading footer-heading-mobile h6 text-white mb_16"
                    onClick={() => toggle("service")}
                    role="button"
                    tabIndex={0}
                  >
                    Platform
                  </div>
                  <div className="tf-collapse-content">
                    <ul className="footer-menu-list d-grid gap_12">
                      {platformLinks.map((label, index) => (
                        <li className="text-body-default text_muted" key={`${label}-${index}`}>
                          <a href="#" className="link">{label}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="footer-contact">
                <div className="mb_24">
                  <h5 className="text_white mb_4">1-555-678-8888</h5>
                  <p className="text-body-default">Let&rsquo;s discuss supporting your health journey.</p>
                </div>
                <div className="d-grid gap_8">
                  <h5><a href="#" className="hover-underline-link link">domain@gmail.com</a></h5>
                  <p className="text-body-default">123 Creative Ave, New York, NY 10001</p>
                  <p className="text-body-default">Mon – Fri, 9:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="wrap-footer-bottom d-flex justify-content-between align-items-center">
            <p className="text_muted text-caption-1">
              ©2025 <a href="#" className="text_muted link">Viora.</a> All Rights Reserved.
            </p>
            <ul className="wrap d-flex gap_20">
              {bottomLinks.map((label) => (
                <li key={label}>
                  <a href="#" className="text-caption-1 link text_muted">{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
