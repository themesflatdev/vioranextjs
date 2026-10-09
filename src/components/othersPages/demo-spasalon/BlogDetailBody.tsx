"use client";

import Image from "next/image";
import Link from "next/link";
import { resolveBlogDetailMeta, allBlogDetailSlugs } from "@/data/demo-spasalon/blogPosts";
import { blogGridTags } from "@/data/demo-spasalon/blogSidebar";
import BlogSidebar from "./BlogSidebar";

const tags = ["Aromatherapy", "SelfCare"];

const reviews = [
  {
    name: "Adison Herwitz",
    date: "March 18, 2025",
    avatar: "/assets/images/avatar/avatar-2.jpg",
    text: "Great read! It's refreshing to see a spa open up about the care behind every treatment. That kind of transparency builds real trust.",
  },
  {
    name: "Corey Workman",
    date: "March 18, 2025",
    avatar: "/assets/images/avatar/avatar-3.jpg",
    text: "Love how you explained the balance between relaxation and real results. So many places lean too far one way — thanks for sharing your approach!",
  },
  {
    name: "Giana Franci",
    date: "March 18, 2025",
    avatar: "/assets/images/avatar/avatar-4.jpg",
    text: "Insightful post. Pairing skilled therapists with genuinely good products is easier said than done — inspiring to see it done well.",
  },
];

// blogdetail.html only has one demo write-up shared by every slug (per
// CLAUDE.md rule 4) — only the h3 heading, tag, Author/Post Date meta, and
// prev/next navigation are dynamic per post. The original body copy leaked
// in from a corporate/real-estate demo ("property management services",
// "CEO vilora", tags "CompanyCulture"/"EnterpriseInsights") — same pattern
// as service-detail.html/portfolio-detail.html. Rewritten with real spa
// copy; kept verbatim: both images, meta label "Comment: Full-Time" (a
// sitewide theme leftover), quote author name, and all 3 reviews'
// names/dates/avatars/ratings.
export default function BlogDetailBody({ slug }: { slug: string }) {
  const meta = resolveBlogDetailMeta(slug);
  if (!meta) return null;

  const index = allBlogDetailSlugs.indexOf(slug);
  const prevSlug = index > 0 ? allBlogDetailSlugs[index - 1] : null;
  const nextSlug = index < allBlogDetailSlugs.length - 1 ? allBlogDetailSlugs[index + 1] : null;
  const prevMeta = prevSlug ? resolveBlogDetailMeta(prevSlug) : null;
  const nextMeta = nextSlug ? resolveBlogDetailMeta(nextSlug) : null;

  return (
    <div className="blog-post-detail-2 tf-spacing-1">
      <div className="tf-container medium">
        <div className="row">
          <div className="col-lg-8">
            <div className="content-inner">
              <div className="post-detail">
                <div className="thumb mb_40">
                  <Image
                    className="rounded-16"
                    loading="lazy"
                    width={860}
                    height={512}
                    src="/assets/images/demo-spasalon/thumb-main-blog.jpg"
                    alt="thumbs"
                  />
                </div>
                <div className="heading-title mb_40">
                  <div className="tag text-button mb_17 v2">{meta.tag.toUpperCase()}</div>
                  <h3 className="title text-capitalize mb_16">{meta.title}</h3>
                  <ul className="meta">
                    <li>
                      <div className="text-caption-1 text_secondary mb_4">Author</div>
                      <div className="text-button text_secondary-color">{meta.author}</div>
                    </li>
                    <li>
                      <div className="text-caption-1 text_secondary mb_4">Post Date</div>
                      <div className="text-button text_secondary-color">{meta.date}</div>
                    </li>
                    <li>
                      <div className="text-caption-1 text_secondary mb_4">Comment</div>
                      <div className="text-button text_secondary-color">Full-Time</div>
                    </li>
                  </ul>
                </div>
                <p className="text-body-2 text_secondary mb_12">
                  Self-care isn&rsquo;t a luxury you schedule once a year — it&rsquo;s a habit that keeps
                  skin healthy, muscles relaxed, and stress from building up unnoticed.
                </p>
                <p className="text-body-2 text_secondary mb_40">
                  A regular spa routine, built around treatments suited to your body, is one of the
                  simplest ways to protect your long-term wellbeing while enjoying the moment itself.
                </p>
                <div className="mb_40">
                  <h4 className="mb_12 text_primary-color">Small Rituals, Lasting Results</h4>
                  <p className="text-body-2 text_secondary mb_28">
                    Consistency matters more than intensity. A short, regular session often does more
                    for your skin and mind than one occasional deep treatment.
                  </p>
                  <div className="quote">
                    <p className="text-body-2 text_primary mb_24">
                      &quot;My experience with this spa has exceeded expectations. Every therapist is
                      attentive and professional, treatment after treatment.&quot;
                    </p>
                    <div className="author">
                      <h5 className="text_primary">Cheyenne Mango</h5>
                      <div className="text-label text_secondary fw-6 text-uppercase letter-spacing-1">
                        Regular Client
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
                    src="/assets/images/demo-spasalon/thumb-blog-1.jpg"
                    alt="thumbs"
                  />
                </div>
                <div className="passive mb_40">
                  <h4 className="text_primary-color mb_12">A Calm Space, Every Visit</h4>
                  <p className="text-body-2 text_secondary">
                    From the moment you arrive, every detail — lighting, scent, music — is chosen to
                    help you unwind before your therapist even begins.
                  </p>
                </div>
                <div className="tag-share align-items-center gap_12 d-flex justify-content-between flex-wrap mb_40">
                  <div className="tag d-flex align-items-center gap_11">
                    <span className="text-button fw-7 text_primary">Tag:</span>
                    <ul className="tags-list style-2 v2 d-flex gap_12 flex-wrap">
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
                  {prevMeta && prevSlug && (
                    <div className="item prev">
                      <Link
                        href={`/demo-spasalon/blogdetail/${prevSlug}`}
                        className="hover-underline-link text-button text_primary fw-6 mb_6"
                      >
                        Previous
                      </Link>
                      <h5>
                        <Link href={`/demo-spasalon/blogdetail/${prevSlug}`} className="link line-clamp-2">
                          {prevMeta.title}
                        </Link>
                      </h5>
                    </div>
                  )}
                  {nextMeta && nextSlug && (
                    <div className="item next" style={prevMeta ? undefined : { gridColumn: 2 }}>
                      <Link
                        href={`/demo-spasalon/blogdetail/${nextSlug}`}
                        className="hover-underline-link text-button text_primary fw-6 mb_6"
                      >
                        Next
                      </Link>
                      <h5>
                        <Link href={`/demo-spasalon/blogdetail/${nextSlug}`} className="link line-clamp-2">
                          {nextMeta.title}
                        </Link>
                      </h5>
                    </div>
                  )}
                </div>
              </div>
              <div className="reply-comment mb_40">
                <div className="title d-flex align-items-center justify-content-between mb_20">
                  <h4>Customer Reviews</h4>
                  <a href="#leaveComment" className="tf-btn btn-hover-animate btn-px-28">
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
                  <button className="tf-btn btn-hover-animate btn-bg-1 btn-px-28" type="submit">
                    <span>Submit Review</span>
                    <span className="bg-effect" />
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <BlogSidebar tags={blogGridTags} />
          </div>
        </div>
      </div>
    </div>
  );
}
