// import Circle from "@components/common/shapes/circle";
// import Heart from "@components/common/shapes/heart";
// import Star from "@components/common/shapes/star";
// import Triangle from "@components/common/shapes/triangle";
import { NamedColors } from "@src/color-palette";
import { Erin } from "erin";
import React from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { View } from "react-native";

interface BackgroundShapeProps {
    shape: Erin.Common.NonableTextStyle,
    children?: React.ReactNode,
    style?: StyleProp<ViewStyle>,
    size: number,
    backgroundColor: NamedColors | string
}

const BackgroundShape: React.FC<BackgroundShapeProps> = ({
  shape,
  children,
  style,
  size,
  backgroundColor
}) => {

  const backgroundStyle: StyleProp<ViewStyle> = {
    backgroundColor,
    width: "100%",
    height: "100%"
  };

  switch (shape) {
  case "rectangle":
    return <View style={[style, backgroundStyle]}>
      {children}
    </View>;
  case "roundedRectangle":
    return <View style={[style, styles.roundedRectangle, backgroundStyle]}>
      {children}
    </View>;
  // case "circle":
  //   return <Circle 
  //     style={[style]}
  //     size={size}
  //     backgroundColor={backgroundColor}
  //   >
  //     {children}
  //   </Circle>;
  // case "heart":
  //   return <Heart
  //     style={[style]}
  //     size={size}
  //     backgroundColor={backgroundColor}
  //     fill={true}
  //   >
  //     {children}
  //   </Heart>;
  // case "star":
  //   return <Star
  //     style={style}
  //     size={size}
  //     backgroundColor={backgroundColor}
  //     fill={true}
  //   >
  //     {children}
  //   </Star>;
  // case "triangle":
  //   return <Triangle
  //     style={style}
  //     size={size}
  //     backgroundColor={backgroundColor}
  //     fill={true}
  //   >
  //     {children}
  //   </Triangle>;
  default:
    return <>
      {children}
    </>;
  }
};

export default BackgroundShape;


const styles = StyleSheet.create({
  roundedRectangle: {
    borderRadius: 5
  }
});
