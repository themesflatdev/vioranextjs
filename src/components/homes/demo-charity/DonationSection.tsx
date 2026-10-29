"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useSwiperControls } from "@/hooks/useSwiperControls";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { donationCards } from "@/data/demo-charity/home";

function DonationProgress({ raised, goal }: { raised: string; goal: string }) {
  return (
    <div className="donation-card__progress">
      <div>
        <span className="text-label letter-spacing-1 text-uppercase d-block mb_16">Raised</span>
        <h4 className="donation-card__raised">{raised}</h4>
      </div>
      <div>
        <span className="text-label letter-spacing-1 text-uppercase d-block mb_16">Goal</span>
        <h4 className="donation-card__goal">{goal}</h4>
      </div>
    </div>
  );
}

function DonationMeta({ tag, days }: { tag: string; days: string }) {
  return (
    <div className="donation-card__meta mb_24">
      <span className="donation-card__tag text-label letter-spacing-1 text-uppercase">{tag}</span>
      <span className="donation-card__days text-body-default">{days}</span>
    </div>
  );
}

function ViewProgramButton() {
  return (
    <Link href="#" className="tf-btn style-border btn-hover-animate-border w-full">
      <span>View Program</span>
      <span className="bg-effect" />
    </Link>
  );
}

export default function DonationSection() {
  const { dotsRef, dotsEl, onSwiper } = useSwiperControls();
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");

  const [card1, card2, card3] = donationCards;

  return (
    <div className="section-donation tf-spacing-1 sw-layout">
      <div className="tf-container">
        <div className="heading-section-5 mb_48">
          <div className="row">
            <div className="col-lg-9">
              <h2 className="mb_16 split-text effect-blur-fade" ref={titleRef}>
                Your Help Can Change A Life
              </h2>
              <p className="text-body-2 wow fadeInUp" data-wow-delay=".2s">
                Millions need food, shelter, and hope. Your donation brings vital aid, rebuilds lives, and shines
                light in dark times
              </p>
            </div>
            <div className="col-lg-3">
              <Link href="#" className="tf-btn style-border ms-lg-auto btn-switch-text wow fadeInRight">
                <span>
                  <span className="btn-double-text" data-text="View All">
                    View All
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
        <Swiper
          className="swiper wow fadeInUp"
          slidesPerView={1}
          spaceBetween={15}
          speed={1000}
          loop={false}
          observer
          observeParents
          modules={[Pagination]}
          pagination={{ el: dotsEl, clickable: true }}
          onSwiper={onSwiper}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 20 },
            992: { slidesPerView: 2, spaceBetween: 20 },
            1200: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >
          <SwiperSlide>
            <div className="donation-card hover-image">
              <Link href="#" className="img-style mb_24">
                <Image loading="lazy" width={410} height={274} src={card1.image} alt="donation-item" />
              </Link>
              <div className="content">
                <div className="mb_20">
                  <DonationMeta tag={card1.tag} days={card1.days} />
                  <h5 className="donation-card__title text-capitalize">
                    <Link href="#" className="link line-clamp-2">
                      {card1.title}
                    </Link>
                  </h5>
                </div>
                <div className="d-grid gap_20">
                  <DonationProgress raised={card1.raised} goal={card1.goal} />
                  <ViewProgramButton />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="donation-card hover-image">
              <Link href="#" className="img-style mb_24">
                <Image loading="lazy" width={410} height={274} src={card2.image} alt="donation-item" />
              </Link>
              <div className="content">
                <div className="mb_20">
                  <DonationMeta tag={card2.tag} days={card2.days} />
                  <h5 className="donation-card__title text-capitalize">
                    <Link href="#" className="link line-clamp-2">
                      {card2.title}
                    </Link>
                  </h5>
                </div>
                <div className="d-grid gap_20">
                  <DonationProgress raised={card2.raised} goal={card2.goal} />
                  <ViewProgramButton />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="donation-card hover-image">
              <Link href="#" className="img-style mb_24">
                <Image loading="lazy" width={410} height={274} src={card3.image} alt="donation-item" />
              </Link>
              <div className="content">
                <DonationMeta tag={card3.tag} days={card3.days} />
                <div className="d-grid gap_20">
                  <h5 className="donation-card__title text-capitalize">
                    <Link href="#" className="link line-clamp-2">
                      {card3.title}
                    </Link>
                  </h5>
                  <DonationProgress raised={card3.raised} goal={card3.goal} />
                  <ViewProgramButton />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <div className="sw-dots style-1 sw-pagination-layout text-center mt_24" ref={dotsRef} />
        </Swiper>
      </div>
    </div>
  );
}
