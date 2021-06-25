import React from "react";
import { StyleSheet, View } from "react-native";


class Workspace extends React.Component {
  render(): React.ReactNode {
    return (
      <View style={styles.root}></View>
    );
  }
}

export default Workspace;

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
  }
});