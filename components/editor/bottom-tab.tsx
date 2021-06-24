import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import { StyleSheet, View } from "react-native";
import XButton from "../common/x-button";
import Placeholder from "./base/placeholder";
import CreateShape from "./bottom-tab/create-member/create-shape";
import CreateText from "./bottom-tab/create-member/create-text";
import Background from "./bottom-tab/default-member/background";
import Music from "./bottom-tab/default-member/music";
import Save from "./bottom-tab/default-member/save";
import Send from "./bottom-tab/default-member/send";
import ToggleToAnimation from "./bottom-tab/default-member/toggle-to-animation";
import Shape from "./bottom-tab/shape-member/shape";
import ShapeColor from "./bottom-tab/shape-member/shape-color";
import ShapePattern from "./bottom-tab/shape-member/shape-pattern";
import FontColor from "./bottom-tab/text-member/font-color";
import FontStyle from "./bottom-tab/text-member/font-style";
import CheckButton from "../common/check-button";
import ToggleToDefault from "./bottom-tab/animation-default-member/toggle-to-default";
import AddAnimation from "./bottom-tab/animation-default-member/add-animation";
import DeleteAnimation from "./bottom-tab/animation-default-member/delete-animation";
import TestAnimation from "./bottom-tab/animation-default-member/test-animation";
import AnimationType from "./bottom-tab/animation-config-member/animation-type";
import AnimationTrigger from "./bottom-tab/animation-config-member/animation-trigger";
import TimeDial from "./bottom-tab/animation-config-member/time-dial";

type BottomTabReduxProps = ConnectedProps<typeof connector>

interface BottomTabProps extends BottomTabReduxProps {}

type NullableComponent = JSX.Element | null
type NullableComponentList = NullableComponent[]

const voidFunction = () => {
  // do sth
};

const iconMembers: Record<string, NullableComponentList> = {
  defaultMembers: [
    <ToggleToAnimation key={0} />,
    <Background key={1} />,
    <Music key={2} />,
    null,
    null,
    <Save key={5} />,
    <Send key={6} />
  ],
  createMembers: [
    <CreateShape key={0} />,
    <CreateText key={1} />,
    null,
    null,
    null,
    null,
    <XButton key={6} onPress={voidFunction} />,
  ],
  shapeMembers: [
    <Shape key={0} />,
    <ShapeColor key={1} />,
    <ShapePattern key={2} />,
    null,
    null,
    null,
    <CheckButton key={6} onPress={voidFunction} />,
  ],
  textMembers: [
    <FontColor key={0} />,
    <FontStyle key={1} />,
    null,
    null,
    null,
    null,
    <CheckButton key={6} onPress={voidFunction} />
  ],
  animationDefaultMembers: [
    <ToggleToDefault key={0} />,
    <AddAnimation key={1} />,
    <DeleteAnimation key={2} />,
    null,
    null,
    null,
    <TestAnimation key={6} />
  ],
  animationConfigMembers: [
    <AnimationType key={0} />,
    <AnimationTrigger key={1} />,
    <TimeDial key={"2-4"} />,
    null,
    <CheckButton key={6} onPress={voidFunction} />
  ]
};

const BottomTab: React.FC<BottomTabProps> = ({
  bottomTabCurrent
}) => {

  return <View style={styles.root}>
    {
      iconMembers[bottomTabCurrent].map((member, index) => {
        if (member) return <React.Fragment key={index}>{member}</React.Fragment>;
        return <Placeholder key={index} />;
      })
    }
  </View>;
    
};


const mapStateToProps = (state: RootState) => {
  return {
    bottomTabCurrent: state.editor.bottomTabCurrent
  };
};

const connector = connect(mapStateToProps, {});

export default React.memo(connector(BottomTab));


const styles = StyleSheet.create({
  root: {
    backgroundColor: "black",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});