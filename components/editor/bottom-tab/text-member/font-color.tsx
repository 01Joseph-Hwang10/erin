import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { RootState } from "../../../../redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";
import { ICON_COLOR } from "../../base/constants";
import PressButton from "../../base/press-button";
import { Dispatch } from "redux";
import { setBottomFloatCurrent, SetBottomFloatCurrentInput } from "@slices/editor/editor-generic";
import { setColorConsumerState, SetColorConsumerStateInput, setPickedColorState, SetPickedColorStateInput } from "@slices/editor/editor-states";

type FontColorReduxProps = ConnectedProps<typeof connector>

interface FontColorProps extends FontColorReduxProps {}

const FontColor: React.FC<FontColorProps> = ({
  iconSize,
  bottomFloatCurrent,
  setBottomFloatCurrent: SetBottomFloatCurrent,
  setColorConsumer: SetColorConsumer,
  setPickedColorState: SetPickedColorState,
  colorConsumer
}) => {

  const renderIcon = () => (
    <Ionicons name="color-palette" size={iconSize} color={ICON_COLOR} />
  );

  const onPress = () => {
    if (bottomFloatCurrent === "colorPicker") {
      if ( colorConsumer !== "textFontColor" ) {
        SetColorConsumer("textFontColor");
      } else {
        SetBottomFloatCurrent("none");
        SetColorConsumer(null);
        SetPickedColorState(null);
      }
    } else {
      SetBottomFloatCurrent("colorPicker");
      SetColorConsumer("textFontColor");
    }
  };
  
  return <PressButton 
    icon={renderIcon}
    onPress={onPress}
    bottomFloatHelpMessage={"텍스트의 색깔을 정합니다"}
  />;
};

const mapStateToProps = (state: RootState) => {
  return {
    iconSize: state.editor.generic.settings.iconSize,
    bottomFloatCurrent: state.editor.generic.bottomFloatCurrent,
    colorConsumer: state.editor.states.colorConsumer
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setBottomFloatCurrent: (payload: SetBottomFloatCurrentInput) => dispatch(setBottomFloatCurrent(payload)),
    setColorConsumer: (payload: SetColorConsumerStateInput) => dispatch(setColorConsumerState(payload)),
    setPickedColorState: (payload: SetPickedColorStateInput) => dispatch(setPickedColorState(payload))
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(FontColor);
