import { Feather } from "@expo/vector-icons";
import React from "react";
import { RootState } from "../../../../redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";
import { ICON_COLOR } from "../../base/constants";
import PressButton from "../../base/press-button";
import { Dispatch } from "redux";
import { setTextOnEditState, SetTextOnEditStateInput } from "@slices/editor/editor-states";
import { setBottomFloatCurrent, SetBottomFloatCurrentInput, setTopFloatCurrent, SetTopFloatCurrentInput } from "@slices/editor/editor-generic";

type ChangeTextReduxProps = ConnectedProps<typeof connector>

interface ChangeTextProps extends ChangeTextReduxProps {}

const ChangeText: React.FC<ChangeTextProps> = ({
  iconSize,
  setTextOnEdit,
  setBottomFloatCurrent: SetBottomFloatCurrent,
  setTopFloatCurrent: SetTopFloatCurrent
}) => {

  const renderIcon = () => (
    <Feather name="edit" size={iconSize} color={ICON_COLOR} />
  );

  const onPress = () => {
    setTextOnEdit(true);
    SetBottomFloatCurrent("editText");
    SetTopFloatCurrent("editText");
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

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setTextOnEdit: (payload: SetTextOnEditStateInput) => dispatch(setTextOnEditState(payload)),
    setBottomFloatCurrent: (payload: SetBottomFloatCurrentInput) => dispatch(setBottomFloatCurrent(payload)),
    setTopFloatCurrent: (payload: SetTopFloatCurrentInput) => dispatch(setTopFloatCurrent(payload))
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(ChangeText);
