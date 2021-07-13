import React from "react";
import { IconMembers } from "@components/common/types";
import { Erin } from "erin";
import AddPage from "./top-float/default-member/add-page";
import CopyPage from "./top-float/default-member/copy-page";
import DeletePage from "./top-float/default-member/delete-page";
import LinkToPage from "./top-float/default-member/link-to-page";
import TogglePages from "./top-float/default-member/toggle-pages";
import ChangeText from "./top-float/text-member/change-text";
import CheckText from "./top-float/text-member/check-text";


const iconMembers: IconMembers<Erin.Editor.TopFloatMenuType> = {
  default: [
    <TogglePages key={0} />,
    <LinkToPage key={1} />,
    null,
    null,
    <DeletePage key={4} />,
    <CopyPage key={5} />,
    <AddPage key={6} />
  ],
  animationDefault: [],
  pages: [],
  text: [
    null,
    null,
    null,
    null,
    null,
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