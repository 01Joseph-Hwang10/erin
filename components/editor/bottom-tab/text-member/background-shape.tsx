import React from "react";
import { useRef } from "react";
import SwitchButton, { SwitchButton as SwitchButtonComponent } from "../../base/switch-button";
import { RootState } from "../../../../redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";
import { toggleBackgroundShapeState } from "@slices/editor/editor-states";
import { shapeToIndex } from "./background-shape.function";
import { useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { textBackgroundShapes } from "./background-shape.data";

type ShapeReduxProps = ConnectedProps<typeof connector>

interface ShapeProps extends ShapeReduxProps {}

const iconColor = "white";

const Shape: React.FC<ShapeProps> = ({
  iconSize,
  toggleBackgroundShape: ToggleBackgroundShape,
  backgroundShape
}) => {

  const icon = () => (
    <AntDesign size={iconSize} color={iconColor} name="star" />
  );

  const buttonRef = useRef<SwitchButtonComponent>(null);

  const onPress = () => {
    ToggleBackgroundShape();
    buttonRef.current?.toggleItem();
  };

  useEffect(
    () => {
      buttonRef.current?.setItemIndex(shapeToIndex(backgroundShape));
    },
    []
  );

  return <SwitchButton 
    ref={buttonRef}
    onPress={onPress}
    icon={icon}
    itemKeys={textBackgroundShapes}
  />;
};

const mapStateToProps = (state: RootState) => {
  return {
    iconSize: state.editor.generic.settings.iconSize,
    backgroundShape: state.editor.states.backgroundShape
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleBackgroundShape: () => dispatch(toggleBackgroundShapeState()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Shape);
