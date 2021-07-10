import React from "react";
import { useRef } from "react";
import ToggleButton from "../../base/toggle-button";
import { RootState } from "../../../../redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";
import { toggleTextAlignState } from "@slices/editor/editor-states";
import { Feather } from "@expo/vector-icons";
import { useEffect } from "react";
import { textAlignToIndex } from "./text-align.function";

type ShapeReduxProps = ConnectedProps<typeof connector>

interface ShapeProps extends ShapeReduxProps {}


const Shape: React.FC<ShapeProps> = ({
  iconSize,
  toggleTextAlign,
  textAlign
}) => {

  const icons: JSX.Element[] = [
    <Feather key={0} name="align-justify" size={iconSize} color="white" />,
    <Feather key={1} name="align-center" size={iconSize} color="white" />,
    <Feather key={2} name="align-left" size={iconSize} color="white" />,
    <Feather key={3} name="align-right" size={iconSize} color="white" />,
  ];

  const buttonRef = useRef<ToggleButton>(null);

  const onPress = () => {
    toggleTextAlign();
    buttonRef.current?.toggleIcon();
  };

  useEffect(
    () => {
      buttonRef.current?.setIconIndex(textAlignToIndex(textAlign));
    },
    []
  );

  return <ToggleButton 
    ref={buttonRef}
    onPress={onPress}
    icons={icons}
  />;
};

const mapStateToProps = (state: RootState) => {
  return {
    iconSize: state.editor.generic.settings.iconSize,
    textAlign: state.editor.states.textAlign
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleTextAlign: () => dispatch(toggleTextAlignState())
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Shape);
