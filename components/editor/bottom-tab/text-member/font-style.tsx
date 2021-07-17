import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { RootState } from "../../../../redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";
import { ICON_COLOR } from "../../base/constants";
import PressButton from "../../base/press-button";
import { Dispatch } from "redux";
import { setBottomFloatCurrent, SetBottomFloatCurrentInput } from "@slices/editor/editor-generic";

type FontStyleReduxProps = ConnectedProps<typeof connector>

interface FontStyleProps extends FontStyleReduxProps {}

const FontStyle: React.FC<FontStyleProps> = ({
  iconSize,
  bottomFloatCurrent,
  setBottomFloatCurrent: SetBottomFloatCurrent
}) => {

  const renderIcon = () => (
    <FontAwesome5 name="font" size={iconSize} color={ICON_COLOR} />
  );

  const onPress = () => {
    if (bottomFloatCurrent === "fontStyle") {
      SetBottomFloatCurrent("none");
    } else {
      SetBottomFloatCurrent("fontStyle");
    }
  };
  
  return <PressButton 
    icon={renderIcon}
    onPress={onPress}
    bottomFloatHelpMessage={"텍스트의 폰트를 정합니다"}
  />;
};

const mapStateToProps = (state: RootState) => {
  return {
    iconSize: state.editor.generic.settings.iconSize,
    bottomFloatCurrent: state.editor.generic.bottomFloatCurrent
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setBottomFloatCurrent: (payload: SetBottomFloatCurrentInput) => dispatch(setBottomFloatCurrent(payload))
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(FontStyle);
