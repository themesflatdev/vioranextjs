import Image from "next/image";
import Link from "next/link";

export default function TopBar() {
  return (
    <div className="topbar-3">
      <div className="tf-container d-flex justify-content-between align-items-center">
        <Link href="/demo-agriculturefarming" className="site-logo">
          <Image
            className="logo_header"
            alt="logo"
            width={167}
            height={52}
            src="/assets/images/logo/logo-agriculture-farming-1.svg"
          />
        </Link>
        <div className="tb-right d-flex align-items-center">
          <ul className="list-info xl-hide">
            <li>
              <div className="icon">
                <i className="icon-PhoneCall" />
              </div>
              <div>
                <span className="text-uppercase text-label letter-spacing-1 text_muted d-block mb_4">
                  Call Us Today
                </span>
                <span className="text-button text_primary">1-555-678-8888</span>
              </div>
            </li>
            <li>
              <div className="icon">
                <i className="icon-Envelope" />
              </div>
              <div>
                <span className="text-uppercase text-label letter-spacing-1 text_muted d-block mb_4">
                  Get In Touch
                </span>
                <a href="#" className="text-button text_primary link">
                  themesflat@gmail.com
                </a>
              </div>
            </li>
            <li>
              <div className="icon">
                <i className="icon-MapPinLine" />
              </div>
              <div>
                <span className="text-uppercase text-label letter-spacing-1 text_muted d-block mb_4">
                  101 E 129th St
                </span>
                <span className="text-button text_primary">East Chicago, IN 46312, US</span>
              </div>
            </li>
          </ul>
          <a href="#" className="tf-btn btn-hover-animate-2 btn-bg-secondary btn-hover-animate-2">
            <span>Get A Quote</span>
            <span className="bg-effect" />
          </a>
        </div>
      </div>
    </div>
  );
}
