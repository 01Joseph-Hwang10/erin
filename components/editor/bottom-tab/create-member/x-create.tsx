import React from "react";
import XButton from "../../../common/x-button";
import { RootState } from "../../../../redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";
import { ICON_COLOR } from "../../base/constants"

type XCreateReduxProps = ConnectedProps<typeof connector>

interface XCreateProps extends XCreateReduxProps {}

const XCreate: React.FC<XCreateProps> = ({
  iconSize
}) => {

  const onPress = () => {
    // sth
  };

  return <XButton 
    onPress={onPress}
  />;
};

const mapStateToProps = (state: RootState) => {
  return {
    iconSize: state.editor.settings.iconSize,
  }
}

const connector = connect(mapStateToProps, { });

export default connector(XCreate);
