export type MenuItem = {
  name: string;
  price: string;
  desc: string;
};

// HTML gốc lặp lại ĐÚNG 8 món này (cùng giá "38$") ở cả 5 pane tab + 2 pane
// mồ côi (emergencyCare/diseaseManagement — sót tên niche Medical, đã bỏ) —
// lỗi demo thật, giữ nguyên theo CLAUDE.md rule 4. Đổi tab chỉ đổi pane hiện,
// nội dung không đổi.
export const menuItems: MenuItem[] = [
  { name: "Grilled Lemongrass Chicken", price: "38$", desc: "Lemongrass garlic chicken thighs served" },
  { name: "Crispy Salmon on Wasabi Mash", price: "38$", desc: "Pan-seared salmon on wasabi potato purée" },
  {
    name: "Shrimp & Avocado Summer Rolls",
    price: "38$",
    desc: "Fresh shrimp and avocado rolls with peanut sauce.",
  },
  {
    name: "Passionfruit Panna Cotta",
    price: "38$",
    desc: "Light and tangy cream dessert with passionfruit coulis",
  },
  { name: "Beef Ribeye with Peppercorn Jus", price: "38$", desc: "Premium grilled cut with mashed potatoes" },
  {
    name: "Truffle Mushroom Risotto",
    price: "38$",
    desc: "Creamy risotto with wild mushrooms and truffle oil.",
  },
  { name: "Pumpkin Soup with Coconut Cream", price: "38$", desc: "Creamy pumpkin soup with coconut cream" },
  {
    name: "Chocolate Lava Cake with Salted Caramel",
    price: "38$",
    desc: "Warm chocolate cake with molten center, sea salt",
  },
];

export type MenuTab = {
  id: string;
  label: string;
  icon: string;
};

// Gốc ghi nhãn "Nonvage" (lỗi chính tả hiển nhiên) -> sửa hiển thị thành
// "Non-Veg", giữ nguyên id "nonvage" (khớp href/tab-pane gốc).
export const menuTabs: MenuTab[] = [
  { id: "starters", label: "Starters", icon: "icon-BowlSteam" },
  { id: "nonvage", label: "Non-Veg", icon: "icon-CookingPot" },
  { id: "vegetarian", label: "Vegetarian", icon: "icon-Carrot" },
  { id: "dessert", label: "Dessert", icon: "icon-Popcorn" },
  { id: "drinks", label: "Drinks", icon: "icon-BeerStein" },
];
