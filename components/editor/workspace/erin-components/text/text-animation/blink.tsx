import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { View } from "react-native";
import { invisibleDuration, visibleDuration } from "./constants";

interface BlinkProps {
    children?: React.ReactNode
}

const Blink: React.FC<BlinkProps> = ({
  children
}) => {

  const [ visible, setVisible ] = useState(false);

  const animatedStyle: StyleProp<ViewStyle> = {
    opacity: visible ? 1 : 0
  };

  const animationCycle = () => {
    setTimeout(() => {
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
      }, visibleDuration);
    }, invisibleDuration);
  };

  useEffect(
    () => {
      const animationInterval = setInterval(
        animationCycle,
        visibleDuration + invisibleDuration
      );
      return () => clearInterval(animationInterval);
    },
    []
  );

  return (
    <View style={animatedStyle}>
      {children}
    </View>
  );
};

export default Blink;
