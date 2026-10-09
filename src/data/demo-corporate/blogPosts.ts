export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  author: string;
  date: string;
  image: string;
  width: number;
  height: number;
  size: "large" | "normal";
};

// The original blog-full-width.html has exactly 8 posts (2 large + 6 grid,
// tf-grid-layout md-col-3), all sharing the same date — a real content
// quirk, preserved per CLAUDE.md rule 4.
export const originalPosts: BlogPost[] = [
  {
    id: "1",
    slug: "inside-the-enterprise",
    title: "Inside the Enterprise",
    author: "Omar Bergson",
    date: "June 12, 2025",
    image: "/assets/images/demo-corporate/blog-item-large-1.jpg",
    width: 937,
    height: 620,
    size: "large",
  },
  {
    id: "2",
    slug: "the-strategy-room",
    title: "The Strategy Room",
    author: "Maren Calzoni",
    date: "June 12, 2025",
    image: "/assets/images/demo-corporate/blog-item-1.jpg",
    width: 464,
    height: 620,
    size: "large",
  },
  {
    id: "3",
    slug: "innovating-at-scale",
    title: "Innovating at Scale",
    author: "Ann Bergson",
    date: "June 12, 2025",
    image: "/assets/images/demo-corporate/blog-item-2.jpg",
    width: 464,
    height: 620,
    size: "normal",
  },
  {
    id: "4",
    slug: "client-success-stories",
    title: "Client Success Stories",
    author: "Zaire Culhane",
    date: "June 12, 2025",
    image: "/assets/images/demo-corporate/blog-item-3.jpg",
    width: 464,
    height: 620,
    size: "normal",
  },
  {
    id: "5",
    slug: "from-pitch-to-execution",
    title: "From Pitch to Execution",
    author: "Emery George",
    date: "June 12, 2025",
    image: "/assets/images/demo-corporate/blog-item-4.jpg",
    width: 464,
    height: 620,
    size: "normal",
  },
  {
    id: "6",
    slug: "the-future-of-work",
    title: "The Future of Work",
    author: "Mira Ekstrom Bothman",
    date: "June 12, 2025",
    image: "/assets/images/demo-corporate/blog-item-5.jpg",
    width: 464,
    height: 620,
    size: "normal",
  },
  {
    id: "7",
    slug: "branded-impact",
    title: "Branded Impact",
    author: "Jaydon Levin",
    date: "June 12, 2025",
    image: "/assets/images/demo-corporate/blog-item-6.jpg",
    width: 464,
    height: 620,
    size: "normal",
  },
  {
    id: "8",
    slug: "what-weve-learned",
    title: "What We’ve Learned",
    author: "Kaylynn Bator",
    date: "June 12, 2025",
    image: "/assets/images/demo-corporate/blog-item-7.jpg",
    width: 464,
    height: 620,
    size: "normal",
  },
];

// cloned for pagination demo — 2 extra "pages" reusing the 8 original
// images, but with new title/author/date and a reordered position so
// each page actually looks different when paginating (24 posts total =
// 3 pages of 8, same 2-large + 6-grid layout per page). Only
// image/width/height/size are reused from the matching original post;
// title/author/date are new demo copy, and item order is shuffled.
const clone2Copy = [
  { title: "Scaling Without Losing Culture", author: "Priya Nandan" },
  { title: "Leadership in a Hybrid World", author: "Sawyer Holt" },
  { title: "Data-Driven Decision Making", author: "Talia Reyes" },
  { title: "Building Resilient Teams", author: "Corbin Ashfield" },
  { title: "The New Rules of Customer Trust", author: "Nadia Ferreira" },
  { title: "Automation Without the Anxiety", author: "Lucas Whitfield" },
  { title: "Rethinking the Onboarding Process", author: "Harlow Quinn" },
  { title: "Metrics That Actually Matter", author: "Desmond Okafor" },
];

const clone3Copy = [
  { title: "Culture as a Competitive Edge", author: "Ines Marchetti" },
  { title: "When Strategy Meets Execution", author: "Rowan Delgado" },
  { title: "Small Teams, Big Wins", author: "Callan Osei" },
  { title: "The Cost of Slow Decisions", author: "Freya Lindqvist" },
  { title: "Trust, Transparency, and Growth", author: "Malik Abernathy" },
  { title: "Designing for Change", author: "Sienna Vosloo" },
  { title: "What Great Managers Do Differently", author: "Tobias Renwick" },
  { title: "Turning Feedback Into Momentum", author: "Noor Delacroix" },
];

function clonePosts(
  suffix: string,
  copy: { title: string; author: string }[],
  date: string,
  order: number[]
): BlogPost[] {
  return order.map((i) => {
    const post = originalPosts[i];
    return {
      ...post,
      id: `${post.id}${suffix}`,
      slug: `${post.slug}${suffix}`,
      title: copy[i].title,
      author: copy[i].author,
      date,
    };
  });
}

export const blogPosts: BlogPost[] = [
  ...originalPosts,
  ...clonePosts("-2", clone2Copy, "June 5, 2025", [7, 6, 5, 4, 3, 2, 1, 0]),
  ...clonePosts("-3", clone3Copy, "May 28, 2025", [3, 4, 5, 6, 7, 0, 1, 2]),
];
