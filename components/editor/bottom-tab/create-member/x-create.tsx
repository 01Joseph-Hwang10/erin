import React from "react";
import XButton from "../../../common/x-button";
import { RootState } from "../../../../redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";
import { ICON_COLOR } from "../../base/constants";
import { Dispatch } from "redux";
import { setBottomTabCurrent, SetBottomTabCurrentInput } from "../../../../redux/slices/editor/editor-generic";
import { setCreationPoint, SetCreationPointInput } from "@slices/editor/editor-handle";

type XCreateReduxProps = ConnectedProps<typeof connector>

interface XCreateProps extends XCreateReduxProps {}

const XCreate: React.FC<XCreateProps> = ({
  iconSize,
  setBottomTabCurrent: SetBottomTabCurrent,
  setCreationPoint: SetCreationPoint
}) => {

  const onPress = () => {
    SetCreationPoint({ x: null, y: null });
    SetBottomTabCurrent("default");
  };

  return <XButton 
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
    setCreationPoint: (payload: SetCreationPointInput) => dispatch(setCreationPoint(payload))
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(XCreate);
