import { Feather } from "@expo/vector-icons";
import React from "react";
import { RootState } from "../../../../redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";
import { ICON_COLOR } from "../../base/constants";
import PressButton from "../../base/press-button";

type CreateImageReduxProps = ConnectedProps<typeof connector>

interface CreateImageProps extends CreateImageReduxProps {}

const CreateImage: React.FC<CreateImageProps> = ({
  iconSize,
}) => {

  const renderIcon = () => (
    <Feather name="image" size={iconSize} color={ICON_COLOR} />
  );

  const onPress = () => {};
  
  return <PressButton 
    icon={renderIcon}
    onPress={onPress}
    bottomFloatHelpMessage={"이미지를 넣습니다"}
  />;
};

const mapStateToProps = (state: RootState) => {
  return {
    iconSize: state.editor.generic.settings.iconSize,
  };
};

const connector = connect(mapStateToProps);

export default connector(CreateImage);
