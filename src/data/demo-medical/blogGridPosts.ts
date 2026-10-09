export type BlogGridPost = {
  slug: string;
  title: string;
  image: string;
  tag: string;
  author: string;
  date: string;
};

// bloggrid.html's 6 real posts, in original order. "Culture & People" /
// "Press Releases" / "Case Studies" are the theme's generic blog
// categories (not medical-specific), kept verbatim.
export const blogGridPosts: BlogGridPost[] = [
  {
    slug: "key-medicare-deadlines-you-shouldnt-miss-this-year",
    title: "Key Medicare Deadlines You Shouldn't Miss This Year",
    image: "/assets/images/demo-medical/blog-item-4.jpg",
    tag: "Culture & People",
    author: "Mike Hanley",
    date: "June 12, 2025",
  },
  {
    slug: "top-signs-you-shouldnt-ignore-and-when-to-see-a-doctor",
    title: "Top Signs You Shouldn't Ignore and When to See a Doctor",
    image: "/assets/images/demo-medical/blog-item-5.jpg",
    tag: "Press Releases",
    author: "Kelemen Krisztina",
    date: "May 08, 2025",
  },
  {
    slug: "top-medicare-mistakes-you-should-avoid-before-enrolling",
    title: "Top Medicare Mistakes You Should Avoid Before Enrolling",
    image: "/assets/images/demo-medical/blog-item-6.jpg",
    tag: "Case Studies",
    author: "Kelemen Krisztina",
    date: "May 08, 2025",
  },
  {
    slug: "signs-you-may-need-to-change-your-medicare-coverage",
    title: "Signs You May Need to Change Your Medicare Coverage",
    image: "/assets/images/demo-medical/blog-item-7.jpg",
    tag: "Culture & People",
    author: "Balla Daniella",
    date: "May 06, 2025",
  },
  {
    slug: "medicare-options-you-should-compare-before-you-retire",
    title: "Medicare Options You Should Compare Before You Retire",
    image: "/assets/images/demo-medical/blog-item-8.jpg",
    tag: "Press Releases",
    author: "Kelemen Krisztina",
    date: "May 08, 2025",
  },
  {
    slug: "medicare-benefits-you-might-not-realize-you-can-claim",
    title: "Medicare Benefits You Might Not Realize You Can Claim",
    image: "/assets/images/demo-medical/blog-item-9.jpg",
    tag: "Case Studies",
    author: "Kelemen Krisztina",
    date: "May 08, 2025",
  },
];

// cloned for pagination demo — 2 extra "pages" reusing the 6 real images
// (rotated order) but with new title/author/date per card, same approach
// as demo-corporate/blogPosts.ts, so each page actually looks different
// when paginating instead of showing the same 6 cards verbatim. Each new
// slug gets its own /blogdetail/[slug] page (see blogPosts.ts). Suffix is
// "-grid-N" (not just "-N") because bloggrid and bloglist share some of
// the same real post slugs — a plain "-2"/"-3" suffix from each file would
// collide and silently dedupe in generateStaticParams.
const clone2Copy = [
  "Understanding Your Annual Wellness Visit",
  "How to Read Your Lab Results With Confidence",
  "Building a Family Health History That Helps Your Doctor",
  "What to Ask at Your Next Specialist Appointment",
  "Staying Active Safely as You Age",
  "When to Get a Second Medical Opinion",
];
const clone2Authors = ["Priya Shah", "Sawyer Holt", "Talia Reyes", "Corbin Ashfield", "Nadia Ferreira", "Lucas Whitfield"];

const clone3Copy = [
  "Simple Habits That Support Long-Term Heart Health",
  "Preparing for Same-Day Surgery: What to Expect",
  "Telehealth Visits: Getting the Most Out of a Virtual Appointment",
  "Managing Chronic Conditions Between Checkups",
  "Vaccination Schedules Every Family Should Know",
  "Recognizing Early Warning Signs Worth a Call to Your Doctor",
];
const clone3Authors = ["Ines Marchetti", "Rowan Delgado", "Callan Osei", "Freya Lindqvist", "Malik Abernathy", "Sienna Vosloo"];

function cloneGridPosts(suffix: string, titles: string[], authors: string[], date: string, order: number[]): BlogGridPost[] {
  return order.map((sourceIndex, i) => {
    const source = blogGridPosts[sourceIndex];
    return {
      ...source,
      slug: `${source.slug}${suffix}`,
      title: titles[i],
      author: authors[i],
      date,
    };
  });
}

// Full pagination feed for /demo-medical/bloggrid: 6 real posts (page 1) +
// 2 cloned pages (12 posts) = 18 total -> 3 pages of 6.
export const blogGridDisplayPosts: BlogGridPost[] = [
  ...blogGridPosts,
  ...cloneGridPosts("-grid-2", clone2Copy, clone2Authors, "June 5, 2025", [5, 4, 3, 2, 1, 0]),
  ...cloneGridPosts("-grid-3", clone3Copy, clone3Authors, "May 28, 2025", [2, 3, 4, 5, 0, 1]),
];
