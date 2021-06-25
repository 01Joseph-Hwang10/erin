import React from "react";
import { Foundation } from "@expo/vector-icons";
import PressButton from "../../base/press-button";
import { RootState } from "../../../../redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";
import { ICON_COLOR } from "../../base/constants"

type CopyPageReduxProps = ConnectedProps<typeof connector>

interface CopyPageProps extends CopyPageReduxProps {}

const CopyPage: React.FC<CopyPageProps> = ({
  iconSize
}) => {

  const renderIcon = () => (
    <Foundation name="page-copy" size={iconSize} color={ICON_COLOR} />
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

export default connector(CopyPage);
