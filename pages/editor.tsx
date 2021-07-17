import React from "react";
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
import { RootState } from "@redux/root-reducer";
import { setHasUnsavedChanges, SetHasUnsavedChanges } from "@slices/editor/editor-generic";
import TextAnimationContext, { AnimatedText, AnimatedTextWrapper } from "@components/editor/workspace/erin-components/text/text-animation";
import BottomFloatHelpMessage from "@components/editor/bottom-float/help-message";


type EditorNavigationProp = StackNavigationProp<
  StackParamList,
  "editor"
>

type EditorReduxProps = ConnectedProps<typeof connector>

interface EditorProps extends EditorReduxProps {
  navigation: EditorNavigationProp
}

class Editor extends React.Component<EditorProps> {


  private handleConfirm = () => {
    this.props.navigation.pop();
  };

  private backHandler = () => {
    if (this.props.hasUnsavedChanges) {
      Alert.alert(
        "Erin",
        "변경사항을 저장하지 않았어요! 정말 나가도 괜찮으시겠어요?",
        [
          { 
            text: "아니요", 
            style: "cancel", 
            onPress: voidFunction,
          },
          {
            text: "예",
            style: "destructive",
            // If the user confirmed, then we dispatch the action we blocked earlier
            // This will continue the action that had triggered the removal of the screen
            onPress: this.handleConfirm,
          },
        ]
      );
    } else {
      this.handleConfirm();
    }
    return true;
  };

  componentDidMount = () => {
    this.props.setCurrentPage("editor");
    this.props.setPopAtEditor(this.handleConfirm);
    this.props.setLoading(false);
    this.props.setHasUnsavedChanges(false);
    BackHandler.addEventListener("hardwareBackPress", this.backHandler);
  }

  componentDidUpdate = (prevProps: EditorProps) => {
    if (prevProps.hasUnsavedChanges !== this.props.hasUnsavedChanges) {
      BackHandler.addEventListener("hardwareBackPress", this.backHandler);
    }
  }

  componentWillUnmount = () => {
    BackHandler.removeEventListener("hardwareBackPress", this.backHandler);
  }

  private contextProviderValue = {
    AnimatedText,
    AnimatedTextWrapper
  }

  render = () => {
    return (
      <TextAnimationContext.Provider value={this.contextProviderValue}>
        <SafeAreaView style={styles.safeFirst} />
        <SafeAreaView style={styles.safeSecond}>
          <View style={styles.root}>
            <View style={styles.workspaceWrapper}>
              <Workspace />
              <View style={styles.floatWrapper}>
                <View style={styles.floatbox}>
                  <View style={styles.floatWrapperWrapper}>
                    <TopFloat />
                  </View>
                  <View style={styles.floatWrapperWrapper}>
                    <BottomFloatHelpMessage />
                    <BottomFloat />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.toolbarWrapper}>
              <BottomTab />
            </View>
          </View>
        </SafeAreaView>
      </TextAnimationContext.Provider>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    workspaceHeight: state.editor.generic.workspaceSpec.height,
    stringifiedPages: JSON.stringify(state.editor.layer.layer),
    hasUnsavedChanges: state.editor.generic.hasUnsavedChanges
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setCurrentPage: (payload: SetCurrentPageInput) => dispatch(setCurrentPage(payload)),
    setPopAtEditor: (payload: SetPopAtEditorInput) => dispatch(setPopAtEditor(payload)),
    setLoading: (payload: SetLoadingInput) => dispatch(setLoading(payload)),
    setHasUnsavedChanges: (payload: SetHasUnsavedChanges) => dispatch(setHasUnsavedChanges(payload))
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

// export default React.memo(Editor);
export default connector(Editor);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: "100%"
  },
  floatWrapper: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,  
    width: "100%",
    height: "100%",
    zIndex: 9999
  },
  floatbox: {
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  floatWrapperWrapper: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  toolbarWrapper: {
    flex: 1,
    zIndex: 9999
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