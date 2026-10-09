export const categoryOptions = [
  { value: "Health", label: "Health" },
  { value: "Popular", label: "Popular" },
];

export const serviceOptions = [
  { value: "Sport Massage", label: "Sport Massage" },
  { value: "Hot Stone Massage", label: "Hot Stone Massage" },
  { value: "Massage Therapy", label: "Massage Therapy" },
  { value: "Physiotherapy", label: "Physiotherapy" },
];

// Source HTML (booking.html) only lists 2 staff options in its NiceSelect
// (Amira Hassan, Dana Cho) — NOT all 6 team members. Kept as-is per CLAUDE.md
// rule 4 (preserve original content, don't silently "complete" it).
export const staffOptions = [
  { value: "Amira Hassan", label: "Amira Hassan" },
  { value: "Dana Cho", label: "Dana Cho" },
];

export const paymentOptions = [
  { value: "local", label: "I will pay locally" },
  { value: "qr", label: "QR Code" },
  { value: "card", label: "Payment via Visa/Master Card" },
];
