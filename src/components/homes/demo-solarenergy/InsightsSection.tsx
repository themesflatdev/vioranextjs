import Image from "next/image";

type BlogItem = {
  image: string;
  title: string;
  author: string;
};

const COL1: BlogItem[] = [
  { image: "/assets/images/demo-solarenergy/blog-1.jpg", title: "Solar panels getting smarter with AI optimization", author: "Kadin Korsgaard" },
  { image: "/assets/images/demo-solarenergy/blog-3.jpg", title: "Wind energy advances: taller turbines, higher output", author: "Skylar Bator" },
];

const COL2: BlogItem[] = [
  { image: "/assets/images/demo-solarenergy/blog-2.jpg", title: "Green hydrogen: fueling the next clean energy revolution", author: "Makenna Curtis" },
  { image: "/assets/images/demo-solarenergy/blog-1.jpg", title: "Smart grids: reshaping how we consume renewable power", author: "Makenna Dias" },
];

function BlogItemCard({ item }: { item: BlogItem }) {
  return (
    <div className="blog-item style-6 hover-image-rotate">
      <div className="img-style">
        <Image width={160} height={160} loading="lazy" src={item.image} alt="blog" />
      </div>
      <div className="content">
        <h6 className="line-clamp-2 text-capitalize">
          <a href="#" className="hover-line-text">
            {item.title}
          </a>
        </h6>
        <div className="info">
          <div className="text-button text_primary mb_8">
            <a href="#" className="link">
              {item.author}
            </a>
          </div>
          <p className="text-caption-1">Dec 25, 2026</p>
        </div>
      </div>
    </div>
  );
}

export default function InsightsSection() {
  return (
    <div className="section-insights-6 tf-spacing-1">
      <div className="tf-container large">
        <div className="row">
          <div className="col-lg-4">
            <div className="heading-section mb_40">
              <span className="sub text-label text_primary letter-spacing-1 text-uppercase mb_16 d-block wow fadeInUp">
                NEWS &amp; INSIGHTS
              </span>
              <h2 className="text-capitalize split-text effect-blur-fade">Company Updates &amp; Daily Insights</h2>
            </div>
            <a href="#" className="tf-btn wow fadeInUp btn-bg-primary-3 btn-hover-animate-2" data-wow-delay="0.2s">
              <span>View All</span>
              <span className="bg-effect"></span>
            </a>
          </div>
          <div className="col-lg-8">
            <div className="wrap-blog">
              <div className="col-blog">
                {COL1.map((item) => (
                  <BlogItemCard key={item.title} item={item} />
                ))}
              </div>
              <div className="col-blog">
                {COL2.map((item) => (
                  <BlogItemCard key={item.title} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
