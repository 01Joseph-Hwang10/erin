import React from "react";
import { useRef } from "react";
import SwitchButton, { SwitchButton as SwitchButtonComponent } from "../../base/switch-button";
import { RootState } from "../../../../redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";
import { useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { toggleTextAnimationState } from "@slices/editor/editor-states";
import { textAnimationTypeToIndex } from "./text-animation.function";
import { textAnimationTypes } from "./text-animation.data";

type TextAnimationReduxProps = ConnectedProps<typeof connector>

interface TextAnimationProps extends TextAnimationReduxProps {}

const iconColor = "white";

const TextAnimation: React.FC<TextAnimationProps> = ({
  iconSize,
  toggleTextAnimation,
  textAnimationType
}) => {

  const icon = () => (
    <MaterialIcons size={iconSize} color={iconColor} name="animation" />
  );

  const buttonRef = useRef<SwitchButtonComponent>(null);

  const onPress = () => {
    toggleTextAnimation();
    buttonRef.current?.toggleItem();
  };

  useEffect(
    () => {
      buttonRef.current?.setItemIndex(textAnimationTypeToIndex(textAnimationType));
    },
    []
  );

  return <SwitchButton 
    ref={buttonRef}
    onPress={onPress}
    icon={icon}
    itemKeys={textAnimationTypes}
  />;
};

const mapStateToProps = (state: RootState) => {
  return {
    iconSize: state.editor.generic.settings.iconSize,
    textAnimationType: state.editor.states.textAnimationType
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleTextAnimation: () => dispatch(toggleTextAnimationState()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(TextAnimation);
