"use client";

import Image from "next/image";
import Link from "next/link";
import { canonicalBlogPosts, resolveBlogDetailMeta } from "@/data/demo-medical/blogPosts";

const socialIcons = [
  "icon-messenger-logo",
  "icon-x-logo",
  "icon-instagram-logo",
  "icon-skype-logo",
  "icon-telegram-logo",
];

const tags = ["HealthTips", "PatientCare"];

const reviews = [
  {
    name: "Adison Herwitz",
    date: "March 18, 2025",
    avatar: "/assets/images/avatar/avatar-2.jpg",
    text: "Great read! It's reassuring to see clear, honest information about your health options. Transparency like this builds real trust.",
  },
  {
    name: "Corey Workman",
    date: "March 18, 2025",
    avatar: "/assets/images/avatar/avatar-3.jpg",
    text: "Love how clearly you explained each step of the process. Many people find this confusing — thanks for sharing your approach!",
  },
  {
    name: "Giana Franci",
    date: "March 18, 2025",
    avatar: "/assets/images/avatar/avatar-4.jpg",
    text: "Insightful post. Combining expert care with a personal touch is easier said than done — it's inspiring to see how you do it in practice.",
  },
];

// blogdetail.html only has one demo write-up shared by every slug (per
// CLAUDE.md rule 4) — only the h3 heading, Author/Post Date meta, and
// prev/next navigation below are dynamic per post. The original body copy
// was a mix of real medical content and corporate/real-estate content that
// leaked in from another theme demo (same pattern as portfolio-detail.html):
// the quote talked about "property management services", the closing
// section was about "the enterprise", and the tags were
// "CompanyCulture"/"EnterpriseInsights". Rewritten below with real medical
// copy; kept verbatim: images, meta label "Comment: Full-Time" (a sitewide
// theme leftover), opening paragraph 1, "Trusted Care Close to Home"
// heading+paragraph, quote author name, and all 3 reviews'
// names/dates/avatars/ratings.
export default function BlogDetailBody({ slug }: { slug: string }) {
  const meta = resolveBlogDetailMeta(slug);
  if (!meta) return null;
  const { title, author, date, isCanonical } = meta;

  // Prev/Next only makes sense within the 8-post canonical narrative —
  // cloned pagination-demo posts (bloggrid/bloglist page 2-3) are filler
  // cards, not part of that sequence, so they simply don't show the block.
  const index = canonicalBlogPosts.findIndex((post) => post.slug === slug);
  const prevPost = isCanonical && index > 0 ? canonicalBlogPosts[index - 1] : null;
  const nextPost = isCanonical && index < canonicalBlogPosts.length - 1 ? canonicalBlogPosts[index + 1] : null;

  return (
    <div className="blog-post-detail tf-spacing-1">
      <div className="tf-container">
        <div className="row">
          <div className="col-md-2 md-hide">
            <ul className="tf-social style-2 flex-column">
              {socialIcons.map((icon) => (
                <li key={icon}>
                  <a href="#" className={icon} />
                </li>
              ))}
            </ul>
          </div>
          <div className="col-xl-8 col-md-10">
            <div className="content-inner">
              <div className="post-detail">
                <div className="thumb mb_40">
                  <Image
                    className="rounded-16"
                    loading="lazy"
                    width={860}
                    height={512}
                    src="/assets/images/demo-medical/thumbs-main-blog.jpg"
                    alt="thumbs"
                  />
                </div>
                <div className="heading-title mb_40">
                  <div className="tag text-button mb_17">HEALTH CARE</div>
                  <h3 className="title text-capitalize mb_16 font-main">{title}</h3>
                  <ul className="meta">
                    <li>
                      <div className="text-caption-1 text_secondary mb_4">Author</div>
                      <div className="text-button text_primary">{author}</div>
                    </li>
                    <li>
                      <div className="text-caption-1 text_secondary mb_4">Post Date</div>
                      <div className="text-button text_primary">{date}</div>
                    </li>
                    <li>
                      <div className="text-caption-1 text_secondary mb_4">Comment</div>
                      <div className="text-button text_primary">Full-Time</div>
                    </li>
                  </ul>
                </div>
                <p className="text-body-2 text_secondary mb_12">
                  Medical services are an essential part of our lives, offering care and treatment
                  for various health conditions. These services encompass a wide range of
                  specialties, including primary care, pediatrics, cardiology
                </p>
                <p className="text-body-2 text_secondary mb_40">
                  Medical services are an essential part of our lives, offering care and treatment
                  for various health conditions. These services encompass a wide range of
                  specialties, including primary care, pediatrics and cardiology, each delivered by
                  experienced doctors with a patient-centered approach.
                </p>
                <div className="mb_40">
                  <h4 className="mb_12 text_primary-color font-main">Trusted Care Close to Home</h4>
                  <p className="text-body-2 text_secondary mb_28">
                    Medical services are an essential part of our lives, offering care and treatment
                    for various health conditions. These services encompass a wide range of
                    specialties, including primary care, pediatrics, cardiology
                  </p>
                  <div className="quote">
                    <p className="text-body-2 text_primary mb_24">
                      &quot;The care my family received was beyond what we expected. Every doctor and
                      nurse was attentive, patient and professional at every step of our journey.&quot;
                    </p>
                    <div className="author">
                      <h5 className="text_primary">Cheyenne Mango</h5>
                      <div className="text-label text_secondary fw-6 text-uppercase letter-spacing-1">
                        Parent of Patient
                      </div>
                    </div>
                  </div>
                </div>
                <div className="thumbs mb_40">
                  <Image
                    className="rounded-16"
                    loading="lazy"
                    width={860}
                    height={512}
                    src="/assets/images/demo-medical/thumbs-blog.jpg"
                    alt="thumbs"
                  />
                </div>
                <div className="passive mb_40">
                  <h4 className="text_primary-color font-main mb_12">Care That Continues Beyond The Clinic</h4>
                  <p className="text-body-2 text_secondary">
                    Behind every successful recovery is a team that listens, plans and follows
                    through — from the first consultation to the final check-up. Those quiet,
                    consistent efforts are what allow us to deliver reliable care to every patient
                    and family we serve.
                  </p>
                  <p className="text-body-2 text_secondary">
                    At the end of the day, great healthcare isn’t built by chance. It’s built by
                    design — one patient, one plan, one caring conversation at a time.
                  </p>
                </div>
                <div className="tag-share align-items-center gap_12 d-flex justify-content-between flex-wrap mb_40">
                  <div className="tag d-flex align-items-center gap_11">
                    <span className="text-button fw-7 text_primary">Tag:</span>
                    <ul className="tags-list style-2 d-flex gap_12 flex-wrap">
                      {tags.map((tag) => (
                        <li key={tag}>
                          <a href="#" className="tags-item text-label fw-6 letter-spacing-1 text-uppercase">
                            {tag}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="share d-flex align-items-center gap_16">
                    <span className="text-button fw-7 text_primary">Share This Post:</span>
                    <ul className="tf-social style-2 d-flex gap_24">
                      <li>
                        <a href="#" className="icon-FacebookLogo" />
                      </li>
                      <li>
                        <a href="#" className="icon-x-logo" />
                      </li>
                      <li>
                        <a href="#" className="icon-instagram-logo" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="tf-article-navigation">
                  {prevPost && (
                    <div className="item prev">
                      <Link
                        href={`/demo-medical/blogdetail/${prevPost.slug}`}
                        className="hover-underline-link text-button text_primary fw-6 mb_6"
                      >
                        Previous
                      </Link>
                      <h5>
                        <Link href={`/demo-medical/blogdetail/${prevPost.slug}`} className="link font-main line-clamp-1">
                          {prevPost.title}
                        </Link>
                      </h5>
                    </div>
                  )}
                  {nextPost && (
                    // .tf-article-navigation is CSS grid (repeat(2, 1fr)), not
                    // flexbox (confirmed in _blog.scss) — a lone grid child
                    // auto-places into column 1, so when Previous is hidden
                    // (first post) Next must be pinned to column 2 explicitly
                    // to stay on the right, same visual intent as
                    // portfolio-detail's "ms-auto" (which only works for flex).
                    <div className="item next" style={prevPost ? undefined : { gridColumn: 2 }}>
                      <Link
                        href={`/demo-medical/blogdetail/${nextPost.slug}`}
                        className="hover-underline-link text-button text_primary fw-6 mb_6"
                      >
                        Next
                      </Link>
                      <h5>
                        <Link href={`/demo-medical/blogdetail/${nextPost.slug}`} className="link font-main line-clamp-1">
                          {nextPost.title}
                        </Link>
                      </h5>
                    </div>
                  )}
                </div>
              </div>
              <div className="reply-comment mb_40">
                <div className="title d-flex align-items-center justify-content-between mb_20">
                  <h4 className="font-main">Customer Reviews</h4>
                  <a href="#leaveComment" className="tf-btn btn-hover-animate btn-bg-primary-2 btn-px-28">
                    <span>Write A Review</span>
                    <span className="bg-effect" />
                  </a>
                </div>
                <div className="reply-comment-wrap">
                  {reviews.map((review) => (
                    <div className="reply-comment-item" key={review.name}>
                      <div className="avatar">
                        <Image src={review.avatar} width={60} height={60} alt="avatar" />
                      </div>
                      <div className="content">
                        <div className="info mb_12">
                          <h6 className="name mb_4">
                            <a href="#" className="link">
                              {review.name}
                            </a>
                          </h6>
                          <p className="text-body-default text_secondary">{review.date}</p>
                        </div>
                        <ul className="ratings d-flex mb_10">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <li key={i}>
                              <i className="icon-favorite_major" />
                            </li>
                          ))}
                        </ul>
                        <p className="comment text-body-2 text_secondary">{review.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="leave-comment">
                <div className="heading-title mb_20">
                  <h4 className="mb_11">Add A Review</h4>
                  <p className="text-body-default text_secondary">Your email address will not be published</p>
                </div>
                <form id="leaveComment" className="form-leave-comment" onSubmit={(e) => e.preventDefault()}>
                  <div className="wrap mb_20">
                    <div className="tf-grid-layout md-col-2 gap_20 mb_20">
                      <fieldset>
                        <label htmlFor="name" className="text-body-default text_secondary mb_8">
                          Name
                        </label>
                        <input id="name" type="text" placeholder="Your Name*" name="text" aria-required="true" required />
                      </fieldset>
                      <fieldset>
                        <label htmlFor="email" className="text-body-default text_secondary mb_8">
                          Email
                        </label>
                        <input id="email" type="email" placeholder="Your Email*" name="email" aria-required="true" required />
                      </fieldset>
                    </div>
                    <fieldset>
                      <label htmlFor="comment" className="text-body-default text_secondary mb_8">
                        Review
                      </label>
                      <textarea id="comment" rows={4} placeholder="Write comment" aria-required="true" required />
                    </fieldset>
                  </div>
                  <div className="box-fieldset-item d-flex mb_20 align-items-center">
                    <fieldset>
                      <input type="checkbox" className="tf-check" id="note" />
                    </fieldset>
                    <p className="text-body-default text_secondary">Save your name, email for the next time review</p>
                  </div>
                  <button className="tf-btn btn-hover-animate btn-bg-primary-2 btn-px-28" type="submit">
                    <span>Submit Review</span>
                    <span className="bg-effect" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
