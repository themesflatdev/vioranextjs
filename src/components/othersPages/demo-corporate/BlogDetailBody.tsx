"use client";

import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/demo-corporate/blogPosts";

// blog-detail.html is a single shared demo article for every post (see
// CLAUDE.md rule 4) — the body copy below is copied verbatim from the
// original HTML, including its two duplicated "text_secondary" paragraph
// blocks and its two duplicated "Looking Inward To Grow Outward" sections
// (real content quirks in the source, not something to fix).
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

const teamStructureParagraph = (
  <>
    <p className="text-body-2">
      We believe that great teams build great companies. That’s why we focus on hiring
      not just for skill, but for alignment with our values—curiosity, collaboration,
      and ownership.
    </p>
    <p className="text-body-2"> Internally, we maintain:</p>
    <ul className="text-body-2">
      <li>A flat structure that empowers decision-making at all levels</li>
      <li>Regular 1:1 check-ins to ensure alignment and address blockers</li>
      <li>Ongoing learning & development programs to support career growth</li>
    </ul>
    <p className="text-body-2">
      We don’t just work together—we invest in each other’s success.
    </p>
  </>
);

const lookingInwardParagraph = (
  <p className="text-body-2 text_secondary">
    Inside the enterprise is where the real work happens—the late-night debugging, the
    strategic debates, the moments of quiet progress. And while those things may not
    always make headlines, they’re what allow us to deliver consistent value to our
    clients and partners.
  </p>
);

const lookingInwardClosing = (
  <p className="text-body-2 text_secondary"> At the end of the day, strong
    organizations aren’t built by chance. They’re built by design—from the inside out.
  </p>
);

type ArticleLink = Pick<BlogPost, "title" | "slug">;

