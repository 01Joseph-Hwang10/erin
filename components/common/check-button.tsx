import React from "react";
import { Feather } from "@expo/vector-icons";
import PressButton from "../editor/base/press-button";
import { ICON_COLOR } from "../editor/base/constants";
import { GestureResponderEvent } from "react-native";
import { RootState } from "../../redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";

type CheckButtonReduxProps = ConnectedProps<typeof connector>

interface CheckButtonProps extends CheckButtonReduxProps {
    onPress: (((event: GestureResponderEvent) => void) & (() => void)) | undefined
}

const CheckButton: React.FC<CheckButtonProps> = ({
  onPress,
  iconSize
}) => {

  const renderIcon = () => (
    <Feather name="check-circle" size={iconSize} color={ICON_COLOR} />
  );
  
  return <PressButton 
    icon={renderIcon}
    onPress={onPress}
  />;
};

const mapStateToProps = (state: RootState) => {
  return {
    iconSize: state.editor.generic.settings.iconSize
  };
};

const connector = connect(mapStateToProps, {});

export default connector(CheckButton);
