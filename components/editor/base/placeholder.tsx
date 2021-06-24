import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { ICON_SIZE } from "./contants";

const Placeholder: React.FC = () => {
  return (
    <View style={styles.root}></View>
  );
};

export default Placeholder;

const styles = StyleSheet.create({
  root: {
    width: ICON_SIZE,
    height: 1
  }
});
