import React from "react";
import { Feather } from "@expo/vector-icons";
import PressButton from "../../base/press-button";
import { RootState } from "../../../../redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";
import { ICON_COLOR } from "../../base/constants";

type LinkComponentToLayerReduxProps = ConnectedProps<typeof connector>

interface LinkComponentToLayerProps extends LinkComponentToLayerReduxProps {}

const LinkComponentToLayer: React.FC<LinkComponentToLayerProps> = ({
  iconSize
}) => {

  const renderIcon = () => (
    <Feather name="link" size={iconSize} color={ICON_COLOR} />
  );

  const onPress = () => {
    // Needa do sth here
  };
  
  return <PressButton 
    icon={renderIcon}
    onPress={onPress}
    topFloatHelpMessage={"특정 레이어로 연결합니다"}
  />;
};

const mapStateToProps = (state: RootState) => {
  return {
    iconSize: state.editor.generic.settings.iconSize,
  };
};

const connector = connect(mapStateToProps, { });

export default connector(LinkComponentToLayer);
