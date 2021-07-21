import React from "react";
import { useRef } from "react";
import { useCallback } from "react";
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
  
  const delayedAnimation = useRef<NodeJS.Timeout | null>(null);
  const infiniteAnimationInitializer = useRef<NodeJS.Timeout | null>(null);
  const infiniteAnimationHandler = useRef<NodeJS.Timer | null>(null);
  
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

  const animationCycle = useCallback(
    () => {
      if (infinite) {
        opacity.value = withTiming(0, animationConfig);
        delayedAnimation.current = setTimeout(() => {
          opacity.value = withTiming(1, animationConfig);
        }, fadeDuration + invisibleDuration);
      } else {
        if (opacity.value !== 1) {
          if (delayedAnimation.current) clearInterval(delayedAnimation.current);
          opacity.value = 1;
        }
      }
    },
    [infinite, opacity.value]
  );

  const cleanUpAnimationIds = () => {
    if (infiniteAnimationInitializer.current) clearInterval(infiniteAnimationInitializer.current);
    if (infiniteAnimationHandler.current) clearInterval(infiniteAnimationHandler.current);
    if (delayedAnimation.current) clearTimeout(delayedAnimation.current);
  };

  const cleanUp = () => {
    cleanUpAnimationIds();
    cancelAnimation(opacity);
  };

  useEffect(
    () => {
      cleanUp();
      opacity.value = withTiming(1, animationConfig);
      
      infiniteAnimationInitializer.current = setTimeout(() => {
        animationCycle();
        infiniteAnimationHandler.current = setInterval(
          animationCycle,
          fadeDuration * 2 + visibleDuration + invisibleDuration
        );
      }, fadeDuration + visibleDuration);

      return cleanUp;
    },
    [infinite]
  );

  useEffect(
    () => {
      if (onLayerChange) {
        cleanUpAnimationIds();
        opacity.value = withTiming(0, animationConfig);
      }
    },
    [onLayerChange]
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
