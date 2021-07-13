import XButton from "@components/common/x-button";
import { 
  setBottomFloatCurrent, 
  SetBottomFloatCurrentInput, 
} from "@slices/editor/editor-generic";
import { setTextOnEditState, SetTextOnEditStateInput } from "@slices/editor/editor-states";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";

type NotEditTextReduxProps = ConnectedProps<typeof connector>

interface NotEditTextProps extends NotEditTextReduxProps {}

const NotEditText: React.FC<NotEditTextProps> = ({
  setTextOnEdit,
  setBottomFloatCurrent: SetBottomFloatCurrent,
}) => {

  const onPress = () => {
    setTextOnEdit(false);
    SetBottomFloatCurrent("none");
  };

  return (
    <XButton 
      onPress={onPress}
    />
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setTextOnEdit: (payload: SetTextOnEditStateInput) => dispatch(setTextOnEditState(payload)),
  setBottomFloatCurrent: (payload: SetBottomFloatCurrentInput) => dispatch(setBottomFloatCurrent(payload)),
});

const connector = connect(null, mapDispatchToProps);

export default connector(NotEditText);
