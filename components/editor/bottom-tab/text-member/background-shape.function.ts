import { NonableShape } from "@components/common/shapes/shape.types";


export const shapeToIndex = (shape: NonableShape): number => {
  switch (shape) {
  case "none":
    return 0;
  case "rectangle":
    return 1;
  case "roundedRectangle":
    return 2;
  case "circle":
    return 3;
  case "triangle":
    return 4;
  case "heart":
    return 5;
  case "star":
    return 6;
  default:
    return -1;
  }
};