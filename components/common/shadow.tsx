import React from "react";
import { BoxShadow, BoxShadowProps } from "react-native-shadow";

interface ShadowProps {
    children: React.ReactNode,
    shadowLevel: number,
    size: number
}

const Shadow: React.FC<ShadowProps> = ({
  children,
  shadowLevel,
  size
}) => {

  const shadowOptions: BoxShadowProps = {
    width: size,
    height: size,
    color: "#000",
    border: 3,
    radius: 2,
    opacity: shadowLevel / 25,
    x: 0,
    y: shadowLevel / 4,
  };

  return (
    <BoxShadow
      setting={shadowOptions}
    >
      {children}
    </BoxShadow>
  );
};

export default Shadow;
