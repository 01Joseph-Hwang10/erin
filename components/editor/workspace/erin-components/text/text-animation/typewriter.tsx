import React from "react";
import { 
  LayoutChangeEvent, 
  StyleProp, 
  StyleSheet, 
  Text, 
  TextStyle, 
  ViewStyle,
  View
} from "react-native";
import Animated from "react-native-reanimated";

interface TypeWriterProps {
    style?: StyleProp<ViewStyle> & StyleProp<TextStyle>,
    onLayout?: (event: LayoutChangeEvent) => void,
    children?: string,
}

const TypeWriter: React.FC<TypeWriterProps> = ({
  children,
  onLayout,
  style
}) => {

  const cursorStyle: StyleProp<TextStyle> = {
    color: "lightgrey",
  };

  return (
    <View
      style={[styles.wrapper, styles.flexRow]}
      onLayout={onLayout}
    >
      <Text>
        <Text style={style}>{children}</Text>
        <Animated.Text 
          style={[styles.cursor, style, cursorStyle]}
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
  
