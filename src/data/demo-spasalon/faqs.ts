export type Faq = {
  key: string;
  question: string;
  answer: string;
};

// Source HTML (faqs.html) ships Lorem Ipsum for every answer — written for
// real per CLAUDE.md placeholder policy, matched to the spa niche.
export const faqsLeft: Faq[] = [
  {
    key: "faq-1",
    question: "How often should I book a spa treatment?",
    answer:
      "For most people, once or twice a month is ideal to maintain skin health and overall relaxation benefits.",
  },
  {
    key: "faq-2",
    question: "What benefits do I gain from facial therapy?",
    answer:
      "Regular facials deeply cleanse pores, improve skin texture, boost hydration, and help slow visible signs of aging.",
  },
  {
    key: "faq-3",
    question: "How long does a deep tissue massage last?",
    answer:
      "Our deep tissue massage sessions typically run 60 to 90 minutes depending on the areas you'd like to focus on.",
  },
  {
    key: "faq-4",
    question: "What must I prepare before a spa session?",
    answer:
      "Arrive 10 minutes early, stay hydrated, and avoid heavy meals beforehand. We'll take care of everything else.",
  },
];

export const faqsRight: Faq[] = [
  {
    key: "faq-5",
    question: "How safe are detox body wraps for health?",
    answer:
      "Our body wraps use natural, skin-friendly ingredients and are safe for most guests — just let us know about any allergies.",
  },
  {
    key: "faq-6",
    question: "What skincare results come from regular facials?",
    answer:
      "You'll notice clearer, brighter skin, reduced fine lines, and improved tone with consistent monthly treatments.",
  },
  {
    key: "faq-7",
    question: "How effective is hot stone massage for stress?",
    answer:
      "Very effective — the warmth of the stones deeply relaxes muscles and promotes a sense of calm that lasts for days.",
  },
  {
    key: "faq-8",
    question: "What happens during an aromatherapy session?",
    answer:
      "We blend therapeutic essential oils with a gentle massage to calm the mind, ease tension, and uplift your mood.",
  },
];
