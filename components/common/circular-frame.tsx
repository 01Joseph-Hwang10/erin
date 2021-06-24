import React from "react";
import { View, ViewStyle, StyleProp, Text } from "react-native";
import Shadow from "./shadow";

interface CircularFrameProps {
    size: number,
    children?: React.ReactNode,
    border?: boolean,
    borderColor?: string,
    borderWidth?: number,
    backgroundColor?: string,
    style?: ViewStyle,
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

  
  const RenderItem: React.FC = () => (
    <View style={stylingOptions}>
      {children}
    </View>
  );

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

// export default React.memo(CircularFrame);
export default CircularFrame;