import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { View } from "react-native";
import { AnimationProps } from "./animation.types";
import { invisibleDuration, visibleDuration } from "./constants";

interface BlinkProps extends AnimationProps {
    children?: React.ReactNode
}

const Blink: React.FC<BlinkProps> = ({
  children
}) => {

  const [ onMount, setOnMount ] = useState(true)
  const [ visible, setVisible ] = useState(false);

  const animatedStyle: StyleProp<ViewStyle> = {
    opacity: visible ? 1 : 0
  };

  const animationCycle = () => {
    const firstDelayedAnimation = setTimeout(() => {
      setVisible(true);
    }, invisibleDuration);
    const secondDelayedAnimation = setTimeout(() => {
      setVisible(false);
    }, visibleDuration + invisibleDuration);
    if (!onMount) {
      clearTimeout(firstDelayedAnimation);
      clearTimeout(secondDelayedAnimation);
    }
  };

  useEffect(
    () => {
      animationCycle();
      const animationInterval = setInterval(
        animationCycle,
        visibleDuration + invisibleDuration
      );
      return () => {
        setOnMount(false);
        clearInterval(animationInterval);
      }
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
