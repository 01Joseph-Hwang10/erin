import React from "react";
import { Feather } from "@expo/vector-icons";
import PressButton from "../editor/base/press-button";
import { ICON_COLOR } from "../editor/base/constants";
import { GestureResponderEvent } from "react-native";
import { RootState } from "../../redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";

type XButtonReduxProps = ConnectedProps<typeof connector>

interface XButtonProps extends XButtonReduxProps {
    onPress: (e: GestureResponderEvent) => void
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
  />;
};

const mapStateToProps = (state: RootState) => {
  return {
    iconSize: state.editor.settings.iconSize
  };
};

const connector = connect(mapStateToProps, {});

export default connector(XButton);
