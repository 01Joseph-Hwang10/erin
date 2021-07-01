import React from "react";
import CheckButton from "../../../common/check-button";
import { RootState } from "../../../../redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";
import { ICON_COLOR } from "../../base/constants";
import { Dispatch } from "redux";
import { setBottomFloatCurrent, SetBottomFloatCurrentInput, setBottomTabCurrent, SetBottomTabCurrentInput } from "@slices/editor/editor-generic";
import { setFocusedComponent, SetFocusedComponentInput } from "@slices/editor/editor-handle";
import { setTextOnEditState, SetTextOnEditStateInput } from "@slices/editor/editor-states";

type CheckTextReduxProps = ConnectedProps<typeof connector>

interface CheckTextProps extends CheckTextReduxProps {}

const CheckText: React.FC<CheckTextProps> = ({
  iconSize,
  textOnEdit,
  setBottomTabCurrent: SetBottomTabCurrent,
  setFocusedComponent: SetFocusedComponent,
  setBottomFloatCurrent: SetBottomFloatCurrent,
  setTextOnEditState: SetTextOnEditState
}) => {

  const onPress = () => {
    if (textOnEdit) {
      SetTextOnEditState(false);
    } else {
      SetBottomTabCurrent("default");
      SetFocusedComponent({
        focusedComponent: -1,
        focusedComponentType: "none"
      });
      SetBottomFloatCurrent("none");
    }
  };

  return <CheckButton 
    onPress={onPress}
  />;
};

const mapStateToProps = (state: RootState) => {
  return {
    iconSize: state.editor.generic.settings.iconSize,
    textOnEdit: state.editor.states.textOnEdit
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setBottomTabCurrent: (payload: SetBottomTabCurrentInput) => dispatch(setBottomTabCurrent(payload)),
    setFocusedComponent: (payload: SetFocusedComponentInput) => dispatch(setFocusedComponent(payload)),
    setBottomFloatCurrent: (payload: SetBottomFloatCurrentInput) => dispatch(setBottomFloatCurrent(payload)),
    setTextOnEditState: (payload: SetTextOnEditStateInput) => dispatch(setTextOnEditState(payload))
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(CheckText);
