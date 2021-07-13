import React from "react";
import { useRef } from "react";
import ToggleButton from "../../base/toggle-button";
import { RootState } from "../../../../redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";
import { CircularFrameProps } from "@components/common/circular-frame";

type TextAnimationReduxProps = ConnectedProps<typeof connector>

interface TextAnimationProps extends TextAnimationReduxProps {}

const TextAnimation: React.FC<TextAnimationProps> = ({
  iconSize,
}) => {

  /* Effect wanna add: neon, blink, typing, fade in */
  const icons: JSX.Element[] = [];

  const circularFrameProps: CircularFrameProps = {
    size: iconSize,
    border: true,
    borderColor: "white",
    borderWidth: 2.5,
    backgroundColor: "transparent"
  };

  const buttonRef = useRef<ToggleButton>(null);

  const onPress = () => {};

  return <ToggleButton 
    ref={buttonRef}
    onPress={onPress}
    icons={icons}
    enableCircularFrame={true}
    circularFrameProps={circularFrameProps}
  />;
};

const mapStateToProps = (state: RootState) => {
  return {
    iconSize: state.editor.generic.settings.iconSize,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(TextAnimation);
