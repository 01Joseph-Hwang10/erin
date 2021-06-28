import React from "react";
import PressButton from "../../base/press-button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RootState } from "../../../../redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";
import { ICON_COLOR } from "../../base/constants";

type ToggleToDefaultReduxProps = ConnectedProps<typeof connector>

interface ToggleToDefaultProps extends ToggleToDefaultReduxProps {}

const ToggleToDefault: React.FC<ToggleToDefaultProps> = ({
  iconSize
}) => {

  const renderIcon = () => (
    <MaterialCommunityIcons name="tools" size={iconSize} color={ICON_COLOR} />
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
  };
};

const connector = connect(mapStateToProps, { });

export default connector(ToggleToDefault);
