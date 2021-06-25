import React from "react";
import { Shadow as BoxShadow } from "react-native-shadow-2";

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


  return (
    <BoxShadow 
      distance={shadowLevel}
    >
      {children}
    </BoxShadow>
  );
};

export default Shadow;
