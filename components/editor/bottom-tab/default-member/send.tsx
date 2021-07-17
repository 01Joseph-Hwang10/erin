import React from "react";
import { Feather } from "@expo/vector-icons";
import PressButton from "../../base/press-button";
import { RootState } from "../../../../redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";
import { ICON_COLOR } from "../../base/constants";

type SendReduxProps = ConnectedProps<typeof connector>

interface SendProps extends SendReduxProps {}

const Send: React.FC<SendProps> = ({
  iconSize
}) => {

  const renderIcon = () => (
    <Feather name="send" size={iconSize} color={ICON_COLOR} />
  );

  const onPress = () => {
    // Needa do sth here
  };
  
  return <PressButton 
    icon={renderIcon}
    onPress={onPress}
    bottomFloatHelpMessage={"편지지를 친구에게 보냅니다"}
  />;
};

const mapStateToProps = (state: RootState) => {
  return {
    iconSize: state.editor.generic.settings.iconSize,
  };
};

const connector = connect(mapStateToProps, { });

export default connector(Send);
