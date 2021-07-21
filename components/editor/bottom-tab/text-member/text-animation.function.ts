import { Erin } from "erin";


export const textAnimationTypeToIndex = (textAnimationType: Erin.Common.TextAnimationTypes): number => {
  switch (textAnimationType) {
  case "none":
    return 0;
  case "blink":
    return 1;
  case "typing":
    return 2;
  case "fade":
    return 3;
  case "moving":
    return 4;
  case "bounce":
    return 5;
  default:
    return -1;
  }
};