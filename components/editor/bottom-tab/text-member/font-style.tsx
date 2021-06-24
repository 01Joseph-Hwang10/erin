import React from "react";
import { useRef } from "react";
import ToggleButton from "../../base/toggle-button";

const FontStyle: React.FC = () => {

  const icons: JSX.Element[] = []; // You need to add styles

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

export default FontStyle;
