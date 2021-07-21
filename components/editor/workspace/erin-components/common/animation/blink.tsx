import React, { useRef } from "react";
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
  children,
  onLayerChange,
}) => {

  const firstDelayedAnimation = useRef<NodeJS.Timeout | null>(null);
  const secondDelayedAnimation = useRef<NodeJS.Timeout | null>(null);
  const animationHandler = useRef<NodeJS.Timer | null>(null);
  const [ visible, setVisible ] = useState(false);

  const animatedStyle: StyleProp<ViewStyle> = {
    opacity: visible ? 1 : 0
  };

  const animationCycle = () => {
    firstDelayedAnimation.current = setTimeout(() => {  
      setVisible(true);
    }, invisibleDuration);
    secondDelayedAnimation.current = setTimeout(() => {
      setVisible(false);
    }, visibleDuration + invisibleDuration);
  };

  const cleanUpAnimationIds = () => {
    if (animationHandler.current) clearInterval(animationHandler.current);
    if (firstDelayedAnimation.current) clearTimeout(firstDelayedAnimation.current);
    if (secondDelayedAnimation.current) clearTimeout(secondDelayedAnimation.current);
  };
  
  useEffect(
    () => {
      animationCycle();
      animationHandler.current = setInterval(
        animationCycle,
        visibleDuration + invisibleDuration
      );
      return cleanUpAnimationIds;
    },
    []
  );

  useEffect(
    () => {
      if (onLayerChange) {
        setVisible(false);
        if (animationHandler.current) {
          clearInterval(animationHandler.current);
          animationHandler.current = null;
        }
      }
    },
    [onLayerChange]
  );

  return (
    <View style={animatedStyle}>
      {children}
    </View>
  );
};

export default Blink;
