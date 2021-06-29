import React, { useState, useEffect } from "react";
import { BackHandler, StyleSheet } from "react-native";
import { View, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomTab from "../components/editor/bottom-tab";
import Workspace from "../components/editor/workspace";
import TopFloat from "../components/editor/top-float";
import BottomFloat from "../components/editor/bottom-float";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../layout/mobile-layout";
import { voidFunction } from "../src/constants";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";
import { setCurrentPage, SetCurrentPageInput, setPopAtEditor, SetPopAtEditorInput } from "../redux/slices/navigation";
import { setLoading, SetLoadingInput } from "../redux/slices/app-state";
import COLORS from "../src/colors";


type EditorNavigationProp = StackNavigationProp<
  StackParamList,
  "editor"
>

type EditorReduxProps = ConnectedProps<typeof connector>

interface EditorProps extends EditorReduxProps {
  navigation: EditorNavigationProp
}

const Editor: React.FC<EditorProps> = ({
  navigation,
  setCurrentPage: SetCurrentPage,
  setPopAtEditor: SetPopAtEditor,
  setLoading: SetLoading
}) => {

  const [ firstAccess, setFirstAccess ] = useState(true);
  const hasUnsavedChanges = true; // Temporal value

  const handleConfirm = () => {
    navigation.pop();
  };

  useEffect(() => {
    if (firstAccess) {
      SetCurrentPage("editor");
      SetPopAtEditor(handleConfirm);
      setFirstAccess(false);
      SetLoading(false);
    }
    const backHandler = () => {
      if (hasUnsavedChanges) {
        Alert.alert(
          "Erin",
          "변경사항을 저장하지 않았어요! 정말 나가도 괜찮으시겠어요?",
          [
            { 
              text: "아니요", 
              style: "cancel", 
              onPress: voidFunction
            },
            {
              text: "예",
              style: "destructive",
              // If the user confirmed, then we dispatch the action we blocked earlier
              // This will continue the action that had triggered the removal of the screen
              onPress: handleConfirm,
            },
          ]
        );
      } else {
        handleConfirm();
      }
      return true;
    };
    BackHandler.addEventListener("hardwareBackPress", backHandler);
    return () => BackHandler.removeEventListener("hardwareBackPress", backHandler);
  }, [hasUnsavedChanges]
  );

  return (
    <>
      <SafeAreaView style={styles.safeFirst} />
      <SafeAreaView style={styles.safeSecond}>
        <View style={styles.root}>
          <View style={styles.workspaceWrapper}>
            <Workspace />
            <View style={styles.floatWrapper}>
              <TopFloat />
              <BottomFloat />
            </View>
          </View>
          <View style={styles.toolbarWrapper}>
            <BottomTab />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};


const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setCurrentPage: (payload: SetCurrentPageInput) => dispatch(setCurrentPage(payload)),
    setPopAtEditor: (payload: SetPopAtEditorInput) => dispatch(setPopAtEditor(payload)),
    setLoading: (payload: SetLoadingInput) => dispatch(setLoading(payload))
  };
};

const connector = connect(null, mapDispatchToProps);

// export default React.memo(Editor);
export default connector(Editor);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: "100%"
  },
  floatWrapper: {
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0
  },
  toolbarWrapper: {
    flex: 1
  },
  workspaceWrapper: {
    flex: 8,
  },
  safeFirst: {
    flex: 0,
    backgroundColor: COLORS.LIGHT.secondary,
  },
  safeSecond: {
    flex: 1,
    backgroundColor: COLORS.LIGHT.secondary,
  }
});