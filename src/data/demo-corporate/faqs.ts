export type Faq = {
  key: string;
  question: string;
  answer: string;
};

// FAQs.html — 9 questions, no niche-mismatch content to fix (per
// corporate-pages-remaining.md, kept 100% as-is).
export const faqs: Faq[] = [
  {
    key: "q1",
    question: "Q1: What services does your company offer for corporate clients?",
    answer:
      "We offer a comprehensive suite of services for corporate clients, including business strategy, web development, branding & identity, digital marketing, custom solutions, and consulting. Our team tailors each service to meet your specific business objectives.",
  },
  {
    key: "q2",
    question: "Q2: Do you work with international corporations?",
    answer:
      "Yes. We have extensive experience collaborating with multinational clients across various industries, including finance, logistics, healthcare, and technology.",
  },
  {
    key: "q3",
    question: "Q3: Can you customize your services based on our business needs?",
    answer:
      "Absolutely. We work closely with each client to understand their unique requirements and tailor our services to align with their business goals and challenges.",
  },
  {
    key: "q4",
    question: "Q4: How do you ensure confidentiality and data security?",
    answer:
      "We prioritize confidentiality and data security by implementing industry-standard security protocols, signing NDAs, and following best practices for data protection throughout every project phase.",
  },
  {
    key: "q5",
    question: "Q5: What is your typical project timeline for corporate engagements?",
    answer:
      "Project timelines vary depending on scope and complexity. After an initial consultation, we provide a detailed project plan with clear milestones and estimated delivery dates to ensure transparency and timely completion.",
  },
  {
    key: "q6",
    question: "Q6: Do you provide post-project support or long-term maintenance?",
    answer:
      "Yes, we offer post-project support and long-term maintenance packages to ensure your solutions remain effective and up-to-date as your business evolves.",
  },
  {
    key: "q7",
    question: "Q7: Can you work with our internal team or existing vendors?",
    answer:
      "Certainly. We frequently collaborate with internal teams and third-party vendors to ensure seamless integration and project success.",
  },
  {
    key: "q8",
    question: "Q8: How do we get started with your team?",
    answer:
      "Getting started is easy—simply contact us through our website or email. We'll schedule an initial consultation to discuss your needs and outline the next steps.",
  },
  {
    key: "q9",
    question: "Q9: Where is your company based, and do you work with clients globally?",
    answer:
      "Our company is headquartered in [Your Location], but we proudly serve clients worldwide, leveraging remote collaboration tools to deliver exceptional results regardless of location.",
  },
];
