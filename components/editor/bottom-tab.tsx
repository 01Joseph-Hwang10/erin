import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import { StyleSheet, View, ViewStyle } from "react-native";
import Placeholder from "./base/placeholder";
import CreateShape from "./bottom-tab/create-member/create-shape";
import CreateText from "./bottom-tab/create-member/create-text";
import Background from "./bottom-tab/default-member/background";
import Music from "./bottom-tab/default-member/music";
import Save from "./bottom-tab/default-member/save";
import Send from "./bottom-tab/default-member/send";
import ToggleToAnimation from "./bottom-tab/default-member/toggle-to-animation";
import Shape from "./bottom-tab/shape-member/shape";
import ShapeColor from "./bottom-tab/shape-member/shape-color";
import ShapePattern from "./bottom-tab/shape-member/shape-pattern";
import FontColor from "./bottom-tab/text-member/font-color";
import FontStyle from "./bottom-tab/text-member/font-style";
import ToggleToDefault from "./bottom-tab/animation-default-member/toggle-to-default";
import AddAnimation from "./bottom-tab/animation-default-member/add-animation";
import DeleteAnimation from "./bottom-tab/animation-default-member/delete-animation";
import TestAnimation from "./bottom-tab/animation-default-member/test-animation";
import AnimationType from "./bottom-tab/animation-config-member/animation-type";
import AnimationTrigger from "./bottom-tab/animation-config-member/animation-trigger";
import TimeDial from "./bottom-tab/animation-config-member/time-dial";
import COLORS from "../../src/colors";
import { Erin } from "erin";
import { StyleProp } from "react-native";
import CheckShape from "./bottom-tab/shape-member/check-shape";
import CheckText from "./bottom-tab/text-member/check-text";
import CheckAnimationConfig from "./bottom-tab/animation-config-member/check-animation-config";
import XCreate from "./bottom-tab/create-member/x-create";
import CreateSticker from "./bottom-tab/create-member/create-sticker";
import NotSave from "./bottom-tab/default-member/not-save";
import { IconMembers } from "../common/types";
import IconWrapper from "./base/icon-wrapper";
import { useState } from "react";
import { useEffect } from "react";
import Animated, { Easing, useDerivedValue, withTiming } from "react-native-reanimated";
import { useAnimatedProps } from "react-native-reanimated";

const iconMembers: IconMembers<Erin.Editor.BottomTabMenuType> = {
  default: [
    <ToggleToAnimation key={0} />,
    <Background key={1} />,
    <Music key={2} />,
    null,
    <NotSave key={4} />,
    <Save key={5} />,
    <Send key={6} />
  ],
  create: [
    <CreateShape key={0} />,
    <CreateText key={1} />,
    <CreateSticker key={2} />,
    null,
    null,
    null,
    <XCreate key={6} />
  ],
  shape: [
    <Shape key={0} />,
    <ShapeColor key={1} />,
    <ShapePattern key={2} />,
    null,
    null,
    null,
    <CheckShape key={6} />,
  ],
  text: [
    <FontColor key={0} />,
    <FontStyle key={1} />,
    null,
    null,
    null,
    null,
    <CheckText key={6} />
  ],
  animationDefault: [
    <ToggleToDefault key={0} />,
    <AddAnimation key={1} />,
    <DeleteAnimation key={2} />,
    null,
    null,
    null,
    <TestAnimation key={6} />
  ],
  animationConfig: [
    <AnimationType key={0} />,
    <AnimationTrigger key={1} />,
    <TimeDial key={"2-4"} />,
    null,
    <CheckAnimationConfig key={6} />
  ]
};

type BottomTabReduxProps = ConnectedProps<typeof connector>

interface BottomTabProps extends BottomTabReduxProps {}

const TRANSITION_DURATION = 50;

const BottomTab: React.FC<BottomTabProps> = ({
  bottomTabCurrent: bottomTabCurrentRaw,
  iconGap
}) => {

  const [ bottomTabCurrent, setBottomTabCurrent ] = useState<Erin.Editor.BottomTabMenuType>(bottomTabCurrentRaw);
  const [ visible, setVisible ] = useState<boolean>(false);

  const animationConfig: Animated.WithTimingConfig = {
    duration: TRANSITION_DURATION,
    easing: Easing.ease
  };

  const opacity = useDerivedValue(
    () => (
      visible ? 
        withTiming(1, animationConfig) : 
        withTiming(0, animationConfig)
    ),
    [visible]
  );

  const animatedStyle = useAnimatedProps(
    () => {
      return {
        opacity: opacity.value
      };
    }
  );

  const iconWrapperStyle: StyleProp<ViewStyle> = {
    marginHorizontal: iconGap
  };

  const changeTabWithTransition = (): void => {
    setVisible(false);
    setTimeout(() => {
      setBottomTabCurrent(bottomTabCurrentRaw);
      setTimeout(() => {
        setVisible(true);
      }, 10);
    }, TRANSITION_DURATION);
  };

  useEffect(
    () => {
      changeTabWithTransition();
    },
    [bottomTabCurrentRaw]
  );

  return <View style={styles.root}>
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
    iconGap: state.editor.generic.settings.iconGap
  };
};

const connector = connect(mapStateToProps, {});

// export default React.memo(connector(BottomTab))
export default connector(BottomTab);


const styles = StyleSheet.create({
  root: {
    backgroundColor: COLORS.DARK.primary,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  wrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});