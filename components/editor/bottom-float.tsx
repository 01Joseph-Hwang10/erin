import { RootState } from "@redux/root-reducer";
import React from "react";
import { View, StyleSheet } from "react-native";
import { connect, ConnectedProps } from "react-redux";
import AnimationTimeline from "./bottom-float/animation-timeline-members/animation-timeline";
import DeleteComponent from "./bottom-float/delete-members/delete-component";
import FontColorList from "./bottom-float/font-color-members/font-color-list";
import FontStyleList from "./bottom-float/font-style-members/font-style-list";

type BottomFloatReduxProps = ConnectedProps<typeof connector>

interface BottomFloatProps extends BottomFloatReduxProps {}

class BottomFloat extends React.Component<BottomFloatProps> {

  render(): React.ReactNode {
    switch (this.props.bottomFloatCurrent) {
    case "animationTimeline":
      return <AnimationTimeline />;
    case "deleteComponent":
      return <DeleteComponent />;
    case "fontColor":
      return <FontColorList />;
    case "fontStyle":
      return <FontStyleList />;
    default:
      return <View style={styles.root}></View>;
    }
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    bottomFloatCurrent: state.editor.generic.bottomFloatCurrent
  };
};

const connector = connect(mapStateToProps, {});

export default connector(BottomFloat);

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    width: "100%"
  }
});