import React from "react";
import { Foundation } from "@expo/vector-icons";
import PressButton from "../../base/press-button";
import { ICON_SIZE } from "../../base/contants";

const CopyPage: React.FC = () => {

  const renderIcon = () => (
    <Foundation name="page-copy" size={ICON_SIZE} color="white" />
  );

  const onPress = () => {
    // Needa do sth here
  };
  
  return <PressButton 
    icon={renderIcon}
    onPress={onPress}
  />;
};

export default CopyPage;
