"use client";

import Image from "next/image";
import Link from "next/link";
import { useMultiOpen } from "@/hooks/useMultiOpen";

const socialLinks = [
  { href: "#", icon: "icon-messenger-logo" },
  { href: "#", icon: "icon-x-logo" },
  { href: "#", icon: "icon-instagram-logo" },
  { href: "#", icon: "icon-skype-logo" },
];

// gardenlandscaping has no pages of its own (index.html only). "About Us"
// borrows corporate's real page per CLAUDE.md rule 6; "Case Studies" and
// "Help Center" point nowhere real in any niche (the original HTML's
// "constacts.html"/"blog-grid.html" targets don't exist here), kept as "#".
const quickLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Case Studies", href: "#" },
  { label: "Latest News", href: "#" },
  { label: "Help Center", href: "#" },
];

const servicesLinks = ["Landscape Design", "Garden Installation", "Lawn & Plant Care", "Irrigation Systems"];

const bottomLinks = ["Terms Of Services", "Privacy Policy", "Cookie Policy"];

type ColumnKey = "quick-link" | "service";

export default function Footer() {
  const { isOpen, toggle } = useMultiOpen<ColumnKey>();

  return (
    <footer className="footer-style-12">
      <div className="wrap-footer">
        <div className="tf-container">
          <div className="footer-top">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h4 className="text-capitalize text_white">
                  Get every single updates <br className="xl-hide" />
                  weekly from us.
                </h4>
              </div>
              <div className="col-md-6">
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
                    <button name="submit" type="submit" className="tf-btn btn-hover-animate btn-bg-primary-2">
                      <span className="text-body-1 fw-6">Subscribe</span>
                      <span className="bg-effect" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="footer-body">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="footer-about">
                  <Link href="/demo-gardenlandscaping" className="footer-logo site-logo mb_16">
                    <Image
                      className="main-logo"
                      src="/assets/images/logo/logo-garden-scaping-2.svg"
                      alt="logo"
                      width={167}
                      height={52}
                    />
                  </Link>
                  <div className="mb_16">
                    <p className="text_muted text-body-default mb_8">
                      101 E 129th St East Chicago, IN 46312, United States
                    </p>
                    <a href="#" className="hover-underline-link link text_muted text-body-default">
                      domain@gmail.com
                    </a>
                  </div>
                  <ul className="tf-social style-4">
                    {socialLinks.map((social) => (
                      <li key={social.icon}>
                        <a href={social.href} className={social.icon} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="footer-content footer-item d-flex justify-content-between">
                  <div className={`footer-col-block quick-link${isOpen("quick-link") ? " open" : ""}`}>
                    <div
                      className="footer-heading footer-heading-mobile h5 text-white mb_16"
                      onClick={() => toggle("quick-link")}
                      role="button"
                      tabIndex={0}
                    >
                      Quick Links
                    </div>
                    <div className="tf-collapse-content">
                      <ul className="footer-menu-list d-grid gap_12">
                        {quickLinks.map((item) => (
                          <li className="text-body-default text_muted text_white" key={item.label}>
                            <Link href={item.href} className="link">{item.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className={`footer-col-block service${isOpen("service") ? " open" : ""}`}>
                    <div
                      className="footer-heading footer-heading-mobile h5 text-white mb_16"
                      onClick={() => toggle("service")}
                      role="button"
                      tabIndex={0}
                    >
                      Services
                    </div>
                    <div className="tf-collapse-content">
                      <ul className="footer-menu-list d-grid gap_12">
                        {servicesLinks.map((label) => (
                          <li className="text-body-default text_muted text_white" key={label}>
                            <a href="#" className="link">{label}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="footer-contact">
                  <h5 className="text_white mb_24">Ready To Transform Your Outdoor Space?</h5>
                  <h4 className="text_white mb_24">1-555-678-8888</h4>
                  <a href="#" className="tf-btn btn-hover-animate btn-bg-primary-2">
                    <span>Book a Consultation</span>
                    <span />
                  </a>
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
      </div>
    </footer>
  );
}
