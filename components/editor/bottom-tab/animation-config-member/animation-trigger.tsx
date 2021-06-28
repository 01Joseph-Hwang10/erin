import React from "react";
import { useRef } from "react";
import ToggleButton from "../../base/toggle-button";
import { RootState } from "../../../../redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";
import { ICON_COLOR } from "../../base/constants";

type AnimationTriggerReduxProps = ConnectedProps<typeof connector>

interface AnimationTriggerProps extends AnimationTriggerReduxProps {}

const AnimationTrigger: React.FC<AnimationTriggerProps> = ({
  iconSize
}) => {

  const icons: JSX.Element[] = []; // You need to add animation triggers

  const buttonRef = useRef<ToggleButton>(null);

  const onPress = () => {
    // sth
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

const connector = connect(mapStateToProps, { });

export default connector(AnimationTrigger);
