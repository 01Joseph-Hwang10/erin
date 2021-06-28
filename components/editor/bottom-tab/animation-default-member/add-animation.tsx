import React from "react";
import { Ionicons } from "@expo/vector-icons";
import PressButton from "../../base/press-button";
import { RootState } from "../../../../redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";
import { ICON_COLOR } from "../../base/constants";

type AddAnimationReduxProps = ConnectedProps<typeof connector>

interface AddAnimationProps extends AddAnimationReduxProps {}

const AddAnimation: React.FC<AddAnimationProps> = ({
  iconSize
}) => {

  const renderIcon = () => (
    <Ionicons name="add-circle-outline" size={iconSize} color={ICON_COLOR} />
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
  };
};

const connector = connect(mapStateToProps, { });

export default connector(AddAnimation);
