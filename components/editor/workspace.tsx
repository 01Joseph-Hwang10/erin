import React from "react";
import {
  StyleSheet,
  View,
  LayoutChangeEvent,
  ViewStyle,
  Platform,
} from "react-native";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "../../redux/root-reducer";
import {
  setBottomFloatCurrent,
  SetBottomFloatCurrentInput,
  setBottomTabCurrent,
  SetBottomTabCurrentInput,
  setTopFloatCurrent,
  SetTopFloatCurrentInput,
  setWorkspaceSpec,
  SetWorkspaceSpecInput,
} from "../../redux/slices/editor/editor-generic";
import {
  TapGestureHandlerStateChangeEvent,
  TapGestureHandler,
  State,
} from "react-native-gesture-handler";
import {
  SetCreationPointInput,
  setFocusedComponent,
  SetFocusedComponentInput,
} from "@slices/editor/editor-handle";
import { setCreationPoint } from "@slices/editor/editor-handle";
import CreationPoint from "@components/editor/workspace/creation-point";
import Layer from "./layer";
import { SafeAreaInsetsContext } from "react-native-safe-area-context";
import { StyleProp } from "react-native";

type WorkspaceReduxProps = ConnectedProps<typeof connector>;

interface WorkspaceProps extends WorkspaceReduxProps {}

interface WorkspaceState {}

class Workspace extends React.Component<WorkspaceProps, WorkspaceState> {
  public setToCreateMode = (): void => {
    this.props.setFocusedComponent({
      focusedComponent: -1,
      focusedComponentType: "none",
    });
    this.props.setBottomTabCurrent("create");
    this.props.setBottomFloatCurrent("none");
  };

  private onTapHandlerStateChange = ({
    nativeEvent: { x, y, oldState },
  }: TapGestureHandlerStateChangeEvent): void => {
    if (oldState === State.ACTIVE) {
      if (!this.props.textOnEdit) {
        this.setToCreateMode();
        this.props.setCreationPoint({ x, y });
      }
    }
  };

  private onWorkspaceLayout = ({
    nativeEvent: {
      layout: { width, height },
    },
  }: LayoutChangeEvent) => {
    this.props.setWorkspaceSpec({ width, height });
  };

  componentDidUpdate(prevProps: WorkspaceProps) {
    if (prevProps.focusedComponentType !== this.props.focusedComponentType) {
      switch (this.props.focusedComponentType) {
        case "text": // eslint-disable-line
          this.props.setBottomTabCurrent("text"); // eslint-disable-line
          this.props.setTopFloatCurrent("text"); // eslint-disable-line
          break; // eslint-disable-line
        case "sticker": // eslint-disable-line
          this.props.setBottomTabCurrent("sticker"); // eslint-disable-line
          this.props.setTopFloatCurrent("sticker"); // eslint-disable-line
          break; // eslint-disable-line
        default: // eslint-disable-line
          this.props.setBottomTabCurrent("default"); // eslint-disable-line
          this.props.setTopFloatCurrent("default"); // eslint-disable-line
          break; // eslint-disable-line
      }
    }

    if (prevProps.bottomTabCurrent !== this.props.bottomTabCurrent) {
      this.props.setBottomTabCurrent(this.props.bottomTabCurrent);
    }

    if (prevProps.topFloatCurrent !== this.props.topFloatCurrent) {
      this.props.setTopFloatCurrent(this.props.topFloatCurrent);
    }

    if (
      prevProps.focusedComponent !== this.props.focusedComponent &&
      this.props.focusedComponent !== -1
    ) {
      this.props.setCreationPoint({ x: null, y: null });
    }
  }

  render(): React.ReactNode {
    const {
      creationPoint: { x, y },
      layer,
      currentLayer,
    } = this.props;

    return (
      <SafeAreaInsetsContext.Consumer>
        {(insets) => {
          const rootWrapperStyle: StyleProp<ViewStyle> = {
            paddingTop: insets?.top,
            // paddingBottom: insets?.bottom
          };
          return (
            <TapGestureHandler
              onHandlerStateChange={this.onTapHandlerStateChange}
              numberOfTaps={Platform.OS === "android" ? 2 : 1}
            >
              <View style={rootWrapperStyle}>
                <View style={styles.root} onLayout={this.onWorkspaceLayout}>
                  {x && y && <CreationPoint posX={x} posY={y} />}
                  <Layer layer={layer[currentLayer - 1]} />
                </View>
              </View>
            </TapGestureHandler>
          );
        }}
      </SafeAreaInsetsContext.Consumer>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    creationPoint: state.editor.handle.creationPoint,
    layer: state.editor.layer.layer,
    currentLayer: state.editor.layer.currentLayer,
    focusedComponentType: state.editor.handle.focusedComponentType,
    focusedComponent: state.editor.handle.focusedComponent,
    bottomTabCurrent: state.editor.generic.bottomTabCurrent,
    textOnEdit: state.editor.states.textOnEdit,
    topFloatCurrent: state.editor.generic.topFloatCurrent,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setBottomTabCurrent: (payload: SetBottomTabCurrentInput) =>
      dispatch(setBottomTabCurrent(payload)),
    setCreationPoint: (payload: SetCreationPointInput) =>
      dispatch(setCreationPoint(payload)),
    setBottomFloatCurrent: (payload: SetBottomFloatCurrentInput) =>
      dispatch(setBottomFloatCurrent(payload)),
    setWorkspaceSpec: (payload: SetWorkspaceSpecInput) =>
      dispatch(setWorkspaceSpec(payload)),
    setFocusedComponent: (payload: SetFocusedComponentInput) =>
      dispatch(setFocusedComponent(payload)),
    setTopFloatCurrent: (payload: SetTopFloatCurrentInput) =>
      dispatch(setTopFloatCurrent(payload)),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Workspace);

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
    zIndex: 1,
    // borderWidth: 2,
    // borderColor: "red"
  },
});
