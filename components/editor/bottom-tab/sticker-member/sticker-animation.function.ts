import { Erin } from "erin";


export const stickerAnimationTypeToIndex = (stickerAnimationType: Erin.Common.StickerAnimationTypes): number => {
  switch (stickerAnimationType) {
  case "none":
    return 0;
  case "blink":
    return 1;
  case "fade":
    return 2;
  default:
    return -1;
  }
};