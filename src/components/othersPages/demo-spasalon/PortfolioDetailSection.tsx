import Image from "next/image";
import Link from "next/link";
import { portfolioCopyByTitle, type PortfolioItem } from "@/data/demo-spasalon/portfolio";

// portfolio-detail.html's "Previous"/"Next" nav originally pointed at
// `single-post-1.html` (a leftover blog-post link, not a real target in a
// portfolio page) — adapted to step through this niche's own portfolio
// list instead, same fix-the-dead-link approach used for service-detail's
// boilerplate copy.
export default function PortfolioDetailSection({
  item,
  prev,
  next,
}: {
  item: PortfolioItem;
  prev: PortfolioItem | null;
  next: PortfolioItem | null;
}) {
  const copy = portfolioCopyByTitle[item.title];

  return (
    <div className="portfolio-detail-3 tf-spacing-1">
      <div className="tf-container medium">
        <div className="thumb mb_42">
          <Image
            className="rounded-16"
            loading="lazy"
            width={1920}
            height={512}
            src="/assets/images/demo-spasalon/thumb-main-portfolio.jpg"
            alt="thumb"
          />
        </div>
        <div className="mb_40">
          <h4 className="text_primary-color mb_16">The Story Behind {item.title}</h4>
          <p className="text-body-2 mb_20">{copy.intro}</p>
          <ul className="list tf-grid-layout md-col-2">
            {copy.bullets.map((bullet) => (
              <li className="text-body-2 d-flex gap_8 align-items-center" key={bullet}>
                <i className="icon-Check" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>
        <div className="mb_40">
          <h4 className="text_primary-color mb_16">What Clients Experienced</h4>
          <p className="text-body-2 mb_16">{copy.advantage}</p>
          <div className="wrap-thumb d-flex gap_30">
            <div className="thumb">
              <Image
                className="rounded-16"
                loading="lazy"
                width={630}
                height={350}
                src="/assets/images/demo-spasalon/thumb-portfolio-1.jpg"
                alt="thumb"
              />
            </div>
            <div className="thumb">
              <Image
                className="rounded-16"
                loading="lazy"
                width={630}
                height={350}
                src="/assets/images/demo-spasalon/thumb-portfolio-2.jpg"
                alt="thumb"
              />
            </div>
          </div>
        </div>
        <div className="tf-article-navigation">
          {prev && (
            <div className="item prev">
              <Link
                href={`/demo-spasalon/portfolio-detail/${prev.slug}`}
                className="hover-underline-link text-button text_primary fw-6 mb_8"
              >
                Previous
              </Link>
              <h5>
                <Link href={`/demo-spasalon/portfolio-detail/${prev.slug}`} className="link line-clamp-2">
                  {prev.title}
                </Link>
              </h5>
            </div>
          )}
          {next && (
            <div className="item next ms-auto">
              <Link
                href={`/demo-spasalon/portfolio-detail/${next.slug}`}
                className="hover-underline-link text-button text_primary fw-6 mb_8"
              >
                Next
              </Link>
              <h5>
                <Link href={`/demo-spasalon/portfolio-detail/${next.slug}`} className="link line-clamp-2">
                  {next.title}
                </Link>
              </h5>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
