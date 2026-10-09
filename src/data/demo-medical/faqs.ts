export type Faq = {
  key: string;
  question: string;
  answer: string;
};

// Câu hỏi giữ NGUYÊN như HTML gốc (gần như lặp nhau, câu 2 sai ngữ pháp —
// đặc điểm của theme, không viết lại). Câu trả lời gốc đều là Lorem Ipsum
// chưa viết -> đã viết thật theo chính sách xử lý placeholder đã thống nhất.
export const faqsLeft: Faq[] = [
  {
    key: "faq-1",
    question: "What should I do in case of a medical emergency?",
    answer:
      "In a life-threatening situation, call your local emergency number immediately. For urgent but non-critical care, contact our emergency line at 1-555-678-8888 and our team will guide you to the right care.",
  },
  {
    key: "faq-2",
    question: "What are Dedicated to Better Health?",
    answer:
      "Our clinic is dedicated to better health through preventive care, accurate diagnosis and personalized treatment plans delivered by experienced doctors.",
  },
  {
    key: "faq-3",
    question: "What should I do in case of a medical emergency?",
    answer:
      "Stay calm, move to a safe place if you can, and call emergency services. If you are already our patient, let us know so we can share your medical history with the responding team.",
  },
  {
    key: "faq-4",
    question: "What should I do in a medical emergency?",
    answer:
      "Check that the person is breathing and responsive, call for help, and follow the dispatcher's instructions until medical staff arrive.",
  },
];

export const faqsRight: Faq[] = [
  {
    key: "faq-5",
    question: "What may I do in a medical emergency?",
    answer:
      "You may call our emergency line, go to the nearest emergency room, or contact us to arrange urgent same-day care when it is safe to do so.",
  },
  {
    key: "faq-6",
    question: "What must I do during a medical emergency?",
    answer:
      "Contact emergency services first, avoid moving someone with a suspected serious injury, and keep a list of medications and allergies ready for the medical team.",
  },
  {
    key: "faq-7",
    question: "What can I do during a medical emergency?",
    answer:
      "You can provide basic first aid if you are trained, keep the patient comfortable and calm, and give clear information to the responders when they arrive.",
  },
  {
    key: "faq-8",
    question: "What must I do in a medical emergency?",
    answer:
      "Act quickly: call emergency services, share the patient's condition and location, and follow our team's advice for any follow-up care.",
  },
];
