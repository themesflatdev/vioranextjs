"use client";

import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/demo-insurance/blogPosts";

// blog-detail.html is a single shared demo article (per CLAUDE.md rule 4)
// — only title/breadcrumb vary per slug. ĐÃ XÁC NHẬN với user: the body
// content was identical to demo-corporate's blog article (talking about
// "Medical services", a "property management services" testimonial,
// "Inside the enterprise") — entirely unrelated to insurance. Rewritten in
// full below; author/date/comment meta, the review/comment section, and
// the 2 thumb images are static demo content kept as-is.
const reviews = [
  {
    avatar: "/assets/images/avatar/avatar-2.jpg",
    name: "Adison Herwitz",
    date: "March 18, 2025",
    comment:
      "Great read! It's refreshing to see a company open up about its internal culture and decision-making process. Transparency like this builds real trust.",
  },
  {
    avatar: "/assets/images/avatar/avatar-3.jpg",
    name: "Corey Workman",
    date: "March 18, 2025",
    comment:
      "Love how you emphasized the balance between structure and flexibility. Many teams struggle with that — thanks for sharing your approach!",
  },
  {
    avatar: "/assets/images/avatar/avatar-4.jpg",
    name: "Giana Franci",
    date: "March 18, 2025",
    comment:
      "Insightful post. Aligning people, process, and purpose is easier said than done — it's inspiring to see how you're doing it in practice.",
  },
];

type ArticleLink = Pick<BlogPost, "title" | "slug">;

