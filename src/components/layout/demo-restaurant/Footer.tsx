const bottomLinks = ["Terms Of Services", "Privacy Policy", "Cookie Policy"];

export default function Footer() {
  return (
    <footer className="footer-style-4">
      <div className="tf-container medium">
        <div className="footer-top">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h2 className="text-capitalize footer-title mb_24">
                Ready for an unforgettable dining experience?
              </h2>
              <p className="text_white text-body-2">
                Reserve your table and let us take care of the rest.
              </p>
            </div>
            <div className="col-md-4 d-flex justify-content-md-end">
              <div className="btn_wrapper">
                <a href="#" className="btn-footer text-button text_white btn-item btn-hover">
                  Book <br />
                  A Table
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-body">
          <div className="row">
            <div className="col-md-7">
              <ul className="list-info d-flex">
                <li>
                  <span className="d-block mb_6 text-body-default">Support 24/7</span>
                  <h6 className="text-nowrap">1-555-678-8888</h6>
                </li>
                <li>
                  <span className="d-block mb_6 text-body-default">Our Address</span>
                  <h6>456 Elm Street, San Francisco, CA 94102, USA</h6>
                </li>
              </ul>
            </div>
            <div className="col-md-5">
              <form className="form-newsletter style-4" onSubmit={(e) => e.preventDefault()}>
                <div className="wrap gap_12">
                  <fieldset className="position-relative">
                    <input
                      type="email"
                      className="tb-my-input style-border"
                      name="email"
                      placeholder="Your email address"
                      required
                    />
                  </fieldset>
                  <button name="submit" type="submit" className="button-submit">
                    <span className="icon-PaperPlaneTilt" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="wrap-footer-bottom d-flex align-items-center justify-content-between">
            <p className="text_muted text-body-default">
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
      </div>
    </footer>
  );
}
