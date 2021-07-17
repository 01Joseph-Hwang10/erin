import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Animated, { cancelAnimation, useAnimatedStyle, withTiming } from "react-native-reanimated";
import { Easing } from "react-native-reanimated";
import { useSharedValue } from "react-native-reanimated";
import { AnimationProps } from "./animation.types";
import { invisibleDuration, visibleDuration } from "./constants";

interface FadeProps extends AnimationProps {
    children?: React.ReactNode
}

const fadeDuration = 300;

const animationConfig: Animated.WithTimingConfig = {
  duration: fadeDuration,
  easing: Easing.linear
};

const Fade: React.FC<FadeProps> = ({
  children,
  infinite
}) => {
  
  const [ onMount, setOnMount ] = useState(true);

  const opacity = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(
    () => ({
      opacity: opacity.value
    }),
    [opacity]
  );

  const animationCycle = () => {
    opacity.value = withTiming(1, animationConfig);
    const delayedAnimation = setTimeout(() => {
      opacity.value = withTiming(0, animationConfig);
    }, fadeDuration + visibleDuration);
    if (!onMount) {
      clearTimeout(delayedAnimation);
    }
  };

  useEffect(
    () => {
      const animatedInterval = setInterval(
        animationCycle,
        fadeDuration * 2 + visibleDuration + invisibleDuration
      );
      if (infinite) {
        animationCycle();
      } else {
        clearInterval(animatedInterval);
        opacity.value = withTiming(1, animationConfig);
      }
      return () => {
        setOnMount(false);
        clearInterval(animatedInterval);
        cancelAnimation(opacity);
      }
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
