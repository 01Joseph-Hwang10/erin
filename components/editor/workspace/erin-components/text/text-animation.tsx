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
import TypeWriter from "./text-animation/typewriter";


interface AnimatedTextProps {
    style?: StyleProp<ViewStyle> & StyleProp<TextStyle>,
    onLayout?: (event: LayoutChangeEvent) => void,
    children?: string,
    textAnimationType: Erin.Common.TextAnimationTypes,
    infinite?: boolean
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  style,
  onLayout,
  children,
  textAnimationType,
  infinite
}) => {
  switch (textAnimationType) {
  case "typing":
    return <TypeWriter
      style={style}
      onLayout={onLayout}
      infinite={infinite}
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

const TextAnimationContext: React.Context<React.FC<AnimatedTextProps>> =
    React.createContext<React.FC<AnimatedTextProps>>(AnimatedText);
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
