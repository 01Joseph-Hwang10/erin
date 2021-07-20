import XButton from "@components/common/x-button";
import { RootState } from "@redux/root-reducer";
import { 
  setBottomFloatCurrent, 
  SetBottomFloatCurrentInput,
  setBottomTabCurrent,
  SetBottomTabCurrentInput,
  setTopFloatCurrent,
  SetTopFloatCurrentInput, 
} from "@slices/editor/editor-generic";
import { setTextOnEditState, SetTextOnEditStateInput } from "@slices/editor/editor-states";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";

type NotEditTextReduxProps = ConnectedProps<typeof connector>

interface NotEditTextProps extends NotEditTextReduxProps {}

const NotEditText: React.FC<NotEditTextProps> = ({
  setTextOnEdit,
  focusedComponentType,
  textContent,
  setBottomFloatCurrent: SetBottomFloatCurrent,
  setTopFloatCurrent: SetTopFloatCurrent,
  setBottomTabCurrent: SetBottomTabCurrent
}) => {

  const onPress = () => {
    setTextOnEdit(false);
    SetBottomFloatCurrent("none");
    switch (focusedComponentType) {
      case "text":
        SetBottomFloatCurrent("none")
        SetBottomTabCurrent( textContent ? "text" : "default")
        SetTopFloatCurrent( textContent ? "text" : "default")
        break;
      default:
        SetBottomFloatCurrent("none")
        SetBottomTabCurrent("default")
        SetTopFloatCurrent("default")
        break;
    }
  };

  return (
    <XButton 
      onPress={onPress}
    />
  );
};

const mapStateToProps = (state: RootState) => ({
  focusedComponentType: state.editor.handle.focusedComponentType,
  textContent: state.editor.states.textContent,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setTextOnEdit: (payload: SetTextOnEditStateInput) => dispatch(setTextOnEditState(payload)),
  setBottomFloatCurrent: (payload: SetBottomFloatCurrentInput) => dispatch(setBottomFloatCurrent(payload)),
  setTopFloatCurrent: (payload: SetTopFloatCurrentInput) => dispatch(setTopFloatCurrent(payload)),
  setBottomTabCurrent: (payload: SetBottomTabCurrentInput) => dispatch(setBottomTabCurrent(payload)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(NotEditText);
