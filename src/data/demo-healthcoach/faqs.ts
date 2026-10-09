export type Faq = {
  key: string;
  question: string;
  delay: string;
};

// Cả 5 câu trả lời GIỐNG HỆT NHAU trong HTML gốc — lỗi demo thật, giữ
// nguyên theo CLAUDE.md rule 4. data-wow-delay gốc KHÔNG có đơn vị "s"
// (chỉ "0.2", "0.4"...) — giữ nguyên quirk này, không tự thêm "s".
export const faqAnswer =
  "Absolutely. Each plan is customized to match your current lifestyle, experience level, and health goals — no prior knowledge needed.";

export const faqs: Faq[] = [
  { key: "accordion-faq-1", question: "Q1: What does a health coach actually do?", delay: "" },
  { key: "accordion-faq-2", question: "Q2: Is this program suitable for beginners?", delay: "0.2" },
  { key: "accordion-faq-3", question: "Q3: How are the sessions delivered?", delay: "0.4" },
  { key: "accordion-faq-4", question: "Q4: Can I choose what to focus on?", delay: "0.6" },
  { key: "accordion-faq-5", question: "Q5: How long before I see results?", delay: "0.8" },
];
