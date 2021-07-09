import { NamedColors } from "@src/color-palette";
import React from "react";
import { StyleSheet } from "react-native";
import { StyleProp, ViewStyle } from "react-native";
import { View } from "react-native";

interface TriangleProps {
    size: number,
    backgroundColor: NamedColors | string,
    children?: React.ReactNode,
    style?: StyleProp<ViewStyle>,
    fill?: boolean
}

const Triangle: React.FC<TriangleProps> = ({
  size,
  backgroundColor,
  children,
  style,
  fill
}) => {

  const triangleHeight = ( Math.sqrt(3) / 2 ) * size;
  const halfSize = size / 2;

  const rootStyle: StyleProp<ViewStyle> = {
    borderBottomColor: backgroundColor,
    borderBottomWidth: triangleHeight,
    borderLeftWidth: halfSize,
    borderRightWidth: halfSize
  };

  const fillStyle: StyleProp<ViewStyle> = fill ? {
    width: "100%",
    height: "100%"
  } : {};

  return (
    <View style={[styles.triangle, rootStyle, style]}>
      <View style={[styles.childrenWrapper, fillStyle]}>
        {children}
      </View>
    </View>
  );
};

export default Triangle;

const styles = StyleSheet.create({
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
  },
  childrenWrapper: {
    position: "absolute"
  }
});
