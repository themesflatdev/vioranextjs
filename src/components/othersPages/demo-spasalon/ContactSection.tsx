"use client";

// "patient-centered care"/"healthcare journey" in the source HTML is
// leftover medical-demo copy pasted in unmodified (same boilerplate issue
// as service-detail/portfolio-detail/blogdetail) — rewritten for spa here;
// "Got Questions? We'd Love To Hear From You!" and the info-list contact
// details are generic/shared theme placeholders, kept verbatim.
export default function ContactSection() {
  return (
    <div className="section-contact-2 tf-spacing-1">
      <div className="tf-container">
        <div className="heading-title mb_50">
          <div className="row align-items-end">
            <div className="col-lg-6">
              <h3 className="title text_primary">Got Questions? We&rsquo;d Love To Hear From You!</h3>
            </div>
            <div className="col-lg-6">
              <p className="text-body-2 text_secondary">
                We&rsquo;re committed to making every visit feel calm and cared for, from your first
                booking question to the moment you walk through our door for your treatment.
              </p>
            </div>
          </div>
        </div>
        <div className="box-contact">
          <div className="row">
            <div className="col-lg-6">
              <div className="box-info">
                <div className="heading mb_24">
                  <h4 className="mb_8 text_primary">Reach Out To Us</h4>
                  <p className="text_secondary text-body-default">
                    We&rsquo;re here to assist with any questions, concerns, or inquiries&mdash;contact
                    us today!
                  </p>
                </div>
                <ul className="info-list d-grid gap_20">
                  <li>
                    <div className="icon">
                      <i className="icon-MapPin" />
                    </div>
                    <div className="content">
                      <div className="text-caption-1 text_secondary mb_4">Address:</div>
                      <h6 className="text_secondary-color">101 E 129th St, East Chicago, 2nd Floor, NY</h6>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="icon-PhoneCall" />
                    </div>
                    <div className="content">
                      <div className="text-caption-1 text_secondary mb_4">Phone:</div>
                      <h6 className="text_secondary-color">1-555-678-8888</h6>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="icon-Alarm" />
                    </div>
                    <div className="content">
                      <div className="text-caption-1 text_secondary mb_4">Email:</div>
                      <h6 className="text_secondary-color">
                        <a href="#" className="link">
                          themesflat@gmail.com
                        </a>
                      </h6>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <form className="form-contact" onSubmit={(e) => e.preventDefault()}>
                <div className="heading mb_24">
                  <h4 className="mb_5 text_primary">Get In Touch</h4>
                  <p className="text-body-default text_secondary">
                    We&apos;d love to hear from you! If you have any questions
                  </p>
                </div>
                <div className="wrap mb_39">
                  <div className="tf-grid-layout md-col-2 gap_20 mb_20">
                    <fieldset>
                      <input
                        className="style-line-bottom"
                        id="fisrtName"
                        type="text"
                        placeholder="First Name"
                        name="text"
                        required
                      />
                    </fieldset>
                    <fieldset>
                      <input
                        className="style-line-bottom"
                        id="lastName"
                        type="text"
                        placeholder="Last Name"
                        name="text"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="tf-grid-layout md-col-2 gap_20 mb_20">
                    <fieldset>
                      <input
                        className="style-line-bottom"
                        id="email"
                        type="email"
                        placeholder="Email"
                        name="email"
                        required
                      />
                    </fieldset>
                    <fieldset>
                      <input
                        className="style-line-bottom"
                        id="phone"
                        type="number"
                        placeholder="Phone Number"
                        name="text"
                        required
                      />
                    </fieldset>
                  </div>
                  <fieldset>
                    <textarea
                      id="comment"
                      className="style-line-bottom"
                      rows={4}
                      placeholder="Your Message"
                      required
                    />
                  </fieldset>
                </div>
                <button className="tf-btn btn-bg-dark-2 btn-hover-animate btn-bg-1 btn-px-28 w-full" type="submit">
                  <span>Send Message</span>
                  <span className="bg-effect" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
