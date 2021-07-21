import React, { useRef } from "react";
import { useCallback } from "react";
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
import Animated, { useSharedValue, withRepeat, withSequence, withTiming } from "react-native-reanimated";
import { cancelAnimation } from "react-native-reanimated";
import { Easing } from "react-native-reanimated";
import { useAnimatedStyle } from "react-native-reanimated";
import { AnimationProps } from "../../common/animation/animation.types";
import { onUnmountDuration } from "../../common/animation/constants";

const typingInterval = 200;
const waitInterval = 500;
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

  // No state change, no change style: Needa fix this
  const animatedCursorStyle = useAnimatedStyle(
    () => ({
      opacity: animatedOpacity.value
    }),
    [animatedOpacity]
  );

  const onLayerChangeAnimation = useRef<NodeJS.Timeout | null>(null);
  const cursorAnimation = useRef<NodeJS.Timer | null>(null);
  const contentAnimation = useRef<NodeJS.Timeout | null>(null);
  const contentDelayAnimation = useRef<NodeJS.Timeout | null>(null);

  const [ deleting, setDeleting ] = useState(false);
  const [ iterCount, setIterCount ] = useState(0);
  const [ content, setContent ] = useState("");

  const cursorStyle: StyleProp<TextStyle> = {
    color: "dimgrey",
  };

  const cleanUpAnimationIds = () => {
    if (cursorAnimation.current) clearInterval(cursorAnimation.current);
    if (onLayerChangeAnimation.current) clearTimeout(onLayerChangeAnimation.current);
    if (contentAnimation.current) clearTimeout(contentAnimation.current);
    if (contentDelayAnimation.current) clearTimeout(contentDelayAnimation.current);
  };

  useEffect(
    () => {
      animatedOpacity.value = withRepeat(
        withSequence(
          withTiming(1, cursorAnimationConfig), 
          withTiming(cursorMinOpacity, cursorAnimationConfig)
        ),
        -1
      );
      return () => {
        cleanUpAnimationIds();
        cancelAnimation(animatedOpacity);
      };
    },
    []
  );
    
  useEffect(
    () => {
      if (onLayerChange) {
        cleanUpAnimationIds();
        animatedOpacity.value = 0;
        onLayerChangeAnimation.current = setTimeout(() => {
          setContent("");
        }, onUnmountDuration / 2);
      }
    },
    [onLayerChange]
  );

  useEffect(
    () => {
      contentAnimation.current = setTimeout(
        () => {
          if (children) {
            const updateContent = () => {
              if (contentAnimation.current) clearTimeout(contentAnimation.current);
              setContent(children?.substring(0, iterCount));
              setIterCount(deleting ? iterCount - 1 : iterCount + 1);
            };
            if (iterCount === children.length + 1) {
              if (!infinite) {
                if (contentAnimation.current) clearTimeout(contentAnimation.current);
                contentAnimation.current = null;
              } else {
                setDeleting(true);
                contentDelayAnimation.current = setTimeout(updateContent, waitInterval);
              }
            } else if (iterCount === -1 && deleting) {
              setDeleting(false);
              contentDelayAnimation.current = setTimeout(updateContent, waitInterval);
            } else {
              updateContent();
            }
          }
        }, typingInterval);
    },
    [children, iterCount, infinite, deleting]
  );

  const rootStyle: StyleProp<ViewStyle> = {
    backgroundColor: onLayerChange ? "lightskyblue" : "transparent"
  };

  return (
    <Animated.View
      style={[
        styles.wrapper, 
        styles.flexRow,
        rootStyle
      ]}
      onLayout={onLayout}
    >
      <Animated.Text>
        <Animated.Text style={style}>{content}</Animated.Text>
        <Animated.Text 
          style={[styles.cursor, style, cursorStyle, { opacity: animatedOpacity.value }]}
        >
            ▌
        </Animated.Text>
      </Animated.Text>
    </Animated.View>
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
  
