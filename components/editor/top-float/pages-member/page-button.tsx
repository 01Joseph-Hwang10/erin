import React from "react";
import CircularFrame from "../../../common/circular-frame";
import { ICON_SIZE } from "../../base/contants";
import { Text } from "react-native";

interface PageButtonProps {
    pageNumber: number
}

const PageButton: React.FC<PageButtonProps> = ({
  pageNumber
}) => {
  return <CircularFrame
    size={ICON_SIZE}
    border={true}
    borderColor={"grey"}
    borderWidth={2.5}
    backgroundColor={"purple"}
    shadow={true}
    shadowLevel={4}
  >
    <Text>{pageNumber.toString()}</Text>
  </CircularFrame>;
};

export default PageButton;
