import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomTab from "../components/editor/bottom-tab";
import Workspace from "../components/editor/workspace";
import TopFloat from "../components/editor/top-float";
import BottomFloat from "../components/editor/bottom-float";

class Editor extends Component {
  render(): React.ReactNode {

    // Workspace component is in absolute positioning
    return (
      <SafeAreaView style={styles.root}>
        <View style={styles.workspaceWrapper}>
          <Workspace />
          <TopFloat />
          <BottomFloat />
        </View>
        <View style={styles.toolbarWrapper}>
          <BottomTab />
        </View>
      </SafeAreaView>
    );
  }
}

// export default React.memo(Editor);
export default Editor;

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  workspaceWrapper: {
    flex: 8,
    justifyContent: "space-between",
    alignItems: "center"
  },
  toolbarWrapper: {
    flex: 1
  }
});