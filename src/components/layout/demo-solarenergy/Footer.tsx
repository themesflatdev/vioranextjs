"use client";

import Image from "next/image";
import Link from "next/link";
import { useMultiOpen } from "@/hooks/useMultiOpen";

const topInfo = [
  { icon: "icon-Envelope", label: "Email & Support", value: "domain@gmail.com", href: "#" },
  { icon: "icon-Headset", label: "Customer Care", value: "+01 547 547 5478" },
  { icon: "icon-MapPin", label: "Our Address", value: "123 Street, City, Country" },
];

// solarenergy has no pages of its own (index.html only). The original HTML
// copy-pasted the same 4 broken hrefs (constacts.html / corporate about-us /
// corporate contact / blog-grid.html) onto BOTH columns, so "Services"
// items ended up pointing at About/Contact/Blog pages — nonsensical for
// service names with no real target anywhere, so kept as "#". Quick Links
// makes sense as real navigation: "Home" fixed to this niche's own home
// (the label's clear intent), the rest borrow corporate per rule 6.
const quickLinks = [
  { label: "Home", href: "/demo-solarenergy" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog-full-width" },
];

const servicesLinks = ["Hybrid Energy", "Renewable Energy", "Solar Maintenance", "Solar PV Systems"];

import { socialIconLabel } from "@/lib/socialIconLabel";

const socialLinks = [
  { href: "#", icon: "icon-FacebookLogo" },
  { href: "#", icon: "icon-x-logo" },
  { href: "#", icon: "icon-TiktokLogo" },
  { href: "#", icon: "icon-instagram-logo" },
  { href: "#", icon: "icon-YoutubeLogo" },
];

type ColumnKey = "quick-link" | "service";

export default function Footer() {
  const { isOpen, toggle } = useMultiOpen<ColumnKey>();

  return (
    <footer className="footer-style-15">
      <div className="footer-top">
        <div className="tf-container medium">
          <ul>
            {topInfo.map((item) => (
              <li className="box-icon" key={item.label}>
                <div className="icon">
                  <i className={item.icon} />
                </div>
                <div>
                  <div className="text-label text_white letter-spacing-1 text-uppercase lh-16">
                    {item.label}
                  </div>
                  {item.href ? (
                    <a href={item.href} className="hover-underline-link text_primary-color text-body-2">
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-body-2 text_primary-color">{item.value}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-body">
        <div className="tf-container medium">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-about footer-item">
                <Link href="/demo-solarenergy" className="footer-logo site-logo mb_23">
                  <Image
                    className="main-logo"
                    src="/assets/images/logo/logo-solar-energy-2.svg"
                    alt="logo"
                    width={167}
                    height={52}
                  />
                </Link>
                <p className="text-body-default text_muted">
                  Harness the power of the sun with innovative solar solutions. We help you save
                  energy, reduce costs, and build a greener future.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="footer-content footer-item d-flex justify-content-between">
                <div className={`footer-col-block quick-link${isOpen("quick-link") ? " open" : ""}`}>
                  <h5
                    className="footer-heading footer-heading-mobile text_white mb_20"
                    onClick={() => toggle("quick-link")}
                    role="button"
                    tabIndex={0}
                  >
                    Quick Links
                  </h5>
                  <div className="tf-collapse-content">
                    <ul className="footer-menu-list d-grid gap_12">
                      {quickLinks.map((item) => (
                        <li className="text-body-default text_muted" key={item.label}>
                          <Link href={item.href} className="link">{item.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={`footer-col-block service${isOpen("service") ? " open" : ""}`}>
                  <h5
                    className="footer-heading footer-heading-mobile text_white mb_20"
                    onClick={() => toggle("service")}
                    role="button"
                    tabIndex={0}
                  >
                    Services
                  </h5>
                  <div className="tf-collapse-content">
                    <ul className="footer-menu-list d-grid gap_12">
                      {servicesLinks.map((label) => (
                        <li className="text-body-default text_muted" key={label}>
                          <a href="#" className="link">{label}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="footer-newsletter">
                <form className="form-newsletter style-9 mb_10" onSubmit={(e) => e.preventDefault()}>
                  <div className="heading mb_22">
                    <h5 className="text_white mb_12">Join Our Newsletter</h5>
                    <p className="text-body-default text_muted">
                      Sign up for updates on our latest news.
                    </p>
                  </div>
                  <div className="wrap gap_12 position-relative">
                    <fieldset className="position-relative">
                      <input
                        type="email"
                        className="tb-my-input style-border"
                        name="email"
                        placeholder="Your email address"
                        required
                      />
                    </fieldset>
                    <button name="submit" type="submit" className="button-submit" aria-label="Subscribe">
                      <span className="icon-PaperPlaneTilt" />
                    </button>
                  </div>
                </form>
                <div className="box-fieldset-item d-flex align-items-center">
                  <fieldset>
                    <input type="checkbox" className="tf-check" id="note" />
                  </fieldset>
                  <p className="text-caption-1 text_muted">
                    I consent to receive legal updates &amp; news.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="wrap-footer-bottom tf-container medium d-flex align-items-center justify-content-between">
          <p className="text_white text-caption-1">
            ©2025 <a href="#" className="text_white link">Viora.</a> All Rights Reserved.
          </p>
          <ul className="social d-flex gap_24">
            {socialLinks.map((social) => (
              <li key={social.icon}>
                <a href={social.href} className={social.icon} aria-label={socialIconLabel(social.icon)} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
