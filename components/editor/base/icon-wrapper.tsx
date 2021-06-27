import React from "react";
import { StyleProp, ViewStyle, View } from "react-native";

interface IconWrapperProps {
    wrapperStyle: StyleProp<ViewStyle>,
    children: React.ReactNode
}

const IconWrapper: React.FC<IconWrapperProps> = ({
  wrapperStyle,
  children
}) => {

  return (
    <View
      style={wrapperStyle}
    >
      {children}
    </View>
  );
};

export default IconWrapper;
