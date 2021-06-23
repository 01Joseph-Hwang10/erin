import React from "react";
import { TouchableOpacity, GestureResponderEvent } from "react-native";

interface PressButtonProps {
    icon: React.ComponentType<any>,
    onPress?: (e: GestureResponderEvent) => void
}

const PressButton: React.FC<PressButtonProps> = ({
  icon: Icon,
  onPress
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <Icon />
    </TouchableOpacity>
  );
};

export default PressButton;
