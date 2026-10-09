import Link from "next/link";

const quickLinks = [
  { label: "About", href: "/about-us" },
  { label: "Pricing", href: "#" },
  { label: "Services", href: "/services" },
  { label: "Our Team", href: "/our-team" },
  { label: "Project", href: "/portfolio" },
  { label: "Blog", href: "/blog-full-width" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { href: "#", icon: "icon-FaceBook-2" },
  { href: "#", icon: "icon-Linkedin" },
  { href: "#", icon: "icon-XLogo-2" },
  { href: "#", icon: "icon-InsLogo-fill" },
  { href: "#", icon: "icon-Youtube" },
];

const bottomLinks = ["Terms Of Services", "Privacy Policy", "Cookie Policy"];

export default function Footer() {
  return (
    <footer className="footer-style-5">
      <div className="tf-container">
        <div className="row align-items-center">
          <div className="col-lg-7 position-relative">
            <a href="#" className="link text_white font-2 h2 mb_16 fw-5">
              themesflat@gmail.com
            </a>
            <ul className="meta mb_40">
              <li className="text-body-default text_white d-flex align-items-center mb_16">
                Address: 123 Creative Ave, New York, NY 10001 <i className="icon-ArrowUpRight" />
              </li>
              <li className="text-body-default text_white">
                Working Hours: Mon – Fri, 9:00 AM – 6:00 PM
              </li>
            </ul>
            <a href="#" className="tf-btn btn-hover-animate-2 btn-bg-primary-3 btn-px-32">
              <span>Contact Us</span>
              <span />
            </a>
          </div>
          <div className="col-lg-5">
            <div className="footer-contact">
              <div className="footer-quick-link mb_40">
                <div className="text-label lh-16 text_white heading-footer text-uppercase mb_20 letter-spacing-1">
                  Quick Link
                </div>
                <ul className="list">
                  {quickLinks.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} className="text-label text_white text-uppercase letter-spacing-1">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
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
        </div>
        <div className="footer-bottom d-flex align-items-center justify-content-between">
          <p className="text_muted text-body-default font-4">
            ©2025 <a href="#" className="text_muted link">Viora.</a> All Rights Reserved.
          </p>
          <ul className="wrap">
            {bottomLinks.map((label) => (
              <li key={label}>
                <a href="#" className="text-caption-1 link text_muted">{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
