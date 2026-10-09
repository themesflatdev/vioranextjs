export type Doctor = {
  name: string;
  role: string;
  image: string;
  slug: string;
};

// Trang chủ dùng 4 bác sĩ này — Linda Parker ở đây là "Chief Medical
// Officer" với ảnh team-1, KHÁC role/ảnh so với doctorsAll (our-doctor
// dùng team-5/"Cardiologist" cho cùng tên) — đặc điểm của theme gốc,
// không phải lỗi cần đồng bộ (CLAUDE.md rule 4).
export const doctors: Doctor[] = [
  {
    name: "Dr. Linda Parker",
    role: "Chief Medical Officer",
    image: "/assets/images/demo-medical/team-1.png",
    slug: "dr-linda-parker",
  },
  {
    name: "Dr. Samuel Lee",
    role: "Cardiologist",
    image: "/assets/images/demo-medical/team-2.png",
    slug: "dr-samuel-lee",
  },
  {
    name: "Dr. Maria Torres",
    role: "Pediatrician",
    image: "/assets/images/demo-medical/team-3.png",
    slug: "dr-maria-torres",
  },
  {
    name: "Dr. James Anderson",
    role: "Neurologist",
    image: "/assets/images/demo-medical/team-4.png",
    slug: "dr-james-anderson",
  },
];

// Đủ 8 bác sĩ của trang /our-doctor (và dùng chung cho /doctor-detail/[slug]).
// 2 lỗi chính tả gốc đã sửa: "Dr. Andew Hope" -> "Dr. Andrew Hope",
// "Dr. david John" -> "Dr. David John" (giữ nguyên spelling các tên khác).
export const doctorsAll: Doctor[] = [
  {
    name: "Dr. Linda Parker",
    role: "Cardiologist",
    image: "/assets/images/demo-medical/team-5.png",
    slug: "dr-linda-parker",
  },
  {
    name: "Dr. Samuel Lee",
    role: "Cardiologist",
    image: "/assets/images/demo-medical/team-2.png",
    slug: "dr-samuel-lee",
  },
  {
    name: "Dr. Maria Torres",
    role: "Pediatrician",
    image: "/assets/images/demo-medical/team-3.png",
    slug: "dr-maria-torres",
  },
  {
    name: "Dr. James Anderson",
    role: "Neurologist",
    image: "/assets/images/demo-medical/team-4.png",
    slug: "dr-james-anderson",
  },
  {
    name: "Dr. Joseph Jessica",
    role: "Heart Specialist",
    image: "/assets/images/demo-medical/team-6.png",
    slug: "dr-joseph-jessica",
  },
  {
    name: "Dr. Andrew Hope",
    role: "Neurology Expert",
    image: "/assets/images/demo-medical/team-7.png",
    slug: "dr-andrew-hope",
  },
  {
    name: "Dr. Jessica Jung",
    role: "Medicine Specialists",
    image: "/assets/images/demo-medical/team-8.png",
    slug: "dr-jessica-jung",
  },
  {
    name: "Dr. David John",
    role: "Medicine Specialists",
    image: "/assets/images/demo-medical/team-9.png",
    slug: "dr-david-john",
  },
];
