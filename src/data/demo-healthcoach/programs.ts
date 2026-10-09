export type ProgramTab = {
  id: string;
  label: string;
};

export const programTabs: ProgramTab[] = [
  { id: "balanced", label: "1/ Balanced Nutrition Plan" },
  { id: "strength", label: "2/ Strength & Flexibility Plan" },
  { id: "holistic", label: "3/ Holistic Lifestyle Program" },
  { id: "emotional", label: "4/ Emotional Balance Plan" },
];

// ĐÃ XÁC MINH trong HTML gốc: cả 4 tab-pane dùng CHUNG một nội dung (cùng
// ảnh program-1.jpg, cùng tiêu đề/mô tả "Strength & Flexibility Plan") —
// lỗi demo thật, giữ nguyên theo CLAUDE.md rule 4. Đổi tab chỉ đổi pane
// đang hiện, không đổi nội dung.
export const programContent = {
  tag: "03 Month",
  title: "Strength & Flexibility Plan",
  desc: "Unlock your full physical potential with a guided program designed to improve muscular strength, joint mobility, and overall body flexibility. This plan blends functional training.",
  image: "/assets/images/demo-healthcoach/program-1.jpg",
};
