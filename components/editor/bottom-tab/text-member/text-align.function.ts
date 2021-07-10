import { TextAlign } from "@slices/editor/editor-states";


export const textAlignToIndex = (textAlign: TextAlign): number => {
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