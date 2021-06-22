import React from "react";
import { StyleProp, ViewStyle } from "react-native";

// declare module "react-native-shadow" {

// }

declare module "react-native-shadow"

declare type BaseShadowProps = {
    width: number,
    height: number,
    color: string,
    border: number,
    opacity: number,
    style?: StyleProp<ViewStyle>
}

export interface BoxShadowProps extends BaseShadowProps {
    radius: number,
    x: number,
    y: number,
}

declare type BorderShadowSideType = "top" | "bottom"

export interface BorderShadowProps extends BaseShadowProps {
    side: BorderShadowSideType,
    inset: boolean
}

declare type ShadowComponentProps<T = any> = {
    setting: T
}

export class BoxShadow extends React.Component<ShadowComponentProps<BoxShadowProps>> {}

export class BorderShadow extends React.Component<ShadowComponentProps<BorderShadowProps>> {}
