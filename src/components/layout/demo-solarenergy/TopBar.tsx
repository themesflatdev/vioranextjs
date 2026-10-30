export default function TopBar() {
  return (
    <div className="topbar-2 style-1 md-hide">
      <div className="tf-container large d-flex justify-content-between align-items-center">
        <ul className="tb-contact d-flex gap_28">
          <li>
            <a href="#" className="d-flex align-items-center gap_8 text-caption-1 text_primary">
              <i className="icon-Envelope" />
              themesflat@gmail.com
            </a>
          </li>
          <li>
            <a href="#" className="d-flex align-items-center gap_8 text-caption-1 text_primary">
              <i className="icon-MapPin" />
              101 E 129th St, East Chicago, IN 46312, US
            </a>
          </li>
        </ul>
        <div className="tb-right d-flex align-items-center gap_8">
          <ul className="tf-social style-3 d-flex gap_12">
            <li>
              <a href="#" className="icon-Linkedin" aria-label="LinkedIn" />
            </li>
            <li>
              <a href="#" className="icon-XLogo-2" aria-label="X (Twitter)" />
            </li>
            <li>
              <a href="#" className="icon-InsLogo-fill" aria-label="Instagram" />
            </li>
            <li>
              <a href="#" className="icon-Youtube" aria-label="YouTube" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
