export type Faq = {
  key: string;
  question: string;
  // Giống hệt nhau trong HTML gốc (nội dung demo lặp, không trả lời đúng
  // từng câu hỏi) — giữ nguyên theo CLAUDE.md, không tự bịa câu trả lời
  // riêng cho từng mục.
  answer: string;
  wowDelay?: string;
};

const ANSWER =
  "Simply fill out our online form or contact us directly — we’ll send you a personalized quote within 24 hours.";

export const faqs: Faq[] = [
  { key: "faq-1", question: "Q1. What is a coworking space?", answer: ANSWER },
  { key: "faq-2", question: "Q2. Do you offer flexible memberships?", answer: ANSWER, wowDelay: "0.2s" },
  { key: "faq-3", question: "Q3. Is the space available 24/7?", answer: ANSWER, wowDelay: "0.3s" },
  { key: "faq-4", question: "Q4. Are there any networking opportunities?", answer: ANSWER, wowDelay: "0.4s" },
  { key: "faq-5", question: "Q5. What amenities are included in my plan?", answer: ANSWER, wowDelay: "0.5s" },
];
