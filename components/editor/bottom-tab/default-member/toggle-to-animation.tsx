import React from "react";
import PressButton from "../../base/press-button";
import { MaterialIcons } from "@expo/vector-icons";
import { RootState } from "../../../../redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";
import { ICON_COLOR } from "../../base/constants"

type ToggleToAnimationReduxProps = ConnectedProps<typeof connector>

interface ToggleToAnimationProps extends ToggleToAnimationReduxProps {}

const ToggleToAnimation: React.FC<ToggleToAnimationProps> = ({
  iconSize
}) => {

  const renderIcon = () => (
    <MaterialIcons name="animation" size={iconSize} color={ICON_COLOR} />
  );

  const onPress = () => {
    // sth
  };

  return <PressButton 
    onPress={onPress}
    icon={renderIcon}
  />;
};

const mapStateToProps = (state: RootState) => {
  return {
    iconSize: state.editor.generic.settings.iconSize,
  }
}

const connector = connect(mapStateToProps, { });

export default connector(ToggleToAnimation);
