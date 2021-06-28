import React from "react";
import { View, ViewStyle, StyleProp } from "react-native";
import { returnShadowProps } from "../editor/base/constants";

interface CircularFrameProps {
    size: number,
    children?: React.ReactNode,
    border?: boolean,
    borderColor?: string,
    borderWidth?: number,
    backgroundColor?: string,
    style?: StyleProp<ViewStyle>,
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
  shadow,
  shadowLevel,
}) => {


  // Needa work on shadows
  const borderRadius = size / 2;
  const stylingOptions: StyleProp<ViewStyle> = {
    width: size,
    height: size,
    borderRadius,
    backgroundColor,
    justifyContent: "center",
    alignItems: "center",
  };

  const shadowOptions: StyleProp<ViewStyle> = shadow && shadowLevel ? returnShadowProps(shadowLevel) : {};

  const borderOptions: StyleProp<ViewStyle> = 
    border ? 
      { borderColor, borderWidth } : 
      ( shadow ? 
        { borderColor: "transparent", borderWidth: 1 } : 
        {} 
      );
  
  return (
    <View style={[stylingOptions, shadowOptions, borderOptions, customStyle]}>
      {children}
    </View>
  );

};

// export default React.memo(CircularFrame);
export default CircularFrame;