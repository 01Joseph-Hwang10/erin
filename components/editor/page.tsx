import { Erin } from "erin";
import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import Shape from "./bottom-tab/shape-member/shape";
import Placeholder from "./workspace/erin-components/placeholder";
import ErinText from "./workspace/erin-components/text/text";
import Stickers from "./workspace/erin-components/stickers/stickers";
import ErrorComponent from "./workspace/erin-components/error-component";

interface PageProps {
    page: Erin.Editor.Page
}

interface PageState extends Erin.Editor.Page {}

class Page extends Component<PageProps, PageState> {

    public state = this.props.page

    private pushComponent = (component: Erin.Editor.Component) => {
      this.setState(prevState => ({
        components: [...prevState.components, component]
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
                  return <ErinText key={index} />;
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

export default Page;


const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
  }
});
