import { NamedColors } from "@src/color-palette";
import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";

interface RectangleProps {
    width: number,
    height: number,
    backgroundColor: NamedColors | string,
    children?: React.ReactNode,
    style?: StyleProp<ViewStyle>
}

const Rectangle: React.FC<RectangleProps> = ({
  width,
  height,
  backgroundColor,
  children,
  style
}) => {

  const rootStyle: StyleProp<ViewStyle> = {
    width,
    height,
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

export default Rectangle;
