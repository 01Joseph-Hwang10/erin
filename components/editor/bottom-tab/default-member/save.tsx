import React from "react";
import { Feather } from "@expo/vector-icons";
import PressButton from "../../base/press-button";
import { RootState } from "../../../../redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";
import { ICON_COLOR } from "../../base/constants"

type SaveReduxProps = ConnectedProps<typeof connector>

interface SaveProps extends SaveReduxProps {}

const Save: React.FC<SaveProps> = ({
  iconSize
}) => {

  const renderIcon = () => (
    <Feather name="save" size={iconSize} color={ICON_COLOR} />
  );

  const onPress = () => {
    // Needa do sth here
  };
  
  return <PressButton 
    icon={renderIcon}
    onPress={onPress}
  />;
};

const mapStateToProps = (state: RootState) => {
  return {
    iconSize: state.editor.settings.iconSize,
  }
}

const connector = connect(mapStateToProps, { });

export default connector(Save);
