import React from "react";
import { Feather } from "@expo/vector-icons";
import PressButton from "../editor/base/press-button";
import { ICON_SIZE } from "../editor/base/contants";
import { GestureResponderEvent } from "react-native";

interface XButtonProps {
    onPress: (e: GestureResponderEvent) => void
}

const XButton: React.FC<XButtonProps> = ({
  onPress
}) => {

  const renderIcon = () => (
    <Feather name="x-circle" size={ICON_SIZE} color="white" />
  );
  
  return <PressButton 
    icon={renderIcon}
    onPress={onPress}
  />;
};

export default XButton;
