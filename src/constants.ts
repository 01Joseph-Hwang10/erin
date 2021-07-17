import { Erin } from "erin";

export const ROUTES = {
  EDITOR: "editor",
  VIEWER: "viewer",
  POSTBOX: "postbox",
  FRIENDS: "friends",
  MY_PAGE: "myPage",
};

export const voidFunction = (): void => {};

export const APP_PAGES: Erin.AppPageNames[] = ["editor", "friends", "main", "myPage", "postbox", "viewer"];