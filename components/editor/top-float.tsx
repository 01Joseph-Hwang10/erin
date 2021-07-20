import React from "react";
import { Platform, ViewStyle } from "react-native";
import { StyleProp, StyleSheet } from "react-native";
import { View } from "react-native";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import Placeholder from "./base/placeholder";
import { returnShadowProps } from "./base/constants";
import iconMembers from "./top-float.data";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated, { useAnimatedProps, useDerivedValue, withTiming } from "react-native-reanimated";
import { tabAnimationConfig } from "./constants";

type TopFloatReduxProps = ConnectedProps<typeof connector>

interface TopFloatProps extends TopFloatReduxProps {}

const TopFloat: React.FC<TopFloatProps> = ({
  settings: {
    iconGap,
    iconSize
  },
  topFloatCurrent,
  onDrag
}) => {

  const insets = useSafeAreaInsets()

  const marginSetter: StyleProp<ViewStyle> = {
    marginHorizontal: iconGap,
  };

  const iconWrapperStyle: StyleProp<ViewStyle> = {
    width: iconSize,
    height: iconSize,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    borderColor: "transparent",
    borderWidth: 1,
  };

  const shadowStyle: StyleProp<ViewStyle> = returnShadowProps(Platform.OS === "android" ? 45 : 10);

  const placeholderStyle: StyleProp<ViewStyle> = {
    width: iconSize * 0.8,
    height: iconSize
  };

  const rootStyle: StyleProp<ViewStyle> = {
    paddingTop: insets.top + 10
  }

  const animatedOpacity = useDerivedValue(
    () => (
      onDrag ? 
        withTiming(0, tabAnimationConfig) :
        withTiming(1, tabAnimationConfig)
    ),
    [onDrag]
  )

  const animatedStyle = useAnimatedProps(
    () => ({
      opacity: animatedOpacity.value
    }),
    [animatedOpacity]
  )

  return (
    <Animated.View style={[styles.root, rootStyle, animatedStyle]}>
      {
        iconMembers[topFloatCurrent].map((member, index) => {
          if (member) {
            const Icon = () => member;
            return <View 
              key={index} 
              style={[iconWrapperStyle, marginSetter, shadowStyle]}
            >
              <Icon />
            </View>;
          }
          return <View 
            key={index}
            style={[placeholderStyle, marginSetter]}
          >
            <Placeholder />
          </View>;
        })
      }
    </Animated.View>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    topFloatCurrent: state.editor.generic.topFloatCurrent,
    settings: state.editor.generic.settings,
    onDrag: state.editor.handle.onDrag
  };
};

const connector = connect(mapStateToProps, {});

export default connector(TopFloat);

const styles = StyleSheet.create({
  root: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999
  },
});