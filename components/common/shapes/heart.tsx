import { NamedColors } from "@src/color-palette";
import React from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { View } from "react-native";

interface HeartProps {
    size: number,
    backgroundColor: NamedColors | string,
    children?: React.ReactNode,
    style?: StyleProp<ViewStyle>,
    fill?: boolean
}

const Heart: React.FC<HeartProps> = ({
  size,
  backgroundColor,
  children,
  fill
}) => {

  const heartStyle: StyleProp<ViewStyle> = {
    width: size,
    height: size
  };

  const threeTenthSize = ( 3 / 10 ) * size;

  const heartShapeStyle: StyleProp<ViewStyle> = {
    width: ( 3 / 5 ) * size,
    height: ( 9 / 10 ) * size,
    backgroundColor,
    borderTopLeftRadius: threeTenthSize,
    borderTopRightRadius: threeTenthSize
  };

  const oneTenthSize = ( 1 / 10 ) * size;

  const leftHeartStyle: StyleProp<ViewStyle> = {
    left: oneTenthSize
  };

  const rightHeartStyle: StyleProp<ViewStyle> = {
    right: oneTenthSize
  };

  const fillStyle: StyleProp<ViewStyle> = fill ? {
    width: "100%",
    height: "100%"
  } : {};

  const wrapperStyle: StyleProp<ViewStyle> = {
    transform: [
      { translateY: size / 6 }
    ]
  };

  return (
    <View style={heartStyle}>
      <View style={[
        styles.heartShape, 
        heartShapeStyle, 
        styles.leftHeart, 
        leftHeartStyle
      ]} 
      />
      <View style={[
        styles.heartShape,
        heartShapeStyle,
        styles.rightHeart,
        rightHeartStyle
      ]} 
      />
      <View style={[styles.childrenWrapper, fillStyle, wrapperStyle]}>
        {children}
      </View>
    </View>
  );
};

export default Heart;

const styles = StyleSheet.create({
  heartShape: {
    position: "absolute",
    top: 0,
  },
  leftHeart: {
    transform: [{ rotate: "-45deg" }],
    left: 5,
  },
  rightHeart: {
    transform: [{ rotate: "45deg" }],
    right: 5,
  },
  childrenWrapper: {
    position: "absolute"
  }
});
