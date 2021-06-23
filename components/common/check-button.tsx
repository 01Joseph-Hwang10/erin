import React from "react";
import { Feather } from "@expo/vector-icons";
import PressButton from "../editor/base/press-button";
import { ICON_SIZE } from "../editor/base/contants";
import { GestureResponderEvent } from "react-native";

interface CheckButtonProps {
    onPress: (e: GestureResponderEvent) => void
}

const CheckButton: React.FC<CheckButtonProps> = ({
  onPress
}) => {

  const renderIcon = () => (
    <Feather name="check-circle" size={ICON_SIZE} color="white" />
  );
  
  return <PressButton 
    icon={renderIcon}
    onPress={onPress}
  />;
};

export default CheckButton;
