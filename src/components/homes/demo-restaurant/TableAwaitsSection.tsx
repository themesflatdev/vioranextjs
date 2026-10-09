"use client";

import Image from "next/image";
import { useAtropos } from "@/hooks/useAtropos";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

export default function TableAwaitsSection() {
  const atroposRef = useAtropos<HTMLDivElement>();
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");

  return (
    <div className="section-table-awaits tf-spacing-1">
      <div className="tf-container medium">
        <div className="box-table-awaits align-items-center">
          <div className="atropos my-atropos thumbs" ref={atroposRef}>
            <div className="atropos-scale">
              <div className="atropos-rotate">
                <div className="atropos-inner">
                  <Image
                    data-atropos-offset="2"
                    className="main wow zoomIn"
                    data-wow-duration="2s"
                    width={471}
                    height={445}
                    src="/assets/images/demo-restaurant/table-awaits-1.png"
                    alt="table-awaits"
                  />
                  <Image
                    data-atropos-offset="-4.5"
                    className="leaf-1 wow zoomIn"
                    data-wow-delay=".3s"
                    data-wow-duration="2s"
                    width={269}
                    height={258}
                    src="/assets/images/demo-restaurant/table-awaits-2.png"
                    alt="table-awaits"
                  />
                  <Image
                    data-atropos-offset="-2.5"
                    className="leaf-2 wow zoomIn"
                    data-wow-delay=".3s"
                    data-wow-duration="2s"
                    width={515}
                    height={552}
                    src="/assets/images/demo-restaurant/table-awaits-3.png"
                    alt="table-awaits"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="heading-section-3 d-grid gap_12 mb_42">
              <div className="sub text-label text-uppercase wow fadeInUp text_white lh-16">Your Table Awaits</div>
              <h3 className="title" ref={titleRef}>
                Secure Your Seat For Something Special.
              </h3>
              <p className="desc mt_10 text-body-default wow fadeInUp">
                Whether it&rsquo;s a romantic evening, a casual lunch, or a special celebration we&rsquo;re here
                to serve you with warmth, flavor, and care. Fill in the details below to reserve your spot, and
                let us take care of the rest.
              </p>
            </div>
            <div className="info-time d-grid gap_12 mb_40">
              <h6 className="wow fadeInUp">Opening Hours:</h6>
              <p className="text-body-2 text_white wow fadeInUp">Monday – Friday: 11:00 AM – 10:00 PM</p>
              <p className="text-body-2 text_white wow fadeInUp">
                Saturday – Sunday &amp; Holidays: 10:00 AM – 11:00 PM
              </p>
            </div>
            <a href="#" className="tf-btn style-border btn-hover-animate-border wow fadeInUp">
              <span>Make A Reservation</span>
              <span />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
