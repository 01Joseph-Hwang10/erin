import React from "react";
import { IconMembers } from "@components/common/types";
import { Erin } from "erin";
import AddLayer from "./top-float/default-member/add-layer";
import CopyLayer from "./top-float/default-member/copy-layer";
import DeleteLayer from "./top-float/default-member/delete-layer";
import LinkToLayer from "./top-float/default-member/link-to-layer";
import ToggleLayer from "./top-float/default-member/toggle-layer";
import ChangeText from "./top-float/text-member/change-text";
import CheckText from "./top-float/text-member/check-text";
import FontSize from "./bottom-tab/text-member/font-size";


const iconMembers: IconMembers<Erin.Editor.TopFloatMenuType> = {
  default: [
    <ToggleLayer key={0} />,
    <LinkToLayer key={1} />,
    null,
    null,
    <DeleteLayer key={4} />,
    <CopyLayer key={5} />,
    <AddLayer key={6} />
  ],
  animationDefault: [],
  layer: [],
  text: [
    <LinkToLayer key={0} />,
    null,
    null,
    null,
    <FontSize key={4} />,
    <ChangeText key={5} />,
    <CheckText key={6} />,
  ],
  editText: [
    null,
    null,
    null,
    null,
    null,
    null,
    <CheckText key={6} />
  ]
};

export default iconMembers;