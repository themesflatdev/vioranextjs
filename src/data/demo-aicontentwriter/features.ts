export type FeatureItem = {
  title: string;
  desc: string;
  image: string;
  points: string[];
  // true = content trước ảnh trong DOM (item giữa, class "ctl" trong HTML gốc)
  contentFirst?: boolean;
};

export const features: FeatureItem[] = [
  {
    title: "Intelligent Content Generation",
    desc: "Produce high-quality content in seconds using advanced AI trained on top-performing copy.",
    image: "/assets/images/demo-aicontentwriter/feature-1.jpg",
    points: [
      "Supports blog posts, ads, emails, product descriptions, and more",
      "Suggests headlines, outlines, and paragraph structures",
      "Continuously learns and improves from your writing patterns",
    ],
  },
  {
    title: "SEO & Readability Optimization",
    desc: "Ensure every piece of content is not only engaging but also optimized for search engines.",
    image: "/assets/images/demo-aicontentwriter/feature-2.jpg",
    points: [
      "Keyword integration and content scoring built-in",
      "Readability checks for better user experience",
      "Helps increase organic traffic and time on page",
    ],
    contentFirst: true,
  },
  {
    title: "Custom Tone & Brand Voice",
    desc: "Stay on-brand across all content with fully adjustable tone and style settings.",
    image: "/assets/images/demo-aicontentwriter/feature-3.jpg",
    points: [
      "Choose from friendly, professional, witty, or custom tones",
      "Maintain voice consistency across teams and projects",
      "Great for agencies and multi-brand teams",
    ],
  },
];
