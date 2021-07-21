import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { 
  LayoutChangeEvent, 
  StyleProp, 
  StyleSheet, 
  Text, 
  TextStyle, 
  ViewStyle,
  View
} from "react-native";
import Animated, { useSharedValue, withTiming } from "react-native-reanimated";
import { cancelAnimation } from "react-native-reanimated";
import { Easing } from "react-native-reanimated";
import { useAnimatedStyle } from "react-native-reanimated";
import { AnimationProps } from "../../common/animation/animation.types";
import { onUnmountDuration } from "../../common/animation/constants";

const typingInterval = 200;
const cursorInterval = 1000;
const cursorMinOpacity = 0.2;

interface TypeWriterProps extends AnimationProps {
    style?: StyleProp<ViewStyle> & StyleProp<TextStyle>,
    onLayout?: (event: LayoutChangeEvent) => void,
    children?: string,
}

const cursorAnimationConfig: Animated.WithTimingConfig = {
  duration: cursorInterval / 2,
  easing: Easing.linear
};

const TypeWriter: React.FC<TypeWriterProps> = ({
  children,
  onLayout,
  style,
  infinite,
  onLayerChange,
}) => {

  const animatedOpacity = useSharedValue(cursorMinOpacity);

  const animatedCursorStyle = useAnimatedStyle(
    () => ({
      opacity: animatedOpacity.value
    }),
    [animatedOpacity]
  );

  const [ onMount, setOnMount ] = useState(true);
  const [ deleting, setDeleting ] = useState(false);
  const [ iterCount, setIterCount ] = useState(0);
  const [ content, setContent ] = useState("");

  const cursorStyle: StyleProp<TextStyle> = {
    color: "lightgrey",
  };

  const cursorAnimationCycle = () => {
    animatedOpacity.value = withTiming(1, cursorAnimationConfig);
    const delayedAnimation = setTimeout(() => {
      animatedOpacity.value = withTiming(cursorMinOpacity, cursorAnimationConfig);
    }, cursorInterval / 2);
    if (!onMount) {
      clearTimeout(delayedAnimation);
    }
  };

  useEffect(
    () => {
      const animatedContentInterval = setInterval(
        () => {
          if (children) {
            if (iterCount === children.length) {
              if (!infinite) {
                clearInterval(animatedContentInterval);
                return;
              }
              setDeleting(true);
              return;
            }
            if (iterCount === 0 && deleting) {
              setDeleting(false);
              return;
            }
            setContent(children?.charAt(iterCount));
            setIterCount(deleting ? iterCount - 1 : iterCount + 1);
          }
        },
        typingInterval
      );

      cursorAnimationCycle();
      const animatedCursorInterval = setInterval(
        cursorAnimationCycle,
        cursorInterval
      );

      let onLayerChangeAnimation: NodeJS.Timeout | null = null;
      if (onLayerChange) {
        setOnMount(false);
        clearInterval(animatedContentInterval);
        clearInterval(animatedCursorInterval);
        animatedOpacity.value = 0;
        onLayerChangeAnimation = setTimeout(() => {
          setContent("");
        }, onUnmountDuration / 2);
      }

      return () => {
        if (!onLayerChange) {
          setOnMount(false);
          clearInterval(animatedContentInterval);
          clearInterval(animatedCursorInterval);
        }
        if (onLayerChangeAnimation) {
          clearTimeout(onLayerChangeAnimation);
        }
        cancelAnimation(animatedOpacity);
      };
    },
    [infinite]
  );

  const rootStyle: StyleProp<ViewStyle> = {
    backgroundColor: onLayerChange ? "lightskyblue" : "transparent"
  };

  return (
    <View
      style={[
        styles.wrapper, 
        styles.flexRow,
        rootStyle
      ]}
      onLayout={onLayout}
    >
      <Text>
        <Text style={style}>{content}</Text>
        <Animated.Text 
          style={[styles.cursor, style, cursorStyle, animatedCursorStyle]}
        >
            ▌
        </Animated.Text>
      </Text>
    </View>
  );
};

export default TypeWriter;


const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  flexRow: {
    flexDirection: "row"
  },
  cursor: {
    marginLeft: 2,
  }
});
  
