import Image from "next/image";

const stats = [
  { value: "4 Months", label: "Duration" },
  { value: "$1.2 Million USD", label: "Budget" },
  { value: "32,000 Ft²", label: "Project Size" },
  { value: "+28%", label: "Energy Efficiency Boost" },
];

const scopeOfWork = [
  "Full exterior facade restoration",
  "Installation of energy-efficient windows",
  "Concrete structural reinforcement",
  "Lobby modernization and ADA compliance upgrades",
  "Coordinated work with live tenants and strict deadlines",
];

// portfolio-detail.html only ever demos this one project — Overview talks
// about a construction renovation ("Baruch Construction... Highland Office
// Complex... downtown Denver") while Our Approach/Outcome talk about a
// branding rebrand ("Nexora"'s tech summit) — a real inconsistency in the
// original demo content, kept verbatim per CLAUDE.md rule 4, not something
// to reconcile. Shared/static across every slug.
export default function PortfolioDetailBody() {
  return (
    <div className="portfolio-detail tf-spacing-1">
      <div className="tf-container">
        <div className="overview">
          <div className="heading-title d-flex">
            <h3 className="title">Overview</h3>
            <p className="text-body-2">
              Baruch Construction was tasked with a full-scale renovation of the
              Highland Office Complex, a 5-story commercial building located in
              downtown Denver. The project involved exterior restoration,
              structural reinforcement, window replacement, and lobby redesign –
              all executed while the building remained operational.
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
              src="/assets/images/demo-corporate/overview-3.jpg"
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
                  We began with an in-depth brand audit, assessing all touchpoints
                  from digital presence to internal documents. Through workshops
                  and stakeholder interviews, we defined a refreshed brand
                  positioning focused on clarity, intelligence, and
                  future-readiness.
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
                &quot;My experience with property management services has
                exceeded expectations. They efficiently manage properties with a
                professional and attentive approach in every situation.&rdquo;
              </p>
              <div className="author">
                <h5 className="text_primary">Cheyenne Mango</h5>
                <div className="text-label text_secondary fw-6 text-uppercase letter-spacing-1">
                  CEO Avitex
                </div>
              </div>
            </div>
            <div className="outcome mb_60">
              <div className="heading">
                <h3 className="title mb_14">Outcome</h3>
                <p className="text-body-2 text_secondary">
                  The new identity was launched successfully at Nexora&rsquo;s
                  annual tech summit. The brand refresh was met with
                  overwhelmingly positive feedback from clients, partners, and
                  internal teams. Post-launch metrics showed a 28% increase in
                  engagement across digital channels and improved perception
                  among enterprise clients.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="wrap-img d-flex gap_10">
          <Image
            width={965}
            height={580}
            src="/assets/images/demo-corporate/portfolio-detail-1.jpg"
            alt="portfolio"
          />
          <Image
            width={435}
            height={580}
            src="/assets/images/demo-corporate/portfolio-detail-2.jpg"
            alt="portfolio"
          />
        </div>
      </div>
    </div>
  );
}
