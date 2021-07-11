import { Erin } from "erin";


export const decideHover = (
  { x, y }: Erin.Common.PositionSpec, 
  { xmin, xmax, ymin, ymax }: Erin.Common.MinMaxSpec): boolean => {
  if (
    x > xmin &&
        x < xmax && 
        y > ymin &&
        y < ymax
  ) return true;
  return false;
};