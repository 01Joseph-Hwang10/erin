import React, { useEffect, useState } from "react";
import Animated, { useSharedValue, withTiming } from "react-native-reanimated";
import { cancelAnimation } from "react-native-reanimated";
import { Easing } from "react-native-reanimated";
import { useAnimatedStyle } from "react-native-reanimated";
import { AnimationProps } from "./animation.types";
import { onUnmountDuration } from "./constants";

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

  const [ onMount, setOnMount ] = useState(true);
  
  const animationConfig: Animated.WithTimingConfig = {
    duration: onLayerChange ? onUnmountDuration : movingDuration,
    easing: movement && movement === "bounce" ? Easing.bounce : Easing.ease
  };

  const animatedDistance = useSharedValue(infinite ? 0 : movingDistance);
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

  const animationCycle = () => {
    animatedDistance.value = withTiming(movingDistance, animationConfig);
    const delayedAnimation = setTimeout(() => {
      animatedDistance.value = withTiming(0, animationConfig);
    }, stayDuration + movingDuration);
    if (!onMount) {
      clearTimeout(delayedAnimation);
    }
  };

  useEffect(() => {
    let animatedInterval: NodeJS.Timer | null = null;
    if (infinite) {
      animatedInterval = setInterval(
        animationCycle,
        movingDuration * 2 + stayDuration + defaultDuration
      );
      animationCycle();
    } else {
      if (animatedInterval) {
        clearInterval(animatedInterval);
      }
      animatedDistance.value = withTiming(0, animationConfig);
      animatedOpacity.value = withTiming(1, {
        duration: movingDuration * ( 2 / 3 ),
        easing: Easing.linear
      });
    }
    if (onLayerChange) {
      if (animatedInterval) {
        setOnMount(false);
        clearInterval(animatedInterval);
      }
      animatedDistance.value = withTiming(movingDistance, animationConfig);
      animatedOpacity.value = withTiming(0, animationConfig);
    }
    return () => {
      if (!onLayerChange && animatedInterval) {
        setOnMount(false);
        clearInterval(animatedInterval);
      }
      cancelAnimation(animatedOpacity);
      cancelAnimation(animatedDistance);
    };
  }, [infinite]);

  return (
    <Animated.View
      style={animatedStyle}
    >
      {children}
    </Animated.View>
  );
};

export default Moving;
