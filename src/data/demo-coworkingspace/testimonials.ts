export type Testimonial = {
  key: string;
  thumbImage: string;
  scaleUp?: boolean;
  quote: string;
  name: string;
  role: string;
  thumbPagi: string;
};

// SỬA theo yêu cầu prompt coworkingspace-home-final.md mục "SỬA so với HTML
// gốc": quote gốc là chữ của niche AI, role gốc "Homeowner" mâu thuẫn với
// "CEO at FlowEdge" ở thumbs nav — thay bằng quote/role thống nhất cho niche
// coworking, dùng chung cho cả 4 slide như bản gốc.
const QUOTE =
  "“Moving into this coworking space changed how our team works. The flexible desks, fast WiFi, and friendly community let us focus on growth instead of the office, and we have never looked back.”";
const ROLE = "CEO at FlowEdge";

export const testimonials: Testimonial[] = [
  {
    key: "savannah-nguyen",
    thumbImage: "/assets/images/demo-coworkingspace/thumb-testimonial-1.jpg",
    scaleUp: true,
    quote: QUOTE,
    name: "Savannah Nguyen",
    role: ROLE,
    thumbPagi: "/assets/images/demo-coworkingspace/pagi-thumb-tes-1.jpg",
  },
  {
    key: "santhos-k",
    thumbImage: "/assets/images/demo-coworkingspace/thumb-testimonial-2.jpg",
    quote: QUOTE,
    name: "Santhos K.",
    role: ROLE,
    thumbPagi: "/assets/images/demo-coworkingspace/pagi-thumb-tes-2.jpg",
  },
  {
    key: "james-r",
    thumbImage: "/assets/images/demo-coworkingspace/thumb-testimonial-3.jpg",
    quote: QUOTE,
    name: "James R.",
    role: ROLE,
    thumbPagi: "/assets/images/demo-coworkingspace/pagi-thumb-tes-3.jpg",
  },
  {
    key: "anna-p",
    thumbImage: "/assets/images/demo-coworkingspace/thumb-testimonial-4.jpg",
    quote: QUOTE,
    name: "Anna P.",
    role: ROLE,
    thumbPagi: "/assets/images/demo-coworkingspace/pagi-thumb-tes-4.jpg",
  },
];
