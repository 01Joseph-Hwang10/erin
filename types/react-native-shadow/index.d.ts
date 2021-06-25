declare type RNComponent<P = any, S = any, SS = any> = import("react").Component<P, S, SS>;
declare type RNConstructor<T> = import("react-native").Constructor<T>;
declare type RNViewProps = import("react-native").ViewProps;
declare type RNViewStyle = import("react-native").ViewStyle;

declare module "react-native-shadow" {
  export interface BoxShadowProps {
    width: number,
    height: number,
    color: string,
    border: number,
    radius: number,
    opacity: number,
    x: number,
    y: number,
    style?: RNViewStyle,
  }

  export interface BorderShadowProps {
    width: number,
    color: string,
    border: number,
    opacity: number,
    style?: RNViewStyle,
    side: "top" | "bottom" | "left" | "right",
    inset: boolean,
  }
  export const BoxShadow : RNConstructor<RNComponent<RNViewProps & {setting?: BoxShadowProps}>>;
  export const BorderShadow : RNConstructor<RNComponent<RNViewProps & {setting?: BorderShadowProps}>>;
}