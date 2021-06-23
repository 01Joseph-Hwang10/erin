import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";


class BottomFloat extends React.Component {

  render(): React.ReactNode {
    return (
      <View style={styles.root}></View>
    );
  }
}

export default BottomFloat;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999
  }
});