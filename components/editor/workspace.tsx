import React from "react";
import { StyleSheet, View } from "react-native";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "../../redux/root-reducer";
import { setBottomTabCurrent, SetBottomTabCurrentInput } from "../../redux/slices/editor/editor-generic";
import { HandlerStateChangeEvent, TapGestureHandler, TapGestureHandlerEventPayload } from "react-native-gesture-handler";
import { SetCreationPointInput } from "@slices/editor/editor-handle";
import { setCreationPoint } from "@slices/editor/editor-handle";
import CreationPoint from "@components/editor/workspace/creation-point";
import Page from "./page";

type WorkspaceReduxProps = ConnectedProps<typeof connector>

interface WorkspaceProps extends WorkspaceReduxProps {}

interface WorkspaceState {}

class Workspace extends React.Component<WorkspaceProps, WorkspaceState> {

  public setToCreateMode = (): void => {
    if (!this.props.animationMode) {
      this.props.setBottomTabCurrent("create");
    }
  }

  private updateCreationPoint = (
    { nativeEvent: { x, y } }: 
      HandlerStateChangeEvent<TapGestureHandlerEventPayload>): void => {
    this.setToCreateMode();
    this.props.setCreationPoint({ x, y });
  }

  render(): React.ReactNode {

    const {
      creationPoint: {
        x, y
      },
      pages,
      currentPage
    } = this.props;

    return (
      <TapGestureHandler
        onHandlerStateChange={this.updateCreationPoint}
      >
        <View style={styles.root}>
          {
            x && y && 
            <CreationPoint 
              posX={x}
              posY={y}
            />
          }
          <Page page={pages[currentPage-1]} />
        </View>
      </TapGestureHandler>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    animationMode: state.editor.animation.animationMode,
    creationPoint: state.editor.handle.creationPoint,
    pages: state.editor.pages.pages,
    currentPage: state.editor.pages.currentPage
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setBottomTabCurrent: (payload: SetBottomTabCurrentInput) => dispatch(setBottomTabCurrent(payload)),
    setCreationPoint: (payload: SetCreationPointInput) => dispatch(setCreationPoint(payload))
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Workspace);

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
  },
});