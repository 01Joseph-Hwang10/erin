import React from "react";
import PressButton from "../../base/press-button";
import { MaterialIcons } from "@expo/vector-icons";
import { ICON_SIZE } from "../../base/contants";

const ToggleToAnimation: React.FC = () => {

  const renderIcon = () => (
    <MaterialIcons name="animation" size={ICON_SIZE} color="white" />
  );

  const onPress = () => {
    // sth
  };

  return <PressButton 
    onPress={onPress}
    icon={renderIcon}
  />;
};

export default ToggleToAnimation;
