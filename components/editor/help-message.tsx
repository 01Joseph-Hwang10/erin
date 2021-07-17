import { RootState } from "@redux/root-reducer";
import React, { useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import { connect, ConnectedProps } from "react-redux";
import Animated, { useDerivedValue, withTiming } from "react-native-reanimated";
import { useState } from "react";
import { Easing } from "react-native-reanimated";
import { useAnimatedProps } from "react-native-reanimated";
import { camelCaseToNormal } from "@src/functions";

type HelpMessageReduxProps = ConnectedProps<typeof connector>

interface HelpMessageProps extends HelpMessageReduxProps {}

const duration = 1000;
const fontSize = 24;

const HelpMessage: React.FC<HelpMessageProps> = ({
  helpMessage
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
      if (helpMessage === null) {
        setVisible(false);
      } else {
        setVisible(true);
        setTimeout(() => {
          setVisible(false);
        }, duration);
      }
    },
    [helpMessage]
  );

  return (
    <Animated.View 
      style={[styles.root, animatedStyle]}
    >
      <Text style={styles.text}>{camelCaseToNormal(helpMessage)}</Text>
    </Animated.View>
  );
};

const mapStateToProps = (state: RootState) => ({
  helpMessage: state.editor.generic.helpMessage
});

const connector = connect(mapStateToProps, {});

export default connector(HelpMessage);

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
  }
});
