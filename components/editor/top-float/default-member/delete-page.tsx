import React from "react";
import { Foundation } from "@expo/vector-icons";
import PressButton from "../../base/press-button";
import { RootState } from "../../../../redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";
import { ICON_COLOR } from "../../base/constants"

type DeletePageReduxProps = ConnectedProps<typeof connector>

interface DeletePageProps extends DeletePageReduxProps {}

const DeletePage: React.FC<DeletePageProps> = ({
  iconSize
}) => {

  const renderIcon = () => (
    <Foundation name="page-delete" size={iconSize} color={ICON_COLOR} />
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
    iconSize: state.editor.generic.settings.iconSize,
  }
}

const connector = connect(mapStateToProps, { });

export default connector(DeletePage);
