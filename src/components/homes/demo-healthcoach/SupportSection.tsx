"use client";

import { useState } from "react";
import Image from "next/image";
import { useAnimateImgItem } from "@/hooks/useAnimateImgItem";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import VideoModal from "@/components/common/VideoModal";

// Cả 3 video đều trỏ cùng 1 YouTube ID trong HTML gốc — lỗi demo, giữ nguyên
// theo CLAUDE.md rule 4.
const YOUTUBE_ID = "XHOmBV4js_E";

function PlayButton({ onOpen }: { onOpen: () => void }) {
  return (
    <div className="btn-video">
      <button type="button" className="popup-youtube" onClick={onOpen} aria-label="Play video">
        <i aria-hidden="true" className="icon-Play2" />
      </button>
    </div>
  );
}

function VideoImage({
  clpClass,
  src,
  width,
  height,
  onOpen,
}: {
  clpClass: string;
  src: string;
  width: number;
  height: number;
  onOpen: () => void;
}) {
  const ref = useAnimateImgItem<HTMLDivElement>();
  return (
    <div className={`img-style ${clpClass}`} ref={ref}>
      <Image loading="lazy" width={width} height={height} src={src} alt="health-video" />
      <PlayButton onOpen={onOpen} />
    </div>
  );
}

export default function SupportSection() {
  const [videoOpen, setVideoOpen] = useState(false);
  const subRef = useSplitTextReveal<HTMLDivElement>("up");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("scale");
  const item1Ref = useAnimateImgItem<HTMLDivElement>();

  return (
    <div className="section-support tf-spacing-1 pt-0">
      <div className="tf-container medium">
        <div className="heading-section text-center d-grid gap_16 mb_48">
          <div className="sub text-label text-uppercase text_primary-color split-text effect-up" ref={subRef}>
            SUPPORT FOR EVERY STEP
          </div>
          <h2 className="title text_primary-color split-text effect-scale" ref={titleRef}>
            Guided Wellness Videos
          </h2>
        </div>
        <div className="tf-grid-layout md-col-3 gap_30">
          <div className="video-item widget-video tf-animateCLP-left" ref={item1Ref}>
            <div className="img-style">
              <Image loading="lazy" width={410} height={700} src="/assets/images/demo-healthcoach/video-1.jpg" alt="health-video" />
              <PlayButton onOpen={() => setVideoOpen(true)} />
            </div>
          </div>
          <div className="video-item widget-video">
            <VideoImage
              clpClass="tf-animateCLP-down"
              src="/assets/images/demo-healthcoach/video-2.jpg"
              width={410}
              height={410}
              onOpen={() => setVideoOpen(true)}
            />
            <div className="content">
              <div className="tag text-button text_primary-color">Stress Relief</div>
              <div className="heading">
                <h4 className="title mb_12">
                  <a href="#" className="hover-line-text">
                    Unwind With Gentle Evening Routine
                  </a>
                </h4>
                <p className="text-body-default text_primary-color">Relax your body and quiet mind.</p>
              </div>
            </div>
          </div>
          <div className="video-item widget-video">
            <div className="content">
              <div className="tag text-button text_primary-color">Energy Surge</div>
              <div className="heading">
                <h4 className="title mb_12">
                  <a href="#" className="hover-line-text">
                    Kickstart Your Morning Energy Flow
                  </a>
                </h4>
                <p className="text-body-default text_primary-color">Wake up with movement and focus.</p>
              </div>
            </div>
            <VideoImage
              clpClass="tf-animateCLP-up"
              src="/assets/images/demo-healthcoach/video-3.jpg"
              width={410}
              height={410}
              onOpen={() => setVideoOpen(true)}
            />
          </div>
        </div>
      </div>
      <VideoModal youtubeId={YOUTUBE_ID} open={videoOpen} onClose={() => setVideoOpen(false)} />
    </div>
  );
}
