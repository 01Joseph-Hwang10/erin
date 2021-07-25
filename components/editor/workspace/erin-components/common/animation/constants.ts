import { Easing } from "react-native-reanimated";
import { Easing as RNEasing } from "react-native";

export const visibleDuration = 2000;
export const invisibleDuration = 500;
export const onUnmountDuration = 300;

export const easeOutCubic = Easing.bezier(0.22, 0.61, 0.36, 1);
export const RNEaseOutCubic = RNEasing.bezier(0.22, 0.61, 0.36, 1);
