import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { ICON_SIZE } from "../../base/contants";
import PressButton from "../../base/press-button";

const CreateText: React.FC = () => {

  const renderIcon = () => (
    <MaterialIcons name="text-fields" size={ICON_SIZE} color="white" />
  );

  const onPress = () => {
    // Needa do sth here
  };
  
  return <PressButton 
    icon={renderIcon}
    onPress={onPress}
  />;
};

export default CreateText;
