"use client";

import { contactInfo } from "@/data/demo-corporate/contactInfo";

export default function ContactSection() {
  return (
    <div className="section-contact tf-spacing-15">
      <div className="tf-container">
        <div className="heading-title mb_48">
          <div className="row align-items-end">
            <div className="col-lg-6">
              <h3 className="title">Got Questions? We&rsquo;d Love To Hear From You!</h3>
            </div>
            <div className="col-lg-6">
              <p className="text-body-2 text_secondary">
                We are deeply committed to delivering strategic, results-driven
                solutions that prioritize your business growth, backed by
                expertise, transparency, and unwavering integrity at every step
                of your journey with us.
              </p>
            </div>
          </div>
        </div>
        <div className="box-contact">
          <div className="row">
            <div className="col-lg-6">
              <div className="box-info">
                <div className="heading mb_24">
                  <h4 className="mb_6">Reach Out To Us</h4>
                  <p className="text_secondary text-body-default">
                    We&rsquo;re here to assist with any questions, concerns, or
                    inquiries&mdash;contact us today!
                  </p>
                </div>
                <ul className="info-list d-grid gap_20">
                  <li>
                    <div className="icon">
                      <i className="icon-MapPin" />
                    </div>
                    <div className="content">
                      <div className="text-caption-1 text_secondary mb_4">Address:</div>
                      <p className="h6">{contactInfo.address}</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="icon-PhoneCall" />
                    </div>
                    <div className="content">
                      <div className="text-caption-1 text_secondary mb_4">Phone:</div>
                      <p className="h6">{contactInfo.phone}</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="icon-Alarm" />
                    </div>
                    <div className="content">
                      <div className="text-caption-1 text_secondary mb_4">Email:</div>
                      <a href="#" className="h6 link">{contactInfo.email}</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <form className="form-contact" onSubmit={(e) => e.preventDefault()}>
                <div className="heading mb_24">
                  <h4 className="mb_5">Get In Touch</h4>
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
                <button className="tf-btn btn-hover-animate-2 btn-bg-1 btn-px-28 w-full" type="submit">
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
