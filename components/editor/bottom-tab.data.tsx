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
import ToggleToDefault from "./bottom-tab/animation-default-member/toggle-to-default";
import AddAnimation from "./bottom-tab/animation-default-member/add-animation";
import DeleteAnimation from "./bottom-tab/animation-default-member/delete-animation";
import TestAnimation from "./bottom-tab/animation-default-member/test-animation";
import AnimationType from "./bottom-tab/animation-config-member/animation-type";
import AnimationTrigger from "./bottom-tab/animation-config-member/animation-trigger";
import TimeDial from "./bottom-tab/animation-config-member/time-dial";
import { Erin } from "erin";
// import CheckShape from "./bottom-tab/shape-member/check-shape";
import CheckAnimationConfig from "./bottom-tab/animation-config-member/check-animation-config";
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
// import BorderColor from "./bottom-tab/text-member/border-color";
// import ChangeText from "./bottom-tab/text-member/change-text";

const iconMembers: IconMembers<Erin.Editor.BottomTabMenuType> = {
  default: [
    // <ToggleToAnimation key={0} />,
    <Background key={0} />,
    <Music key={1} />,
    null,
    null,
    <NotSave key={4} />,
    <Save key={5} />,
    <Send key={6} />
  ],
  create: [
    <CreateText key={0} />,
    <CreateSticker key={1} />,
    null,
    null,
    null,
    null,
    <XCreate key={6} />
  ],
  shape: [],
  text: [
    <FontColor key={0} />,
    <BackgroundColor key={1} />,
    <FontStyle key={2} />,
    <BackgroundShape key={3} />,
    <TextAlign key={4} />,
    <AnimationToggleInfinite key={5} />,
    <TextAnimation key={6} />,
  ],
  animationDefault: [
    <ToggleToDefault key={0} />,
    <AddAnimation key={1} />,
    <DeleteAnimation key={2} />,
    null,
    null,
    null,
    <TestAnimation key={6} />
  ],
  animationConfig: [
    <AnimationType key={0} />,
    <AnimationTrigger key={1} />,
    <TimeDial key={"2-4"} />,
    null,
    <CheckAnimationConfig key={6} />
  ],
  sticker: []
};

export default iconMembers;