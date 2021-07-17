import { Erin } from "erin";


export const textAlignToIndex = (textAlign: Erin.Common.TextAlign): number => {
  switch (textAlign) {
  case "justify":
    return 0;
  case "center":
    return 1;
  case "left":
    return 2;
  case "right":
    return 3;
  default:
    return -1;
  }
};