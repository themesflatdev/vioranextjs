// Footer/mobile-nav social icons are icon-font classes with no text (e.g.
// `icon-FaceBook-2`, `icon-x-logo`) — axe's `link-name` audit flags these as
// links with no discernible name. Maps the icon class to a real platform
// name for `aria-label`, used verbatim across every niche's social list.
const PLATFORM_BY_ICON: Record<string, string> = {
  "icon-facebook-2": "Facebook",
  "icon-facebooklogo": "Facebook",
  "icon-linkedin": "LinkedIn",
  "icon-xlogo-2": "X (Twitter)",
  "icon-x-logo": "X (Twitter)",
  "icon-instagram-logo": "Instagram",
  "icon-inslogo-fill": "Instagram",
  "icon-youtube": "YouTube",
  "icon-youtubelogo": "YouTube",
  "icon-messenger-logo": "Messenger",
  "icon-skype-logo": "Skype",
  "icon-telegram-logo": "Telegram",
  "icon-tiktoklogo": "TikTok",
  "icon-tiktoklogo-fill": "TikTok",
  "icon-pinterestlogo": "Pinterest",
};

export function socialIconLabel(iconClass: string): string {
  return PLATFORM_BY_ICON[iconClass.toLowerCase()] ?? iconClass.replace(/^icon-/, "");
}
