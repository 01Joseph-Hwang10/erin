import { Erin } from "erin";
import React from "react";
import { 
  LayoutChangeEvent, 
  StyleProp, 
  TextStyle, 
  View, 
  ViewStyle, 
  Text,
  StyleSheet
} from "react-native";
import Blink from "./text-animation/blink";
import Fade from "./text-animation/fade";
import Moving from "./text-animation/moving";
import TypeWriter from "./text-animation/typewriter";

interface AnimatedTextWrapperProps {
  children?: React.ReactNode,
  textAnimationType: Erin.Editor.TextAnimationTypes
}

export const AnimatedTextWrapper: React.FC<AnimatedTextWrapperProps> = ({
  children,
  textAnimationType
}) => {
  switch (textAnimationType) {
  case "blink":
    return <Blink>
      {children}
    </Blink>;
  case "fade":
    return <Fade>
      {children}
    </Fade>;
  case "moving":
    return <Moving>
      {children}
    </Moving>;
  default:
    return <>
      {children}
    </>;
  }
};

interface AnimatedTextProps {
    style?: StyleProp<ViewStyle> & StyleProp<TextStyle>,
    onLayout?: (event: LayoutChangeEvent) => void,
    children?: string,
    textAnimationType: Erin.Editor.TextAnimationTypes
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  style,
  onLayout,
  children,
  textAnimationType
}) => {
  switch (textAnimationType) {
  case "typing":
    return <TypeWriter
      style={style}
      onLayout={onLayout}
    >
      {children}
    </TypeWriter>;
  default:
    return <View
      style={[styles.wrapper, styles.flexRow]}
      onLayout={onLayout}
    >
      <Text style={style}>
        {children}
      </Text>
    </View>;
  }
};

const TextAnimationContext: React.Context<{
  AnimatedText: React.FC<AnimatedTextProps>,
  AnimatedTextWrapper: React.FC<AnimatedTextWrapperProps>
}> =
    React.createContext<{
      AnimatedText: React.FC<AnimatedTextProps>,
      AnimatedTextWrapper: React.FC<AnimatedTextWrapperProps>
    }>({
      AnimatedText,
      AnimatedTextWrapper
    });
TextAnimationContext.displayName = "TextAnimationContext";

export default TextAnimationContext;

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  flexRow: {
    flexDirection: "row"
  }
});
