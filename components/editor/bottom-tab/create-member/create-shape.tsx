import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ICON_SIZE } from "../../base/contants";
import PressButton from "../../base/press-button";

const CreateShape: React.FC = () => {

  const renderIcon = () => (
    <Ionicons name="shapes" size={ICON_SIZE} color="white" />
  );

  const onPress = () => {
    // Needa do sth here
  };
  
  return <PressButton 
    icon={renderIcon}
    onPress={onPress}
  />;
};

export default CreateShape;
