import { ICON_COLOR } from "@components/editor/base/constants";
import PressButton from "@components/editor/base/press-button";
import { Ionicons } from "@expo/vector-icons";
import { RootState } from "@redux/root-reducer";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import Placeholder from "@components/editor/base/placeholder";
import { onMountTextAnimations } from "../workspace/erin-components/text/text-animation/text-animation.data";
import { Dispatch } from "redux";
import { setAnimationInfiniteState, SetAnimationInfiniteStateInput } from "@slices/editor/editor-states";

type AnimationToggleInfiniteReduxProps = ConnectedProps<typeof connector>

interface AnimationToggleInfiniteProps extends AnimationToggleInfiniteReduxProps {}

const AnimationToggleInfinite: React.FC<AnimationToggleInfiniteProps> = ({
  iconSize,
  animationInfinite,
  focusedComponentType,
  textAnimationType,
  setAnimationInfinite
}) => {

  const renderIcon = () => (
    <Ionicons name="infinite" size={iconSize} color={animationInfinite ? "mediumorchid" : ICON_COLOR} />
  );

  const onPress = () => {
    setAnimationInfinite(!animationInfinite);
  };

  if (
    focusedComponentType === "text" &&
        onMountTextAnimations.includes(textAnimationType)
  ) {
    return (
      <PressButton 
        icon={renderIcon}
        onPress={onPress}
        bottomFloatHelpMessage={
          !animationInfinite ? // IDK why
            "애니메이션이 계속 실행됩니다" : 
            "애니메이션이 레이어의 시작과 끝에서만 실행됩니다"
        }
      />
    );
  }
    
  return <Placeholder />;
};

const mapStateToProps = (state: RootState) => ({
  iconSize: state.editor.generic.settings.iconSize,
  animationInfinite: state.editor.states.animationInfinite,
  focusedComponentType: state.editor.handle.focusedComponentType,
  textAnimationType: state.editor.states.textAnimationType
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setAnimationInfinite: (payload: SetAnimationInfiniteStateInput) => dispatch(setAnimationInfiniteState(payload))
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(AnimationToggleInfinite);
