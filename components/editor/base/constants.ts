import { StyleProp, ViewStyle, Platform } from "react-native";
import COLORS from "../../../src/colors";

export const WIDTH_CONSTANT = 1/9;
export const MARGIN_CONSTANT = (1- WIDTH_CONSTANT * 7) * ( 1 / (14) );
export const ICON_COLOR = COLORS.DARK.sharp;

export const returnShadowProps = (shadowLevel: number): StyleProp<ViewStyle> => {
  if (Platform.OS === "android") {
    return {
      elevation: shadowLevel
    };
  }
  if (Platform.OS === "ios") {
    const linearEquation = (a: number, b: number, x: number) => a * x + b;
    const opacityCoefficient = 0.01745455;
    const opacityIntercept = 0.164;
    const radiusCoefficient = 0.6534348;
    const radiusIntercept = 0.02873188;
    return {
      shadowColor: "black",
      shadowOpacity: linearEquation(
        opacityCoefficient, 
        opacityIntercept, 
        shadowLevel
      ),
      shadowOffset: {
        width: 0,
        height: shadowLevel === 1 ? 1 : Math.floor(shadowLevel / 2)
      },
      shadowRadius: linearEquation(
        radiusCoefficient, 
        radiusIntercept, 
        shadowLevel
      ),
    };
  }
  return {};
};