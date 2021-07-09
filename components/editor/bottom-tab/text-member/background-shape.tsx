import React from "react";
import { useRef } from "react";
import ToggleButton from "../../base/toggle-button";
import { RootState } from "../../../../redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";
import { ICON_COLOR } from "../../base/constants";
import Rectangle from "@components/common/shapes/rectangle";
import Circle from "@components/common/shapes/circle";
import Triangle from "@components/common/shapes/triangle";
import Heart from "@components/common/shapes/heart";
import Star from "@components/common/shapes/star";
import { Dispatch } from "redux";
import { toggleBackgroundShapeState } from "@slices/editor/editor-states";
import None from "@components/common/shapes/none";

type ShapeReduxProps = ConnectedProps<typeof connector>

interface ShapeProps extends ShapeReduxProps {}

const iconColor = "grey";

const Shape: React.FC<ShapeProps> = ({
  iconSize,
  toggleBackgroundShape: ToggleBackgroundShape
}) => {

  /* Shapes I'll gonna make: rectangle, circle, heart, star, triangle */
  const icons: JSX.Element[] = [
    <None 
      key={0}
      size={iconSize}
      color={iconColor}
    />,
    <Rectangle 
      key={1}
      width={iconSize}
      height={iconSize}
      backgroundColor={iconColor}
    />,
    <Circle 
      key={2}
      size={iconSize}
      backgroundColor={iconColor}
    />,
    <Triangle 
      key={3}
      size={iconSize}
      backgroundColor={iconColor}
    />,
    <Heart 
      key={4}
      size={iconSize}
      backgroundColor={iconColor}
    />,
    <Star 
      key={5}
      size={iconSize}
      backgroundColor={iconColor}
    />
  ];

  const buttonRef = useRef<ToggleButton>(null);

  const onPress = () => {
    ToggleBackgroundShape();
    buttonRef.current?.toggleIcon();
  };

  return <ToggleButton 
    ref={buttonRef}
    onPress={onPress}
    icons={icons}
  />;
};

const mapStateToProps = (state: RootState) => {
  return {
    iconSize: state.editor.generic.settings.iconSize,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleBackgroundShape: () => dispatch(toggleBackgroundShapeState())
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Shape);
