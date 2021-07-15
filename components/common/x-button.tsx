import React from "react";
import { Feather } from "@expo/vector-icons";
import PressButton from "../editor/base/press-button";
import { ICON_COLOR } from "../editor/base/constants";
import { GestureResponderEvent } from "react-native";
import { RootState } from "../../redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";

type XButtonReduxProps = ConnectedProps<typeof connector>

interface XButtonProps extends XButtonReduxProps {
    onPress: (((event: GestureResponderEvent) => void) & (() => void)) | undefined
}

const XButton: React.FC<XButtonProps> = ({
  onPress,
  iconSize
}) => {

  const renderIcon = () => (
    <Feather name="x-circle" size={iconSize} color={ICON_COLOR} />
  );
  
  return <PressButton 
    icon={renderIcon}
    onPress={onPress}
    helpMessage={null}
  />;
};

const mapStateToProps = (state: RootState) => {
  return {
    iconSize: state.editor.generic.settings.iconSize
  };
};

const connector = connect(mapStateToProps, {});

export default connector(XButton);
