import COLORS from "@src/colors";
import { hexToRgbComponents } from "@src/functions";
import React from "react";
import { StyleSheet } from "react-native";
import { View, Animated } from "react-native";
import StickerList from "./bottom-drawer/sticker-list";
import { PanGestureHandler, PanGestureHandlerGestureEvent } from "react-native-gesture-handler";
import { Erin } from "erin";
import { RootState } from "@redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";


const backgroundColor = hexToRgbComponents(COLORS.DARK.secondary);

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

const BottomDrawer: React.FC<BottomDrawerProps> = ({
  bottomDrawerCurrent
}) => {

  return (
    <Animated.View style={styles.root}>
      <PanGestureHandler>
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
  bottomDrawerCurrent: state.editor.generic.bottomDrawerCurrent
});

const connector = connect(mapStateToProps);

export default connector(BottomDrawer);

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: backgroundColor
      ? `rgba(${backgroundColor.r}, ${backgroundColor.g}, ${backgroundColor.b}, 0.5)` : 
      COLORS.DARK.secondary ,
  },
  handler: {
    width: "15%",
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.DARK.secondary,
    paddingVertical: 10
  },
  contentWrapper: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  handlerWrapper: {
    width: "100%",
    justifyContent: "center",
    alignContent: "center"
  }
});
