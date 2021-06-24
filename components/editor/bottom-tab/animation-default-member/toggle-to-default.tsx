import React from "react";
import PressButton from "../../base/press-button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ICON_SIZE } from "../../base/contants";

const ToggleToDefault: React.FC = () => {

  const renderIcon = () => (
    <MaterialCommunityIcons name="tools" size={ICON_SIZE} color="white" />
  );

  const onPress = () => {
    // sth
  };

  return <PressButton 
    onPress={onPress}
    icon={renderIcon}
  />;
};

export default ToggleToDefault;
