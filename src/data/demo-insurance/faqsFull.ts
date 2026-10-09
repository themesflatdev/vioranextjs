export type FaqItem = {
  key: string;
  question: string;
};

// faqs.html — 10 questions (first 5 identical to the home page's FAQ,
// plus 5 new ones). All 10 answers are identical in the source — confirmed
// with user to keep as-is, not a mistake to fix.
export const answer =
  "Simply fill out our online form or contact us directly — we'll send you a personalized quote within 24 hours.";

export const faqsFull: FaqItem[] = [
  { key: "q1", question: "Q1: What types of insurance do you offer?" },
  { key: "q2", question: "Q2: How do I get a quote?" },
  { key: "q3", question: "Q3: Is there a free consultation before I buy a plan?" },
  { key: "q4", question: "Q4: Can I customize my insurance plan?" },
  { key: "q5", question: "Q5: What if I want to cancel my policy?" },
  { key: "q6", question: "Q6: Can I change my plan later?" },
  { key: "q7", question: "Q7: Do I need to see a doctor first?" },
  { key: "q8", question: "Q8: How do I renew my insurance?" },
  { key: "q9", question: "Q9: Can I get coverage for accidents?" },
  { key: "q10", question: "Q10: Can I use any hospital with my plan?" },
];
