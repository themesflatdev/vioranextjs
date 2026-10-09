export type PortfolioItem = {
  slug: string;
  title: string;
  category: string;
  image: string;
  width: number;
  height: number;
  wide: boolean;
};

// The original HTML (portfolio.html) only ever uses 2 distinct images/titles
// across all 6 cards — "Aromatherapy Session" (portfolio-item-1.jpg, narrow
// col-lg-4) and "Face Scrubbing" (portfolio-item-2.jpg, wide col-lg-8),
// repeated 3 times each in the same alternating row pattern, all tagged
// "Beauty". A real content quirk (duplicate titles/images), preserved
// verbatim per CLAUDE.md rule 4 — not "fixed" with the unused
// portfolio-item-3..6.jpg assets that sit in /assets but are never
// referenced by this page. Slugs get a numeric suffix only for routing;
// the displayed title stays the plain duplicate string.
export const portfolioItems: PortfolioItem[] = [
  {
    slug: "aromatherapy-session-1",
    title: "Aromatherapy Session",
    category: "Beauty",
    image: "/assets/images/demo-spasalon/portfolio-item-1.jpg",
    width: 410,
    height: 580,
    wide: false,
  },
  {
    slug: "face-scrubbing-1",
    title: "Face Scrubbing",
    category: "Beauty",
    image: "/assets/images/demo-spasalon/portfolio-item-2.jpg",
    width: 850,
    height: 580,
    wide: true,
  },
  {
    slug: "face-scrubbing-2",
    title: "Face Scrubbing",
    category: "Beauty",
    image: "/assets/images/demo-spasalon/portfolio-item-2.jpg",
    width: 850,
    height: 580,
    wide: true,
  },
  {
    slug: "aromatherapy-session-2",
    title: "Aromatherapy Session",
    category: "Beauty",
    image: "/assets/images/demo-spasalon/portfolio-item-1.jpg",
    width: 410,
    height: 580,
    wide: false,
  },
  {
    slug: "aromatherapy-session-3",
    title: "Aromatherapy Session",
    category: "Beauty",
    image: "/assets/images/demo-spasalon/portfolio-item-1.jpg",
    width: 410,
    height: 580,
    wide: false,
  },
  {
    slug: "face-scrubbing-3",
    title: "Face Scrubbing",
    category: "Beauty",
    image: "/assets/images/demo-spasalon/portfolio-item-2.jpg",
    width: 850,
    height: 580,
    wide: true,
  },
];

// portfolio-detail.html's own write-up ("Professional medical service of
// Cardiology" / "Advantage Cardiology", Lorem Ipsum) is leftover
// medical-demo boilerplate, same issue as service-detail.html — rewritten
// per title (shared identically across that title's 3 duplicate cards,
// mirroring the original's own verbatim-shared-copy pattern).
export const portfolioCopyByTitle: Record<
  string,
  { intro: string; bullets: string[]; advantage: string }
> = {
  "Aromatherapy Session": {
    intro:
      "A calming blend of therapeutic essential oils paired with gentle massage techniques to ease tension and quiet the mind.",
    bullets: [
      "Essential oil blend chosen for your mood and needs",
      "Slow, rhythmic strokes to release built-up tension",
      "Warm towels and ambient scent throughout the session",
      "Suitable for both relaxation and recovery visits",
      "Finished with a short guided breathing moment",
      "Leaves skin soft and the mind noticeably calmer",
    ],
    advantage:
      "Clients return for how long the calm lasts afterward — better sleep, lighter shoulders, and a mood boost that carries into the days after a session.",
  },
  "Face Scrubbing": {
    intro:
      "A deep exfoliating facial that lifts away dead skin and buildup, leaving your complexion brighter and noticeably smoother.",
    bullets: [
      "Gentle exfoliation suited to your skin type",
      "Deep pore cleanse to clear away daily buildup",
      "Hydrating mask to replenish and soothe",
      "Light facial massage to boost circulation",
      "Finished with a nourishing moisturizer",
      "Visible brightness and smoother texture right after",
    ],
    advantage:
      "Regular sessions keep skin looking consistently refreshed, with therapists adjusting the scrub intensity each visit based on how your skin is doing.",
  },
};
