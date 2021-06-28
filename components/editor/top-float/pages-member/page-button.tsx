import React from "react";
import CircularFrame from "../../../common/circular-frame";
import { Text } from "react-native";
import { RootState } from "../../../../redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";

type PageButtonReduxProps = ConnectedProps<typeof connector>

interface PageButtonProps extends PageButtonReduxProps {
    pageNumber: number
}

const PageButton: React.FC<PageButtonProps> = ({
  pageNumber,
  iconSize
}) => {
  return <CircularFrame
    size={iconSize}
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

const mapStateToProps = (state: RootState) => {
  return {
    iconSize: state.editor.generic.settings.iconSize
  };
};

const connector = connect(mapStateToProps, {});

export default connector(PageButton);
