import Image from "next/image";

const linkGroups = [
  { heading: "Company", items: ["About Us", "Our Team", "Latest New"] },
  { heading: "Spaces", items: ["Dedicated Desk", "Private Office", "Meeting Room"] },
  { heading: "Support", items: ["FAQ Help", "Contact Us", "User Guide"] },
  { heading: "Follow Us", items: ["Facebook", "Instagram", "On Twitter"] },
];

export default function Footer() {
  return (
    <footer className="footer-style-11">
      <div className="tf-grid-layout xl-col-2 gap-0">
        <div className="footer-contact">
          <div className="heading-section d-grid gap_16">
            <div className="sub text-label text-uppercase text_primary lh-26">Contact Us</div>
            <h2 className="title">
              Let&rsquo;s Keep in <br className="md-hide" />
              Touch With Us!
            </h2>
            <p className="desc text-body-2 text_secondary">
              Contact us today to explore the possibilities of our dynamic co-working space. Your
              ideal workspace is just a message or call away with us.
            </p>
          </div>
          <ul className="list-info d-grid gap_12">
            <li className="info-item d-flex align-items-center gap_8">
              <div className="title d-flex gap_8 align-items-center text-body-2">
                <i className="icon-MapPinLine" />
                Address:
              </div>
              <h6>123 Creative Ave, New York, NY 10001</h6>
            </li>
            <li className="info-item d-flex align-items-center gap_8">
              <div className="title d-flex gap_8 align-items-center text-body-2">
                <i className="icon-PhoneCall" />
                Phone:
              </div>
              <h6>1-555-678-8888</h6>
            </li>
            <li className="info-item d-flex align-items-center gap_8">
              <div className="title d-flex gap_8 align-items-center text-body-2">
                <i className="icon-Envelope" />
                Email:
              </div>
              <h6><a href="#" className="link">themesflat@gmail.com</a></h6>
            </li>
          </ul>

          <ul className="wrap-quick-link d-flex justify-content-between gap_12">
            {linkGroups.map((group) => (
              <li key={group.heading}>
                <div className="text-body-2 fw-6 text_secondary letter-spacing-1 text-uppercase mb_16 lh-16">
                  {group.heading}
                </div>
                <div className="d-grid gap_8">
                  {group.items.map((label) => (
                    <a href="#" className="text-body-default link" key={label}>
                      {label}
                    </a>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-newsletter">
          <div className="thumb scale-up-img overflow-hidden">
            <Image
              className="scale-up"
              width={960}
              height={745}
              loading="lazy"
              src="/assets/images/demo-coworkingspace/footer-banner.jpg"
              alt="banner"
            />
          </div>
          <form className="form-newsletter style-8" onSubmit={(e) => e.preventDefault()}>
            <h4 className="text_white mb_20">Stay In The Loop</h4>
            <div className="wrap position-relative">
              <fieldset className="position-relative">
                <input
                  type="email"
                  className="tb-my-input style-border"
                  name="email"
                  placeholder="Enter your e-mail"
                  required
                />
              </fieldset>
              <button name="submit" type="submit" className="tf-btn btn-switch-text">
                <span>
                  <span className="btn-double-text" data-text="Subscribe">Subscribe</span>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
}
