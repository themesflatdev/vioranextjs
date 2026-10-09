import Image from "next/image";
import Link from "next/link";
import { portfolioItems } from "@/data/demo-medical/portfolio";

const tags = ["PatientCare", "MedicalCases"];

const comments = [
  {
    name: "Adison Herwitz",
    date: "March 18, 2025",
    avatar: "/assets/images/avatar/avatar-2.jpg",
    text: "A truly inspiring story. It is wonderful to see such dedicated care and compassion from the whole medical team.",
  },
  {
    name: "Giana Franci",
    date: "March 18, 2025",
    avatar: "/assets/images/avatar/avatar-4.jpg",
    text: "Thank you for sharing this case. Clear explanations and a caring approach make such a difference for families.",
  },
];

// portfolio-detail.html only has one demo write-up shared by every slug (per
// CLAUDE.md rule 4) — only the h3 heading and prev/next navigation below are
// dynamic per item (looked up from portfolio.ts). The original body copy was
// a mix of real medical content and corporate/real-estate content that
// leaked in from another theme demo (confirmed with user): the quote talked
// about "property management services", the closing section was about
// "the enterprise", and the tags were "CompanyCulture"/"EnterpriseInsights".
// Rewritten below with real medical copy; kept verbatim: images, meta,
// opening paragraph 1, "Trusted Care Close To Home" heading+paragraph,
// quote author name, and both comments' names/dates/avatars/ratings.
export default function PortfolioDetailSection({ slug }: { slug: string }) {
  const index = portfolioItems.findIndex((item) => item.slug === slug);
  const current = portfolioItems[index];
  const prevItem = index > 0 ? portfolioItems[index - 1] : null;
  const nextItem = index < portfolioItems.length - 1 ? portfolioItems[index + 1] : null;

  return (
    <div className="portfolio-detail-2 tf-spacing-1">
      <div className="tf-container medium">
        <div className="thumb mb_40">
          <Image
            loading="lazy"
            width={1920}
            height={512}
            src="/assets/images/demo-medical/thumb-portfolio-main.jpg"
            alt="thumb"
          />
        </div>
        <div className="heading mb_40">
          <ul className="meta mb_24">
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
          <h3 className="font-main">{current.title}</h3>
        </div>
        <div className="passive mb_39">
          <p className="text-body-2 text_secondary mb_12">
            Medical services are an essential part of our lives, offering care and treatment for
            various health conditions. These services encompass a wide range of specialties,
            including primary care, pediatrics, cardiology
          </p>
          <p className="text-body-2 text_secondary">
            Medical services are an essential part of our lives, offering care and treatment for
            various health conditions. These services encompass a wide range of specialties,
            including primary care, pediatrics and cardiology, each delivered by experienced doctors
            with a patient-centered approach.
          </p>
        </div>
        <div className="wrap-thumb d-flex gap_30 mb_40">
          <div className="thumb">
            <Image
              loading="lazy"
              width={630}
              height={512}
              src="/assets/images/demo-medical/thumb-portfolio-1.jpg"
              alt="thumb"
            />
          </div>
          <div className="thumb">
            <Image
              loading="lazy"
              width={630}
              height={512}
              src="/assets/images/demo-medical/thumb-portfolio-2.jpg"
              alt="thumb"
            />
          </div>
        </div>
        <div className="mb_28">
          <h4 className="text_primary-color mb_12 font-main">Trusted Care Close To Home</h4>
          <p className="text_secondary text-body-2">
            Medical services are an essential part of our lives, offering care and treatment for
            various health conditions. These services encompass a wide range of specialties,
            including primary care, pediatrics, cardiology
          </p>
        </div>
        <div className="quote mb_40">
          <p className="text-body-2 text_primary mb_24">
            &quot;The care my family received was beyond what we expected. Every doctor and nurse was
            attentive, patient and professional at every step of our journey.&quot;
          </p>
          <div className="author">
            <h5 className="text_primary font-main">Cheyenne Mango</h5>
            <div className="text-label text_secondary fw-6 text-uppercase letter-spacing-1">
              Parent of Patient
            </div>
          </div>
        </div>
        <div className="mb_40">
          <h4 className="text_primary-color mb_12 font-main">Care That Continues Beyond The Clinic</h4>
          <p className="text_secondary text-body-2">
            Behind every successful recovery is a team that listens, plans and follows through — from
            the first consultation to the final check-up. Those quiet, consistent efforts are what
            allow us to deliver reliable care to every patient and family we serve.
          </p>
          <p className="text_secondary text-body-2">
            At the end of the day, great healthcare isn’t built by chance. It’s built by design — one
            patient, one plan, one caring conversation at a time.
          </p>
        </div>
        <div className="tag-share align-items-center gap_12 d-flex justify-content-between flex-wrap mb_40">
          <div className="tag d-flex align-items-center gap_11">
            <span className="text-button fw-7 text_primary">Tag:</span>
            <ul className="tags-list d-flex gap_12 flex-wrap">
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
        <div className="tf-article-navigation mb_60">
          {prevItem && (
            <div className="item prev">
              <Link
                href={`/demo-medical/portfolio-detail/${prevItem.slug}`}
                className="hover-underline-link text-button text_primary fw-6 mb_8"
              >
                Previous
              </Link>
              <h5>
                <Link href={`/demo-medical/portfolio-detail/${prevItem.slug}`} className="link font-main line-clamp-1">
                  {prevItem.title}
                </Link>
              </h5>
            </div>
          )}
          {nextItem && (
            <div className="item next ms-auto">
              <Link
                href={`/demo-medical/portfolio-detail/${nextItem.slug}`}
                className="hover-underline-link text-button text_primary fw-6 mb_8"
              >
                Next
              </Link>
              <h5>
                <Link href={`/demo-medical/portfolio-detail/${nextItem.slug}`} className="link font-main line-clamp-1">
                  {nextItem.title}
                </Link>
              </h5>
            </div>
          )}
        </div>
        <div className="reply-comment">
          <div className="title mb_20">
            <h4 className="font-main">Comment (2)</h4>
          </div>
          <div className="reply-comment-wrap">
            {comments.map((comment) => (
              <div className="reply-comment-item" key={comment.name}>
                <div className="avatar">
                  <Image src={comment.avatar} width={60} height={60} alt="avatar" />
                </div>
                <div className="content">
                  <div className="info mb_12">
                    <h6 className="name mb_4">
                      <a href="#" className="link">
                        {comment.name}
                      </a>
                    </h6>
                    <p className="text-body-default text_secondary">{comment.date}</p>
                  </div>
                  <ul className="ratings d-flex mb_10">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <li key={i}>
                        <i className="icon-favorite_major" />
                      </li>
                    ))}
                  </ul>
                  <p className="comment text-body-2 text_secondary">{comment.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
