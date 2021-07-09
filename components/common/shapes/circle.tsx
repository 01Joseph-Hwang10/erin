import { NamedColors } from "@src/color-palette";
import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { View } from "react-native";

interface CircleProps {
    size: number,
    backgroundColor: NamedColors | string,
    children?: React.ReactNode,
    style?: StyleProp<ViewStyle>
}

const Circle: React.FC<CircleProps> = ({
  size,
  backgroundColor,
  children,
  style
}) => {

  const rootStyle: StyleProp<ViewStyle> = {
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor,
    justifyContent: "center",
    alignItems: "center"
  };

  return (
    <View style={[rootStyle, style]}>
      {children}
    </View>
  );
};

export default Circle;
