export type AnchorMenuItem = {
  label: string;
  href: string;
};

// Shared by desktop nav and the mobile offcanvas (both jump to the same
// in-page sections). "Elements" is intentionally omitted — the 14
// elements-*.html pages are out of scope for this project (see CLAUDE.md).
export const anchorMenu: AnchorMenuItem[] = [
  { label: "Demos", href: "#demos" },
  { label: "Mobile", href: "#mobile" },
  { label: "Features", href: "#features" },
];

export const collectionHref = "https://vithemes.com/";
export const contactUsHref = "https://vithemes.com/contact/";
export const purchaseHref = "https://themeforest.net/user/themesflat/portfolio";
export const supportHref = "https://themesflat.ticksy.com/";
