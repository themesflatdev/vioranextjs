export type Faq = {
  key: string;
  question: string;
  delay: string;
};

// HTML gốc có đủ 5 câu trả lời GIỐNG HỆT NHAU — lỗi demo thật, giữ nguyên
// theo CLAUDE.md rule 4 (đã áp dụng cùng chính sách ở FAQ insurance/aitech).
export const faqAnswer =
  "Simply fill out our online form or contact us directly — we'll send you a personalized quote within 24 hours.";

export const faqs: Faq[] = [
  { key: "q1", question: "Q1: Is the content truly original?", delay: "" },
  { key: "q2", question: "Q2: Can I customize the tone and style of the writing?", delay: "0.2s" },
  { key: "q3", question: "Q3: How many languages does it support?", delay: ".4s" },
  { key: "q4", question: "Q4: Do I need writing experience to use the tool?", delay: ".6s" },
  { key: "q5", question: "Q5: Can I upgrade or cancel anytime?", delay: "0.8s" },
];
