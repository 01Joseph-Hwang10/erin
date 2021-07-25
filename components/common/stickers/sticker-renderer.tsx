import React from "react";
import { SvgProps } from "react-native-svg";
import { stickerTable } from "./sticker-renderer.data";


interface StickerRendererProps {
  stickerId: string,
  svgProps?: SvgProps
}

const StickerRenderer: React.FC<StickerRendererProps> = ({
  stickerId,
  svgProps
}) => {

  const Sticker = stickerTable[stickerId];

  return <Sticker {...svgProps} />;

};

export default StickerRenderer;
