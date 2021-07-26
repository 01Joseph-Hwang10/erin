import React from "react";
import { SvgProps } from "react-native-svg";
import { stickerTable } from "./sticker-renderer.data";


interface StickerRendererProps {
  stickerId: string | null,
  svgProps?: SvgProps
}

const StickerRenderer: React.FC<StickerRendererProps> = ({
  stickerId,
  svgProps
}) => {

  if (stickerId) {
    const Sticker = stickerTable[stickerId][0];

    return <Sticker {...svgProps} />;
  }
  
  return <></>;
};

export default StickerRenderer;
