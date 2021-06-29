import { Erin } from "erin";
import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import Shape from "./bottom-tab/shape-member/shape";
import Placeholder from "./workspace/erin-components/placeholder";
import ErinText from "./workspace/erin-components/text/text";
import Stickers from "./workspace/erin-components/stickers/stickers";
import ErrorComponent from "./workspace/erin-components/error-component";
import { Dispatch } from "redux";
import { setPushComponent, SetPushComponentInput } from "@slices/editor/editor-handle";
import { connect, ConnectedProps } from "react-redux";
import RNShake from "react-native-shake";

type PageReduxProps = ConnectedProps<typeof connector>

interface PageProps extends PageReduxProps {
    page: Erin.Editor.Page
}

interface PageState extends Erin.Editor.Page {}

class Page extends Component<PageProps, PageState> {

    public state: PageState = this.props.page

    private resetPage = () => {
      this.setState({
        components: [],
        animations: [],
        autoZIndex: 2,
      });
    }

    public pushComponent = (component: Omit<Erin.Editor.ComponentInterface, "id" | "zIndex">): void => {
      this.setState(prevState => ({
        components: [
          ...prevState.components, 
          {
            ...component,
            id: prevState.components.length,
            zIndex: prevState.autoZIndex
          }
        ],
        autoZIndex: prevState.autoZIndex + 1
      }));
    }

    private nullCopmonent = (componentIndex: number) => {
      this.setState(prevState => ({
        components: [
          ...prevState.components.slice(0, componentIndex),
          null,
          ...prevState.components.slice(componentIndex + 1)
        ]
      }));
    }

    componentDidMount() {
      this.props.setPushComponent(this.pushComponent);
      RNShake.addListener(this.resetPage);
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
                case "shape":
                  return <Shape key={index} />;
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

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setPushComponent: (payload: SetPushComponentInput) => dispatch(setPushComponent(payload))
  };
};

const connector = connect(null, mapDispatchToProps);

export default connector(Page);


const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
  }
});