export default function BlogDetailBody({
  title,
  prevPost,
  nextPost,
}: {
  title: string;
  prevPost: ArticleLink | null;
  nextPost: ArticleLink | null;
}) {
  return (
    <div className="content-inner">
      <div className="post-detail">
        <div className="thumbs mb_40">
          <Image
            loading="lazy"
            width={860}
            height={512}
            src="/assets/images/demo-insurance/thumb-blog-detail-1.jpg"
            alt="thumbs"
          />
        </div>
        <div className="heading-title mb_40">
          <div className="tag text-button mb_17">INSURANCE TIPS</div>
          <h3 className="title text-capitalize mb_16">{title}</h3>
          <ul className="meta">
            <li>
              <div className="text-caption-1 text_secondary mb_4">Author</div>
              <div className="text-button text_primary">Jordyn Culhane</div>
            </li>
            <li>
              <div className="text-caption-1 text_secondary mb_4">Post Date</div>
              <div className="text-button text_primary">May 18, 2025</div>
            </li>
            <li>
              <div className="text-caption-1 text_secondary mb_4">Comment</div>
              <div className="text-button text_primary">Full-Time</div>
            </li>
          </ul>
        </div>
        <p className="text_secondary text-body-2 mb_12">
          Understanding your insurance options can feel overwhelming, but having the right coverage is
          one of the most important steps you can take to protect your health, home, and financial
          future.
        </p>
        <p className="text_secondary text-body-2 mb_40">
          Whether you&apos;re insuring your family, your property, or your business, choosing a plan that
          truly fits your needs starts with knowing what&apos;s available and how each option works.
        </p>
        <div className="passive d-grid gap_12 mb_28">
          <h4>Coverage You Can Count On</h4>
          <p className="text-body-2 text_secondary">
            A good insurance plan isn&apos;t just about paying claims — it&apos;s about having a partner who
            understands your situation and responds quickly when it matters most.
          </p>
        </div>
        <div className="quote mb_40">
          <p className="text-body-2 text_primary mb_24">
            &ldquo;Switching to this insurance provider was one of the best decisions we made. Their team
            made the entire process simple, transparent, and stress-free.&rdquo;
          </p>
          <div className="author">
            <h5 className="text_primary">Cheyenne Mango</h5>
            <div className="text-label text_secondary fw-6 text-uppercase letter-spacing-1">
              Small Business Owner
            </div>
          </div>
        </div>
        <div className="thumbs mb_40">
          <Image
            loading="lazy"
            width={860}
            height={512}
            src="/assets/images/demo-insurance/thumb-blog-detail-2.jpg"
            alt="thumbs"
          />
        </div>
        <div className="passive d-grid gap_12 mb_40">
          <h4>Choosing The Right Plan For You</h4>
          <p className="text-body-2 text_secondary">
            Every policy should be tailored to the person behind it. Our approach starts with listening
            — understanding your lifestyle, your risks, and your goals — before recommending any
            coverage.
            <br />
            At the end of the day, the best insurance plan is one that gives you genuine peace of mind,
            not just paperwork.
          </p>
        </div>

        <div className="tag-share align-items-center gap_12 d-flex justify-content-between flex-wrap mb_40">
          <div className="tag d-flex align-items-center gap_11">
            <span className="text-button fw-7 text_primary">Tag:</span>
            <ul className="tags-list style-2 d-flex gap_12 flex-wrap">
              <li>
                <a href="#" className="tags-item text-label fw-6 letter-spacing-1 text-uppercase">
                  InsuranceTips
                </a>
              </li>
              <li>
                <a href="#" className="tags-item text-label fw-6 letter-spacing-1 text-uppercase">
                  CoverageGuide
                </a>
              </li>
            </ul>
          </div>
          <div className="share d-flex align-items-center gap_16">
            <span className="text-button fw-7 text_primary">Share This Post:</span>
            <ul className="tf-social style-2 d-flex gap_24">
              <li><a href="#" className="icon-FacebookLogo" /></li>
              <li><a href="#" className="icon-x-logo" /></li>
              <li><a href="#" className="icon-instagram-logo" /></li>
            </ul>
          </div>
        </div>

        {(prevPost || nextPost) && (
          <div className="tf-article-navigation style-1">
            {prevPost && (
              <div className="item prev">
                <Link
                  href={`/demo-insurance/blog-detail/${prevPost.slug}`}
                  className="hover-underline-link text-button text_primary fw-6 mb_6"
                >
                  Previous
                </Link>
                <h5>
                  <Link
                    href={`/demo-insurance/blog-detail/${prevPost.slug}`}
                    className="link line-clamp-2 text_primary link-2"
                  >
                    {prevPost.title}
                  </Link>
                </h5>
              </div>
            )}
            {nextPost && (
              <div className="item next">
                <Link
                  href={`/demo-insurance/blog-detail/${nextPost.slug}`}
                  className="hover-underline-link text-button text_primary fw-6 mb_6"
                >
                  Next
                </Link>
                <h5>
                  <Link
                    href={`/demo-insurance/blog-detail/${nextPost.slug}`}
                    className="link line-clamp-2 text_primary link-2"
                  >
                    {nextPost.title}
                  </Link>
                </h5>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="reply-comment mb_40">
        <div className="title d-flex align-items-center justify-content-between mb_20">
          <h4 className="text_primary">Customer Reviews</h4>
          <a href="#leaveComment" className="tf-btn btn-bg-secondary btn-hover-animate-2 btn-px-28">
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
                <div className="info mb_11">
                  <h6 className="name mb_4 text_primary">
                    <a href="#" className="link-2">{review.name}</a>
                  </h6>
                  <p className="text-body-default text_secondary">{review.date}</p>
                </div>
                <p className="comment text-body-2 text_secondary">{review.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="leave-comment">
        <div className="heading-title mb_20">
          <h4 className="mb_11 text_primary">Add A Review</h4>
          <p className="text_secondary">Your email address will not be published</p>
        </div>
        <form id="leaveComment" className="form-leave-comment" onSubmit={(e) => e.preventDefault()}>
          <div className="wrap mb_20">
            <div className="tf-grid-layout md-col-2 gap_20 mb_20">
              <fieldset>
                <label htmlFor="name" className="text-body-default text_secondary mb_8">Name</label>
                <input id="name" type="text" placeholder="Your Name*" name="text" tabIndex={2} aria-required="true" required />
              </fieldset>
              <fieldset>
                <label htmlFor="email" className="text-body-default text_secondary mb_8">Email</label>
                <input id="email" type="email" placeholder="Your Email*" name="email" tabIndex={2} aria-required="true" required />
              </fieldset>
            </div>
            <fieldset>
              <label htmlFor="comment" className="text-body-default text_secondary mb_8">Review</label>
              <textarea id="comment" rows={4} placeholder="Write comment" tabIndex={2} aria-required="true" required />
            </fieldset>
          </div>
          <div className="box-fieldset-item d-flex mb_20 align-items-center">
            <fieldset>
              <input type="checkbox" className="tf-check" id="note" />
            </fieldset>
            <p className="text-body-default text_secondary">Save your name, email for the next time review</p>
          </div>
          <button className="tf-btn btn-hover-animate-2 btn-bg-secondary btn-px-28" type="submit">
            <span>Submit Review</span>
            <span className="bg-effect" />
          </button>
        </form>
      </div>
    </div>
  );
}
