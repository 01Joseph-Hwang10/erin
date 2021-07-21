import { Erin } from "erin";


export const shapeToIndex = (shape: Erin.Common.NonableTextStyle): number => {
  switch (shape) {
  case "none":
    return 0;
  case "rectangle":
    return 1;
  case "roundedRectangle":
    return 2;
  case "shadow":
    return 3;
  case "neon":
    return 4;
  case "emphasize":
    return 5;
  default:
    return -1;
  }
};