import { amenityItems } from "@/data/demo-coworkingspace/amenities";

export default function AmenitiesSection() {
  return (
    <div className="tf-container large tf-spacing-1">
      <div className="section-amenities">
        <div className="heading-section text-center d-grid gap_16 mb_48">
          <div className="letter-spacing-1 text-label lh-16 text_secondary split-text effect-up">
            KEY AMENITIES
          </div>
          <h2 className="split-text effect-right">Everything You Need</h2>
          <p className="text-body-2 text_secondary wow fadeInUp" data-wow-delay="0.4s">
            All the essential features you need to work smarter, connect better, and grow faster.
          </p>
        </div>
        <div className="tf-grid-layout md-col-3 sm-col-2">
          {amenityItems.map((item) => (
            <div className="amenities-item" key={item.text}>
              <div className="icon">
                <i className={item.icon} />
              </div>
              <p className="text-body-2 text_primary">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
