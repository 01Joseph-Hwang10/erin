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

  const onPressWithTimeout = () => {
    setTimeout(onPress, 50);
  };

  return (
    <TouchableOpacity 
      onPressIn={onPressWithTimeout}
    >
      <Icon />
    </TouchableOpacity>
  );
};

export default PressButton;
