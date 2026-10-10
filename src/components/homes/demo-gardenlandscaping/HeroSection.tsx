"use client";

import Image from "next/image";

export default function HeroSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="hero-banner-13 parallax-container position-relative z-5">
      <div className="tf-container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="box-left">
              <div className="content mb_48">
                <div className="trust d-flex align-items-center gap_12 mb_20">
                  <div className="group">
                    <Image
                      className="wow fadeInLeft"
                      data-wow-delay="0.1s"
                      width={48}
                      height={48}
                      src="/assets/images/avatar/group-avatar-2-1.jpg"
                      alt="avatar"
                    />
                    <Image
                      className="wow fadeInLeft"
                      data-wow-delay="0.2s"
                      width={48}
                      height={48}
                      src="/assets/images/avatar/group-avatar-2-2.jpg"
                      alt="avatar"
                    />
                    <Image
                      className="wow fadeInLeft"
                      data-wow-delay="0.3s"
                      width={48}
                      height={48}
                      src="/assets/images/avatar/group-avatar-2-3.jpg"
                      alt="avatar"
                    />
                  </div>
                  <div className="content">
                    <ul className="ratings d-flex mb_10">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <li key={i}>
                          <i className="icon-favorite_major" />
                        </li>
                      ))}
                    </ul>
                    <p className="text-label letter-spacing-1 text_white">From 2000+ Ratings</p>
                  </div>
                </div>
                <h2 className="mb_20 text-capitalize text_white">Crafting gardens, cultivating dreams</h2>
                <p className="text-body-2 text_white">
                  Our team combines creativity, strategy, and technical expertise to create designs that stand out.
                </p>
              </div>
              <div className="box-item">
                <div className="icon">
                  <i className="icon-MapTrifold" />
                </div>
                <div>
                  <h6 className="mb_4">Los Angeles</h6>
                  <p className="text-caption-1 text_secondary">1234 Sunset Blvd</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <form className="form-book-landscaping d-grid gap_24 bg-white" onSubmit={handleSubmit}>
              <div className="text-center">
                <h5>Book Landscaping Now</h5>
              </div>
              <div className="d-grid gap_16">
                <fieldset>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="Your Name"
                    name="text"
                    tabIndex={2}
                    aria-required="true"
                    required
                  />
                </fieldset>
                <fieldset>
                  <input type="email" placeholder="Email" name="text" tabIndex={2} aria-required="true" required />
                </fieldset>
                <fieldset>
                  <input
                    id="phone"
                    type="number"
                    placeholder="Phone Number"
                    name="text"
                    tabIndex={2}
                    aria-required="true"
                    required
                  />
                </fieldset>
                <fieldset>
                  <textarea
                    id="comment"
                    rows={4}
                    placeholder="Your message"
                    tabIndex={2}
                    aria-required="true"
                    required
                  />
                </fieldset>
              </div>
              <button className="tf-btn btn-hover-animate btn-bg-primary-2 btn-px-28 w-full" type="submit">
                <span>Request A quote</span>
                <span className="bg-effect" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
