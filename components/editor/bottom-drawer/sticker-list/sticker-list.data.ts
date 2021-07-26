import { Erin } from "erin";

type BackgroundColor = string
type FontColor = string

export const stickerCategories: Record<Erin.Common.StickerCategories, [BackgroundColor, FontColor]> = {
  "all": ["grey", "white"],
  "bright": ["lightskyblue", "tomato"],
  "pastel": ["lightpink", "teal"],
  "chocolate": ["maroon", "gold"],
  "loveYou": ["deeppink", "lightpink"],
  "oriental": ["crimson", "orange"],
  "things": ["beige", "black"],
  "animals": ["peru", "peachpuff"],
};