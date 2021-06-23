import React from "react";
import { useRef } from "react";
import ToggleButton from "../base/toggle-button";
import { MaterialIcons } from "@expo/vector-icons";
import { ICON_SIZE } from "../base/contants";

const ToggleAnimation: React.FC = () => {

  const icons: JSX.Element[] = [
    <MaterialIcons key={0} name="animation" size={ICON_SIZE} color="white" />,
    <MaterialIcons key={1} name="animation" size={ICON_SIZE} color="yellow" />,
  ];

  const buttonRef = useRef<ToggleButton>(null);

  const onPress = () => {
    // sth
  };

  return <ToggleButton 
    ref={buttonRef}
    onPress={onPress}
    icons={icons}
  />;
};

export default ToggleAnimation;
