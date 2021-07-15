import React from "react";
import { Foundation } from "@expo/vector-icons";
import PressButton from "../../base/press-button";
import { RootState } from "../../../../redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";
import { ICON_COLOR } from "../../base/constants";

type AddPageReduxProps = ConnectedProps<typeof connector>

interface AddPageProps extends AddPageReduxProps {}

const AddPage: React.FC<AddPageProps> = ({
  iconSize
}) => {

  const renderIcon = () => (
    <Foundation name="page-add" size={iconSize} color={ICON_COLOR} />
  );

  const onPress = () => {
    // Needa do sth here
  };
  
  return <PressButton 
    icon={renderIcon}
    onPress={onPress}
    helpMessage={"레이어를 추가합니다"}
  />;
};

const mapStateToProps = (state: RootState) => {
  return {
    iconSize: state.editor.generic.settings.iconSize,
  };
};

const connector = connect(mapStateToProps, { });

export default connector(AddPage);
