import Image from "next/image";

const stats = [
  { value: "60 Days", label: "Duration" },
  { value: "Business Insurance", label: "Category" },
  { value: "Jessica Jung", label: "Client" },
  { value: "Nov 28. 2025", label: "Date" },
];

const scopeOfWork = [
  "Comprehensive multi-property risk assessment",
  "Custom policy structuring across 3 states",
  "Liability and property damage coverage bundling",
  "Dedicated claims support team assignment",
  "Ongoing policy review and renewal planning",
];

// porfolio-detail.html only has one demo write-up (shared by every slug,
// per CLAUDE.md rule 4) — only the page title/breadcrumb are dynamic per
// project. The original content was identical to demo-corporate's
// portfolio-detail (Baruch Construction / Highland Office Complex / Nexora
// tech summit — construction/branding copy, unrelated to insurance),
// confirmed with user and rewritten entirely as a real insurance
// case-study. Client name ("Jessica Jung"), date ("Nov 28. 2025" — typo
// kept), and the quote author's name ("Cheyenne Mango") are kept from the
// source; only the quote author's title changed ("CEO Avitex" didn't fit
// an insurance client → "Property Portfolio Manager").
export default function PortfolioDetailBody() {
  return (
    <div className="portfolio-detail tf-spacing-1">
      <div className="tf-container">
        <div className="overview">
          <div className="heading-title d-flex">
            <h3 className="title">Overview</h3>
            <p className="text-body-2 text_secondary">
              Our team partnered with a growing property management company to design a comprehensive
              business insurance package covering multiple commercial properties across 3 states. The
              project involved a full risk assessment, policy customization, and ongoing claims support
              — all delivered within a tight 60-day renewal deadline.
            </p>
          </div>
          <ul className="list">
            {stats.map((stat) => (
              <li key={stat.label}>
                <h4 className="text-nowrap">{stat.value}</h4>
                <h6 className="text_secondary">{stat.label}</h6>
              </li>
            ))}
          </ul>
          <div className="thumbs mb_60">
            <Image
              loading="lazy"
              width={1411}
              height={680}
              src="/assets/images/demo-insurance/overview-3.jpg"
              alt="overview"
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="approach mb_60">
              <div className="heading mb_20">
                <h3 className="title mb_16">Our Approach</h3>
                <p className="text-body-2 text_secondary">
                  We began with a full risk assessment across all properties, reviewing existing
                  coverage gaps and identifying areas of exposure. Through close collaboration with the
                  client&apos;s leadership team, we designed a tailored policy structure built around their
                  specific operational risks.
                </p>
              </div>
              <div>
                <h6 className="mb_12">Scope Of Work</h6>
                <ul className="list d-grid gap_12">
                  {scopeOfWork.map((item) => (
                    <li className="text-body-2 text_secondary" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="quote mb_60">
              <p className="text-body-2 text_primary mb_24">
                &ldquo;Working with this team gave us real peace of mind. They took the time to
                understand our business and built a policy that actually protects what matters
                most.&rdquo;
              </p>
              <div className="author">
                <h5 className="text_primary">Cheyenne Mango</h5>
                <div className="text-label text_secondary fw-6 text-uppercase letter-spacing-1">
                  Property Portfolio Manager
                </div>
              </div>
            </div>
            <div className="outcome mb_60">
              <div className="heading">
                <h3 className="title mb_14">Outcome</h3>
                <p className="text-body-2 text_secondary">
                  The new coverage was finalized ahead of the renewal deadline, with zero gaps in
                  protection during the transition. The client reported increased confidence in their
                  risk management and significantly faster claims turnaround in the following year.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="wrap-img d-flex gap_10">
          <Image
            width={965}
            height={580}
            src="/assets/images/demo-insurance/portfolio-detail-1.jpg"
            alt="portfolio"
          />
          <Image
            width={435}
            height={580}
            src="/assets/images/demo-insurance/portfolio-detail-2.jpg"
            alt="portfolio"
          />
        </div>
      </div>
    </div>
  );
}
