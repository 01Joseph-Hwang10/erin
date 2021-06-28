import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "../../redux/root-reducer";
import { setBottomTabCurrent, SetBottomTabCurrentInput } from "../../redux/slices/editor/editor-generic";
import { HandlerStateChangeEvent, TapGestureHandler, TapGestureHandlerEventPayload } from "react-native-gesture-handler";
import { StyleProp } from "react-native";
import { SetCreationPointInput } from "@slices/editor/editor-handle";
import { setCreationPoint } from "@slices/editor/editor-handle";

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

  private creationPointStyle: StyleProp<ViewStyle> = {
    position: "absolute",
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "red"
  }

  render(): React.ReactNode {

    const {
      creationPoint: {
        x, y
      }
    } = this.props;

    return (
      <TapGestureHandler
        onHandlerStateChange={this.updateCreationPoint}
      >
        <View
          style={styles.root}
        >
          {
            x && y && (
              <View style={[this.creationPointStyle, { top: y, left: x }]}></View>
            )
          }
        </View>
      </TapGestureHandler>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    animationMode: state.editor.animation.animationMode,
    creationPoint: state.editor.handle.creationPoint
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
  }
});