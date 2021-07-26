import CheckButton from "@components/common/check-button";
import { setBottomTabCurrent, SetBottomTabCurrentInput, setTopFloatCurrent, SetTopFloatCurrentInput } from "@slices/editor/editor-generic";
import { setFocusedComponent, SetFocusedComponentInput } from "@slices/editor/editor-handle";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";

type CheckStickerReduxProps = ConnectedProps<typeof connector>

interface CheckStickerProps extends CheckStickerReduxProps {}

const CheckSticker: React.FC<CheckStickerProps> = ({
  setBottomTabCurrent: SetBottomTabCurrent,
  setTopFloatCurrent: SetTopFloatCurrent,
  setFocusedComponent: SetFocusedComponent
}) => {

  const onPress = () => {
    SetBottomTabCurrent("default");
    SetTopFloatCurrent("default");
    SetFocusedComponent({
      focusedComponent: -1,
      focusedComponentType: "none"
    });
  };

  return (
    <CheckButton 
      onPress={onPress}
    />
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setBottomTabCurrent: (payload: SetBottomTabCurrentInput) => dispatch(setBottomTabCurrent(payload)),
  setTopFloatCurrent: (payload: SetTopFloatCurrentInput) => dispatch(setTopFloatCurrent(payload)),
  setFocusedComponent: (payload: SetFocusedComponentInput) => dispatch(setFocusedComponent(payload)),
});

const connector = connect(null, mapDispatchToProps);

export default connector(CheckSticker);
