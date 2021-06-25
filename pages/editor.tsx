import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { View, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomTab from "../components/editor/bottom-tab";
import Workspace from "../components/editor/workspace";
import TopFloat from "../components/editor/top-float";
import BottomFloat from "../components/editor/bottom-float";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../layout/mobile-layout";
import { voidFunction } from "../src/constants";


type EditorNavigationProp = StackNavigationProp<
  StackParamList,
  "editor"
>

interface EditorProps {
  navigation: EditorNavigationProp
}

const Editor: React.FC<EditorProps> = ({
  navigation
}) => {
  const [text, setText] = useState("");
  const hasUnsavedChanges = Boolean(text);

  React.useEffect(
    () =>{
      // @ts-ignore
      const backHandler = (e) => { // This should be definitely typed soon
        const actionDispatcher = () => navigation.dispatch(e.data.action);
        if (!hasUnsavedChanges) {
        // If we don't have unsaved changes, then we don't need to do anything
          return;
        }

        // Prevent default behavior of leaving the screen
        e.preventDefault();

        // Prompt the user before leaving the screen
        Alert.alert(
          "Discard changes?",
          "You have unsaved changes. Are you sure to discard them and leave the screen?",
          [
            { 
              text: "Don't leave", 
              style: "cancel", 
              onPress: voidFunction
            },
            {
              text: "Discard",
              style: "destructive",
              // If the user confirmed, then we dispatch the action we blocked earlier
              // This will continue the action that had triggered the removal of the screen
              onPress: actionDispatcher,
            },
          ]
        );
      };
      navigation.addListener("beforeRemove", backHandler);
    },
    [navigation, hasUnsavedChanges]
  );

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
};

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