export default function BlogDetailBody({
  title,
  prevPost,
  nextPost,
}: {
  title: string;
  prevPost: ArticleLink;
  nextPost: ArticleLink;
}) {
  return (
    <div className="content-inner">
      <div className="post-detail">
        <div className="heading-title mb_40">
          <div className="tag text-button mb_17">Teamwork</div>
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
        <p className="text-body-2 mb_40">
          In every successful organization, there’s more happening beneath the surface
          than what clients and stakeholders see. Behind polished products and
          professional services lies a complex network of people, processes, and
          purpose—all working together to move the business forward. In this edition of
          Inside the Enterprise, we open the door to our internal operations: how we
          structure our teams, optimize workflows, and nurture a culture that supports
          growth, accountability, and innovation.
        </p>
        <div className="thumbs mb_40">
          <Image
            loading="lazy"
            width={860}
            height={512}
            src="/assets/images/demo-corporate/thumbs-1.jpg"
            alt="thumbs"
          />
        </div>
        <div className="passive d-grid gap_12 mb_28">
          <h4>1. People First: Building A Human-Centered Organization</h4>
          <div className="text_secondary">{teamStructureParagraph}</div>
          <div className="text_secondary">{teamStructureParagraph}</div>
        </div>
        <div className="passive d-grid gap_12 mb_40">
          <h4>2. Optimizing Process Without Killing Flexibility</h4>
          <div className="text_secondary">
            <p className="text-body-2">
              Corporate processes often get a bad reputation: slow, rigid, overly
              complex. But process, when designed well, amplifies creativity rather than
              limits it.
            </p>
            <p className="text-body-2">Here’s how we balance structure and speed:</p>
            <ul className="text-body-2">
              <li>Agile sprint cycles with flexibility to pivot</li>
              <li>Clear documentation and onboarding materials</li>
              <li>Project retrospectives that turn lessons into improvements</li>
            </ul>
            <p className="text-body-2">
              We treat process like product: it must evolve with our people and goals.
            </p>
          </div>
        </div>
        <div className="passive d-grid gap_12 mb_40">
          <h4>3. Purpose That Drives Action</h4>
          <div className="text_secondary">
            <p className="text-body-2">
              Every decision we make, from who we hire to how we prioritize work, ties
              back to a core purpose: helping businesses grow through smart, sustainable
              digital transformation.
            </p>
            <p className="text-body-2">This purpose is not just a slogan—it’s embedded in how we:</p>
            <ul className="text-body-2">
              <li>Set quarterly OKRs that connect individual work to company goals</li>
              <li>Evaluate project success beyond revenue—looking at client impact</li>
              <li>Encourage teams to challenge the status quo when needed</li>
            </ul>
            <p className="text-body-2">
              By aligning purpose with action, we stay focused on what truly matters.
            </p>
          </div>
        </div>
        <div className="quote mb_40">
          <p className="text-body-2 text_primary mb_24">
            &quot;My experience with property management services has exceeded
            expectations. They efficiently manage properties with a professional and
            attentive approach in every situation.&rdquo;
          </p>
          <div className="author">
            <h5 className="text_primary">Cheyenne Mango</h5>
            <div className="text-label text_secondary fw-6 text-uppercase letter-spacing-1">
              CEO Avitex
            </div>
          </div>
        </div>
        <div className="passive d-grid gap_12 mb_40">
          <h4>Looking Inward To Grow Outward</h4>
          <div>
            {lookingInwardParagraph}
            {lookingInwardClosing}
          </div>
        </div>
        <div className="thumbs mb_40">
          <Image
            loading="lazy"
            width={860}
            height={512}
            src="/assets/images/demo-corporate/thumbs-2.jpg"
            alt="thumbs"
          />
        </div>
        <div className="passive d-grid gap_12 mb_40">
          <h4>Looking Inward To Grow Outward</h4>
          <div>
            {lookingInwardParagraph}
            {lookingInwardClosing}
          </div>
        </div>
        <div className="passive d-grid gap_12 mb_40">
          <h4 className="text-capitalize">
            Want to learn more about our culture and how we work?
          </h4>
          <p className="text-body-2 text_secondary">
            Follow our blog for more behind-the-scenes insights, or connect with us to
            explore partnership opportunities.
          </p>
        </div>
        <div className="tag-share align-items-center gap_12 d-flex justify-content-between flex-wrap mb_40">
          <div className="tag d-flex align-items-center gap_11">
            <span className="text-button fw-7 text_primary">Tag:</span>
            <ul className="tags-list d-flex gap_12 flex-wrap">
              <li><a href="#" className="tags-item text-label fw-6 letter-spacing-1 text-uppercase">CompanyCulture</a></li>
              <li><a href="#" className="tags-item text-label fw-6 letter-spacing-1 text-uppercase">EnterpriseInsights</a></li>
              <li><a href="#" className="tags-item text-label fw-6 letter-spacing-1 text-uppercase">BehindTheScenes</a></li>
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
        <div className="tf-article-navigation style-1">
          <div className="item prev">
            <Link
              href={`/blog-detail/${prevPost.slug}`}
              className="hover-underline-link text-button text_secondary-color fw-6 mb_6"
            >
              Previous
            </Link>
            <h5>
              <Link href={`/blog-detail/${prevPost.slug}`} className="link line-clamp-2">
                {prevPost.title}
              </Link>
            </h5>
          </div>
          <div className="item next">
            <Link
              href={`/blog-detail/${nextPost.slug}`}
              className="hover-underline-link text-button text_secondary-color fw-6 mb_6"
            >
              Next
            </Link>
            <h5>
              <Link href={`/blog-detail/${nextPost.slug}`} className="link line-clamp-2">
                {nextPost.title}
              </Link>
            </h5>
          </div>
        </div>
      </div>

      <div className="reply-comment mb_40">
        <div className="title d-flex align-items-center justify-content-between mb_20">
          <h4>Customer Reviews</h4>
          <a href="#leaveComment" className="tf-btn btn-hover-animate-2 btn-px-28">
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
                  <h6 className="name mb_4"><a href="#" className="link">{review.name}</a></h6>
                  <p className="text-body-default">{review.date}</p>
                </div>
                <ul className="ratings d-flex mb_10">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <li key={i}><i className="icon-favorite_major" /></li>
                  ))}
                </ul>
                <p className="comment text-body-2 text_secondary">{review.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="leave-comment">
        <div className="heading-title mb_20">
          <h4 className="mb_11">Add A Review</h4>
          <p>Your email address will not be published</p>
        </div>
        <form
          id="leaveComment"
          className="form-leave-comment"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="wrap mb_20">
            <div className="tf-grid-layout md-col-2 gap_20 mb_20">
              <fieldset>
                <label htmlFor="name" className="text-body-default text_secondary mb_8">Name</label>
                <input id="name" type="text" placeholder="Your Name*" name="text" aria-required="true" required />
              </fieldset>
              <fieldset>
                <label htmlFor="email" className="text-body-default text_secondary mb_8">Email</label>
                <input id="email" type="email" placeholder="Your Email*" name="email" aria-required="true" required />
              </fieldset>
            </div>
            <fieldset>
              <label htmlFor="comment" className="text-body-default text_secondary mb_8">Review</label>
              <textarea id="comment" rows={4} placeholder="Write comment" aria-required="true" required />
            </fieldset>
          </div>
          <div className="box-fieldset-item d-flex mb_20">
            <fieldset>
              <input type="checkbox" className="tf-check" id="note" />
            </fieldset>
            <p className="text-body-default">Save your name, email for the next time review</p>
          </div>
          <button className="tf-btn btn-hover-animate-2 btn-bg-1 btn-px-28" type="submit">
            <span>Submit Review</span>
            <span className="bg-effect" />
          </button>
        </form>
      </div>
    </div>
  );
}
