import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Animated, { cancelAnimation, useAnimatedStyle, withTiming } from "react-native-reanimated";
import { Easing } from "react-native-reanimated";
import { useSharedValue } from "react-native-reanimated";
import { AnimationProps } from "./animation.types";
import { invisibleDuration, onUnmountDuration, visibleDuration } from "./constants";

interface FadeProps extends AnimationProps {
    children?: React.ReactNode
}

const fadeDuration = 300;


const Fade: React.FC<FadeProps> = ({
  children,
  infinite,
  onLayerChange,
}) => {
  
  const [ onMount, setOnMount ] = useState(true);
  
  const opacity = useSharedValue(0);
  
  const animatedStyle = useAnimatedStyle(
    () => ({
      opacity: opacity.value
    }),
    [opacity]
  );

  const animationConfig: Animated.WithTimingConfig = {
    duration: onLayerChange ? onUnmountDuration : fadeDuration,
    easing: Easing.linear
  };

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
      // If null, there is no need to setOnMount to false.
      let animatedInterval: NodeJS.Timer | null = null;
      if (infinite) {
        animatedInterval = setInterval(
          animationCycle,
          fadeDuration * 2 + visibleDuration + invisibleDuration,
        );
        animationCycle();
      } else {
        opacity.value = withTiming(1, animationConfig);
      }
      if (onLayerChange) {
        if (animatedInterval) {
          setOnMount(false);
          clearInterval(animatedInterval);
        }
        opacity.value = withTiming(0, animationConfig);
      }
      return () => {
        if (!onLayerChange && animatedInterval) {
          setOnMount(false);
          clearInterval(animatedInterval);
        }
        cancelAnimation(opacity);
      };
    },
    [infinite]
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
