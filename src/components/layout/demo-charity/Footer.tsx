import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/demo-charity" },
  { label: "About Us", href: "#" },
  { label: "Programs", href: "#" },
  { label: "Get Involved", href: "#" },
  { label: "Stories", href: "#" },
  { label: "Contact Us", href: "#" },
];

const bottomLinks = ["Terms Of Services", "Privacy Policy", "Cookie Policy"];

export default function Footer() {
  return (
    <footer className="footer-style-14">
      <div className="footer-body">
        <div className="tf-container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="heading-footer text-center">
                <h2 className="title text_white mb_24">We&rsquo;re Here To Connect With You</h2>
                <p className="text-body-2 text_white">
                  Have questions, need support, or interested in partnering with us? <br className="xl-hide" />
                  Reach out anytime — we&rsquo;d be happy to help.
                </p>
              </div>
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
                  <button name="submit" type="submit" className="tf-btn btn-bg-primary-2 btn-switch-text">
                    <span>
                      <span className="btn-double-text" data-text="Subscribe">Subscribe</span>
                    </span>
                  </button>
                </div>
              </form>
              <ul className="quick-link d-flex justify-content-center flex-wrap">
                {quickLinks.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-button link text_white">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="tf-container medium">
          <div className="wrap-footer-bottom d-flex justify-content-between align-items-center">
            <p className="text_white text-caption-1">
              ©2025 <a href="#" className="text_white link">Viora.</a> All Rights Reserved.
            </p>
            <ul className="wrap d-flex gap_20">
              {bottomLinks.map((label) => (
                <li key={label}>
                  <a href="#" className="text-caption-1 link text_white">{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
