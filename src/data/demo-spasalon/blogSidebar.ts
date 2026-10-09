export const blogCategories = [
  { name: "Beauty", count: 112 },
  { name: "Formats", count: 32 },
  { name: "Health", count: 42 },
  { name: "Manual Therapy", count: 65 },
  { name: "Modern Practice", count: 13 },
];

// bloglist.html and bloggrid.html each ship a different tag list despite
// sharing every other sidebar block verbatim — a real content difference
// between the two pages, not a copy error on our end.
export const blogListTags = ["Aromatherapy", "Feet & hands", "Meditation", "Orthopedic", "Mental Health", "Health"];
export const blogGridTags = ["Therapy", "Wellness", "Meditation", "Clinics", "Mental Health", "Health"];

// Sidebar "Latest Posts" titles from the source HTML are distinct from
// every bloglist/bloggrid post above and all 4 share one generic
// "blogdetail.html" href with no way to tell them apart — a real content
// gap in the original (display-only teaser, not a working 4-post index).
// Kept as display text; the link target falls back to the niche's first
// canonical post rather than inventing 4 new fake article pages.
export const sidebarLatestPosts = [
  { title: "Spa Rituals Elevate Your Daily Self-Care", image: "/assets/images/demo-spasalon/latest-post-1.jpg" },
  { title: "Hydrating Masks Restore Glow and Softness", image: "/assets/images/demo-spasalon/latest-post-2.jpg" },
  { title: "Hot Oil Massage Nourishes Skin and Hair", image: "/assets/images/demo-spasalon/latest-post-3.jpg" },
  { title: "Body Scrubs Improve Skin Texture Naturally", image: "/assets/images/demo-spasalon/latest-post-4.jpg" },
];

export const sidebarLatestPostAuthor = "Zaire Culhane";
export const sidebarLatestPostDate = "June 12, 2025";
export const sidebarLatestPostFallbackSlug = "self-care-rituals";
