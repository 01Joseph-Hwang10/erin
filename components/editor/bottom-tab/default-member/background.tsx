import React from "react";
import { Feather } from "@expo/vector-icons";
import PressButton from "../../base/press-button";
import { ICON_SIZE } from "../../base/contants";

const Background: React.FC = () => {

  const renderIcon = () => (
    <Feather name="image" size={ICON_SIZE} color="white" />
  );

  const onPress = () => {
    // Needa do sth here
  };
  
  return <PressButton 
    icon={renderIcon}
    onPress={onPress}
  />;
};

export default Background;
