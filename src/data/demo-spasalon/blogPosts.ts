import { blogListPosts, blogListAuthor, blogListDate } from "./blogListPosts";
import { blogGridPosts, blogGridAuthor, blogGridDate } from "./blogGridPosts";

export type SpaBlogPost = {
  key: string;
  image: string;
  tag: string;
  title: string;
  author: string;
  date: string;
};

// The home page's own images (blog-item-22/23.jpg) are distinct crops from
// bloglist/bloggrid's blog-1..8.jpg, but these 2 posts are otherwise the
// exact same posts as bloggrid's "self-care-rituals" and bloglist's
// "monthly-facials" (same title/author/date) — their `key` doubles as the
// canonical slug for /demo-spasalon/blogdetail/[slug].
export const spaBlogPosts: SpaBlogPost[] = [
  {
    key: "self-care-rituals",
    image: "/assets/images/demo-spasalon/blog-item-22.jpg",
    tag: "spa body",
    title: "5 Self-Care Rituals for Stressful Days",
    author: "Lindsey Dorwart",
    date: "July 5, 2025",
  },
  {
    key: "monthly-facials",
    image: "/assets/images/demo-spasalon/blog-item-23.jpg",
    tag: "Spa Salon",
    title: "Why Monthly Facials Keep Your Skin Radiant",
    author: "Rayna Philips",
    date: "July 5, 2025",
  },
];

export type BlogDetailMeta = { title: string; author: string; date: string; tag: string; image: string };

// Single resolver for /demo-spasalon/blogdetail/[slug] — covers every real
// slug across bloglist (5) and bloggrid (8), 13 total (no overlap, see
// each file's own notes on how title collisions were disambiguated).
export function resolveBlogDetailMeta(slug: string): BlogDetailMeta | null {
  const listPost = blogListPosts.find((post) => post.slug === slug);
  if (listPost) {
    return { title: listPost.title, tag: listPost.tag, image: listPost.image, author: blogListAuthor, date: blogListDate };
  }
  const gridPost = blogGridPosts.find((post) => post.slug === slug);
  if (gridPost) {
    return { title: gridPost.title, tag: gridPost.tag, image: gridPost.image, author: blogGridAuthor, date: blogGridDate };
  }
  return null;
}

export const allBlogDetailSlugs: string[] = [
  ...blogListPosts.map((post) => post.slug),
  ...blogGridPosts.map((post) => post.slug),
];
