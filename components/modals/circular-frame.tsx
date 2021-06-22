import React from "react";
import { GestureResponderEvent, TouchableOpacity, View, ViewStyle, StyleProp } from "react-native";
import Shadow from "./shadow";

interface CircularFrameProps {
    size: number,
    children: React.ReactNode,
    border?: boolean,
    borderColor?: string,
    borderWidth?: number,
    backgroundColor?: string,
    style?: ViewStyle,
    touchable?: boolean,
    onPress?: (event: GestureResponderEvent) => void,
    onLongPress?: (event: GestureResponderEvent) => void,
    shadow?: boolean,
    shadowLevel?: number,
}

const CircularFrame: React.FC<CircularFrameProps> = ({
  size,
  children,
  border,
  borderColor,
  borderWidth,
  backgroundColor,
  style: customStyle,
  touchable,
  onPress,
  shadow,
  shadowLevel,
  onLongPress
}) => {


  // Needa work on shadows
  const stylingOptions: StyleProp<ViewStyle> = {
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor,
    ...( border ? {
      borderColor,
      borderWidth,
    } : {
      borderWidth: 0
    }),
    ...customStyle,
    justifyContent: "center",
    alignItems: "center",
  };

  const RenderItem: React.FC = () => {
    if (touchable) return (
      <TouchableOpacity
        style={stylingOptions}
        onPress={onPress}
        onLongPress={onLongPress}
      >
        {children}
      </TouchableOpacity>
    );
    return (
      <View
        style={stylingOptions}
      >
        {children}
      </View>
    );
  };

  if (shadow && shadowLevel) {
    return <Shadow 
      shadowLevel={shadowLevel} 
      size={size}
    >
      <RenderItem />
    </Shadow>;
  }
  return <RenderItem />;

};

export default React.memo(CircularFrame);