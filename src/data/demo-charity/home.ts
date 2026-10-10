export const newsItems = [
  {
    image: "/assets/images/demo-charity/news-1.jpg",
    target: 100,
    duration: 300,
    initial: 10,
    suffix: "k",
    counterClass: "text-white",
    titleClass: "text_white",
    title: "Meals Provided",
    lines: ["Together, we create", "lasting change. Join us in", "spreading hope and support."],
    wowDelay: "",
  },
  {
    image: "/assets/images/demo-charity/news-2.jpg",
    target: 10000,
    duration: 800,
    initial: 1000,
    suffix: "+",
    counterClass: "text-white",
    titleClass: "text_white",
    title: "People Reached",
    lines: ["Helping people through", "health and education."],
    wowDelay: ".2s",
  },
  {
    image: "/assets/images/demo-charity/news-3.jpg",
    target: 300,
    duration: 800,
    initial: 100,
    suffix: "+",
    counterClass: "text_primary",
    titleClass: "text_primary",
    title: "Homes Restored",
    lines: ["Providing safe housing and helping families", "rebuild their futures with dignity."],
    wowDelay: ".4s",
  },
];

export const donationCards = [
  {
    image: "/assets/images/demo-charity/donation-item-1.jpg",
    tag: "Food Aid",
    days: "15 Days Left",
    title: "Together, We Can Make a Lasting Difference for Those in Need",
    raised: "$40.000",
    goal: "$65.200",
  },
  {
    image: "/assets/images/demo-charity/donation-item-2.jpg",
    tag: "Water Relief",
    days: "21 Days Left",
    title: "Be the Reason Someone Smiles Today",
    raised: "$40.000",
    goal: "$65.200",
  },
  {
    image: "/assets/images/demo-charity/donation-item-3.jpg",
    tag: "Medical Help",
    days: "12 Days Left",
    title: "Give Hope, Change Lives for a Better Tomorrow",
    raised: "$40.000",
    goal: "$65.200",
  },
];

export const quickAmounts = [10, 20, 50, 100, 250];

export const testimonials = [
  {
    type: "quote" as const,
    avatar: "/assets/images/avatar/avatar-30.jpg",
    quote:
      "When I lost my job, this charity gave my family food, hope, and the strength to start over. Their kindness reminded us we weren’t alone",
    name: "Jordyn Septimus",
    role: "Program Recipient",
  },
  {
    type: "quote" as const,
    avatar: "/assets/images/avatar/avatar-29.jpg",
    quote:
      "Volunteering here has been life-changing. Every project shows me the power of compassion and how small acts can create big change.",
    name: "Giana Lipshutz",
    role: "Volunteer",
  },
  {
    type: "image" as const,
    image: "/assets/images/demo-charity/testimonial-1.jpg",
    name: "Madelyn Rosser",
    role: "Donor",
  },
  {
    type: "quote" as const,
    avatar: "/assets/images/avatar/avatar-28.jpg",
    quote: "Seeing my donations provide meals, shelter, and education proves that every contribution truly matters.",
    name: "Jaylon Korsgaard",
    role: "Community Partner",
  },
];

export const insightsPosts = [
  {
    image: "/assets/images/demo-charity/blog-1.jpg",
    month: "Aug",
    day: "12",
    category: "Support",
    title: "How Small Acts Of Kindness Create Big Change",
  },
  {
    image: "/assets/images/demo-charity/blog-2.jpg",
    month: "Aug",
    day: "15",
    category: "Volunteers",
    title: "5 Ways To Support Your Community Without Spending Money",
  },
  {
    image: "/assets/images/demo-charity/blog-3.jpg",
    month: "Aug",
    day: "24",
    category: "Impact",
    title: "Behind The Scenes: A Day In The Life Of A Volunteer",
  },
];

export const volunteerBenefits = [
  {
    icon: "icon-Earth",
    title: "Create Real Change",
    desc: "An opportunity to join hands with our charity and make a direct difference in people’s lives.",
    wowDelay: "",
  },
  {
    icon: "icon-Plant",
    title: "Learn And Grow",
    desc: "Gain valuable skills and experiences while supporting our campaigns and initiatives.",
    wowDelay: ".2s",
  },
  {
    icon: "icon-Heart",
    title: "Enhance Your Well Being",
    desc: "Experience the joy of giving back and inspire others to do the same.",
    wowDelay: ".4s",
  },
];
