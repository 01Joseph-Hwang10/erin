import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { StyleProp, ViewStyle } from "react-native";
import Animated, { Easing, useAnimatedStyle, withTiming } from "react-native-reanimated";
import { useSharedValue } from "react-native-reanimated";

interface IconWrapperProps {
    wrapperStyle: StyleProp<ViewStyle>,
    children: React.ReactNode
}

const IconWrapper: React.FC<IconWrapperProps> = ({
  wrapperStyle,
  children
}) => {

  const [opacity, setOpacity] = useState<number>(0);
  const animatedOpacity = useSharedValue(opacity);
    
  const hookUpdater = () => {
    return {
      opacity: withTiming(animatedOpacity.value, {
        duration: 100,
        easing: Easing.linear
      })
    };
  };

  const animationStyle = useAnimatedStyle(hookUpdater, [opacity]);

  const hookEffect = () => {
    setOpacity(1);
    const cleaner = () => setOpacity(0);
    return cleaner;
  };
  
  useEffect(hookEffect, []);

  return (
    <Animated.View
      style={[wrapperStyle, animationStyle]}
    >
      {children}
    </Animated.View>
  );
};

export default IconWrapper;
