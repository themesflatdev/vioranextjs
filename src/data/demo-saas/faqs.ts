export type Faq = {
  key: string;
  question: string;
  delay: string;
};

// Cả 5 câu trả lời GIỐNG HỆT NHAU trong HTML gốc — lỗi demo thật, giữ nguyên
// theo CLAUDE.md rule 4 (cùng chính sách đã áp dụng ở FAQ insurance/aitech/
// aicontentwriter).
export const faqAnswer = "Yes, you can upgrade, downgrade, or cancel your plan anytime from your dashboard.";

export const faqs: Faq[] = [
  { key: "accordion-faq-1", question: "Q1: How does the free trial work?", delay: "0s" },
  { key: "accordion-faq-2", question: "Q2: Can I change my plan later?", delay: "0.2s" },
  { key: "accordion-faq-3", question: "Q3: Is my data secure?", delay: "0.4s" },
  { key: "accordion-faq-4", question: "Q4: Do you offer team accounts?", delay: "0.6s" },
  { key: "accordion-faq-5", question: "Q5: What happens when my trial ends?", delay: "0.8s" },
];
