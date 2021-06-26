import React from "react";
import XButton from "../../../common/x-button";
import { RootState } from "../../../../redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";
import { ICON_COLOR } from "../../base/constants";
import { Dispatch } from "redux";
import { setBottomTabCurrent, SetBottomTabCurrentInput } from "../../../../redux/slices/editor";

type XCreateReduxProps = ConnectedProps<typeof connector>

interface XCreateProps extends XCreateReduxProps {}

const XCreate: React.FC<XCreateProps> = ({
  setBottomTabCurrent: SetBottomTabCurrent,
  iconSize,
}) => {

  const onPress = () => {
    SetBottomTabCurrent("default");
  };

  return <XButton 
    onPress={onPress}
  />;
};

const mapStateToProps = (state: RootState) => {
  return {
    iconSize: state.editor.settings.iconSize,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setBottomTabCurrent: (payload: SetBottomTabCurrentInput) => dispatch(setBottomTabCurrent(payload))
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(XCreate);
