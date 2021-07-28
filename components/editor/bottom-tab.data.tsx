import React from "react";
// import CreateShape from "./bottom-tab/create-member/create-shape";
import CreateText from "./bottom-tab/create-member/create-text";
import Background from "./bottom-tab/default-member/background";
import Music from "./bottom-tab/default-member/music";
import Save from "./bottom-tab/default-member/save";
import Send from "./bottom-tab/default-member/send";
// import ToggleToAnimation from "./bottom-tab/default-member/toggle-to-animation";
// import Shape from "./bottom-tab/shape-member/shape";
// import ShapeColor from "./bottom-tab/shape-member/shape-color";
// import ShapePattern from "./bottom-tab/shape-member/shape-pattern";
import FontColor from "./bottom-tab/text-member/font-color";
import FontStyle from "./bottom-tab/text-member/font-style";
import { Erin } from "erin";
// import CheckShape from "./bottom-tab/shape-member/check-shape";
import XCreate from "./bottom-tab/create-member/x-create";
import CreateSticker from "./bottom-tab/create-member/create-sticker";
import NotSave from "./bottom-tab/default-member/not-save";
import { IconMembers } from "../common/types";
import BackgroundShape from "./bottom-tab/text-member/background-shape";
import BackgroundColor from "./bottom-tab/text-member/background-color";
import TextAlign from "./bottom-tab/text-member/text-align";
// import FontSize from "./bottom-tab/text-member/font-size";
import TextAnimation from "./bottom-tab/text-member/text-animation";
import AnimationToggleInfinite from "./common/animation-toggle-infinite";
import CreateImage from "./bottom-tab/create-member/create-image";
import StickerAnimation from "./bottom-tab/sticker-member/sticker-animation";
// import BorderColor from "./bottom-tab/text-member/border-color";
// import ChangeText from "./bottom-tab/text-member/change-text";

const iconMembers: IconMembers<Erin.Editor.BottomTabMenuType> = {
  default: [
    // <ToggleToAnimation key={0} />,
    <Background key={0} />,
    <Music key={1} />,
    null,
    null,
    null,
    <NotSave key={4} />,
    <Save key={5} />,
    // <Send key={6} />
  ],
  create: [
    <CreateText key={0} />,
    <CreateSticker key={1} />,
    <CreateImage key={2} />,
    null,
    null,
    null,
    <XCreate key={6} />
  ],
  text: [
    <BackgroundShape key={3} />,
    <FontStyle key={2} />,
    <TextAlign key={4} />,
    <FontColor key={0} />,
    <BackgroundColor key={1} />,
    <AnimationToggleInfinite key={5} />,
    <TextAnimation key={6} />,
  ],
  sticker: [
    null,
    null,
    null,
    null,
    null,
    <AnimationToggleInfinite key={5} />,
    <StickerAnimation key={6} />,
  ]
};

export default iconMembers;