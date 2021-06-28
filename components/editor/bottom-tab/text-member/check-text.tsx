import React from "react";
import CheckButton from "../../../common/check-button";
import { RootState } from "../../../../redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";
import { ICON_COLOR } from "../../base/constants"

type CheckTextReduxProps = ConnectedProps<typeof connector>

interface CheckTextProps extends CheckTextReduxProps {}

const CheckText: React.FC<CheckTextProps> = ({
  iconSize
}) => {

  const onPress = () => {
    // sth
  };

  return <CheckButton 
    onPress={onPress}
  />;
};

const mapStateToProps = (state: RootState) => {
  return {
    iconSize: state.editor.generic.settings.iconSize,
  }
}

const connector = connect(mapStateToProps, { });

export default connector(CheckText);
