export type SpaPackage = {
  key: string;
  image: string;
  title: string;
  desc: string;
  price: string;
};

export const spaPackages: SpaPackage[] = [
  {
    key: "full-body-massage",
    image: "/assets/images/demo-spasalon/package-item-1.jpg",
    title: "Full Body Massage",
    desc: "Relax your muscles, improve circulation, and melt away tension.",
    price: "$65 / 60 min",
  },
  {
    key: "deep-facial-cleansing",
    image: "/assets/images/demo-spasalon/package-item-2.jpg",
    title: "Deep Facial Cleansing",
    desc: "Cleanse, exfoliate, and hydrate for visibly brighter skin.",
    price: "$55 / Session",
  },
  {
    key: "aroma-therapy-massage",
    image: "/assets/images/demo-spasalon/package-item-3.jpg",
    title: "Aroma Therapy Massage",
    desc: "Enjoy soothing essential oils that calm both body and mind.",
    price: "$70 / 60 Min",
  },
  {
    key: "manicure-pedicure-combo",
    image: "/assets/images/demo-spasalon/package-item-4.jpg",
    title: "Manicure & Pedicure Combo",
    desc: "Nourish your hands and feet with professional nail care.",
    price: "$65 / 60 Min",
  },
  {
    key: "glow-up-package",
    image: "/assets/images/demo-spasalon/package-item-5.jpg",
    title: "Glow-Up Package",
    desc: "Includes facial, massage, and body scrub — perfect for total renewal.",
    price: "$120 / 2.5 Hours",
  },
];
