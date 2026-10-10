export const processSteps = [
  {
    icon: "icon-CalendarCheck",
    number: "1",
    title: "Consultation & Vision",
    desc: "We understand your needs and vision to craft a tailored concept.",
  },
  {
    icon: "icon-PencilRuler",
    number: "2",
    title: "Design & Planning",
    desc: "Our team creates designs blending creativity, functionality, sustainability.",
  },
  {
    icon: "icon-Plant",
    number: "3",
    title: "Build & Transform",
    desc: "From plan to reality, we craft landscapes that inspire for years ahead.",
  },
];

export const serviceItems = [
  {
    image: "/assets/images/demo-gardenlandscaping/service-1.jpg",
    icon: "icon-Shovel",
    title: "Landscape Design",
    desc: "Creative outdoor plans tailored for you.",
  },
  {
    image: "/assets/images/demo-gardenlandscaping/service-2.jpg",
    icon: "icon-Farm",
    title: "Garden Installation",
    desc: "Expert setup for vibrant, lasting gardens.",
  },
  {
    image: "/assets/images/demo-gardenlandscaping/service-3.jpg",
    icon: "icon-PottedPlant",
    title: "Lawn & Plant Care",
    desc: "Healthy growth through regular care.",
  },
  {
    image: "/assets/images/demo-gardenlandscaping/service-4.jpg",
    icon: "icon-Drop",
    title: "Irrigation Systems",
    desc: "Smart watering for thriving landscapes.",
  },
];

// Display labels only — "Interios"/"Maintance" in the original HTML are
// typos; fixed here to "Interiors"/"Maintenance". The `id`s stay as the
// original slugs (interios/maintance) so pane ids don't need to change too.
export const projectTabs = [
  { id: "all", label: "All" },
  { id: "event", label: "Event" },
  { id: "garden", label: "Garden" },
  { id: "interios", label: "Interiors" },
  { id: "maintance", label: "Maintenance" },
];

// All 5 tab panes render this exact same 3-item array in the original HTML
// (verified by diffing each pane) — kept identical on purpose, not a bug.
export const projectItemsLayout = [
  { image: "/assets/images/demo-gardenlandscaping/project-1.jpg", contentFirst: true },
  { image: "/assets/images/demo-gardenlandscaping/project-2.jpg", contentFirst: false },
  { image: "/assets/images/demo-gardenlandscaping/project-1.jpg", contentFirst: true },
];

export const projectContent = {
  title: "Modern Villa Garden",
  desc: "A minimalist villa garden with clean stone pathways, lush greenery, and a smart irrigation system — designed for timeless elegance, comfort, relaxation, and ease of care.",
  info: [
    { label: "Location:", value: "Los Angeles, USA" },
    { label: "Category:", value: "Residential Landscape" },
    { label: "Year:", value: "August 18, 2025" },
  ],
};

export const testimonials = [
  {
    quote:
      "“My garden was completely transformed into a beautiful, relaxing space. The team’s creativity and attention to detail truly exceeded my expectations.”",
    avatar: "/assets/images/avatar/avatar-24.jpg",
    name: "Savannah Nguyen",
    role: "Homeowner",
  },
  {
    quote:
      "“They designed and built a stunning landscape that perfectly matches my lifestyle and daily needs. Everything feels seamless, natural, inviting, and easy to maintain.”",
    avatar: "/assets/images/avatar/avatar-23.jpg",
    name: "Bessie Cooper",
    role: "Villa Owner",
  },
  {
    hasImg: true,
    image: "/assets/images/demo-gardenlandscaping/testimonial-2.jpg",
    avatar: "/assets/images/avatar/avatar-25.jpg",
    name: "Robert Fox",
    role: "Resort Manager",
  },
  {
    hasImg: true,
    image: "/assets/images/demo-gardenlandscaping/testimonial-1.jpg",
    avatar: "/assets/images/avatar/avatar-26.jpg",
    name: "Wade Warren",
    role: "Property Investor",
  },
  {
    quote:
      "“The smart irrigation system they installed has saved me time, effort, unnecessary costs. My plants are thriving beautifully, and the garden always looks wonderfully fresh.”",
    avatar: "/assets/images/avatar/avatar-27.jpg",
    name: "Jerome Bell",
    role: "Architect",
  },
  {
    quote:
      "“Professional, reliable, and passionate about their landscaping work. They turned my outdoor living area into a relaxing space my whole family enjoys every day.”",
    avatar: "/assets/images/avatar/avatar-28.jpg",
    name: "Theresa Webb",
    role: "Homeowner",
  },
];
