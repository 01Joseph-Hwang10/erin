import COLORS from "@src/colors";
import { insertOpacity } from "@src/functions";
import React from "react";
import { StyleSheet, ViewStyle, View } from "react-native";
import StickerList from "./bottom-drawer/sticker-list";
import { PanGestureHandler, PanGestureHandlerGestureEvent } from "react-native-gesture-handler";
import { Erin } from "erin";
import { RootState } from "@redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";
import Animated, { runOnJS, useAnimatedGestureHandler, withTiming } from "react-native-reanimated";
import { useSharedValue } from "react-native-reanimated";
import { useEffect } from "react";
import { useState } from "react";
import { easeOutCubic } from "./workspace/erin-components/common/animation/constants";
import { Dispatch } from "redux";
import { setBottomDrawerCurrent, SetBottomDrawerCurrentInput } from "@slices/editor/editor-generic";
import { useAnimatedStyle } from "react-native-reanimated";
import { StyleProp } from "react-native";


const backgroundColor = insertOpacity(COLORS.DARK.secondary, 0.9);

interface BottomDrawerContentProps {
    bottomDrawerCurrent: Erin.Editor.BottomDrawerMenuType
}

const BottomDrawerContent: React.FC<BottomDrawerContentProps> = ({
  bottomDrawerCurrent
}) => {
  switch (bottomDrawerCurrent) {
  case "stickerList":
    return <StickerList />;
  default:
    return <></>;
  }
};

type BottomDrawerReduxProps = ConnectedProps<typeof connector>

interface BottomDrawerProps extends BottomDrawerReduxProps {}

const animationConfig: Animated.WithTimingConfig = {
  duration: 300,
  easing: easeOutCubic,
};

const drawerHeightConstant = 0.8;

const BottomDrawer: React.FC<BottomDrawerProps> = ({
  bottomDrawerCurrent,
  setBottomDrawerCurrent: SetBottomDrawerCurrent,
  screenHeight,
}) => {

  const drawerHeight = screenHeight * drawerHeightConstant;
  const [ opened, setOpened ] = useState(false);
  const position = useSharedValue(0);

  useEffect(
    () => {
      if (bottomDrawerCurrent !== "none" && !opened) {
        position.value = withTiming(-drawerHeight, animationConfig);
        setOpened(true);
      }
      if (bottomDrawerCurrent === "none" && opened) {
        position.value = withTiming(0, animationConfig);
        setOpened(false);
      }
    },
    [bottomDrawerCurrent]
  );

  const setDrawerToNone = () => {
    setOpened(false);
    SetBottomDrawerCurrent("none");
  };

  const onPanGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, { startY: number }>({
    onStart: (_, ctx) => {
      ctx.startY = position.value;
    },
    onActive: ({ translationY }, { startY }) => {
      position.value = translationY + startY;
    },
    onEnd: ({ translationY, velocityY }) => {
      if (
        // Math.abs(translationY) > screenHeight * 0.7 / 3 || 
        Math.abs(translationY) > 100 || 
        Math.abs(velocityY) > 1
      ) {
        position.value = withTiming(0, animationConfig, () => {
          runOnJS(setDrawerToNone)();
        });
      } else {
        position.value = withTiming(-drawerHeight, animationConfig);
      }
    },
  });

  const rootStyle: StyleProp<ViewStyle> = {
    height: drawerHeight,
    top: screenHeight / 9
  };

  const animatedStyle = useAnimatedStyle(
    () => ({
      transform: [
        { translateY: position.value }
      ]
    }),
  );

  return (
    <Animated.View style={[
      styles.root, 
      rootStyle,
      animatedStyle
    ]}>
      <PanGestureHandler
        onGestureEvent={onPanGestureEvent}
      >
        <Animated.View style={styles.handlerWrapper}>
          <View style={styles.handler}></View>
        </Animated.View>
      </PanGestureHandler>
      <View style={styles.contentWrapper}>
        <BottomDrawerContent
          bottomDrawerCurrent={bottomDrawerCurrent}
        />
      </View>
    </Animated.View>
  );
};

const mapStateToProps = (state: RootState) => ({
  bottomDrawerCurrent: state.editor.generic.bottomDrawerCurrent,
  screenHeight: state.screen.screenSpec.height
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setBottomDrawerCurrent: (payload: SetBottomDrawerCurrentInput) => dispatch(setBottomDrawerCurrent(payload))
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(BottomDrawer);

const styles = StyleSheet.create({
  root: {
    width: "100%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor,
    borderRadius: 10,
  },
  handler: {
    width: "30%",
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.DARK.sharp,
  },
  contentWrapper: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 50,
  },
  handlerWrapper: {
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "row",
    paddingVertical: 10,
    flex: 1
  },
});
