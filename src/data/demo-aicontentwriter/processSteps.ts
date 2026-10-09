export type ProcessStep = {
  id: string;
  stepLabel: string;
  tabTitle: string;
  title: string;
  // Gốc có nút chữ thường "Try for free" ở riêng pane 4 (cả 3 pane kia
  // "Try For Free") — lỗi gõ demo thật, giữ nguyên.
  ctaLabel: string;
};

// Cả 4 pane dùng CHUNG 1 đoạn mô tả và 1 ảnh process-1.jpg — lỗi demo thật,
// giữ nguyên theo CLAUDE.md rule 4 (đổi tab chỉ đổi tiêu đề/step, không đổi
// mô tả/ảnh).
export const processDesc =
  "Add your topic, keywords, tone, and other preferences. You can keep it brief or provide detailed instructions. The AI understands context and adapts to your goals instantly.";

export const processSteps: ProcessStep[] = [
  { id: "discovery", stepLabel: "Step1", tabTitle: "Choose Content Type", title: "Choose Content Type", ctaLabel: "Try For Free" },
  { id: "strategy", stepLabel: "Step2", tabTitle: "Enter Your Input", title: "Enter Your Input", ctaLabel: "Try For Free" },
  { id: "execution", stepLabel: "Step3", tabTitle: "Generate And Edit", title: "Generate and Edit", ctaLabel: "Try For Free" },
  { id: "optimization", stepLabel: "Step4", tabTitle: "Export And Publish", title: "Export and Publish", ctaLabel: "Try for free" },
];
