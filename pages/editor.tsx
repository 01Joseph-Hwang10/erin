import React, { Component } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

class Editor extends Component {
  render(): React.ReactNode {
    return (
      <SafeAreaView>
        <Text>Editor</Text>
      </SafeAreaView>
    );
  }
}

export default Editor;
