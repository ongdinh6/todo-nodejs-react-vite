export type NavTab = "home" | "chat-bot" | "list-products" | "page-not-found";

export interface HeaderTab {
  name: NavTab;
  displayName: string;
}

export const NAV_TABS: HeaderTab[] = [
  {
    name: "home",
    displayName: "Home",
  },
  {
    name: "chat-bot",
    displayName: "Chat Bot",
  },
  {
    name: "list-products",
    displayName: "List Products",
  },
  {
    name: "page-not-found",
    displayName: "Page Not Found",
  },
];
