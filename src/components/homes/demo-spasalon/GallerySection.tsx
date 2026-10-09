"use client";

import Image from "next/image";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useScrollTransform } from "@/hooks/useScrollTransform";
import { useInfiniteSlide } from "@/hooks/useInfiniteSlide";

const galleryImages = [
  { src: "/assets/images/demo-spasalon/gallery-1.jpg", width: 300, height: 328 },
  { src: "/assets/images/demo-spasalon/gallery-2.jpg", width: 300, height: 300 },
  { src: "/assets/images/demo-spasalon/gallery-3.jpg", width: 300, height: 193 },
  { src: "/assets/images/demo-spasalon/gallery-4.jpg", width: 300, height: 495 },
  { src: "/assets/images/demo-spasalon/gallery-5.jpg", width: 300, height: 300 },
  { src: "/assets/images/demo-spasalon/gallery-6.jpg", width: 300, height: 300 },
];

export default function GallerySection() {
  const subRef = useSplitTextReveal<HTMLDivElement>("up");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");
  const item1Ref = useScrollTransform<HTMLDivElement>({ direction: "up" });
  const item2Ref = useScrollTransform<HTMLDivElement>({ direction: "right", distance: "30%" });
  const upRef = useInfiniteSlide<HTMLDivElement>({ direction: "up" });
  const downRef = useInfiniteSlide<HTMLDivElement>({ direction: "down" });

  return (
    <div className="section-gallery">
      <div className="tf-container medium">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="heading-section d-grid gap_12 mb_40">
              <div className="sub text-label text-uppercase split-text effect-up text_primary-color" ref={subRef}>
                Our Gallery
              </div>
              <h2 className="title split-text effect-blur-fade" ref={titleRef}>
                Moments Of Calm
              </h2>
              <p className="desc text-body-2 mt_4 split-text split-lines-transform" ref={descRef}>
                A glimpse into the serene moments, caring hands, and calming spaces that define your spa experience.
              </p>
            </div>
            <a href="#" className="tf-btn btn-switch-text wow fadeInUp" data-wow-delay="0.4s">
              <span>
                <span className="btn-double-text" data-text="All Gallery">
                  All Gallery
                </span>
              </span>
            </a>
          </div>
          <div className="col-lg-6">
            <div className="wrap-gallery tf-grid-layout sm-col-2 gap_30">
              <div className="infiniteslide" data-style="up" ref={upRef}>
                {galleryImages.map((image) => (
                  <div className="gallery" key={`up-${image.src}`}>
                    <Image width={image.width} height={image.height} loading="lazy" src={image.src} alt="gallery" />
                  </div>
                ))}
              </div>
              <div className="infiniteslide sm-hide" data-style="down" ref={downRef}>
                {galleryImages.map((image) => (
                  <div className="gallery" key={`down-${image.src}`}>
                    <Image width={image.width} height={image.height} loading="lazy" src={image.src} alt="gallery" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="item-1 position-absolute scroll-transform" ref={item1Ref}>
        <Image src="/assets/images/demo-spasalon/spa-item-5.png" alt="item" width={346} height={409} />
      </div>
      <div className="item-2 position-absolute scroll-transform" ref={item2Ref}>
        <Image src="/assets/images/demo-spasalon/spa-item-6.png" alt="item" width={126} height={265} />
      </div>
    </div>
  );
}
