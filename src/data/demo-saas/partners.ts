export type Partner = {
  src: string;
  width: number;
  height: number;
};

// 5 unique logos — original HTML lists them twice in a row (10
// .marquee-item total) before useInfiniteSlide clones the set further.
export const partners: Partner[] = [
  { src: "/assets/images/logo/partner-7.svg", width: 230, height: 48 },
  { src: "/assets/images/logo/partner-8.svg", width: 151, height: 48 },
  { src: "/assets/images/logo/partner-9.svg", width: 201, height: 47 },
  { src: "/assets/images/logo/partner-10.svg", width: 258, height: 48 },
  { src: "/assets/images/logo/partner-11.svg", width: 163, height: 43 },
];
