import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { RootState } from "../../../../redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";
import { ICON_COLOR } from "../../base/constants";
import PressButton from "../../base/press-button";

type CreateStickerReduxProps = ConnectedProps<typeof connector>

interface CreateStickerProps extends CreateStickerReduxProps {}

const CreateSticker: React.FC<CreateStickerProps> = ({
  iconSize
}) => {

  const renderIcon = () => (
    <MaterialCommunityIcons name="sticker-emoji" size={iconSize} color={ICON_COLOR} />
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
  };
};

const connector = connect(mapStateToProps, { });

export default connector(CreateSticker);
