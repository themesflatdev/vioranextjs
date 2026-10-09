export type SpaService = {
  key: string;
  icon: string;
  title: string;
  image: string;
};

// All 4 services share identical description copy in the source HTML — a
// real content bug in the original, preserved verbatim per CLAUDE.md rule 4.
export const spaServiceDescription =
  "Release tension and stress with our range of massage therapies — from Swedish to hot stone.";

export const spaServices: SpaService[] = [
  {
    key: "facial-treatments",
    icon: "icon-facial-treatments",
    title: "Facial Treatments",
    image: "/assets/images/demo-spasalon/service-spa-1.jpg",
  },
  {
    key: "body-massage",
    icon: "icon-body-massage",
    title: "Body Massage",
    image: "/assets/images/demo-spasalon/service-spa-2.jpg",
  },
  {
    key: "aromatherapy",
    icon: "icon-aromatherapy",
    title: "Aromatherapy",
    image: "/assets/images/demo-spasalon/service-spa-3.jpg",
  },
  {
    key: "body-scrubs-wraps",
    icon: "icon-body-scrubs",
    title: "Body Scrubs & Wraps",
    image: "/assets/images/demo-spasalon/service-spa-4.jpg",
  },
];
