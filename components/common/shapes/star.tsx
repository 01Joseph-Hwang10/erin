import { NamedColors } from "@src/color-palette";
import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { StyleSheet, View } from "react-native";

interface StarProps {
  size: number,
  backgroundColor: NamedColors | string ,
  children?: React.ReactNode,
  style?: StyleProp<ViewStyle>,
  fill?: boolean
}

const Star: React.FC<StarProps> = ({
  size,
  backgroundColor,
  children,
  fill
}) => {

  const starfiveStyle: StyleProp<ViewStyle> = {
    width: size,
    height: size,
  };

  const twoThirdSize = ( 2 / 3 ) * size;
  const oneThirdSize = ( 1 / 3 ) * size;
  const sevenFifteenthSize = ( 7 / 15 ) * size;

  const starfiveTopStyle: StyleProp<ViewStyle> = {
    top: (-1) * ( 3 / 10 ) * size,
    left: ( 37 / 150 ) * size,
    borderBottomColor: backgroundColor,
    borderBottomWidth: twoThirdSize,
    borderLeftWidth: oneThirdSize,
    borderRightWidth: oneThirdSize,
  };

  const starFiveBeforeStyle: StyleProp<ViewStyle> = {
    borderBottomColor: backgroundColor,
    borderRightWidth: twoThirdSize,
    borderLeftWidth: twoThirdSize,
    borderBottomWidth: sevenFifteenthSize
  };

  const starFiveAfterStyle: StyleProp<ViewStyle> = {
    left: (-1) * ( 1 / 6 ) * size,
    borderRightWidth: twoThirdSize,
    borderLeftWidth: twoThirdSize,
    borderBottomWidth: sevenFifteenthSize,
    borderBottomColor: backgroundColor
  };

  const fillStyle: StyleProp<ViewStyle> = fill ? {
    width: "100%",
    height: "100%"
  } : {};

  return (
    <View style={starfiveStyle}>
      <View style={[styles.starfiveTop, starfiveTopStyle]} />
      <View style={[styles.starfiveBefore, starFiveBeforeStyle]} />
      <View style={[styles.starfiveAfter, starFiveAfterStyle]} />
      <View style={[styles.childrenWrapper, fillStyle]}>
        {children}
      </View>
    </View>
  );
};

export default Star;

const styles = StyleSheet.create({
  starfiveTop: {
    position: "absolute",
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
  },
  starfiveBefore: {
    backgroundColor: "transparent",
    position: "absolute",
    left: 0,
    top: 0,
    borderStyle: "solid",
    borderRightColor: "transparent",
    borderLeftColor: "transparent",
    transform: [{ rotate: "35deg" }],
  },
  starfiveAfter: {
    backgroundColor: "transparent",
    position: "absolute",
    top: 0,
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderRightColor: "transparent",
    borderLeftColor: "transparent",
    transform: [{ rotate: "-35deg" }],
  },
  childrenWrapper: {
    position: "absolute"
  }
});
