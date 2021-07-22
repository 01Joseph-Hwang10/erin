import React, { useEffect } from "react";
import { useRef } from "react";
import { useCallback } from "react";
import Animated, { useSharedValue, withTiming } from "react-native-reanimated";
import { cancelAnimation } from "react-native-reanimated";
import { Easing } from "react-native-reanimated";
import { useAnimatedStyle } from "react-native-reanimated";
import { AnimationProps } from "./animation.types";
import { easeOutCubic, onUnmountDuration } from "./constants";

type Movement = "ease" | "bounce"

interface MovingProps extends AnimationProps {
    children?: React.ReactNode,
    movement?: Movement
}

const stayDuration = 1500;
const defaultDuration = 1000;
const movingDuration = 300;
const movingDistance = 100;


const Moving: React.FC<MovingProps> = ({
  children,
  movement,
  infinite,
  onLayerChange,
}) => {

  const delayedAnimation = useRef<NodeJS.Timeout | null>(null);
  const infiniteAnimationInitializer = useRef<NodeJS.Timeout | null>(null);
  const infiniteAnimationHandler = useRef<NodeJS.Timer | null>(null);
  
  const animatedDistanceConfig: Animated.WithTimingConfig = {
    duration: onLayerChange ? onUnmountDuration : movingDuration,
    easing: movement && movement === "bounce" ? Easing.bounce : easeOutCubic
  };

  const animatedOpacityConfig: Animated.WithTimingConfig = {
    duration: onLayerChange ? onUnmountDuration * ( 2 / 3 ) : movingDuration * ( 2 / 3 ),
    easing: easeOutCubic
  };

  const animatedDistance = useSharedValue(movingDistance);
  const animatedOpacity = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(
    () => ({
      transform: [
        { translateY: -animatedDistance.value }
      ],
      opacity: animatedOpacity.value
    }),
    [animatedDistance, animatedOpacity]
  );

  const animationCycle = useCallback(
    () => {
      if (infinite) {
        animatedDistance.value = withTiming(movingDistance, animatedDistanceConfig);
        delayedAnimation.current = setTimeout(() => {
          animatedDistance.value = withTiming(0, animatedDistanceConfig);
        }, stayDuration + movingDuration);
      } else {
        if (animatedDistance.value !== 0) {
          if (delayedAnimation.current) clearTimeout(delayedAnimation.current);
          animatedDistance.value = 0;
        }
      }
    },
    [infinite, animatedDistance.value, movement, onLayerChange]
  );

  const cleanUpAnimationIds = () => {
    if (infiniteAnimationInitializer.current) clearInterval(infiniteAnimationInitializer.current);
    if (infiniteAnimationHandler.current) clearInterval(infiniteAnimationHandler.current);
    if (delayedAnimation.current) clearTimeout(delayedAnimation.current);
  };

  const cleanUp = () => {
    cleanUpAnimationIds();
    cancelAnimation(animatedDistance);
    cancelAnimation(animatedOpacity);
  };
  
  useEffect(() => {
    cleanUp();
    animatedDistance.value = withTiming(0, animatedDistanceConfig);
    animatedOpacity.value = withTiming(1, animatedOpacityConfig);
    
    infiniteAnimationInitializer.current = setTimeout(() => {
      animationCycle();
      infiniteAnimationHandler.current = setInterval(
        animationCycle,
        movingDuration * 2 + defaultDuration + stayDuration
      );
    }, movingDuration + stayDuration);
      
    return cleanUp;
  }, [infinite, movement]);
  
  useEffect(
    () => {
      if (onLayerChange) {
        cleanUpAnimationIds();
        animatedDistance.value = withTiming(movingDistance, animatedDistanceConfig);
        animatedOpacity.value = withTiming(0, animatedOpacityConfig);
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

export default Moving;
