import { NamedColors } from "@src/color-palette";
import React from "react";
import { Foundation } from "@expo/vector-icons";

interface NoneProps {
    size: number,
    color: NamedColors | string,
}

const None: React.FC<NoneProps> = ({
  size,
  color
}) => {
  return <Foundation name="prohibited" size={size} color={color} />;
};

export default None;
