import Image from "next/image";
import Link from "next/link";
import type { PortfolioItem } from "@/data/demo-agency/portfolio";

type PortfolioDetailBodyProps = {
  item: PortfolioItem;
  prevItem: PortfolioItem;
  nextItem: PortfolioItem;
};

const tags = ["CaseStudy", "ClientWork", "DigitalDesign"];

// portfolio-detail.html's own body text is actually a company-culture blog
// post (Author/Post Date/Comment meta, "People First"/"Optimizing Process"
// headings) reused from the blog template, not a real project case-study —
// confirmed with the user. Rewritten below into genuine case-study copy,
// keeping the exact same block structure/count as the source (intro,
// 2 numbered "passive" blocks, quote, 2 more passive blocks, tag-share,
// prev/next) — only the words changed, demo content shared by all 6 items.
export default function PortfolioDetailBody({ item, prevItem, nextItem }: PortfolioDetailBodyProps) {
  return (
    <div className="post-detail v2 mb-0">
      <div className="heading-title mb_40">
        <div className="tag text-button mb_17">{item.category}</div>
        <h3 className="title text-capitalize mb_16 text_white">{item.title}</h3>
        <ul className="meta">
          <li>
            <div className="text-caption-1 text_muted mb_4 text_muted">Client</div>
            <div className="text-button text_white">Confidential Client</div>
          </li>
          <li>
            <div className="text-caption-1 text_muted mb_4 text_muted">Year</div>
            <div className="text-button text_white">2025</div>
          </li>
          <li>
            <div className="text-caption-1 text_muted mb_4 text_muted">Role</div>
            <div className="text-button text_white">{item.category}</div>
          </li>
        </ul>
      </div>
      <p className="text-body-2 text_muted mb_40">
        Every successful project starts with understanding what truly matters to the client. Behind
        every polished interface and seamless experience lies a clear strategy — one built on research,
        collaboration, and a deep understanding of the brand&rsquo;s goals. In this project, we partnered
        closely with the client to turn an ambitious vision into a cohesive, high-impact digital
        experience.
      </p>
      <div className="thumbs mb_40">
        <Image
          loading="lazy"
          width={860}
          height={512}
          src="/assets/images/demo-agency/thumb-portfolio-1.jpg"
          alt="thumbs"
        />
      </div>
      <div className="passive mb_28">
        <h4 className="text_white mb_12">1. Understanding the Challenge</h4>
        <p className="text-body-2 text_muted">
          Before any design work began, we took time to understand the client&rsquo;s goals, audience,
          and the obstacles standing in their way. Our discovery phase focused on:
        </p>
        <ul>
          <li className="text-body-2 text_muted">Auditing the existing brand and digital presence</li>
          <li className="text-body-2 text_muted">
            Identifying key user pain points through research and interviews
          </li>
          <li className="text-body-2 text_muted">
            Aligning stakeholders around a shared vision for the project
          </li>
        </ul>
        <p className="text-body-2 text_muted">
          We don&rsquo;t just design — we listen first, then build with intention.
        </p>
      </div>
      <div className="passive mb_40">
        <h4 className="text_white mb_12">2. Crafting the Right Solution</h4>
        <p className="text-body-2 text_muted">
          With a clear understanding of the challenge, we moved into strategy and design — balancing
          creativity with usability to deliver a solution that truly serves the client&rsquo;s goals.
        </p>
        <ul>
          <li className="text-body-2 text_muted">Developed a cohesive visual identity aligned with the brand</li>
          <li className="text-body-2 text_muted">Designed intuitive user flows backed by iterative testing</li>
          <li className="text-body-2 text_muted">Built a scalable system ready to grow with the client&rsquo;s business</li>
        </ul>
      </div>
      <div className="quote bg-linear-color mb_40">
        <p className="text-body-2 text_primary-color mb_24">
          &ldquo;Partnering with this team gave us more than a new look — it gave us a clearer sense of
          who we are and how to show up for our customers every day.&rdquo;
        </p>
        <div className="author">
          <h5 className="text_primary-color">Priya Shah</h5>
          <div className="text-label text_muted fw-6 text-uppercase letter-spacing-1">
            Marketing Director, Northstar Retail
          </div>
        </div>
      </div>
      <div className="thumbs mb_40">
        <Image
          loading="lazy"
          width={860}
          height={512}
          src="/assets/images/demo-agency/thumb-portfolio-2.jpg"
          alt="thumbs"
        />
      </div>
      <div className="passive mb_40">
        <h4 className="text_white mb_12">Measurable Results</h4>
        <p className="text-body-2 text_muted">
          Since launch, the new experience has translated into real, measurable momentum for the client
          — faster load times, smoother user flows, and a noticeably stronger brand presence across
          every touchpoint.
        </p>
        <p className="text-body-2 text_muted">
          More than the numbers, though, what stood out was how quickly the new system became part of
          the team&rsquo;s everyday workflow — proof that good design isn&rsquo;t just seen, it&rsquo;s
          felt in how smoothly the business runs.
        </p>
      </div>
      <div className="passive mb_40">
        <h4 className="text_white mb_12">Interested In Working Together?</h4>
        <p className="text-body-2 text_muted">
          If you&rsquo;re exploring a similar challenge and want a partner who brings both strategy and
          craft to the table, we&rsquo;d love to hear about your project.
        </p>
      </div>
      <div className="tag-share align-items-center gap_12 d-flex justify-content-between flex-wrap mb_40">
        <div className="tag d-flex align-items-center gap_11">
          <span className="text-button fw-6 text_white">Tag:</span>
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
      </div>
      <div className="tf-article-navigation">
        <div className="item prev">
          <Link
            href={`/demo-agency/portfolio-detail/${prevItem.slug}`}
            className="hover-underline-link text-button text_white fw-6 mb_6"
          >
            Previous
          </Link>
          <h5>
            <Link href={`/demo-agency/portfolio-detail/${prevItem.slug}`} className="link font-main line-clamp-1 text_white">
              {prevItem.title}
            </Link>
          </h5>
        </div>
        <div className="item next">
          <Link
            href={`/demo-agency/portfolio-detail/${nextItem.slug}`}
            className="hover-underline-link text-button text_white fw-6 mb_6"
          >
            Next
          </Link>
          <h5>
            <Link href={`/demo-agency/portfolio-detail/${nextItem.slug}`} className="link font-main line-clamp-1 text_white">
              {nextItem.title}
            </Link>
          </h5>
        </div>
      </div>
    </div>
  );
}
