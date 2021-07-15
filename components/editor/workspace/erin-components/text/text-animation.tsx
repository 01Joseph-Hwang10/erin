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
import Animated from "react-native-reanimated";

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
  return (
    <Animated.View 
      style={[styles.wrapper, styles.flexRow]}
      onLayout={onLayout}
    >
      {
        textAnimationType === "typing" ?
          <React.Fragment>
            <Text style={style}>{children}</Text>
            <Text style={{ marginLeft: 5 }}>|</Text>
          </React.Fragment> :
          <Text style={style}>{children}</Text>
      }
    </Animated.View>
  );
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
