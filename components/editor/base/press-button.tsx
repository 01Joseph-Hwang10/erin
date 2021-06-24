import React from "react";
import { TouchableOpacity, GestureResponderEvent, Text } from "react-native";

interface PressButtonProps {
    icon: () => JSX.Element,
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
