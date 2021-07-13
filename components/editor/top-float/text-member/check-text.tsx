import React from "react";
import CheckButton from "../../../common/check-button";
import { RootState } from "../../../../redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";
import { 
  setBottomFloatCurrent, 
  SetBottomFloatCurrentInput, 
  setBottomTabCurrent, 
  SetBottomTabCurrentInput, 
  setTopFloatCurrent, 
  SetTopFloatCurrentInput 
} from "@slices/editor/editor-generic";
import { setFocusedComponent, SetFocusedComponentInput } from "@slices/editor/editor-handle";
import { setTextOnEditState, SetTextOnEditStateInput } from "@slices/editor/editor-states";

type CheckTextReduxProps = ConnectedProps<typeof connector>

interface CheckTextProps extends CheckTextReduxProps {}

const CheckText: React.FC<CheckTextProps> = ({
  textOnEdit,
  setBottomTabCurrent: SetBottomTabCurrent,
  setFocusedComponent: SetFocusedComponent,
  setBottomFloatCurrent: SetBottomFloatCurrent,
  setTextOnEdit: SetTextOnEdit,
  setTopFloatCurrent: SetTopFloatCurrent,
  textContent
}) => {

  const onPress = () => {
    SetBottomFloatCurrent("none");
    if (textOnEdit) {
      SetTextOnEdit(false);
      if (textContent) {
        SetTopFloatCurrent("text");
        return;
      } else {
        SetTopFloatCurrent("default");
        SetBottomTabCurrent("default");
      }
    } else {
      SetBottomTabCurrent("default");
      SetTopFloatCurrent("default");
    }
    SetFocusedComponent({
      focusedComponent: -1,
      focusedComponentType: "none"
    });
  };

  return <CheckButton 
    onPress={onPress}
  />;
};

const mapStateToProps = (state: RootState) => {
  return {
    textOnEdit: state.editor.states.textOnEdit,
    textContent: state.editor.states.textContent
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setBottomTabCurrent: (payload: SetBottomTabCurrentInput) => dispatch(setBottomTabCurrent(payload)),
    setFocusedComponent: (payload: SetFocusedComponentInput) => dispatch(setFocusedComponent(payload)),
    setBottomFloatCurrent: (payload: SetBottomFloatCurrentInput) => dispatch(setBottomFloatCurrent(payload)),
    setTextOnEdit: (payload: SetTextOnEditStateInput) => dispatch(setTextOnEditState(payload)),
    setTopFloatCurrent: (payload: SetTopFloatCurrentInput) => dispatch(setTopFloatCurrent(payload))
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(CheckText);
