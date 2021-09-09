import React from "react";
import { BASE_SCALE } from "../editor/workspace/erin-components/sticker/constants";

export const StickerScaleContext = 
  React.createContext<
    number
  >(
    BASE_SCALE
  );