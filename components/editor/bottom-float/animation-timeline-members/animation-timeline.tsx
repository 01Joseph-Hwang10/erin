import { BOTTOM_MARGIN } from "@components/editor/base/constants";
import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";

const AnimationTimeline: React.FC = () => {
  return (
    <View style={styles.root}></View>
  );
};

export default AnimationTimeline;

const styles = StyleSheet.create({
  root: {
    paddingBottom: BOTTOM_MARGIN
  }
});
