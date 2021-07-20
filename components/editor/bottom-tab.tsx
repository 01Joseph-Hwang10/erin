import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import { StyleSheet, View, ViewStyle } from "react-native";
import Placeholder from "./base/placeholder";
import COLORS from "../../src/colors";
// import { Erin } from "erin";
import { StyleProp } from "react-native";
import IconWrapper from "./base/icon-wrapper";
// import { useState } from "react";
// import { useEffect } from "react";
// import Animated, { Easing, useDerivedValue, withTiming } from "react-native-reanimated";
// import { useAnimatedProps } from "react-native-reanimated";
import iconMembers from "./bottom-tab.data";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Platform } from "react-native";
import Animated, { Easing, withTiming } from 'react-native-reanimated'
import { useDerivedValue } from "react-native-reanimated";
import { useAnimatedProps } from "react-native-reanimated";
import { tabAnimationConfig } from "./constants";

type BottomTabReduxProps = ConnectedProps<typeof connector>

interface BottomTabProps extends BottomTabReduxProps {}

// const TRANSITION_DURATION = 50;

const BottomTab: React.FC<BottomTabProps> = ({
  bottomTabCurrent,
  iconGap,
  onDrag,
  textOnEdit,
}) => {

  const insets = useSafeAreaInsets();

  // const [ bottomTabCurrent, setBottomTabCurrent ] = useState<Erin.Editor.BottomTabMenuType>(bottomTabCurrentRaw);
  // const [ visible, setVisible ] = useState<boolean>(false);

  // const animationConfig: Animated.WithTimingConfig = {
  //   duration: TRANSITION_DURATION,
  //   easing: Easing.ease
  // };

  // const opacity = useDerivedValue(
  //   () => (
  //     visible ? 
  //       withTiming(1, animationConfig) : 
  //       withTiming(0, animationConfig)
  //   ),
  //   [visible]
  // );

  // const animatedStyle = useAnimatedProps(
  //   () => {
  //     return {
  //       opacity: opacity.value
  //     };
  //   }
  // );

  const iconWrapperStyle: StyleProp<ViewStyle> = {
    marginHorizontal: iconGap
  };

  const rootStyle: StyleProp<ViewStyle> = {
    paddingTop: Platform.OS === "android" ? 0 : 10,
    paddingBottom: insets.bottom,
  }

  // const changeTabWithTransition = (): void => {
  //   setVisible(false);
  //   setTimeout(() => {
  //     setBottomTabCurrent(bottomTabCurrentRaw);
  //     setTimeout(() => {
  //       setVisible(true);
  //     }, 10);
  //   }, TRANSITION_DURATION);
  // };

  // useEffect(
  //   () => {
  //     changeTabWithTransition();
  //   },
  //   [bottomTabCurrentRaw]
  // );

  const animatedOpacity = useDerivedValue(
    () => (
      onDrag || textOnEdit ? 
        withTiming(0, tabAnimationConfig) :
        withTiming(1, tabAnimationConfig)
    ),
    [onDrag, textOnEdit]
  )

  const animatedStyle = useAnimatedProps(
    () => ({
      opacity: animatedOpacity.value
    }),
    [animatedOpacity]
  )

  return <View style={[styles.root, rootStyle]}>
    <Animated.View
      style={[styles.wrapper, animatedStyle]}
    >
      {
        iconMembers?.[bottomTabCurrent]?.map((member, index) => {
          if (member) {
            const Icon = () => member;
            return <IconWrapper
              key={index}
              wrapperStyle={iconWrapperStyle}
            >
              <Icon />
            </IconWrapper>;
          }
          return <View 
            key={index}
            style={iconWrapperStyle}
          >
            <Placeholder />
          </View>;
        })
      }
    </Animated.View>
  </View>;
    
};


const mapStateToProps = (state: RootState) => {
  return {
    bottomTabCurrent: state.editor.generic.bottomTabCurrent,
    iconGap: state.editor.generic.settings.iconGap,
    onDrag: state.editor.handle.onDrag,
    textOnEdit: state.editor.states.textOnEdit,
  };
};

const connector = connect(mapStateToProps);

// export default React.memo(connector(BottomTab))
export default connector(BottomTab);


const styles = StyleSheet.create({
  root: {
    backgroundColor: COLORS.DARK.primary,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});