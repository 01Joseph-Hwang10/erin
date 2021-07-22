import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { RootState } from "../../../../redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";
import { ICON_COLOR } from "../../base/constants";
import PressButton from "../../base/press-button";
import { Dispatch } from "redux";
import { setBottomDrawerCurrent, SetBottomDrawerCurrentInput } from "@slices/editor/editor-generic";

type CreateStickerReduxProps = ConnectedProps<typeof connector>

interface CreateStickerProps extends CreateStickerReduxProps {}

const CreateSticker: React.FC<CreateStickerProps> = ({
  iconSize,
  setBottomDrawerCurrent: SetBottomDrawerCurrent
}) => {

  const renderIcon = () => (
    <MaterialCommunityIcons name="sticker-emoji" size={iconSize} color={ICON_COLOR} />
  );

  const onPress = () => {
    SetBottomDrawerCurrent("stickerList");
  };
  
  return <PressButton 
    icon={renderIcon}
    onPress={onPress}
    bottomFloatHelpMessage={"스티커를 만듭니다"}
  />;
};

const mapStateToProps = (state: RootState) => {
  return {
    iconSize: state.editor.generic.settings.iconSize,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setBottomDrawerCurrent: (payload: SetBottomDrawerCurrentInput) => dispatch(setBottomDrawerCurrent(payload))
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(CreateSticker);
