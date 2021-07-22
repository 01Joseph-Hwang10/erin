import { Erin } from "erin";
import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import Placeholder from "./workspace/erin-components/placeholder";
import ErinText from "./workspace/erin-components/text/text";
import Stickers from "./workspace/erin-components/stickers/stickers";
import ErrorComponent from "./workspace/erin-components/error-component";
import { Dispatch } from "redux";
import { 
  setNullComponent,
  SetNullComponentInput,
  setPushComponent, 
  SetPushComponentInput, 
} from "@slices/editor/editor-handle";
import { connect, ConnectedProps } from "react-redux";
import RNShake from "react-native-shake";
import { setHasUnsavedChanges, SetHasUnsavedChanges } from "@slices/editor/editor-generic";
import { RootState } from "@redux/root-reducer";

type LayerReduxProps = ConnectedProps<typeof connector>

interface LayerProps extends LayerReduxProps {
    layer: Erin.Editor.Layer
}

interface LayerState extends Erin.Editor.Layer {}

class Layer extends Component<LayerProps, LayerState> {

    public state: LayerState = this.props.layer

    private resetLayer = () => {
      this.setState({
        components: [],
        autoZIndex: 2,
      });
    }

    public pushComponent = (component: Omit<Erin.Editor.ComponentInterface, "id">): void => {
      this.setState(prevState => ({
        components: [
          ...prevState.components, 
          {
            ...component,
            id: prevState.components.length,
          }
        ],
        autoZIndex: prevState.autoZIndex + 1
      }));
    }

    public nullCopmonent = (componentIndex: number) => {
      this.setState(prevState => ({
        components: [
          ...prevState.components.slice(0, componentIndex),
          null,
          ...prevState.components.slice(componentIndex + 1)
        ]
      }));
    }

    // private readComponent = (componentIndex: number): 
    // Erin.Editor.ComponentInterface | null => 
    // this.state.components[componentIndex]

    componentDidMount() {
      this.props.setPushComponent(this.pushComponent);
      this.props.setNullComponent(this.nullCopmonent);
      RNShake.addListener(this.resetLayer);
    }

    componentDidUpdate = (_: LayerProps, prevState: LayerState) => {
      if (!this.props.hasUnsavedChanges && JSON.stringify(prevState) !== JSON.stringify(this.state)) {
        this.props.setHasUnsavedChanges(true);
      }
    }

    componentWillUnmount() {
      RNShake.removeAllListeners();
    }

    render(): React.ReactNode {
      return (
        <View style={styles.root}>
          {
            this.state.components.map((component, index) => {
              if (component === null) {
                return <Placeholder key={index} />;
              } else {
                switch (component.type) {
                case "text":
                  return <ErinText 
                    key={index} 
                    id={component.id}
                    zIndex={this.state.autoZIndex}
                  />;
                case "sticker":
                  return <Stickers key={index} />;
                default:
                  return <ErrorComponent key={index} />;
                }
              }
            })
          }
        </View>
      );
    }
}

const mapStateToProps = (state: RootState) => {
  return {
    hasUnsavedChanges: state.editor.generic.hasUnsavedChanges
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setPushComponent: (payload: SetPushComponentInput) => dispatch(setPushComponent(payload)),
    setNullComponent: (payload: SetNullComponentInput) => dispatch(setNullComponent(payload)),
    setHasUnsavedChanges: (payload: SetHasUnsavedChanges) => dispatch(setHasUnsavedChanges(payload))
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Layer);


const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
  }
});
