import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";


class BottomTab extends React.Component {

  render(): React.ReactNode {
    return (
      <View style={styles.root}></View>
    );
  }
}

export default BottomTab;

const styles = StyleSheet.create({
  root: {
    backgroundColor: "black",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});