import { Erin } from "erin";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
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
    infinite?: boolean,
    textStyleType: Erin.Common.NonableTextStyle,
    textColor: string,
    backgroundColor: string,
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  style,
  onLayout,
  children,
  textAnimationType,
  infinite,
  textStyleType,
  textColor,
  backgroundColor
}) => {

  const [ textStyle, setTextStyle ] = useState<StyleProp<TextStyle>>({});
  
  useEffect(
    () => {
      switch (textStyleType) {
      case "shadow":
        setTextStyle({
          textShadowColor: "rgba(0,0,0,0.5)",
          textShadowRadius: 10,
          textShadowOffset: {
            width: 0,
            height: 0
          }
        });
        break;
      case "neon":
        setTextStyle({
          color: "white",
          textShadowColor: backgroundColor,
          textShadowRadius: 10,
          textShadowOffset: {
            width: 0,
            height: 0,
          }
        });
        break;
      case "emphasize":
        setTextStyle({
          color: textColor,
          textShadowColor: backgroundColor,
          textShadowRadius: 2,
          textShadowOffset: {
            width: 4,
            height: 4
          }
        });
        break;
      default:
        setTextStyle({});
        break;
      }
    },
    [textStyleType, backgroundColor, textColor]
  );

  switch (textAnimationType) {
  case "typing":
    return <TypeWriter
      style={[style, textStyle]}
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
      <Text style={[style, textStyle]}>
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
