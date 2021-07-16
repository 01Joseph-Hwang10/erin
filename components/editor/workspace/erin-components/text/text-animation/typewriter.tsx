import React from "react";
import { 
  LayoutChangeEvent, 
  StyleProp, 
  StyleSheet, 
  Text, 
  TextStyle, 
  ViewStyle 
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

  return (
    <Animated.View
      style={[styles.wrapper, styles.flexRow]}
      onLayout={onLayout}
    >
      <Text>
        <Text style={style}>{children}</Text>
        <Text style={[styles.cursor, style]}>▌</Text>
      </Text>
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
  
