import React from "react";
import { GestureResponderEvent } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


interface PressButtonProps {
    icon: () => JSX.Element,
    onPress?: (((event: GestureResponderEvent) => void) & (() => void)) | undefined
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
