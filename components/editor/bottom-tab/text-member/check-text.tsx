import React from "react";
import CheckButton from "../../../common/check-button";
import { RootState } from "../../../../redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";
import { ICON_COLOR } from "../../base/constants";
import { Dispatch } from "redux";
import { setBottomFloatCurrent, SetBottomFloatCurrentInput, setBottomTabCurrent, SetBottomTabCurrentInput } from "@slices/editor/editor-generic";
import { setFocusedComponent, SetFocusedComponentInput } from "@slices/editor/editor-handle";

type CheckTextReduxProps = ConnectedProps<typeof connector>

interface CheckTextProps extends CheckTextReduxProps {}

const CheckText: React.FC<CheckTextProps> = ({
  iconSize,
  setBottomTabCurrent: SetBottomTabCurrent,
  setFocusedComponent: SetFocusedComponent,
  setBottomFloatCurrent: SetBottomFloatCurrent
}) => {

  const onPress = () => {
    SetBottomTabCurrent("default");
    SetFocusedComponent({
      focusedComponent: -1,
      focusedComponentType: "none"
    });
    SetBottomFloatCurrent("none");
  };

  return <CheckButton 
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
    setBottomTabCurrent: (payload: SetBottomTabCurrentInput) => dispatch(setBottomTabCurrent(payload)),
    setFocusedComponent: (payload: SetFocusedComponentInput) => dispatch(setFocusedComponent(payload)),
    setBottomFloatCurrent: (payload: SetBottomFloatCurrentInput) => dispatch(setBottomFloatCurrent(payload))
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(CheckText);
