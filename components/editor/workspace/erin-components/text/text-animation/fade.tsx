import React from "react";
import { useEffect } from "react";
import Animated, { useAnimatedStyle, withTiming } from "react-native-reanimated";
import { Easing } from "react-native-reanimated";
import { useSharedValue } from "react-native-reanimated";
import { invisibleDuration, visibleDuration } from "./constants";

interface FadeProps {
    children?: React.ReactNode
}

const fadeDuration = 300;

const animationConfig: Animated.WithTimingConfig = {
  duration: fadeDuration,
  easing: Easing.linear
};

const Fade: React.FC<FadeProps> = ({
  children
}) => {

  const opacity = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(
    () => ({
      opacity: opacity.value
    }),
    [opacity]
  );

  const animationCycle = () => {
    opacity.value = withTiming(1, animationConfig);
    setTimeout(() => {
      opacity.value = withTiming(0, animationConfig);
    }, fadeDuration + visibleDuration);
  };

  useEffect(
    () => {
      const animatedInterval = setInterval(
        animationCycle,
        fadeDuration * 2 + visibleDuration + invisibleDuration
      );
      return () => clearInterval(animatedInterval);
    },
    []
  );

  return (
    <Animated.View
      style={animatedStyle}
    >
      {children}
    </Animated.View>
  );
};

export default Fade;
