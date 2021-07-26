import { RootState } from "@redux/root-reducer";
import React, { useEffect } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { connect, ConnectedProps } from "react-redux";
import Animated, { useDerivedValue, withTiming } from "react-native-reanimated";
import { useState } from "react";
import { Easing } from "react-native-reanimated";
import { useAnimatedProps } from "react-native-reanimated";
import { camelCaseToNormal } from "@src/functions";

type BottomFloatHelpMessageReduxProps = ConnectedProps<typeof connector>

interface BottomFloatHelpMessageProps extends BottomFloatHelpMessageReduxProps {}

const duration = 1000;
const fontSize = Platform.OS === "ios" ? 20 : 18;

const BottomFloatHelpMessage: React.FC<BottomFloatHelpMessageProps> = ({
  bottomFloatHelpMessage,
  hasUnsavedChanges,
}) => {

  const [ visible, setVisible ] = useState(false);

  const animatedOpacity = useDerivedValue(
    () => (
      visible ? 
        1 :
        withTiming(0, {
          duration,
          easing: Easing.ease
        })
    ),
    [visible]
  );

  const animatedStyle = useAnimatedProps(
    () => ({
      opacity: animatedOpacity.value
    }),
    [animatedOpacity]
  );

  useEffect(
    () => {
      let delayedAnimationId: NodeJS.Timeout | null = null;
      if (bottomFloatHelpMessage === null) {
        setVisible(false);
      } else {
        setVisible(true);
        delayedAnimationId = setTimeout(() => {
          setVisible(false);
        }, duration);
      }
      return () => {
        if (delayedAnimationId) clearTimeout(delayedAnimationId);
      };
    },
    [bottomFloatHelpMessage]
  );

  if (
    bottomFloatHelpMessage === null &&
    !hasUnsavedChanges
  ) {
    return (
      <View style={styles.root}>
        <Text style={styles.text}>{`화면을${Platform.OS === "android" ? " 더블 " : " "}탭하여 새 오브젝트를 만들 수 있어요!`}</Text>
      </View>
    );
  }

  return (
    <Animated.View 
      style={[styles.root, animatedStyle]}
    >
      <Text style={styles.text}>{camelCaseToNormal(bottomFloatHelpMessage)}</Text>
    </Animated.View>
  );
};

const mapStateToProps = (state: RootState) => ({
  bottomFloatHelpMessage: state.editor.generic.bottomFloatHelpMessage,
  hasUnsavedChanges: state.editor.generic.hasUnsavedChanges,
});

const connector = connect(mapStateToProps, {});

export default connector(BottomFloatHelpMessage);

const styles = StyleSheet.create({
  root: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: 5
  },
  text: {
    fontWeight: "bold",
    color: "white",
    textShadowColor: "black",
    textShadowOffset: {
      width: 0,
      height: 0
    },
    textShadowRadius: 9,
    textAlign: "center",
    fontSize
  },
});
