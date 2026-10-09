"use client";

import Image from "next/image";
import { useSplitTextReveal, type SplitTextEffect } from "@/hooks/useSplitTextReveal";

type ShowcaseImage = {
  src: string;
  width: number;
  height: number;
};

function buildColumns(basePath: string): { col1: ShowcaseImage[]; col2: ShowcaseImage[]; col3: ShowcaseImage[] } {
  return {
    col1: [
      { src: `${basePath}/show-case-1.jpg`, width: 382, height: 287 },
      { src: `${basePath}/show-case-2.jpg`, width: 276, height: 276 },
    ],
    col2: [{ src: `${basePath}/show-case-3.jpg`, width: 606, height: 808 }],
    col3: [
      { src: `${basePath}/show-case-4.jpg`, width: 276, height: 276 },
      { src: `${basePath}/show-case-5.jpg`, width: 382, height: 509 },
    ],
  };
}

function ShowcaseColumn({ images, className }: { images: ShowcaseImage[]; className: string }) {
  return (
    <div className={`col-image ${className}`}>
      {images.map((image) => (
        <div className="hover-image" key={image.src}>
          <div className="img-style">
            <Image
              loading="lazy"
              width={image.width}
              height={image.height}
              src={image.src}
              alt="show-case"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

type ShowcaseGalleryProps = {
  // Same 5 "show-case-*.jpg" filenames, but each niche has its own copies
  // under its own assets folder — confirmed by reading each niche's actual
  // HTML source, not assumed shared.
  imageBasePath?: string;
  sub?: string;
  title?: string;
  titleWhite?: boolean;
  // Original markup uses a different spacing modifier per page: corporate
  // /contact is "pb-0", /carrer is "pt-0", /our-team and agency /about have
  // neither.
  spacingModifier?: "pb-0" | "pt-0" | null;
  // Base spacing class — "tf-spacing-1" (default) everywhere except agency
  // /contact, whose source uses the distinct "tf-spacing-13" utility class
  // instead (confirmed a real, separate class in styles.css, not a typo).
  baseSpacingClass?: string;
  capitalize?: boolean;
  animateTitle?: boolean;
  splitEffect?: SplitTextEffect;
};

// Common "team-purpose-showcase" gallery — confirmed identical markup (5
// hover-image columns) reused verbatim across corporate's /contact,
// /our-team, /carrer and agency's /about (and beyond), only heading
// copy/style + image set differ per page.
export default function ShowcaseGallery({
  imageBasePath = "/assets/images/demo-corporate",
  sub = "Contact Us",
  title = "Everything You Need to Know Before Getting Started with Us",
  titleWhite = false,
  spacingModifier = "pb-0",
  baseSpacingClass = "tf-spacing-1",
  capitalize = true,
  animateTitle = false,
  splitEffect = "right",
}: ShowcaseGalleryProps) {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>(splitEffect);
  const { col1, col2, col3 } = buildColumns(imageBasePath);

  return (
    <div className={`team-purpose-showcase${spacingModifier ? ` ${spacingModifier}` : ""} ${baseSpacingClass}`}>
      <div className="tf-container">
        <div className="heading-section style-default text-center mb_44">
          {sub ? <div className="sub text-label text-uppercase mb_16">{sub}</div> : null}
          <h2
            className={`title${titleWhite ? " text_white" : ""}${capitalize ? " text-capitalize" : ""}`}
            ref={animateTitle ? titleRef : undefined}
          >
            {title}
          </h2>
        </div>
        <div className="wrap-showcase">
          <ShowcaseColumn images={col1} className="col-image-1" />
          <ShowcaseColumn images={col2} className="col-image-2" />
          <ShowcaseColumn images={col3} className="col-image-3" />
        </div>
      </div>
    </div>
  );
}
