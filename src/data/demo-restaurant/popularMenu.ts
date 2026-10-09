export type PopularMenuItem = {
  name: string;
  price: string;
  desc: string;
  image: string;
  // true = ảnh đứng trước content trong DOM (item 2 và 4 của HTML gốc)
  imageFirst: boolean;
};

// 2 mô tả đã sửa so với HTML gốc (chính sách sửa mâu thuẫn nội bộ — dùng đúng
// mô tả đã có ở danh sách thực đơn menuItems.ts):
// - "Shrimp & Avocado Summer Rolls": gốc lặp lại chính tên món làm mô tả.
// - "Truffle Mushroom Risotto": gốc dán nhầm mô tả của món bánh chocolate lava cake.
export const popularMenuItems: PopularMenuItem[] = [
  {
    name: "Shrimp & Avocado Summer Rolls",
    price: "38$",
    desc: "Fresh shrimp and avocado rolls with peanut sauce.",
    image: "/assets/images/demo-restaurant/menu-popular-item-1.jpg",
    imageFirst: false,
  },
  {
    name: "Truffle Mushroom Risotto",
    price: "45$",
    desc: "Creamy risotto with wild mushrooms and truffle oil.",
    image: "/assets/images/demo-restaurant/menu-popular-item-3.jpg",
    imageFirst: true,
  },
  {
    name: "Beef Ribeye with Peppercorn Jus",
    price: "51$",
    desc: "Premium grilled cut with mashed potatoes and black pepper sauce",
    image: "/assets/images/demo-restaurant/menu-popular-item-2.jpg",
    imageFirst: false,
  },
  {
    name: "Crispy Salmon on Wasabi Mash",
    price: "84$",
    desc: "Pan-seared salmon on wasabi potato purée with sautéed greens.",
    image: "/assets/images/demo-restaurant/menu-popular-item-4.jpg",
    imageFirst: true,
  },
];
