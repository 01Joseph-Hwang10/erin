import React from "react";
import { Entypo } from "@expo/vector-icons";
import PressButton from "../../base/press-button";
import { RootState } from "../../../../redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";
import { ICON_COLOR } from "../../base/constants";

type ResizeReduxProps = ConnectedProps<typeof connector>

interface ResizeProps extends ResizeReduxProps {}

const Resize: React.FC<ResizeProps> = ({
  iconSize
}) => {

  const renderIcon = () => (
    <Entypo name="resize-100-" size={iconSize} color={ICON_COLOR} />
  );

  const onPress = () => {
    // Needa do sth here
  };
  
  return <PressButton 
    icon={renderIcon}
    onPress={onPress}
    topFloatHelpMessage={"오브젝트의 크기를 조절합니다"}
  />;
};

const mapStateToProps = (state: RootState) => {
  return {
    iconSize: state.editor.generic.settings.iconSize,
  };
};

const connector = connect(mapStateToProps, { });

export default connector(Resize);
