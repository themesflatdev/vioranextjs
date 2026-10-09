"use client";

import { useMultiOpen } from "@/hooks/useMultiOpen";

const columns = [
  { key: "company", heading: "Our Company", items: ["About", "Careers", "Blog", "Contact"] },
  { key: "product", heading: "Product", items: ["Features", "Templates", "Pricing", "FAQs"] },
] as const;

const socialLinks = [
  { href: "#", icon: "icon-FaceBook-2" },
  { href: "#", icon: "icon-Linkedin" },
  { href: "#", icon: "icon-XLogo-2" },
  { href: "#", icon: "icon-InsLogo-fill" },
  { href: "#", icon: "icon-Youtube" },
];

const bottomLinks = ["Terms Of Services", "Privacy Policy", "Cookie Policy"];

type ColumnKey = (typeof columns)[number]["key"];

export default function Footer() {
  const { isOpen, toggle } = useMultiOpen<ColumnKey>();

  return (
    <footer className="footer-style-6">
      <div className="tf-container">
        <div className="footer-body">
          <div className="footer-contact">
            <h2 className="mb_32">Need help?</h2>
            <div className="mb_32">
              <p className="text-body-default text_primary hover-underline-link d-inline-block mb_8">
                123 Creative Ave, New York, NY 10001
              </p>
              <p className="text-body-default text_primary mb_8">Phone: 1-555-678-8888</p>
              <p className="text-body-default text_primary mb_8">
                Email: <a href="#" className="link">themesflat@gmail.com</a>
              </p>
            </div>
            <a href="#" className="tf-btn btn-px-32">
              <span>Contact Us</span>
              <span />
            </a>
          </div>
          <div className="footer-link footer-content d-flex justify-content-between">
            {columns.map((col) => (
              <div className={`footer-col-block ${col.key}${isOpen(col.key) ? " open" : ""}`} key={col.key}>
                <div
                  className="footer-heading letter-spacing-1 lh-16 footer-heading-mobile text-uppercase text-label fw-6 text_secondary mb_20"
                  onClick={() => toggle(col.key)}
                  role="button"
                  tabIndex={0}
                >
                  {col.heading}
                </div>
                <div className="tf-collapse-content">
                  <ul className="footer-menu-list d-grid gap_12">
                    {col.items.map((label) => (
                      <li className="text-body-default text_primary" key={label}>
                        <a href="#" className="link">{label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="footer-newsletter">
            <h6 className="mb_12">Join Our Newsletter</h6>
            <p className="text-body-default text_secondary mb_28">
              Sign up for updates on our latest news.
            </p>
            <form className="form-newsletter style-2 mb_28" onSubmit={(e) => e.preventDefault()}>
              <div className="wrap gap_12">
                <fieldset className="position-relative">
                  <input
                    type="email"
                    className="tb-my-input style-line-bottom v2"
                    name="email"
                    placeholder="Enter Your Email"
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
        <div className="footer-bottom d-flex align-items-center justify-content-between">
          <p className="text_primary text-caption-1">
            ©2025 <a href="#" className="text_primary link">Viora.</a> All Rights Reserved.
          </p>
          <ul className="wrap">
            {bottomLinks.map((label) => (
              <li key={label}>
                <a href="#" className="text-caption-1 link text_primary">{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
