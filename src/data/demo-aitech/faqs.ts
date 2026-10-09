export type Faq = {
  key: string;
  question: string;
};

// HTML gốc có đủ 5 câu trả lời GIỐNG HỆT NHAU — lỗi demo thật, giữ nguyên
// theo CLAUDE.md rule 4 (đã áp dụng cùng chính sách ở FAQ insurance).
export const faqAnswer =
  "Simply fill out our online form or contact us directly — we'll send you a personalized quote within 24 hours.";

export const faqs: Faq[] = [
  { key: "q1", question: "Q1: What types of businesses can benefit from your AI solutions?" },
  { key: "q2", question: "Q2: Do I need technical expertise to use your AI tools?" },
  { key: "q3", question: "Q3: How long does it take to implement a custom AI solution?" },
  { key: "q4", question: "Q4: Is my business data secure with you?" },
  { key: "q5", question: "Q5: Do you offer post-launch support and maintenance?" },
];
