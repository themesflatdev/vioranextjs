export type FaqItem = {
  key: string;
  question: string;
  answer: string;
};

export type FaqGroup = {
  key: string;
  title: string;
  desc: string;
  items: FaqItem[];
};

// FAQs.html — 3 groups of 5, all about "chat software" (SaaS content,
// including every answer in every group being the literal same copy-paste
// placeholder sentence regardless of question) — none of it fits an
// agency. Rewritten in full per agency-pages-menu-only.md.
export const faqGroups: FaqGroup[] = [
  {
    key: "process",
    title: "Project Process",
    desc: "Get answers to your questions about how we work and what to expect.",
    items: [
      {
        key: "process-1",
        question: "What does your design process look like?",
        answer:
          "Our process starts with discovery and research, followed by strategy, design concepts, revisions, and final delivery. We keep you involved at every stage to ensure the result matches your vision.",
      },
      {
        key: "process-2",
        question: "How long does a typical project take?",
        answer:
          "Timelines vary by project scope, but most branding projects take 2-4 weeks, while full website builds typically take 4-8 weeks depending on complexity.",
      },
      {
        key: "process-3",
        question: "Can I request revisions during the project?",
        answer:
          "Yes, each package includes a set number of revision rounds. We welcome your feedback throughout the process to make sure the final result truly represents your brand.",
      },
      {
        key: "process-4",
        question: "Do you work with clients remotely?",
        answer:
          "Absolutely. We collaborate with clients worldwide using tools like Slack, Zoom, and Figma to keep communication smooth no matter where you're located.",
      },
      {
        key: "process-5",
        question: "What information do you need from me to get started?",
        answer:
          "We'll ask for your brand goals, target audience, any existing brand assets, and examples of styles you like. A short discovery call helps us tailor the approach to your needs.",
      },
    ],
  },
  {
    key: "pricing",
    title: "Pricing & Payment",
    desc: "Get answers to your questions about pricing, payment, and billing.",
    items: [
      {
        key: "pricing-1",
        question: "How does pricing work for your services?",
        answer:
          "Pricing depends on project scope and deliverables. We offer both fixed-price packages and custom quotes for larger projects — reach out and we'll recommend the best fit.",
      },
      {
        key: "pricing-2",
        question: "Do you require a deposit before starting?",
        answer:
          "Yes, we typically require a 50% deposit to begin work, with the remaining balance due upon project completion.",
      },
      {
        key: "pricing-3",
        question: "What is your refund policy?",
        answer:
          "If a project is cancelled before work begins, we offer a full refund of the deposit. Once design work has started, refunds are prorated based on work completed.",
      },
      {
        key: "pricing-4",
        question: "Are there any hidden fees?",
        answer: "No. All costs are outlined clearly in your proposal before we begin, so there are no surprises along the way.",
      },
      {
        key: "pricing-5",
        question: "Can I upgrade my package mid-project?",
        answer: "Yes, you can upgrade your package at any time — we'll simply adjust the scope and pricing accordingly.",
      },
    ],
  },
  {
    key: "services",
    title: "Services Questions",
    desc: "Get answers to your questions about our services and capabilities.",
    items: [
      {
        key: "services-1",
        question: "What services does your agency offer?",
        answer:
          "We offer brand strategy, web design & development, digital marketing, and UI/UX design — everything you need to build and grow a standout digital presence.",
      },
      {
        key: "services-2",
        question: "Do you offer ongoing support after launch?",
        answer:
          "Yes, we offer maintenance and support packages to keep your website and digital assets running smoothly long after launch.",
      },
      {
        key: "services-3",
        question: "Can you help with an existing brand, or only new ones?",
        answer:
          "Both! Whether you're starting from scratch or refreshing an existing brand, we tailor our approach to fit your current stage.",
      },
      {
        key: "services-4",
        question: "Do you handle both branding and web development?",
        answer:
          "Yes, our team covers the full spectrum — from brand identity and strategy to fully custom website design and development.",
      },
      {
        key: "services-5",
        question: "Is SEO included in your web design packages?",
        answer:
          "Basic on-page SEO best practices are included in every website build, with advanced SEO and marketing available as an add-on service.",
      },
    ],
  },
];
