import React, { useEffect } from "react";
import Animated, { useSharedValue, withTiming } from "react-native-reanimated";
import { Easing } from "react-native-reanimated";
import { useAnimatedStyle } from "react-native-reanimated";

interface MovingProps {
    children?: React.ReactNode
}

const stayDuration = 1500;
const defaultDuration = 500;
const movingDuration = 300;
const movingDistance = 50;

const animationConfig: Animated.WithTimingConfig = {
  duration: movingDuration,
  easing: Easing.bounce
};

const Moving: React.FC<MovingProps> = ({
  children
}) => {

  const animatedDistance = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(
    () => ({
      transform: [
        { translateY: -animatedDistance.value }
      ]
    }),
    [animatedDistance]
  );

  const animationCycle = () => {
    animatedDistance.value = withTiming(movingDistance, animationConfig);
    setTimeout(() => {
      animatedDistance.value = withTiming(0, animationConfig);
    }, stayDuration);
  };

  useEffect(() => {
    const animatedInterval = setInterval(
      animationCycle,
      movingDuration * 2 + stayDuration + defaultDuration
    );
    return () => {
      clearInterval(animatedInterval);
    };
  }, []);

  return (
    <Animated.View
      style={animatedStyle}
    >
      {children}
    </Animated.View>
  );
};

export default Moving;
