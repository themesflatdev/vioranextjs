"use client";

import Link from "next/link";
import { contactHref } from "@/data/demo-agency/menu";

const quickLinks: Array<{ label: string; href: string }> = [
  { label: "About", href: "/demo-agency/about" },
  { label: "Pricing", href: "/demo-agency/our-pricing" },
  { label: "Services", href: "/demo-agency/services" },
  { label: "Our Team", href: "/demo-agency/our-team" },
  { label: "Project", href: "/demo-agency/portfolio" },
  { label: "Blog", href: "/blog-full-width" },
  { label: "Contact", href: contactHref },
];

const socialLinks = [
  { href: "#", icon: "icon-FaceBook-2" },
  { href: "#", icon: "icon-Linkedin" },
  { href: "#", icon: "icon-XLogo-2" },
  { href: "#", icon: "icon-InsLogo-fill" },
  { href: "#", icon: "icon-Youtube" },
];

export default function Footer() {
  return (
    <footer className="footer-style-2 position-relative z-5">
      <div className="tf-container large">
        <div className="row align-items-center">
          <div className="col-xl-7">
            <div className="info position-relative">
              <a href="#" className="link text_white h2 fw-5 mb_16 font-main">
                themesflat@gmail.com
              </a>
              <ul className="meta">
                <li className="text-body-default text_white d-flex align-items-center">
                  Address: 123 Creative Ave, New York, NY 10001 <i className="icon-ArrowUpRight" />
                </li>
                <li className="text-body-default text_white">
                  Working Hours: Mon – Fri, 9:00 AM – 6:00 PM
                </li>
              </ul>
            </div>
            <div className="box-content">
              <div className="content">
                <h2 className="text_primary mb_20">Ready To Start?</h2>
                <p className="text_primary text-body-default">
                  Have a project in mind or just want to say hello? We&rsquo;d love to hear from
                  you. Drop us a message and we&rsquo;ll get back to you shortly.
                </p>
              </div>
              <Link href={contactHref} className="tf-btn rounded-icon btn-hover-rounded-icon hover-1 btn-bg-dark">
                <div className="btn_inner">
                  <div className="btn_text">
                    <span>Contact Us</span>
                  </div>
                  <div className="btn_icon">
                    <span>
                      <i className="icon-ArrowUpRight" />
                      <i className="icon-ArrowUpRight" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-xl-5">
            <div className="footer-contact ms-xl-auto">
              <div className="footer-quick-link">
                <div className="text-label text_white heading-footer text-uppercase mb_18">Quick Link</div>
                <ul className="list">
                  {quickLinks.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} className="text-label text_white text-uppercase">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <form
                className="form-newsletter style-2 mb_28"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="wrap gap_12">
                  <fieldset className="position-relative">
                    <input
                      type="email"
                      className="tb-my-input style-line-bottom v2"
                      name="email"
                      placeholder="Your email address"
                      required
                    />
                  </fieldset>
                  <button name="submit" type="submit" className="button-submit">
                    <i className="icon-PaperPlaneTilt" />
                  </button>
                </div>
              </form>
              <ul className="tf-social">
                {socialLinks.map((social) => (
                  <li key={social.icon}>
                    <a href={social.href} className={social.icon} />
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
